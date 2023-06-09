from django.db import models


# Create your models here.

class Farmer(models.Model):
    farmer_id = models.AutoField(primary_key=True)
    farmer_name = models.CharField(max_length=100)
    farmer_contact = models.CharField(max_length=50)
    farmer_location = models.CharField(max_length=50)
    product_grown = models.CharField(max_length=50)
    farmer_date_of_birth = models.DateField(null=True)
    farmer_sex = models.CharField(max_length=50, blank=True)
    farmer_password = models.CharField(max_length=100)

    def __str__(self):
        return self.farmer_name


class Buyer(models.Model):
    buyer_id = models.AutoField(primary_key=True)
    buyer_name = models.CharField(max_length=100)
    buyer_contact = models.CharField(max_length=50)
    buyer_date_of_birth = models.DateField(null=True)
    buyer_sex = models.CharField(max_length=50, blank=True)
    buyer_password = models.CharField(max_length=50)

    def __str__(self):
        return self.buyer_name


class Product(models.Model):
    product_id = models.AutoField(primary_key=True)
    product_name = models.CharField(max_length=100)
    product_location = models.CharField(max_length=50)
    quantity = models.IntegerField(default=0)
    price = models.FloatField()
    image_data = models.ImageField(upload_to='images/')
    buyer = models.ForeignKey(Buyer, on_delete=models.CASCADE, null=True, blank=True)
    farmer = models.ForeignKey(Farmer, on_delete=models.CASCADE)

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


class Order(models.Model):
    order_id = models.AutoField(primary_key=True)
    buyer = models.ForeignKey(Buyer, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
    order_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Order #{self.order_id}"
