// mockup data

// user/dashboard

export const userDashboardMockupData = [
  {
    content: `เพื่อเป็นการเพิ่มประสิทธิภาพในการค้นหาเอกสารปัจจุบัน และเรียกใช้งานของ Service บางตัว จึงต้องย้ายเอกสารเก่าไปไว้บน Database อื่น
    การค้นหาเอกสารที่เก่าเกินกว่า 3 เดือน ให้เข้าไปค้นในเมนู E-Tax Invoice (เก่า) ครับ`,
  },
  {
    content: `ปัจจุบันของใหม่ย้อนหลังได้ถึง 1 ธ.ค. 2566`,
  },
];

//operator/dashboard
export const operatorDashboardMockupData = [
  {
    appName: "01.0 Raw Data Sweeper 1 (FTP)",
    thread: 0,
    host: "ETAXIAR3",
    lastUpdate: "2023-06-28 15:31:03",
    isDown: 0,
  },
  {
    appName: "02.0 Data Analyzer",
    thread: 0,
    host: "ETAXIAR3",
    lastUpdate: "2023-06-28 15:35:22",
    isDown: 0,
  },
  {
    appName: "03.0 Report Generator",
    thread: 0,
    host: "ETAXIAR3",
    lastUpdate: "2023-06-28 15:40:17",
    isDown: 0,
  },
  {
    appName: "04.0 Data Importer",
    thread: 0,
    host: "ETAXIAR3",
    lastUpdate: "2023-06-28 15:45:09",
    isDown: 0,
  },
  {
    appName: "05.0 Dashboard Viewer",
    thread: 0,
    host: "ETAXIAR3",
    lastUpdate: "2023-06-28 15:49:56",
    isDown: 0,
  },
  {
    appName: "06.0 User Management",
    thread: 0,
    host: "ETAXIAR3",
    lastUpdate: "2023-06-28 15:54:33",
    isDown: 0,
  },
  {
    appName: "07.0 File Manager",
    thread: 0,
    host: "ETAXIAR3",
    lastUpdate: "2023-06-28 15:59:12",
    isDown: 0,
  },
  {
    appName: "08.0 Scheduler",
    thread: 0,
    host: "ETAXIAR3",
    lastUpdate: "2023-06-28 16:04:07",
    isDown: 0,
  },
  {
    appName: "09.0 Log Analyzer",
    thread: 0,
    host: "ETAXIAR3",
    lastUpdate: "2023-06-28 16:08:55",
    isDown: 0,
  },
  {
    appName: "10.0 Backup Manager",
    thread: 0,
    host: "ETAXIAR3",
    lastUpdate: "2023-06-28 16:13:42",
    isDown: 0,
  },
];

//operator/track_import

export const trackImportMockupData  = [
  {
    findId: "dc3ca2596849464bbc8d43f817aea839",
    orignalFile: "receive-DirdebDigital28-06-2023(095715am).json",
    importDate: "28-Jun-2023 @16:37",
    totalDoc: "7,941",
    errorDoc: "1",
    inprogressDoc: "0",
    doneDoc: "7,940",
    importState: "2",
    errorDescription: "",
  },
  {
    findId: "a92d5a4f23c6f4b1b81234f8765a948d",
    orignalFile: "receive-DirdebDigital29-06-2023(103102am).json",
    importDate: "29-Jun-2023 @10:31",
    totalDoc: "5,621",
    errorDoc: "0",
    inprogressDoc: "0",
    doneDoc: "5,621",
    importState: "2",
    errorDescription: "",
  },
  {
    findId: "bce4f76d3b26a784abc7845b94517a62",
    orignalFile: "receive-DirdebDigital30-06-2023(084511am).json",
    importDate: "30-Jun-2023 @08:45",
    totalDoc: "3,218",
    errorDoc: "2",
    inprogressDoc: "0",
    doneDoc: "3,216",
    importState: "2",
    errorDescription: "",
  },
  {
    findId: "ef8712ba9c34d7b5a7c94365928f51ba",
    orignalFile: "receive-DirdebDigital01-07-2023(091705am).json",
    importDate: "01-Jul-2023 @09:17",
    totalDoc: "8,579",
    errorDoc: "3",
    inprogressDoc: "0",
    doneDoc: "8,576",
    importState: "2",
    errorDescription: "",
  },
  {
    findId: "23efc49d6578964b12a7c843d9b5a478",
    orignalFile: "receive-DirdebDigital02-07-2023(102015am).json",
    importDate: "02-Jul-2023 @10:20",
    totalDoc: "2,314",
    errorDoc: "0",
    inprogressDoc: "0",
    doneDoc: "2,314",
    importState: "2",
    errorDescription: "",
  },
];

