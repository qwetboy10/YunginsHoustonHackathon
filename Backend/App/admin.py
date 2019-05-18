from django.contrib import admin
from .models import Person, Organization, Event

admin.site.register(Person)
admin.site.register(Organization)
admin.site.register(Event)
# Register your models here.
