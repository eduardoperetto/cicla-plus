from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "first_name", "last_name", "email", "last_login", "date_joined"]

class PersonSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    class Meta:
        model = Person
        fields = '__all__'

class CompanySerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    class Meta:
        model = Company
        fields = '__all__'

class AdvertisementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Advertisement
        fields = '__all__'
        depth = 2

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = '__all__'
        depth = 1

'''
class PersonCreateSerializer(serializers.ModelSerializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)
    email = serializers.EmailField()
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    location = serializers.CharField(max_length=50)
    phone = serializers.CharField(max_length=12)
    cpf = serializers.IntegerField()
    birthday = serializers.DateField()

    def validate(self, data):
        if data['password'] != data['password2']:
            raise serializers.ValidationError("Passwords must match.")
        return data

    def create(self, validated_data):
        user_data = {
            'username': validated_data['username'],
            'email': validated_data['email'],
            'first_name': validated_data['first_name'],
            'last_name': validated_data['last_name']
        }
        user = User.objects.create(**user_data)

        user.set_password(validated_data['password'])
        user.save()

        person = Person.objects.create(user=user, location=validated_data['location'],
                                       phone=validated_data['phone'], cpf=validated_data['cpf'],
                                       birthdate=validated_data['birthday'])
        return person

    class Meta:
        model = Person
        fields = ['username', 'password', 'password2', 'email', 'first_name', 'last_name',
                  'location', 'phone', 'cpf', 'birthday']
    

class RegisterPersonSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
            required=True,
            validators=[UniqueValidator(queryset=User.objects.all())]
            )

    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = Person
        fields = (
            'username', 
            'password', 
            'password2', 
            'email', 
            'first_name', 
            'last_name', 
            'location',
            'phone',
            'cpf',
            'birthday',
        )
        extra_kwargs = {
            'username': {'required': True},
            'password': {'required': True},
            'password2': {'required': True},
            'email': {'required': True},
            'first_name': {'required': True},
            'last_name': {'required': True},
            'location': {'required': True},
            'phone': {'required': True},
            'cpf': {'required': True},
            'birthday': {'required': True}
        }

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})

        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )

        user.set_password(validated_data['password'])
        user.save()

        person = Person.objects.create(
            user=user,
            location=validated_data['location'],
            phone=validated_data['phone'],
            cpf=validated_data['cpf'],
            birthday=validated_data['birthday'],
        )

        person.save()

        return person

'''
    