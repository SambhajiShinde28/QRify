from django.urls import path
from . import views

urlpatterns = [
    path('qrcode', views.GenerateQRCode),
    path('barcode', views.GenerateBarcode),
    path('qrcodedownload', views.QRCodeImageDownload),
    path('barcodedownload', views.BarCodeImageDownload),
]