//operator/instant_tracking

export const instantTracking = [
  {
    "state": "Done State Total",
    "type" : "",
    "Description" : "",
    "total" : 23588
  },
  {
    "state": "32",
    "type" : "Done",
    "Description" : "Completed all process",
    "total" : 23588
  },
  {
    "state": "Error State Total",
    "type" : "",
    "Description" : "",
    "total" : 0
  },
  {
    "state": "03",
    "type" : "Error",
    "Description" : "Prepared document",
    "total" : 0
  },
  {
    "state": "13",
    "type" : "Error",
    "Description" : "XML Validating",
    "total" : 0
  },
  {
    "state": "23",
    "type" : "Error",
    "Description" : "PDF buinding and signing",
    "total" : 0
  },
  {
    "state": "33",
    "type" : "Error",
    "Description" : "Finalizing",
    "total" : 0
  },
  {
    "state": "Inprogress State Total",
    "type" : "",
    "Description" : "",
    "total" : 0
  },
  {
    "state": "00",
    "type" : "Waiting",
    "Description" : "XML signing",
    "total" : 0
  },
  {
    "state": "01",
    "type" : "Inprogress",
    "Description" : "XML signing",
    "total" : 0
  },
  {
    "state": "04",
    "type" : "Waiting",
    "Description" : "Rebuild document",
    "total" : 0
  },
  {
    "state": "05",
    "type" : "Inprogress",
    "Description" : "Rebuild document",
    "total" : 0
  },
  {
    "state": "02",
    "type" : "Waiting",
    "Description" : "Schematron Validation",
    "total" : 0
  },
  {
    "state": "11",
    "type" : "Inprogress",
    "Description" : "Schematron Validation",
    "total" : 0
  },
  {
    "state": "12",
    "type" : "Waiting",
    "Description" : "PDF building",
    "total" : 0
  },
  {
    "state": "22",
    "type" : "Waiting",
    "Description" : "Finalization",
    "total" : 0
  },
  {
    "state": "31",
    "type" : "Inprogress",
    "Description" : "Finalization",
    "total" : 0
  },
  {
    "state": "File upload summary",
    "type" : "",
    "Description" : "",
    "total" : 0
  },
  {
    "state": "00",
    "type" : "Waiting",
    "Description" : "Import and conversion",
    "total" : 0
  },
  {
    "state": "01",
    "type" : "Inprogress",
    "Description" : "Import and conversion",
    "total" : 0
  },
  {
    "state": "02",
    "type" : "Completed",
    "Description" : "Import and conversion",
    "total" : 0
  },
  {
    "state": "03",
    "type" : "Error",
    "Description" : "Import and conversion",
    "total" : 0
  },
 
]


