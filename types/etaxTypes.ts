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

//

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



