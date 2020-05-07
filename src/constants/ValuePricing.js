export const Policy = {
  percent_discount: 1,
  cash_discount: 50,
};

export const selectPolicy = [
  {
    value: 0,
    label: 'Chọn chính sách',
  },
  {
    value: 1,
    label: 'Chiết khấu phần trăm',
  },
  {
    value: 2,
    label: 'Chiết khấu bằng tiền',
  },
];

export const choosePaymentSchedule = [
  { value: 'choose_payment_schedule', label: 'Chọn tiến độ thanh toán' },
  {
    value: 'pay_according_standard_schedule',
    label: 'Thanh toán theo tiến độ chuẩn',
  },
  {
    value: 'payment_installments_and_round',
    label: 'thanh toán sớm theo từng phần và tròn đợt',
  },
  {
    value: 'payment_up_to',
    label:
      'Thanh toán sớm lên đến 100% giá trị hợp đồng theo quy định của Chính sách bán hàng',
  },
  {
    value: 'bank_loans',
    label: 'vay vốn ngân hàng, tham gia chương trình hỗ trợ lãi suất',
  },
];

export const interestRate = [
  { value: 'vietcombank', label: 'Vietcombank' },
  { value: 'vietinbank', label: 'Vietinbank' },
  { value: 'vib', label: 'VIB' },
  { value: 'vpbank', label: 'VPBank' },
  { value: 'acb', label: 'ACB' },
  { value: 'sacombank', label: 'Sacombank' },
  { value: 'bidv', label: 'BIDV' },
  { value: 'tpbank', label: 'TPBank' },
  { value: 'maritime_bank', label: 'Maritime Bank' },
  { value: 'ocb', label: 'OCB' },
  { value: 'techcombank', label: 'Techcombanl' },
  { value: 'other', label: 'Ngân hàng khác' },
];

export const percentBank = {
  vietcombank: 7.5,
  vietinbank: 7.7,
  vib: 6.09,
  vpbank: 6.5,
  acb: 7.8,
  sacombank: 7.49,
  bidv: 6.5,
  tpbank: 6.8,
  maritime_bank: 6.99,
  ocb: 6.99,
  techcombank: 7.2,
  other: 7.5,
};

export const paymentSchedules = {
  payment_schedule: 'choose_payment_schedule',
  pay_according: 'pay_according_standard_schedule',
  payment_installments: 'payment_installments_and_round',
  payment_up_to: 'payment_up_to',
  bank_loans: 'bank_loans',
};

export const arrPayInstallments = [
  {
    title: 'Đặt cọc',
    value: 50,
    unit: 'Tr',
    edit: true,
    editable: false,
  },
  {
    key: 2,
    title: 'Lần 1 - ngay khi ký HĐMB',
    value: 10,
    unit: '%',
    edit: true,
    editable: false,
  },
  {
    key: 3,
    title: 'Lần 2',
    value: 20,
    unit: '%',
    edit: true,
    editable: false,
  },
  {
    title: 'Lần 3',
    value: 20,
    unit: '%',
    edit: true,
    editable: false,
  },
  {
    title: 'Lần 4',
    value: 20,
    unit: '%',
    edit: true,
    editable: false,
  },
  {
    title: 'Khi nhận thông báo bàn giao',
    value: 25,
    unit: '%',
    edit: false,
    editable: false,
  },
  {
    title: 'Khi nhận thông báo nhận GCN QSDD',
    value: 5,
    unit: '%',
    edit: false,
    editable: false,
  },
];

export const arryPayUpTo = [
  {
    title: 'Đặt cọc',
    value: 50,
    unit: 'Tr',
    edit: true,
    editable: false,
  },
  {
    title: 'Lần 1 - ngay khi ký HĐMB',
    value: 95,
    unit: '%',
    edit: true,
    editable: false,
  },
  {
    title: 'Khi nhận thông báo nhận GCN QSDD',
    value: 5,
    unit: '%',
    edit: false,
    editable: false,
  },
]

export const arrBankLoans = [
  {
    title: 'Đặt cọc',
    value: 50,
    unit: 'Tr',
    edit: true,
    editable: false,
  },
  {
    title: 'Lần 1 - ngay khi ký HĐMB',
    value: 10,
    unit: '%',
    edit: true,
    editable: false,
  },
  {
    title: 'Lần 2',
    value: 70,
    unit: '%',
    edit: true,
    editable: false,
  },
  {
    title: 'Lần 3',
    value: 10,
    unit: '%',
    edit: true,
    editable: false,
  },
  {
    title: 'Lần 4',
    value: 5,
    unit: '%',
    edit: true,
    editable: false,
  },
  {
    title: 'Khi nhận thông báo nhận GCN QSDD',
    value: 5,
    unit: '%',
    edit: false,
    editable: false,
  },
]
