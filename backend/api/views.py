from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets, permissions
from .models import *
from .serializers import *
from rest_framework.response import Response

def home(request):
    return HttpResponse("This is the home page")

class UserViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = User.objects.all()
    serializer_class = UserSerializer


    def list(self, request):
        queryset = self.queryset
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    def retrieve(self, request, pk=None):
        user = self.queryset.get(pk=pk)
        serializer = self.serializer_class(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            #for x in serializer.data:
                #if 
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    def update(self, request, pk=None):
        user = self.queryset.get(pk=pk)
        serializer = self.serializer_class(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)


    def destroy(self, request, pk=None ):
        user = self.queryset.get(pk=pk)
        user.delete()
        return Response(status=204)
    

class RecipeViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer


    def list(self, request):
        queryset = Recipe.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    def retrieve(self, request, pk=None):
        recipe = self.queryset.get(pk=pk)
        serializer = self.serializer_class(recipe)
        return Response(serializer.data)

    def update(self, request, pk=None):
        recipe = self.queryset.get(pk=pk)
        serializer = self.serializer_class(recipe, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)


    def destroy(self, request, pk=None ):
        recipe = self.queryset.get(pk=pk)
        recipe.delete()
        return Response(status=204)