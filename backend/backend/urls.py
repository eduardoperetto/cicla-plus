from cicla_plus.views import *
from django.contrib import admin
from django.views.static import serve 
from django.urls import include, path, re_path
from rest_framework import routers
from pathlib import Path
from .login import CustomTokenObtainPairView
from rest_framework_simplejwt.views import (
    TokenRefreshView,
    TokenVerifyView,
)
import os

BASE_DIR = Path(__file__).resolve().parent.parent
admin.site.site_header = 'CiclaPlus Admin Page'
router = routers.DefaultRouter()

router.register('person', PersonViewSet)
router.register('company', CompanyViewSet)
router.register('advertisement', AdvertisementViewSet)
router.register('transaction', TransactionViewSet)

urlpatterns = [
    path('', include(router.urls)),
    re_path(r'^static/(?P<path>.*)$', serve,{'document_root': os.path.join(BASE_DIR, 'static')}), 
    path('admin/', admin.site.urls),
    path('register/person/', registerPerson, name='registerPerson'),
    path('register/person/', registerPerson, name='registerPerson'),
    path('newtransaction/', newTransaction, name='newTransaction'),
    path('newadvertisement/', newAdvertisement, name='newAdvertisement'),
    path('updatetransaction/', updateTransaction, name='updateTransaction'),
    path('updateadvertisement/', updateAdvertisement, name='updateAdvertisement'),
    path('deleteadvertisement/', deleteAdvertisement, name='deleteAdvertisement'),
    path('auth/login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('auth/verify/', TokenVerifyView.as_view(), name='token_verify'),
]
