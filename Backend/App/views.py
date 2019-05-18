from django.contrib.auth.models import User
from django.shortcuts import render, get_object_or_404
from django.db.models import Q
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.exceptions import ParseError, AuthenticationFailed
from .models import *
from .serializers import *


class UserViewSet(viewsets.ViewSet):
    def list(self, request):
        queryset = User.objects.all()
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        username = request.data.get("username", None)
        password = request.data.get("password", None)
        first_name = request.data.get("first_name", None)
        last_name = request.data.get("last_name", None)
        email = request.data.get("email", None)
        if (
            username is None
            or password is None
            or first_name is None
            or last_name is None
            or email is None
        ):
            print(f"{username} {password} {first_name} {last_name} {email}")
            raise ParseError()
        else:
            try:
                user = User.objects.create_user(username, password)
                user.first_name = first_name
                user.last_name = last_name
                user.email = email
                user.save()
            except:
                raise AuthenticationFailed(detail="User already exists")

    def retreive(self, request, pk=None):
        queryset = User.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = UserSerializer(user)
        return Response(serializer.data)


class PersonViewSet(viewsets.ModelViewSet):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer
    def search_by_name(self, request, *args, **kwargs):
        search = request.query_params.get('search', None)
        if search is None:
            serializer = self.get_serializer(Person.objects.all(), many=True)
            return Response(serializer.data)
        else:
            queryset = [i for i in Person.objects.all() if search in Person.get_name()]
            serializer = self.get_serializer(queryset, many=True)
            return Response(serializer.data)

    @action(methods=['get'], detail=False)
    def search_by_skill(self, request, *args, **kwargs):
        search = request.query_params.get('search', None)
        if search is None:
            serializer = self.get_serializer(Person.objects.all(), many=True)
            return Response(serializer.data)
        else:
            queryset = [i for i in Person.objects.all() if Person.contains_skill(i, search)]
            serializer = self.get_serializer(queryset, many=True)
            return Response(serializer.data)
            

class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


class OrganizationViewSet(viewsets.ModelViewSet):
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer
    @action(methods=["get"], detail=True)
    def get_people(self, request, pk=None):
        people = Person.objects.filter(organization__id=pk)
        serializer = PersonSerializer(people, many=True)
        return Response(serializer.data)

    @action(methods=["get"], detail=True)
    def get_events(self, request, pk=None):
        events = Event.objects.filter(organization__id=pk)
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    def list(self, request, *args, **kwargs):
        search = request.query_params.get("search", None)
        if search is None:
            serializer = self.get_serializer(Event.objects.all(), many=True)
            return Response(serializer.data)
        else:
            queryset = Event.objects.filter(name__contains=search)
            serializer = self.get_serializer(queryset, many=True)
            return Response(serializer.data)

    @action(methods=["get"], detail=False)
    def advanced_search(self, request):
        queryset = []
        # filter by tags
        tag_list = request.data.getlist("tags")
        for tag in tag_list:
            print(tag)
            queryset += [i for i in Event.objects.all() if Event.contains_tag(i, tag)]
        # filter by date

        # finalize query
        queryset = list(set(queryset))
        serializer = EventSerializer(queryset, many=True)
        return Response(serializer.data)

    @action(methods=["get"], detail=True)
    def get_organizers(self, request, pk=None):
        organizers = [
            i
            for i in Event.objects.get(pk=pk).organizers_volunteers.all()
            if Person.is_organizer(i)
        ]
        serializer = PersonSerializer(organizers, many=True)
        return Response(serializer.data)

    @action(methods=["get"], detail=True)
    def get_volunteers(self, request, pk=None):
        volunteers = [
            i
            for i in Event.objects.get(pk=pk).organizers_volunteers.all()
            if Person.is_volunteer(i)
        ]
        serializer = PersonSerializer(volunteers, many=True)
        return Response(serializer.data)


class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
