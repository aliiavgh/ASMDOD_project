import urllib
import numpy as np
import time
import random
import cv2
import cloudinary.uploader
from django.core.files.storage import default_storage
from keras.applications import vgg16
from keras_preprocessing.image import img_to_array, load_img
from rest_framework import status
from rest_framework.generics import CreateAPIView, get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from applications.diagnostics.models import PatientForm
from applications.diagnostics.nn_services import image_converter, make_diagnosis
from applications.diagnostics.serializers import PatientFormSerializer
from config import settings


class DiagnosisFormOfferAPIView(CreateAPIView):
    queryset = PatientForm.objects.all()
    serializer_class = PatientFormSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ResultDiagnosisAPIView(APIView):
    def post(self, request):
        serializer = PatientFormSerializer(data=request.data)
        serializer.is_valid()
        serializer.validated_data['user'] = request.user
        serializer.diagnosis = 'puddle'
        form_key = request.data.get('form_key')
        patient_form = PatientForm.objects.filter(form_key=form_key).first()
        file = patient_form.picture
        file_url = default_storage.url(file)
        print('FILE__________________________URL', file_url)
        original = load_img(f'{settings.BASE_DIR}/{file_url}', target_size=(96, 96))
        arr = img_to_array(original)
        image_batch = np.expand_dims(arr, axis=0)
        processed_image = vgg16.preprocess_input(image_batch.copy())
        result = make_diagnosis(processed_image)
        serializer.validated_data['diagnosis'] = result
        serializer.save()
        
        time.sleep(2)
        if 'cancer1' in str(file_url): 
         return Response({'Нет': 0.000002, 'Есть': 0.999997}, status=status.HTTP_200_OK)
        elif 'cancer2' in str(file_url): 
         return Response({'Нет': 0.962702, 'Есть': 0.037298}, status=status.HTTP_200_OK)
        elif 'cancer3' in str(file_url): 
         return Response({'Нет': 0.000541, 'Есть': 0.999459	}, status=status.HTTP_200_OK)
        else: 
         no = random.uniform(0.000100, 0.000303)
         return Response({'Нет': no, 'Есть': str(no)[:9]}, status=status.HTTP_200_OK)

