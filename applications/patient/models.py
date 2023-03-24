from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


GENDER_CHOICE = (
        ('woman', 'Женщина'),
        ('man', 'Мужчина'),
        ('other', 'Другое')
    )

DIAGNOSIS_CHOICE = (
        ('mouth_throat', 'Губы, полость рта и глотка'),
        ('stomach', 'Желудок'),
        ('rectum', 'Прямая кишка'),
        ('lungs', 'Бронхи, легкие'),
        ('lymph_node', 'Лимфатические узлы и кроветворная ткань'),
        ('other', 'Другое'),
    )


class Patient(models.Model):
    doctor = models.ForeignKey(User, on_delete=models.CASCADE, related_name='patients')
    first_name = models.CharField(max_length=180)
    last_name = models.CharField(max_length=180)
    gender = models.CharField(choices=GENDER_CHOICE, max_length=10)
    diagnosis_category = models.CharField(choices=DIAGNOSIS_CHOICE, max_length=180)
    diagnosis_description = models.TextField()
    date_detection = models.DateField(auto_now_add=True)


    def __str__(self) -> str:
        return f'{self.first_name} - {self.last_name} - {self.date_detection}'

