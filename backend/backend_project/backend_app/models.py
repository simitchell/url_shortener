from django.db import models
from django.conf import settings
    
class Url(models.Model):
    title = models.CharField(null=True)
    long_url = models.CharField(null=True)
    short_url = models.CharField(null=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True)

    def __str__(self) -> str:
        return self.short_url