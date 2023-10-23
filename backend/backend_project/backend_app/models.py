from django.db import models

# Create your models here.
class UrlModel(models.Model):
    username = models.CharField(null=True)
    password = models.CharField(null=True)
    token = models.CharField(null=True)

    def __str__(self) -> str:
        return self.username