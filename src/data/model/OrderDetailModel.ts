import { Expose, Type } from 'class-transformer';

export class OrderHistoryDetail {
  @Type(() => OrderDetail)
  orderDetail: OrderDetail;
  @Type(() => CustomerInfo)
  customerInfo: CustomerInfo;
  @Type(() => BillingDetail)
  billingDetail: BillingDetail;
  @Type(() => BankInfo)
  bankInfo: BankInfo;

  @Expose()
  getOrderDetail() {
    return this.orderDetail;
  }

  @Expose()
  getCustomerInfo() {
    return this.customerInfo;
  }

  @Expose()
  getBillingDetail() {
    return this.billingDetail;
  }

  @Expose()
  getBankInfo() {
    return this.bankInfo;
  }
}

class OrderDetail {
  orderId: string;
  orderDate: string;
  orderStatus: string;

  @Expose()
  getOrderId() {
    return this.orderId;
  }

  @Expose()
  getOrderDate() {
    return this.orderDate;
  }

  @Expose()
  getOrderStatus() {
    return this.orderStatus;
  }
}

class CustomerInfo {
  firstName: string;
  lastName: string;
  @Expose({ name: 'address1' })
  address: string;
  @Expose({ name: 'address2' })
  personalId: string;
  city: string;
  stateCode: string;
  email!: string;
  phone: string;

  @Expose()
  getFullName() {
    let fullName = '';
    fullName += this.firstName ? this.firstName + ' ' : '';
    fullName += this.lastName ? this.lastName : '';
    return fullName;
  }

  @Expose()
  getPersonalId() {
    return this.personalId;
  }

  @Expose()
  getAddress() {
    return this.address;
  }

  @Expose()
  getNationality() {
    return this.stateCode;
  }

  @Expose()
  getEmail() {
    return this.email;
  }

  @Expose()
  getPhone() {
    return this.phone;
  }
}

class BillingDetail {
  bankDepositAmount: number;
  paymentMethod: string;

  @Expose()
  getDepositAmount() {
    return this.bankDepositAmount;
  }

  @Expose()
  getPaymentMethod() {
    return this.paymentMethod;
  }
}

class BankInfo {
  bankName: string;
  bankAccountName: string;
  bankAccountNumber: string;
  bankTransferContent: string;

  @Expose()
  getBankName() {
    return this.bankName;
  }

  @Expose()
  getBankAccountNumber() {
    return this.bankAccountNumber;
  }

  @Expose()
  getBankAccountName() {
    return this.bankAccountName;
  }

  @Expose()
  getBankTransferContent() {
    return this.bankTransferContent;
  }
}
