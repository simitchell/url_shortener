from django.shortcuts import render
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers, viewsets
from backend_app import views
from rest_framework_simplejwt import views as jwt_views
from .models import Url
from .serializers import UrlsSerializer

# class UsersViewSet(viewsets.ModelViewSet):
#     queryset = 
    

class UrlViewSet(viewsets.ModelUrl):
    queryset = Url.objects.all().order_by('-long_url')
    serializer_class = UrlsSerializer