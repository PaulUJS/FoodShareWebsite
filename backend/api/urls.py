from django.urls import path
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('user', UserViewset, basename='user')
router.register('recipe', RecipeViewset, basename='recipe')
urlpatterns = router.urls

#urlpatterns = [
 #   path('', home),
#]