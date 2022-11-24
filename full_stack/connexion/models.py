from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Utilisateur(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    nom = models.CharField(max_length=100) 
    prenom = models.CharField(max_length=100) 
    taille_cm = models.IntegerField()
    poids = models.FloatField()
    age = models.IntegerField()
    sexe = models.CharField(max_length=100, default="homme") 
    frequence_sport = models.IntegerField()
    