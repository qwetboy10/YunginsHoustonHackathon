# Generated by Django 2.2.1 on 2019-05-18 23:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('App', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='event',
            old_name='minimum_karmam',
            new_name='minimum_karma',
        ),
    ]
