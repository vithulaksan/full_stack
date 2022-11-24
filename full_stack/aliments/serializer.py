
from rest_framework import serializers 
from . import models

class AlimentSerialiszes(serializers.ModelSerializer):
    class Meta:
        model=models.Aliments
        fields = "__all__"
    