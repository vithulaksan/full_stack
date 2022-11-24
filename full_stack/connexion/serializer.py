from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from django.forms import CharField
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .  import models
from django.db.models import CharField

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims
        token['username'] = user.username
        token['email'] = user.email
        # ...
        return token

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('username', 'password', 'password2')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match."})

        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username']
        )

        user.set_password(validated_data['password'])
        user.save()

        return user

class UtilisateurSerializer(serializers.ModelSerializer):
    username = serializers.CharField()
    password = serializers.CharField()
    password2 = serializers.CharField()
    
    class Meta :
        model = models.Utilisateur
        fields = ["username","password","password2","nom","prenom","taille_cm","poids","age","sexe","frequence_sport"]

    def create(self,validated_data):
        username = self.initial_data.get("username")
        password = self.initial_data.get("password")
        password2 = self.initial_data.get("password2")
        user_data = RegisterSerializer(data = {"username" : username, "password":password,"password2":password2 })
        if user_data.is_valid() : 
            print("ok")
        else : 
            print(user_data)
        print(user_data.errors)
        user = user_data.save()

        validated_data.pop("username")
        validated_data.pop("password")
        validated_data.pop("password2")
        validated_data["user"] = user
        utilisateur = super(UtilisateurSerializer,self).create(validated_data)

        return utilisateur