from cicla_plus.views import *
from django.contrib import admin
from django.views.static import serve 
from django.urls import include, path, re_path
from rest_framework import routers
from pathlib import Path
from cicla_plus.endpoints.login import CustomTokenObtainPairView
from rest_framework_simplejwt.views import (TokenRefreshView, TokenVerifyView)
import os
from cicla_plus.endpoints import (
    registerPerson,
    registerCompany,
    newTransaction,
    newAdvertisement,
    updateTransaction,
    updateAdvertisement,
    deleteAdvertisement,
    updateUser,
)

BASE_DIR = Path(__file__).resolve().parent.parent
admin.site.site_header = 'CiclaPlus Admin Page'
router = routers.DefaultRouter()

router.register('person', PersonViewSet)
router.register('company', CompanyViewSet)
router.register('advertisement', AdvertisementViewSet)
router.register('transaction', TransactionViewSet)
router.register('mydata', UserDataViewSet)

urlpatterns = [
    path('', include(router.urls)),
    re_path(r'^static/(?P<path>.*)$', serve,{'document_root': os.path.join(BASE_DIR, 'static')}), 
    path('admin/', admin.site.urls),
    path('register/person/', registerPerson.registerPerson, name='registerPerson'),
    path('register/company/', registerCompany.registerCompany, name='registerCompany'),
    path('newtransaction/', newTransaction.newTransaction, name='newTransaction'),
    path('newadvertisement/', newAdvertisement.newAdvertisement, name='newAdvertisement'),
    path('updatetransaction/', updateTransaction.updateTransaction, name='updateTransaction'),
    path('updateadvertisement/', updateAdvertisement.updateAdvertisement, name='updateAdvertisement'),
    path('deleteadvertisement/', deleteAdvertisement.deleteAdvertisement, name='deleteAdvertisement'),
    path('updateuser/', updateUser.updateUser, name='updateUser'),
    path('auth/login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('auth/verify/', TokenVerifyView.as_view(), name='token_verify'),
]
