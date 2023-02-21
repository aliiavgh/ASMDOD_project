from io import StringIO
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from applications.forecast.forecast_services import get_data, process_data, prediction_model, predict, create_predict_graphic


class ForecastAPIView(APIView):
    def get(self, request):
        data = get_data()
        result = []
        pr_data = process_data(data)
        model = prediction_model(pr_data)
        pr = predict(model)
        gr = create_predict_graphic(model, pr, data)
        # for area in data.items():
        #     process_area = process_data(area[1])
        #     model = prediction_model(process_area)
        #     prediction = predict(model)
        #     pred_graphic = create_predict_graphic(model, prediction, area[0])
        #     # im_graphics = StringIO()
        #     # pred_graphic.savefig(im_graphics, format='svg')
        #     # response = im_graphics.getvalue()
        #     # result.append({area[0]: response})
        #     result.append({area[0]: pred_graphic})

        return Response(status=status.HTTP_200_OK)



