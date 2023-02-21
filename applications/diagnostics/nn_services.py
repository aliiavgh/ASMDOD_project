import json
import urllib
import tensorflow as tf
import cloudinary.uploader as cu
import numpy as np
import pandas as pd
from keras.applications.vgg16 import decode_predictions
from keras.models import load_model
from keras import Sequential
from decouple import config
from keras_preprocessing.image import img_to_array
import cv2
import os

defautl_size = (96, 96)

os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'
os.environ['CUDA_VISIBLE_DEVICES'] = "0"

tf.config.list_physical_devices('GPU')


def image_converter(image):
    image = image.resize(defautl_size)
    img_array = img_to_array(image)
    return np.expand_dims(img_array, axis=0)


def make_diagnosis(image):
    model_file = config('model_file_path')
    model = load_model(model_file)
    # model = Sequential()
    model.load_weights(model_file)
    # model = model_file.read()
    # model_file.close()
    model.compile(loss='binary_crossentropy', optimizer='adam', metrics=['loss', 'accuracy'])
    
    # prediction = model.predict(image)
    predictions = model.predict_generator(image, steps=1, verbose=1)
    df_preds = pd.DataFrame(predictions, columns=['Нет', 'Есть'])
    # result = {'probability': prediction[0][0]}
    res = predictions
    return df_preds.to_dict()
