from rest_framework import serializers

from applications.diagnostics.models import PatientForm


class PatientFormSerializer(serializers.ModelSerializer):
    user = serializers.EmailField(required=False)
    diagnosis = serializers.CharField(required=False)

    class Meta:
        model = PatientForm
        fields = '__all__'

     
