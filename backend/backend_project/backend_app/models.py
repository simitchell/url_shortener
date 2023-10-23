from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(null=True)
    password = models.CharField(null=True)
    token = models.CharField(null=True)

    def __str__(self) -> str:
        return self.username
    
class Url(models.Model):
    user_id = models.IntegerField(null=True)
    long_url = models.CharField(null=True)
    short_url = models.CharField(null=True)

    def __str__(self) -> str:
        return self.short_url