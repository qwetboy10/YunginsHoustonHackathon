from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Organization',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('karma', models.IntegerField(default=0)),
                ('email', models.EmailField(max_length=254)),
                ('phone', models.CharField(max_length=20)),
                ('address', models.CharField(max_length=200)),
                ('home_page', models.URLField()),
            ],
        ),
        migrations.CreateModel(
            name='Skill',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('short_name', models.CharField(max_length=10)),
                ('long_name', models.CharField(max_length=100)),
                ('description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Person',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('karma', models.IntegerField(default=0)),
                ('phone', models.CharField(max_length=20)),
                ('organization', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='App.Organization')),
                ('skills', models.ManyToManyField(blank=True, to='App.Skill')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address', models.CharField(max_length=200)),
                ('minimum_karma', models.IntegerField(default=0)),
                ('name', models.CharField(max_length=100)),
                ('date', models.DateField()),
                ('duration', models.DurationField()),
                ('blurb', models.TextField(blank=True)),
                ('description', models.CharField(blank=True, max_length=280)),
                ('organization', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='App.Organization')),
                ('organizers_volunteers', models.ManyToManyField(blank=True, to='App.Person')),
                ('skills', models.ManyToManyField(blank=True, to='App.Skill')),
                ('tags', models.ManyToManyField(blank=True, to='App.Tag')),
            ],
        ),
    ]
