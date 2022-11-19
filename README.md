# decode-vietqr

/decode-vietqr

// request
{
    "content": "00020101021138540010A00000072701240006970436011010279436560208QRIBFTTA53037045802VN63046000"
}

Response success status 200

{
  "success": true,
  "data": {
    "isValid": true,
    "provider": {
      "fieldId": "38",
      "guid": "A000000727",
      "name": "VIETQR",
      "service": "QRIBFTTA"
    },
    "consumer": {
      "bankBin": "970416",
      "bankNumber": "257678859"
    },
    "merchant": {},
    "additionalData": {
      "purpose": "Chuyen tien"
    },
    "version": "01",
    "initMethod": "12",
    "currency": "704",
    "amount": "1000",
    "nation": "VN",
    "crc": "BBB8"
  }
}

// Response faild status 400

{
    "success": false,
    "error": "QR Code Invalid"
}
