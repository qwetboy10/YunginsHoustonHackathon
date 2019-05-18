from django.db import models
from django.db.models import Q
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

class Tag(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name


class Skill(models.Model):
    short_name = models.CharField(max_length=10)
    long_name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.short_name


class Organization(models.Model):
    name = models.CharField(max_length=100)
    karma = models.IntegerField(default=0)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    address = models.CharField(max_length=200)
    home_page = models.URLField()

    def __str__(self):
        return self.name


class Person(models.Model):
    user = models.OneToOneField(User, models.CASCADE)
    id = models.AutoField(primary_key=True)
    karma = models.IntegerField(default=0)
    skills = models.ManyToManyField(Skill, blank=True)
    phone = models.CharField(max_length=20)
    organization = models.ForeignKey(
        Organization, models.CASCADE, null=True, blank=True
    )

    def __unicode__(self):
        return self.user.username

    def get_id(self):
        return self.id

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

    def is_volunteer(self):
        return self.organization is None

    def is_organizer(self):
        return self.organization is not None


class Event(models.Model):
    organization = models.ForeignKey(Organization, models.CASCADE)
    organizers_volunteers = models.ManyToManyField(Person, blank=True)
    tags = models.ManyToManyField(Tag, blank=True)
    skills = models.ManyToManyField(Skill)
    address = models.CharField(max_length=200)
    mininun_karma = models.IntegerField(default=0)
    name = models.CharField(max_length=100)
    date = models.DateField()
    duration = models.DurationField()

    def __str__(self):
        return self.name

    def contains_tag(self, tag):
        return self.tags.filter(name=tag).count() > 0
