from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from cicla_plus.models import Company

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super(CustomTokenObtainPairSerializer, self).validate(attrs)
        user_id = self.user.id
        is_company = Company.objects.filter(user_id=user_id).count() > 0
        data.update({'user': self.user.username})
        data.update({'is_admin': self.user.is_staff})
        data.update({'is_company': is_company})
        return data

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer