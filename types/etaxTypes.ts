// User Zone
//etaxdocument
export interface SelectedDates {
  name: string;
  code: string;
}

export interface Etaxdocument {
  invoiceId?: number;
  documentNumber?: string;
  businessNumber?: string;
  invoiceNumber?: string;
  date?: string;
  name?: string;
  taxInvoice?: string;
  amount?: number;
  vat?: number;
  total?: number;
  pdf?: string;
  email?: string;
  sendETax?: string;
}

export interface SelectedDates {
  name: string;
  code: string;
}

// Salestaxreport

export interface Salestaxreport {
  invoiceId?: number;
  invoice_number?: string;
  date?: string;
  customer_name?: string;
  taxid?: string;
  branch_id?: string;
  tax_basis_amount?: number;
  tax_total_amount?: number;
  grand_total_amount?: number;
  description?: string;
}


// OPERATORS ZONE
//operator/dashboard

export interface OperatorDashboard {
  appName?:    string;
  thread?:     number;
  host?:       string;
  lastUpdate?: string;
  isDown?:     number;
}

//operator/track_import

export interface PrintingSubmit {
  reference: string;
  group: string;
  filename: string;
  filesize: string;
  sequence: string;
  total: number;
  createdDate: string;
  description: string;
}
//operator/track_import

export interface TrackImport {
  findId?: string;
  orignalFile?: string;
  importDate?: string;
  totalDoc?: string;
  errorDoc?: string;
  inprogressDoc?: string;
  doneDoc?: string;
  importState?: string;
  errorDescription?: string;
}
//operator/instant_tracking

export interface InstantTracking {
  state?:       string;
  type?:        string;
  Description?: string;
  total?:       number;
}