//invoice
export const etaxDocumentMockupData = [
  {
    invoiceId: 1,
    documentNumber: "AP230795875",
    businessNumber: "800284635",
    invoiceNumber: "337232181",
    date: "20 มิ.ย. 2566",
    name: "นาย ประจันทร์ วิจิตร",
    taxInvoice: "3450300195428",
    amount: 315.75,
    vat: 21.1,
    total: 417.3,
    pdf: "",
    email: "-No-",
    sendETax: "",
  },
  {
    invoiceId: 2,
    documentNumber: "AP230795876",
    businessNumber: "800284636",
    invoiceNumber: "337232182",
    date: "21 มิ.ย. 2566",
    name: "นางสาว สมร วิจิตร",
    taxInvoice: "3450300195429",
    amount: 450.25,
    vat: 30.15,
    total: 480.4,
    pdf: "",
    email: "-No-",
    sendETax: "",
  },
  {
    invoiceId: 3,
    documentNumber: "AP230795877",
    businessNumber: "800284637",
    invoiceNumber: "337232183",
    date: "22 มิ.ย. 2566",
    name: "นางสาว ศรีสุดา จันทร์ศรี",
    taxInvoice: "3450300195430",
    amount: 525.8,
    vat: 35.05,
    total: 560.85,
    pdf: "",
    email: "-No-",
    sendETax: "",
  },
  {
    invoiceId: 4,
    documentNumber: "AP230795878",
    businessNumber: "800284638",
    invoiceNumber: "337232184",
    date: "23 มิ.ย. 2566",
    name: "นาย สุรชัย ประเสริฐสิทธิ์",
    taxInvoice: "3450300195431",
    amount: 180.5,
    vat: 12.04,
    total: 192.54,
    pdf: "",
    email: "-No-",
    sendETax: "",
  },
  {
    invoiceId: 5,
    documentNumber: "AP230795879",
    businessNumber: "800284639",
    invoiceNumber: "337232185",
    date: "24 มิ.ย. 2566",
    name: "นางสาว อรทัย ศรีสุข",
    taxInvoice: "3450300195432",
    amount: 750.0,
    vat: 50.0,
    total: 800.0,
    pdf: "",
    email: "-No-",
    sendETax: "",
  },
  {
    invoiceId: 6,
    documentNumber: "AP230795880",
    businessNumber: "800284640",
    invoiceNumber: "337232186",
    date: "25 มิ.ย. 2566",
    name: "นาย พีระ สุขแสน",
    taxInvoice: "3450300195433",
    amount: 420.3,
    vat: 28.02,
    total: 448.32,
    pdf: "",
    email: "-No-",
    sendETax: "",
  },
  {
    invoiceId: 7,
    documentNumber: "AP230795881",
    businessNumber: "800284641",
    invoiceNumber: "337232187",
    date: "26 มิ.ย. 2566",
    name: "นางสาว รุจิรา ชูศรี",
    taxInvoice: "3450300195434",
    amount: 625.9,
    vat: 41.76,
    total: 667.66,
    pdf: "",
    email: "-No-",
    sendETax: "",
  },
  {
    invoiceId: 8,
    documentNumber: "AP230795882",
    businessNumber: "800284642",
    invoiceNumber: "337232188",
    date: "27 มิ.ย. 2566",
    name: "นาย วีระพล จันทร์ประเสริฐ",
    taxInvoice: "3450300195435",
    amount: 290.2,
    vat: 19.35,
    total: 309.55,
    pdf: "",
    email: "-No-",
    sendETax: "",
  },
  {
    invoiceId: 9,
    documentNumber: "AP230795883",
    businessNumber: "800284643",
    invoiceNumber: "337232189",
    date: "28 มิ.ย. 2566",
    name: "นางสาว สุภาพร สมบัติ",
    taxInvoice: "3450300195436",
    amount: 180.9,
    vat: 12.06,
    total: 192.96,
    pdf: "",
    email: "-No-",
    sendETax: "",
  },
  {
    invoiceId: 10,
    documentNumber: "AP230795884",
    businessNumber: "800284644",
    invoiceNumber: "337232190",
    date: "29 มิ.ย. 2566",
    name: "นาย อภิวัฒน์ จันทร์วิชัย",
    taxInvoice: "3450300195437",
    amount: 570.8,
    vat: 38.05,
    total: 608.85,
    pdf: "",
    email: "-No-",
    sendETax: "",
  },
];
