from rest_framework import serializers

from applications.patient.models import Patient


class PatientSerializer(serializers.ModelSerializer):
    doctor = serializers.EmailField(required=False)

    class Meta:
        model = Patient
        fields = '__all__'
