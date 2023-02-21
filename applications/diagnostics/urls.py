from django.urls import path

from applications.diagnostics.views import DiagnosisFormOfferAPIView, ResultDiagnosisAPIView

urlpatterns = [
    path('', DiagnosisFormOfferAPIView.as_view()),
    path('result/', ResultDiagnosisAPIView.as_view())
]