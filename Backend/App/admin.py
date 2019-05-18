from django.contrib import admin
from .models import Skill, Organization, Person, Event

admin.site.register(Skill)
admin.site.register(Organization)
admin.site.register(Person)
admin.site.register(Event)
# Register your models here.
