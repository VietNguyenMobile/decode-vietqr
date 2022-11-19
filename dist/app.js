"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = require('body-parser');
const qr_pay_1 = require("./qr-pay");
const app = (0, express_1.default)();
require('dotenv/config');
// Middleware
app.use(bodyParser.json());
// const PORT = 5000;
app.post('/decode-vietqr', (req, res, next) => {
    try {
        const content_qr_code = req.body.content;
        const qrPay = new qr_pay_1.QRPay(content_qr_code);
        if (qrPay.isValid) {
            return res.status(200).json({ success: true, data: qrPay });
        }
        else {
            return res
                .status(401)
                .json({ success: false, error: 'QR Code Invalid' });
        }
    }
    catch (error) {
        return res.status(400).json({ success: false, error: 'QR Code Invalid' });
    }
});
// app.listen(PORT, () => console.log('Server running'));
const PORT = process.env.port || 5000;
app.listen(PORT, () => {
    console.log('Server is running ', PORT);
});
