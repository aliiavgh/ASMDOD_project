import pandas as pd
import matplotlib
import matplotlib.pyplot as plt
from prophet import Prophet

from config import settings

matplotlib.use('agg')

def get_data():
    """Считывает данные из папки database1"""
    KR = pd.read_csv('/home/hello/Documents/coding/CANCER/cancer_site_project/dataset1/data - Kyrgyzstan3.csv')
    BISHKEK = pd.read_csv('/home/hello/Documents/coding/CANCER/cancer_site_project/dataset1/data - Bishkek2.csv')
    BATKEN = pd.read_csv('/home/hello/Documents/coding/CANCER/cancer_site_project/dataset1/data - Batken2.csv')
    CHUY = pd.read_csv('/home/hello/Documents/coding/CANCER/cancer_site_project/dataset1/data - Chuy2.csv')
    OSH_CITY = pd.read_csv('/home/hello/Documents/coding/CANCER/cancer_site_project/dataset1/data - cityOSH1.csv')
    IK = pd.read_csv('/home/hello/Documents/coding/CANCER/cancer_site_project/dataset1/data - Issyk-Kul2.csv')
    OSH = pd.read_csv('/home/hello/Documents/coding/CANCER/cancer_site_project/dataset1/data - Osh2.csv')
    JL = pd.read_csv('/home/hello/Documents/coding/CANCER/cancer_site_project/dataset1/data - Jalal-Abad2.csv')
    NARYN = pd.read_csv('/home/hello/Documents/coding/CANCER/cancer_site_project/dataset1/data - Naryn2.csv')
    TALAS = pd.read_csv('/home/hello/Documents/coding/CANCER/cancer_site_project/dataset1/data - Talas1.csv')

    areas = {'Кыргызстан': KR, 'г.Бишкек': BISHKEK, 'Баткенская область': BATKEN, 'Чуйская область': CHUY, 'г.Ош': OSH_CITY, 'Иссык-Кульская область': IK, 'Ошская область': OSH,
             'Джалал-Абадская область': JL, 'Нарынская область': NARYN, 'Таласская область': TALAS}

    return KR


def process_data(df):
    """Обработка данных -> тренировочный датаврейм"""
    df['date'] = pd.to_datetime(df['Наименование показателей'], format='%Y')
    df = df[['date', 'total']].dropna().drop_duplicates()
    aggr_df = df.groupby('date')[['total']].mean()
    aggr_df.columns = ['incidences']
    annual_df = aggr_df.resample('Y').apply(sum)
    df = annual_df.reset_index()
    df.columns = ['y', 'ds']
    return df


def prediction_model(train_data):
    """Создание модели для составления прогнозов"""
    model = Prophet()
    model.fit(train_data)
    return model


def predict(model):
    future = model.make_future_dataframe(periods=5, freq='Y')
    prediction = model.predict(future)
    return prediction


def create_predict_graphic(model, forecast, area):
    # graphic = model.plot(forecast)
    plt.plot(forecast)
    plt.title(area)
    path = settings.BASE_DIR
    print(path)
    # plt.rcParams["figure.figsize"] = (20,3)
    plt.savefig(f'{path}/frontend/public/img/graph3.svg', format='svg', dpi=80)
    return area




