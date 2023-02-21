from django_filters import OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import mixins
from rest_framework.filters import SearchFilter
from rest_framework.viewsets import ModelViewSet, GenericViewSet

from applications.patient.models import Patient
from applications.patient.permissions import IsDoctor
from applications.patient.serializers import PatientSerializer

class PatientViewSet(ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    permission_classes = [IsDoctor]
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['diagnosis_category', 'gender']
    search_fields = ['first_name', 'last_name']
    ordering_fields = ['date_detection']

    def perform_create(self, serializer):
        serializer.save(doctor=self.request.user)
