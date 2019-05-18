from datetime import *
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

    @action(methods=['get'], detail=True)
    def get_people(self, request, pk=None):
        people = Person.objects.filter(organization__id=pk)
        serializer = PersonSerializer(people, many=True)
        return Response(serializer.data)

    @action(methods=['get'], detail=True)
    def get_events(self,request,pk=None):
        events = Event.objects.filter(organization__id=pk)
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)


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
        #filter by date
        after = request.query_params.get('after', None)
        before = request.query_params.get('before', None)
        if after is not None or before is not None:
            if after is None:
                mindate = date.min
            else:
                mindate = date.fromtimestamp(int(after))
            if before is None:
                maxdate = date.max
            else:
                maxdate = date.fromtimestamp(int(before))
            print(mindate)
            print(maxdate)
            print(Event.objects.get(pk=1).date)
            queryset = Event.objects.filter(date__gt=mindate).filter(date__lt=maxdate)
        else:
            queryset = Event.objects.all()
        print(queryset)
        #filter by tags
        query2 = []
        tag_list = request.query_params.getlist('tags')
        if len(tag_list)==0:
            query2 += queryset
        else:
            for tag in tag_list:
                query2 += [i for i in queryset if Event.contains_tag(i, tag)]
            
        #finalize query
        query2 = list(set(query2))
        serializer = EventSerializer(query2 , many=True)
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
