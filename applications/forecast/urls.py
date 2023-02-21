from django.urls import path
from rest_framework.routers import DefaultRouter

from applications.forecast.views import ForecastAPIView


urlpatterns = [
    path('', ForecastAPIView.as_view())
]