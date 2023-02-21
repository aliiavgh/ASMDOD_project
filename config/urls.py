from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from django.views.generic import RedirectView
from django.urls import re_path

from config import settings

schema_view = get_schema_view(
    openapi.Info(
        title='Analytics system',
        default_version='v1',
        description='Sport'
    ),
    public=True
)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('swagger/', schema_view.with_ui('swagger')),
    re_path  (r'^favicon\.ico$',RedirectView.as_view(url='/static/images/favicon.ico')),

    path('api/v1/account/', include('applications.account.urls')),
    path('api/v1/patients/', include('applications.patient.urls')),
    path('api/v1/forecast/', include('applications.forecast.urls')),
    path('api/v1/diagnostics/', include('applications.diagnostics.urls'))
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
