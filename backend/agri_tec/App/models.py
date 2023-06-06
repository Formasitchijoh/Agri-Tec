from django.db import models


# Create your models here.

class Farmer(models.Model):
    farmer_id = models.AutoField(primary_key=True)
    farmer_name = models.CharField(max_length=100)
    farmer_contact = models.CharField(max_length=50)
    farmer_location = models.CharField(max_length=50)
    product_grown = models.CharField(max_length=50)
    date_of_birth = models.DateField(null=True)
    sex = models.CharField(max_length=50, blank=True)
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.farmer_name


class Product(models.Model):
    product_id = models.AutoField(primary_key=True)
    product_name = models.CharField(max_length=100)
    product_location = models.CharField(max_length=50)
    quantity = models.IntegerField(default=0)
    price = models.FloatField()
    image_data = models.ImageField(upload_to='images/')

    def __str__(self):
        return self.product_name


class DeliveryService(models.Model):
    deliveryservice_id = models.AutoField(primary_key=True)
    deliveryservice_name = models.CharField(max_length=100)
    contact = models.CharField(max_length=50)
    location = models.CharField(max_length=50)
    vehicle_type = models.CharField(max_length=50)

    def __str__(self):
        return self.deliveryservice_name

