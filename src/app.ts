import express, { Application, Request, Response, NextFunction } from 'express';
const bodyParser = require('body-parser');
import { QRPay } from './qr-pay';

const app: Application = express();

require('dotenv/config');

// Middleware
app.use(bodyParser.json());

const PORT = 5000;

app.post(
  '/decode-vietqr',
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const content_qr_code = req.body.content;

      const qrPay = new QRPay(content_qr_code);
      if (qrPay.isValid) {
        return res.status(200).json({ success: true, data: qrPay });
      } else {
        return res
          .status(401)
          .json({ success: false, error: 'QR Code Invalid' });
      }
    } catch (error) {
      return res.status(400).json({ success: false, error: 'QR Code Invalid' });
    }
  },
);

// app.listen(PORT, () => console.log('Server running'));
app.listen(process.env.PORT || 5000, () => {
  console.log('Server is running ', PORT);
});
