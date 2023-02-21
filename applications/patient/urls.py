from django.urls import path
from rest_framework.routers import DefaultRouter

from applications.patient.views import PatientViewSet

router = DefaultRouter()
router.register('', PatientViewSet)

urlpatterns = router.urls
