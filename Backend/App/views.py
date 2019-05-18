from django.shortcuts import render, get_object_or_404
from django.db.models import Q
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.exceptions import ParseError
from .models import *
from .serializers import *


class PersonViewSet(viewsets.ModelViewSet):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer
    

class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


class OrganizationViewSet(viewsets.ModelViewSet):
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer
    

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    def list(self, request, *args, **kwargs):
        search = request.query_params.get('search', None)
        if search is None:
            serializer = self.get_serializer(Event.objects.all(), many=True)
            return Response(serializer.data)
        else:
            queryset = Event.objects.filter(name__contains=search)
            serializer = self.get_serializer(queryset, many=True)
            return Response(serializer.data)

    @action(methods=['get'], detail=False)
    def advanced_search(self, request):
        queryset = [] 
        #filter by tags
        tag_list = request.query_params.getlist('tags')
        for tag in tag_list:
            print(tag)
            queryset += [i for i in Event.objects.all() if Event.contains_tag(i, tag)]
        #filter by date

        #finalize query
        queryset = list(set(queryset))
        serializer = EventSerializer(queryset , many=True)
        return Response(serializer.data)

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
