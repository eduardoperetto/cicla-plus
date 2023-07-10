from cicla_plus.views import *
from django.contrib import admin
from django.views.static import serve 
from django.urls import include, path, re_path
from rest_framework import routers
from pathlib import Path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
import os

BASE_DIR = Path(__file__).resolve().parent.parent
admin.site.site_header = 'CiclaPlus Admin Page'
router = routers.DefaultRouter()

router.register('Person', PersonViewSet)
router.register('Company', CompanyViewSet)
router.register('Advertisement', AdvertisementViewSet)
router.register('Transaction', TransactionViewSet)

urlpatterns = [
    path('', include(router.urls)),
    re_path(r'^static/(?P<path>.*)$', serve,{'document_root': os.path.join(BASE_DIR, 'static')}), 
    path('admin/', admin.site.urls),
    path('register/', RegisterView.as_view(), name='auth_register'),
    path('api-auth/', include('rest_framework.urls')),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
