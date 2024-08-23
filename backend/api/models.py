from django.db import models

class User(models.Model):
    username = models.CharField(unique=True, max_length=15)
    displayname = models.CharField(unique=True, max_length=15)
    password = models.CharField(unique=False, max_length=20)

    def __str__(self):
        return self.displayname
    
class Recipe(models.Model):
    name = models.CharField(max_length=100)
    ingrediants = models.CharField(max_length=500)
    instructions = models.CharField(max_length=2000)

    def __str__(self):
        return self.name