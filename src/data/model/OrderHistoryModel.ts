import 'reflect-metadata';
import { Type, Transform, Expose } from 'class-transformer';
import moment from 'moment';

export class OrderHistory {
  @Expose({ name: 'firstLineItem' })
  @Type(() => OrderProduct)
  product: OrderProduct;
  address!: string;
  priceTotal: string;
  orderNumber: string;
  orderStatus: string;
  @Transform(
    value => moment(value, 'YYYY-MM-DD HH:mm:ss').format('DD/MM/YYYY HH:mm:ss'),
    { toClassOnly: true },
  )
  creationDate: string;
  status: string;

  @Expose()
  getImageUrl() {
    if (!this.product) {
      return 'https://development-ap01-anhdevs.demandware.net/on/demandware.static/-/Sites-anhdevs_vn_master/default/dw1eb278bb/images/VH_OceanPark/Sapphire1/S1.09/Apartment/PIM/2PN+1/2PN+1_1_small.png';
    }
    return this.product.getImageUrl();
  }

  @Expose()
  getProductName() {
    if (!this.product) {
      return 'Tên sản phẩm'.toLocaleUpperCase();
    }
    return this.product.getProductName().toLocaleUpperCase();
  }

  @Expose()
  getAddress() {
    return 'Gia Lâm, Hà Nội';
  }

  @Expose()
  getProjectName() {
    if (!this.product) {
      return 'Tên dự án';
    }
    return this.product.getProjectName();
  }

  @Expose()
  getPriceTotal() {
    return this.priceTotal;
  }

  @Expose()
  getOrderNumber() {
    return this.orderNumber;
  }

  @Expose()
  getStatusNameOrder() {
    return this.status;
  }

  @Expose()
  getStatusTypeOrder() {
    return this.orderStatus;
  }

  @Expose()
  getDateCreated() {
    return this.creationDate;
  }
}

class OrderProduct {
  imageURL: string;
  productName: string;
  projectName: string;

  @Expose()
  getImageUrl() {
    return this.imageURL;
  }

  @Expose()
  getProductName() {
    return this.productName;
  }

  @Expose()
  getProjectName() {
    return this.projectName;
  }
}
