import express, { Application, Request, Response, NextFunction } from 'express';
const router = express.Router();

import { QRPay } from '../qr-pay';

router.post('/', async (req: Request, res: Response) => {
  try {
    const content_qr_code = req.body.content;

    const qrPay = new QRPay(content_qr_code);
    if (qrPay.isValid) {
      return res.status(200).json({ success: true, data: qrPay });
    } else {
      return res.status(401).json({ success: false, error: 'QR Code Invalid' });
    }
  } catch (error) {
    return res.status(400).json({ success: false, error: 'QR Code Invalid' });
  }
});

module.exports = router;
