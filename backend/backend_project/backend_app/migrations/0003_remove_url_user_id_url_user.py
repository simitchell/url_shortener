# Generated by Django 4.2.6 on 2023-10-24 14:25

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('backend_app', '0002_delete_user_url_title'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='url',
            name='user_id',
        ),
        migrations.AddField(
            model_name='url',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
