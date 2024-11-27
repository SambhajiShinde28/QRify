# QRify - Code Generating Web App

QRify is a web application designed to generate, save, and manage different types of QR codes and barcodes. It provides a user-friendly interface to create codes for various purposes, such as encoding URLs, text, geolocations, events, and more. The app supports multiple barcode formats and offers options to download and save the generated codes for further use.

## Features:

### QR Code Generation:
- Generate QR codes for text, URLs, geolocations, and event data.
- Save QR codes to a media folder on the server.
- Download QR codes as PNG images.

### Barcode Generation:
- Supports multiple formats: EAN8, EAN13, UPC, Code39, Code128, ITF.
- Save barcodes to a media folder.
- Download barcodes as PNG images.

### Responsive Design:
- Clean and intuitive UI with a responsive layout using Bootstrap.


## Demo

### Screenshots

<p align="center">
  <img src="https://drive.google.com/uc?export=view&id=1-i4YAEu-st8n_ESx6X0Db_rYfsgAEcNk" alt="img" width="310" style="margin: 5px;">
  <img src="https://drive.google.com/uc?export=view&id=1x0Oezx7ABpYTLVGo2SjCF2fYBOgQkhJz" alt="img" width="310" style="margin: 5px;">
  <img src="https://drive.google.com/uc?export=view&id=1tlPuer-o32rcCULzfOJ9vvXrIyvc-nyT" alt="img" width="310" style="margin: 5px;">
</p>
<p align="center">
  <img src="https://drive.google.com/uc?export=view&id=1l50XH4AHn-8HmYGWOXJKSj0jz_MgndYc" alt="img" width="310" style="margin: 5px;">
  <img src="https://drive.google.com/uc?export=view&id=1IgDQe1Fz41hKoZHM1-QEbLnVtmgeCkNC" alt="img" width="310" style="margin: 5px;">
  <img src="https://drive.google.com/uc?export=view&id=1v28DY2GJi2Ru1U-f8PewQsLFrPwYA8zB" alt="img" width="310" style="margin: 5px;">
</p>
<p align="center">
  <img src="https://drive.google.com/uc?export=view&id=1QDPNOZQ5yv6IaGPpsAQiieI23dDehvDE" alt="img" width="166" style="margin: 5px;">
  <img src="https://drive.google.com/uc?export=view&id=1IP4Evjjb1LA2GFzx5a4I4TRRqTQTgPyf" alt="img" width="310" style="margin: 5px;">
</p>


### Video

### Project Video

Click the image below to watch the project video

[![Watch the video](https://drive.google.com/uc?export=view&id=1x0Oezx7ABpYTLVGo2SjCF2fYBOgQkhJz)](https://drive.google.com/file/d/1X75HZrM0arqhap-4C393pfMfzw33yn1S/view?usp=sharing)



## Technologies Used:

### Front-End:
- React.js
- Axios
- Bootstrap

### Back-End:
- Django
- Python Libraries:
  - qrcode: For generating QR codes.
  - python-barcode: For generating barcodes.

### Database:
- SQLite (can be replaced with PostgreSQL or MySQL for production)

### Additional Libraries/Tools:
- VsCode: For creating the project.
- Git/GitHub: For version control and repository management.

## How to Use:

1. **Clone the repository**
   ```bash
   git clone https://github.com/SambhajiShinde28/QRify.git
   cd QRify

2. **Set up the back-end**
   - Navigate to the backend folder.
   - Install dependencies and run the server
   ```bash
   pip install -r requirements.txt
   python manage.py migrate
   python manage.py runserver

3. **Set up the front-end**
   - Navigate to the frontend folder.
   - Install dependencies and run the development server
   ```bash
   npm install
   npm start

4. **Access the application at**
   ```bash
   http://localhost:3000/

## Key Learning Outcomes

- Integration of Django REST APIs with React front-end.
- Efficient state management and API handling using AXIOS in React.
- Generating and saving QRCodes/BarCodes reports using python-barcode.

## Usage

- Navigate to the homepage: Open the app in your browser at http://127.0.0.1:3000.
- Select QR Code or Barcode from the sidebar.
- Input the required data and click "RQ/BarCode Generate"
- Download or save the generated image as per your needs.

## Contact

- [LinkedIn](https://www.linkedin.com/in/sambhaji-shinde-1679ab309/)
- [Instagram](https://www.instagram.com/sambhaji_26/)
