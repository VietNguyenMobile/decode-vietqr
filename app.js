import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import { QRPay } from './src/qr-pay';

// Routes
const qrCodeRoutes = require('./src/routers/qrcode');

const app: Application = express();

require('dotenv/config');

app.use(cors());
app.options('*', cors());

// Middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));

const api = process.env.API_URL;

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

// Routers
// app.use(`${api}/decode`, qrCodeRoutes);

// app.listen(PORT, () => console.log('Server running'));

const PORT = process.env.port || 6000;

app.listen(PORT, () => {
  // console.log('api: ', api);
  console.log('Server is running ', PORT);
});
