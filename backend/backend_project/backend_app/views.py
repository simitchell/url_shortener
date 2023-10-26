from django.shortcuts import render
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers, viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from backend_project.backend_app import views
from rest_framework_simplejwt import views as jwt_views
from .models import Url
from .serializers import UrlsSerializer

# class UsersViewSet(viewsets.ModelViewSet):
#     queryset = 
    
# class HomeView(APIView):
#      permission_classes = (IsAuthenticated, )

#      def get(self, request):
#           content = {'message': 'Welcome to the JWT Authentication page using React JS and Django!'}

#      return Response(content)

class UrlViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]

    queryset = Url.objects.all().order_by('-title')
    serializer_class = UrlsSerializer

class LogoutView(APIView):
     permission_classes = [IsAuthenticated]
     
     def post(self, request):
          
          try:
               print(request)
               print(request.data)
               refresh_token = request.data["refresh_token"]
               token = RefreshToken(refresh_token)
               token.blacklist()
               return Response(status=status.HTTP_205_RESET_CONTENT)
          except Exception as e:
               return Response(status=status.HTTP_400_BAD_REQUEST)