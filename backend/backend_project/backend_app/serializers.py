from .models import Url
from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Url
        fields = ['title', 'long_url', 'short_url', 'user']

class UrlsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Url
        fields = '__all__'