import os
import uuid

from django.contrib.auth import get_user_model
from django.db import models
from imagekit.models import ImageSpecField
from pilkit.processors import ResizeToFill

User = get_user_model()


class PatientForm(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='diagnoses')
    picture = models.ImageField(upload_to='images/')
    formatted_image = ImageSpecField(source='picture', processors=[ResizeToFill(90, 90)], format='png')
    diagnosis = models.TextField(blank=True, null=True)
    form_key = models.UUIDField(default=uuid.uuid4, blank=True, null=True)

