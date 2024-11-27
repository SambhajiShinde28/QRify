import qrcode
from io import BytesIO
from django.http import HttpResponse,JsonResponse, FileResponse, Http404
from django.shortcuts import render
import os
import time
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from barcode import EAN8, EAN13, UPCA, Code39, Code128, ITF
from barcode.writer import ImageWriter
import json


qrcodePath="null"
barcodePath="null"


@csrf_exempt
def GenerateQRCode(request):

    global qrcodePath

    body = json.loads(request.body) 
    data = body.get('qrdata', None)
    
    qr = qrcode.QRCode(
        version=1, 
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10, 
        border=2.5, 
    )
    qr.add_data(data)
    qr.make(fit=True)

    img = qr.make_image(fill_color="black", back_color="white")

    filename = f"qr_code_{int(time.time())}.png"
    file_path = os.path.join("media/QRCode", filename)
    img.save(file_path, format="PNG")

    qrcodePath = filename

    return JsonResponse({"FilePath":f"http://127.0.0.1:8000/media/QRCode/{filename}"})


@csrf_exempt
def GenerateBarcode(request):

    global barcodePath
    
    BARCODE_TYPES = {
        "EAN8": EAN8,
        "EAN13": EAN13,
        "UPC": UPCA,
        "Code39": Code39,
        "Code128": Code128,
        "ITF": ITF,
    }

    body = json.loads(request.body) 
    barcode_type = body.get('barType', None)  
    barcode_data = body.get('barData', None)  

    if barcode_type not in BARCODE_TYPES:
        return JsonResponse({"errorMessage":f"Invalid barcode type: {barcode_type}"})
    
    try:
        barcode_class = BARCODE_TYPES[barcode_type]
        barcode = barcode_class(barcode_data, writer=ImageWriter())

        timestamp = int(time.time())
        filename = f"{barcode_type}_{timestamp}"
        directory_path = os.path.join(settings.MEDIA_ROOT, "BarCode")
        os.makedirs(directory_path, exist_ok=True)
        file_path = os.path.join(directory_path, filename)

        barcode.save(file_path)

        file_url = f"{settings.MEDIA_URL}BarCode/{filename}"

        barcodePath = filename+".png"

        return JsonResponse({"FilePath": f"http://127.0.0.1:8000{file_url}.png", "BarcodeType": barcode_type})
    except Exception as e:
        return JsonResponse({"errorMessage":f"Error generating barcode: {e}"})


def QRCodeImageDownload(req):
    global qrcodePath

    file = os.path.join("media/QRCode",qrcodePath)
    if not os.path.exists(file):
            raise Http404("File not found")
            
    fileOpened = open(file,'rb')
    return FileResponse(fileOpened,as_attachment=True, filename=qrcodePath)


def BarCodeImageDownload(req):
    global barcodePath
    print("This is : ",barcodePath)
    file = os.path.join("media/BarCode",barcodePath)
    if not os.path.exists(file):
            raise Http404("File not found")
            
    fileOpened = open(file,'rb')
    return FileResponse(fileOpened,as_attachment=True, filename=barcodePath)
