import 'reflect-metadata';
import { Type, Transform, Expose } from 'class-transformer';
import { Product } from './ProductModel';

export class Cart {
  @Type(() => Images)
  images: Images;
  @Type(() => Product)
  productdetail: Product;
  @Type(() => Price)
  price: Price;
  isGift: boolean;
  hasSale: boolean;

  @Expose()
  getProductDetail() {
    return this.productdetail;
  }

  @Expose()
  getImageUrl() {
    return this.images.getSmallImageUrl();
  }

  @Expose()
  getStatusAppliedGift() {
    return this.isGift;
  }

  @Expose()
  setStatusAppliedGift(value: boolean) {
    this.isGift = value;
  }

  @Expose()
  getStatusAppliedSale() {
    return this.hasSale;
  }

  @Expose()
  setStatusAppliedSale(value: boolean) {
    this.hasSale = value;
  }
}

export class Images {
  @Type(() => Image)
  small: Image[];
  @Type(() => Image)
  large: Image[];

  @Expose()
  getSmallImageUrl() {
    return this.small[0].getImageUrl();
  }

  @Expose()
  getLargeImageUrl() {
    return this.large[0].getImageUrl();
  }
}

export class Image {
  alt: string;
  url: string;
  title: string;
  index: string;
  absURL: string;

  @Expose()
  getImageUrl() {
    // return this.small[0];
    return 'https://development-ap01-anhdevs.demandware.net/on/demandware.static/-/Sites-anhdevs_vn_master/default/dw1eb278bb/images/VH_OceanPark/Sapphire1/S1.09/Apartment/PIM/2PN+1/2PN+1_1_small.png';
  }
}

export class Price {
  @Type(() => Sale)
  sales: Sale;
  list;

  @Expose()
  getPriceSaleFormatted() {
    return this.sales.getPriceFormatted();
  }

  @Expose()
  getPriceSaleValue() {
    return this.sales.getPriceValue();
  }
}

export class Sale {
  value: number;
  currency: string;
  formatted: string;
  decimalPrice: string;

  @Expose()
  getPriceFormatted() {
    return this.formatted;
  }

  @Expose()
  getPriceValue() {
    return this.value;
  }
}
