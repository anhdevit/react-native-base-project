import 'reflect-metadata';
import { Type, Transform, Expose } from 'class-transformer';

export class Product {
  id: string;
  name: string;
  @Expose({ name: 'c_carpetArea' })
  area!: number;
  @Expose({ name: 'c_houseStyle' })
  houseStyle!: string;
  @Expose({ name: 'c_address' })
  address!: string;
  @Expose({ name: 'c_maintenanceFee' })
  maintainFee!: number;
  @Expose({ name: 'c_numberBathroom' })
  bathroom!: number;
  @Expose({ name: 'c_numberBedroom' })
  bedroom!: number;
  @Expose({ name: 'c_originalPrice' })
  priceOrigin!: number;
  @Expose({ name: 'c_projectName' })
  projectName!: string;
  @Expose({ name: 'c_propertyDirection' })
  direction!: string;
  @Expose({ name: 'c_standardUnitPrice' })
  priceUnit!: number;
  @Expose({ name: 'c_totalOrder' })
  totalOrder!: number;
  @Expose({ name: 'c_totalPriceincVATMainFee' })
  priceTotal!: number;
  @Expose({ name: 'c_vatTax' })
  tax!: number;

  @Expose()
  getProductName() {
    return this.name;
  }

  @Expose()
  getProductId() {
    return this.id;
  }

  @Expose()
  getProjectName() {
    return this.projectName;
  }

  @Expose()
  getAddress() {
    return 'Gia Lâm, Hà Nội';
  }

  @Expose()
  getArea() {
    return this.area + 'm';
  }

  @Expose()
  getHouseStyle() {
    return this.houseStyle;
  }

  @Expose()
  getMaintainFee() {
    return this.maintainFee;
  }

  @Expose()
  getOriginPrice() {
    return this.priceOrigin;
  }

  @Expose()
  getDirection() {
    return this.direction;
  }

  @Expose()
  getUnitPrice() {
    return this.priceUnit;
  }

  // 0 - mua ngay, còn lại xếp hàng mua
  @Expose()
  getTotalOrder() {
    return this.totalOrder ? this.totalOrder : 'abc';
  }

  @Expose()
  getTotalPrice() {
    return this.priceTotal;
  }

  @Expose()
  getVatTax() {
    return this.tax;
  }
}
