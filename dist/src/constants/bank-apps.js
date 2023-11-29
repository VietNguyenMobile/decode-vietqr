"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankApps = void 0;
const bank_key_1 = require("./bank-key");
// List app support VNPayQR deeplink https://sandbox.vnpayment.vn/apis/danh-sach-ngan-hang/
exports.BankApps = [
    {
        bank: bank_key_1.BankKey.ABBANK,
        scheme: 'abbankmobile',
        packageId: 'com.vnpay.abbank',
        appStoreId: 'id1137160023',
        supportVietQR: true,
        supportVNPayQR: true,
    },
    {
        bank: bank_key_1.BankKey.ACB,
        scheme: 'acbapp',
        packageId: 'mobile.acb.com.vn',
        appStoreId: 'id950141024',
        supportVietQR: true,
        supportVNPayQR: false,
    },
    {
        bank: bank_key_1.BankKey.AGRIBANK,
        scheme: 'agribankmobile',
        packageId: 'com.vnpay.Agribank3g',
        appStoreId: 'id935944952',
        supportVietQR: true,
        supportVNPayQR: true,
    },
    {
        bank: bank_key_1.BankKey.BAC_A_BANK,
        packageId: 'com.bab.retailUAT',
        appStoreId: 'id1441408786',
        supportVietQR: false,
        supportVNPayQR: false,
    },
    {
        bank: bank_key_1.BankKey.BAOVIET_BANK,
        scheme: 'baovietmobile',
        packageId: 'com.vnpay.bvbank',
        appStoreId: 'id1504422967',
        supportVietQR: true,
        supportVNPayQR: true,
    },
    {
        bank: bank_key_1.BankKey.BIDC,
        scheme: 'bidcvnmobile',
        packageId: 'com.vnpay.bidc',
        appStoreId: 'id1043501726',
        supportVietQR: false,
        supportVNPayQR: true,
    },
    {
        bank: bank_key_1.BankKey.BIDV,
        scheme: 'bidvsmartbanking',
        packageId: 'com.vnpay.bidv',
        appStoreId: 'id1061867449',
        supportVietQR: true,
        supportVNPayQR: true,
    },
    {
        bank: bank_key_1.BankKey.CAKE,
        scheme: 'cake.vn',
        packageId: 'xyz.be.cake',
        appStoreId: 'id1551907051',
        supportVietQR: true,
        supportVNPayQR: false,
    },
    {
        bank: bank_key_1.BankKey.CBBANK,
        packageId: 'cbbank.vn.mobile',
        appStoreId: 'id1531443181',
        supportVietQR: false,
        supportVNPayQR: false,
    },
    {
        bank: bank_key_1.BankKey.CIMB,
        scheme: 'cimb',
        packageId: 'vn.cimbbank.octo',
        appStoreId: 'id1318127958',
        supportVietQR: true,
        supportVNPayQR: false,
    },
    {
        bank: bank_key_1.BankKey.COOP_BANK,
        scheme: 'coopbankmobile',
        packageId: 'com.vnpay.coopbank',
        appStoreId: 'id1578445811',
        supportVietQR: true,
        supportVNPayQR: true,
    },
    {
        bank: bank_key_1.BankKey.DBS_BANK,
        packageId: 'com.dbs.sg.dbsmbanking',
        appStoreId: 'id1068403826',
        supportVietQR: false,
        supportVNPayQR: false,
    },
    {
        bank: bank_key_1.BankKey.DONG_A_BANK,
        packageId: 'com.dongabank.mobilenternet',
        appStoreId: 'id993124125',
        supportVietQR: false,
        supportVNPayQR: false,
    },
    {
        bank: bank_key_1.BankKey.EXIMBANK,
        scheme: 'eximbankmobile',
        packageId: 'com.vnpay.eximbank',
        appStoreId: 'id1242260338',
        supportVietQR: true,
        supportVNPayQR: true,
    },
    {
        bank: bank_key_1.BankKey.GPBANK,
        supportVietQR: false,
        supportVNPayQR: false,
    },
    {
        bank: bank_key_1.BankKey.HDBANK,
        scheme: 'hdbankmobile',
        packageId: 'com.vnpay.hdbank',
        appStoreId: 'id1461658565',
        supportVietQR: true,
        supportVNPayQR: true,
    },
    {
        bank: bank_key_1.BankKey.HONGLEONG_BANK,
        packageId: 'my.com.hongleongconnect.mobileconnect',
        appStoreId: 'id1446719260',
        supportVietQR: false,
        supportVNPayQR: false,
    },
    {
        bank: bank_key_1.BankKey.HSBC,
        packageId: 'vn.hsbc.hsbcvietnam',
        appStoreId: 'id1472163155',
        supportVietQR: false,
        supportVNPayQR: false,
    },
    {
        bank: bank_key_1.BankKey.IBK_HCM,
        scheme: 'ionebankglobal',
        packageId: 'com.ibk.neobanking.mini',
        appStoreId: 'id787064809',
        supportVietQR: true,
        supportVNPayQR: false,
    },
    {
        bank: bank_key_1.BankKey.INDOVINA_BANK,
        scheme: 'ivbmobilebanking',
        packageId: 'com.vnpay.ivb',
        appStoreId: 'id1096963960',
        supportVietQR: true,
        supportVNPayQR: true,
    },
    {
        bank: bank_key_1.BankKey.KASIKORN_BANK,
        packageId: 'com.kasikornbank.kplus.vn',
        appStoreId: 'id1586576195',
        supportVietQR: false,
        supportVNPayQR: false,
    },
    {
        bank: bank_key_1.BankKey.KIENLONG_BANK,
        scheme: 'kienlongbankmobilebanking',
        packageId: 'com.sunshine.ksbank',
        appStoreId: 'id1562823941',
        supportVietQR: true,
        supportVNPayQR: true,
    },
    {
        bank: bank_key_1.BankKey.KOOKMIN_BANK_HCM,
        packageId: 'com.kbstar.global',
        appStoreId: 'id1542727700',
        supportVietQR: false,
        supportVNPayQR: false,
    },
    {
        bank: bank_key_1.BankKey.LIENVIETPOST_BANK,
        scheme: 'lv24h',
        packageId: 'vn.com.lpb.lienviet24h',
        appStoreId: 'id1488794748',
        supportVietQR: true,
        supportVNPayQR: false,
    },
    {
        bank: bank_key_1.BankKey.MBBANK,
        scheme: 'mbmobile',
        packageId: 'com.mbmobile',
        appStoreId: 'id1205807363',
        supportVietQR: true,
        supportVNPayQR: false,
    },
    {
        bank: bank_key_1.BankKey.MSB,
        scheme: 'msbmobile',
        packageId: 'vn.com.msb.smartBanking',
        appStoreId: 'id436134873',
        supportVietQR: false,
        supportVNPayQR: false,
    },
    {
        bank: bank_key_1.BankKey.NAM_A_BANK,
        scheme: 'namabankmobile',
        packageId: 'com.vnpay.namabank',
        appStoreId: 'id1227187853',
        supportVietQR: true,
        supportVNPayQR: true,
    },
    {
        bank: bank_key_1.BankKey.NCB,
        scheme: 'ncbizimobile',
        packageId: 'com.ncb.bank',
        appStoreId: 'id1465217154',
        supportVietQR: true,
        supportVNPayQR: false,
    },
    {
        bank: bank_key_1.BankKey.NONGHYUP_BANK_HN,
        scheme: 'newnhsmartbanking',
        packageId: 'nh.smart.banking',
        appStoreId: 'id1444712671',
        supportVietQR: true,
        supportVNPayQR: false,
    },
    {
        bank: bank_key_1.BankKey.OCB,
        scheme: 'omniapp',
        packageId: 'com.ocb.omniextra',
        appStoreId: 'id1358682577',
        supportVietQR: true,
        supportVNPayQR: false,
    },
    {
        bank: bank_key_1.BankKey.OCEANBANK,
        scheme: 'oceanbankmobilebanking',
        packageId: 'com.vnpay.ocean',
        appStoreId: 'id1469028843',
        supportVietQR: true,
        supportVNPayQR: true,
    },
    {
        bank: bank_key_1.BankKey.PGBANK,
        packageId: 'pgbankApp.pgbank.com.vn',
        appStoreId: 'id1537765475',
        supportVietQR: false,
        supportVNPayQR: false,
    },
    {
        bank: bank_key_1.BankKey.PUBLIC_BANK,
        scheme: 'publicbankmobile',
        packageId: 'com.vnpay.publicbank',
        appStoreId: 'id1573736472',
        supportVietQR: true,
        supportVNPayQR: false,
    },
    {
        bank: bank_key_1.BankKey.PVCOM_BANK,
        scheme: 'pvcombankapp',
        packageId: 'com.vsii.pvcombank',
        appStoreId: 'id957284067',
        supportVietQR: true,
        supportVNPayQR: false,
    },
    {
        bank: bank_key_1.BankKey.SACOMBANK,
        scheme: 'sacombankmobile',
        packageId: 'src.com.sacombank',
        appStoreId: 'id885814869',
        supportVietQR: true,
        supportVNPayQR: false,
    },
    {
        bank: bank_key_1.BankKey.SAIGONBANK,
        scheme: 'Sgbmobile',
        packageId: 'com.vnpay.sgbank',
        appStoreId: 'id1481832587',
        supportVietQR: true,
        supportVNPayQR: true,
    },
    {
        bank: bank_key_1.BankKey.SCB,
        scheme: 'scbmobilebanking',
        packageId: 'com.vnpay.SCB',
        appStoreId: 'id954973621',
        supportVietQR: true,
        supportVNPayQR: true,
    },
    {
        bank: bank_key_1.BankKey.SEA_BANK,
        scheme: 'seabankmobile',
        packageId: 'vn.com.seabank.mb1',
        appStoreId: 'id846407152',
        supportVietQR: true,
        supportVNPayQR: false,
    },
    {
        bank: bank_key_1.BankKey.SHB,
        scheme: 'shbmobile',
        packageId: 'vn.shb.mbanking',
        appStoreId: 'id538278798',
        supportVietQR: true,
        supportVNPayQR: true,
    },
    {
        bank: bank_key_1.BankKey.SHINHAN_BANK,
        scheme: 'shinhanglbvnbank',
        packageId: 'com.shinhan.global.vn.bank',
        appStoreId: 'id1071033810',
        supportVietQR: true,
        supportVNPayQR: true,
    },
    {
        bank: bank_key_1.BankKey.STANDARD_CHARTERED_BANK,
        packageId: 'com.sc.mobilebanking.vn',
        appStoreId: 'id1146741999',
        supportVietQR: false,
        supportVNPayQR: false,
    },
    {
        bank: bank_key_1.BankKey.TECHCOMBANK,
        scheme: 'tcb',
        packageId: 'vn.com.techcombank.bb.app',
        appStoreId: 'id1548623362',
        supportVietQR: true,
        supportVNPayQR: false,
    },
    {
        bank: bank_key_1.BankKey.TPBANK,
        scheme: 'tpbankmobile',
        packageId: 'com.tpbankquickpay',
        appStoreId: 'id1292194225',
        supportVietQR: false,
        supportVNPayQR: false,
    },
    {
        bank: bank_key_1.BankKey.TPBANK,
        scheme: 'hydro',
        packageId: 'com.tpb.mb.gprsandroid',
        appStoreId: 'id450464147',
        supportVietQR: true,
        supportVNPayQR: false,
    },
    {
        bank: bank_key_1.BankKey.UBANK,
        packageId: 'vn.vpbank.ubank',
        appStoreId: 'id1529056628',
        supportVietQR: false,
        supportVNPayQR: false,
    },
    {
        bank: bank_key_1.BankKey.UNITED_OVERSEAS_BANK,
        scheme: 'mightyapp',
        packageId: 'com.uob.mightyvn',
        appStoreId: 'id1174327324',
        supportVietQR: true,
        supportVNPayQR: false,
    },
    {
        bank: bank_key_1.BankKey.VIB,
        scheme: 'vibmobile',
        packageId: 'com.vn.vib.mobileapp',
        appStoreId: 'id949371011',
        supportVietQR: true,
        supportVNPayQR: false,
    },
    {
        bank: bank_key_1.BankKey.VIET_A_BANK,
        scheme: 'vabmobilebanking',
        packageId: 'phn.com.vn.mb',
        appStoreId: 'id910897337',
        supportVietQR: true,
        supportVNPayQR: true,
    },
    {
        bank: bank_key_1.BankKey.VIET_BANK,
        scheme: 'vietbankmobilebanking',
        packageId: 'com.vnpay.vietbank',
        appStoreId: 'id1461658565',
        supportVietQR: true,
        supportVNPayQR: true,
    },
    {
        bank: bank_key_1.BankKey.VIETCAPITAL_BANK,
        packageId: 'vn.banvietbank.mobilebanking',
        appStoreId: 'id1526444697',
        supportVietQR: false,
        supportVNPayQR: false,
    },
    {
        bank: bank_key_1.BankKey.VIETCOMBANK,
        scheme: 'vietcombankmobile',
        packageId: 'com.VCB',
        appStoreId: 'id561433133',
        supportVietQR: true,
        supportVNPayQR: true,
    },
    {
        bank: bank_key_1.BankKey.VIETINBANK,
        scheme: 'vietinbankmobile',
        packageId: 'com.vietinbank.ipay',
        appStoreId: 'id689963454',
        supportVietQR: true,
        supportVNPayQR: true,
    },
    {
        bank: bank_key_1.BankKey.VPBANK,
        scheme: 'vpbankneo',
        packageId: 'com.vnpay.vpbankonline',
        appStoreId: 'id1209349510',
        supportVietQR: true,
        supportVNPayQR: false,
    },
    {
        bank: bank_key_1.BankKey.VRB,
        supportVietQR: false,
        supportVNPayQR: false,
    },
    {
        bank: bank_key_1.BankKey.WOORI_BANK,
        scheme: 'wvbs',
        packageId: 'vn.com.woori.smart',
        appStoreId: 'id1501785125',
        supportVietQR: true,
        supportVNPayQR: false,
    },
];
