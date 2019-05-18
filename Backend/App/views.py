from django.shortcuts import render

# Create your views here.

class PersonViewSet(viewsets.ViewSet):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer
    
