from django.db import models

# Create your models here.
class Aliments(models.Model):
    id_aliment = models.IntegerField(primary_key = True)
    Category = models.CharField(max_length=100) 
    FoodItem = models.CharField(max_length=100) 
    Quantite_en_ml_or_g = models.FloatField()
    calorie_en_cal_per_ml_or_g = models.FloatField()
    kJ_per_ml_or_g = models.FloatField()
