from django.shortcuts import render
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from api_app import views
from rest_framework_simplejwt import views as jwt_views

