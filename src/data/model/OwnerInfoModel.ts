import 'reflect-metadata';
import { Expose, Transform, Type, Exclude } from 'class-transformer';
import { store } from '@reducers/store';

export class OwnerInfo {
  email: string;
  phone: string;
  firstName!: string;
  lastName!: string;
  isInternalSale!: string;
  defaultAddressOne!: string;
  name!: string; // fullname
  mr!: string; // danh xưng
  address1!: string;
  customerType!: string; // personal, org
  address2!: string; // số cmt
  city!: string;
  postalCode!: string;
  country!: string;
  stateCode!: string;

  @Expose()
  getFirstName() {
    return this.firstName;
  }

  @Expose()
  getLastName() {
    return this.lastName;
  }

  @Expose()
  getFullName() {
    return this.name ? this.name : this.lastName + this.firstName;
  }

  @Expose()
  getPersonalId() {
    return this.address2;
  }

  @Expose()
  getAddress() {
    return this.address1;
  }

  @Expose()
  getCity() {
    return this.city;
  }

  @Expose()
  setStateCode(value: string) {
    this.stateCode = value;
  }

  @Expose()
  getStateCode() {
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

  @Expose()
  isUserSale() {
    return this.isInternalSale && this.isInternalSale == 'true' ? true : false;
  }
}
