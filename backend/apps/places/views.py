from django.shortcuts import render
from rest_framework import generics, filters
from .serializers import PlaceSerializer
from django.http import JsonResponse
from .models import Places
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend

# Create your views here.

class PlaceList(generics.ListAPIView):
    # Get all places, limit = 20
    queryset = Places.objects.all()
    serializer_class = PlaceSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['category']
    search_fields = ['name', 'description']
    def get_paginated_response(self, data):
       return Response(data)
