from django.shortcuts import render, get_object_or_404
from django.db.models import Q
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.exceptions import ParseError
from .models import *
from .serializers import *

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
    @action(methods=['get'], detail=False)
    def advanced_search(self, request):
        queryset = [] 
        #filter by tags
        tag_list = request.query_params.getlist('tags')
        for tag in tag_list:
            print(tag)
            queryset += [i for i in Event.objects.all() if Event.contains_tag(i, tag)]
        #finalize query
        queryset = list(set(queryset))
        serializer = EventSerializer(queryset , many=True)
        return Response(serializer.data)


class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
