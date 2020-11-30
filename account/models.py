from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    secondary_email = models.EmailField()


class Profile(models.Model):
    bio = models.TextField(blank=True)
    location = models.CharField(max_length=30, blank=True)
    dob = models.DateField(null=True, blank=True)
