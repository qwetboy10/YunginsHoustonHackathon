from django.shortcuts import render
from rest_framework import viewsets
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.exceptions import  ParseError
from .models import *
from .serializers import *
from rest_framework.decorators import action
# Create your views here.

class PersonViewSet(viewsets.ViewSet):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer
    

class OrganizationViewSet(viewsets.ModelViewSet):
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer
    
#212
class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    @action(methods=['get'], detail=True)
    def get_organizers(self, request, pk=None):
        organizers = [i for i in Event.objects.get(pk=pk).organizers_volunteers.all() if Person.is_organizer(i)]
        serializer = PersonSerializer(organizers, many=True)
        return Response(serializer.data)
    @action(methods=['get'], detail=True)
    def get_volunteers(self, request, pk=None):
        volunteers = [i for i in Event.objects.get(pk=pk).organizers_volunteers.all() if Person.is_volunteer(i)]
        serializer = PersonSerializer(volunteers, many=True)
        return Response(serializer.data)

class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer