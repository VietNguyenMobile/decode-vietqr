'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const body_parser_1 = __importDefault(require('body-parser'));
const cors_1 = __importDefault(require('cors'));
const morgan_1 = __importDefault(require('morgan'));
// Routes
const qrCodeRoutes = require('./src/routers/qrcode');
const app = (0, express_1.default)();
require('dotenv/config');
app.use((0, cors_1.default)());
app.options('*', (0, cors_1.default)());
// Middleware
app.use(body_parser_1.default.json());
app.use((0, morgan_1.default)('tiny'));
const api = process.env.API_URL;
app.post(
  '/decode-vietqr',
  (req, res, next) => {
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
app.use(`${api}/decode`, qrCodeRoutes);
// app.listen(PORT, () => console.log('Server running'));
const PORT = process.env.port || 6000;
app.listen(PORT, () => {
  console.log('Server is running ', PORT);
});
