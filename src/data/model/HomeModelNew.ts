import { Expose, Type } from 'class-transformer';
import numeral from 'numeral';
import 'reflect-metadata';

export function BannerModel(data) {
  // this.photo = data.photo
  this.photo = 'https://online.anhdevs.vn/on/demandware.static/-/Sites-anhdevs_vn-Library/default/dw66537046/images/Landing/1366x728-thumb-smc.png'
  this.width = data.width
  this.height = data.height
} 

export class Banner {
  photo: string;
  width: number;
  height: number;
}

export class ListApartment {
  @Type(() => Apartment)
  data: Apartment[]
}

export class Apartment {
  id: string;
  name: string;
  @Expose({ name: 'page_title' })
  title: string;
  @Expose({ name: 'c_projectName' })
  project: string;
  @Expose({ name: 'c_originalPrice' })
  price: number;
  @Expose({ name: 'c_numberBedroom' })
  numberBedroom: number;
  @Expose({ name: 'c_numberBathroom' })
  numberBathroom: number;
  @Expose({ name: 'c_propertyDirection' })
  direction: string;
  @Expose({ name: 'c_carpetArea' })
  carpetArea: number;
  @Expose({ name: 'long_description' })
  longDescription: string;
  @Expose({ name: 'c_standardUnitPrice' })
  standarUnitPrice: number;
  @Expose({ name: 'images' })
  images: string;
  @Expose({ name: 'c_totalOrder' })
  totalOrder: string;
  wishlist: string;

  @Expose()
  getListPhoto() {
    if (this.images) {
      const objectImage = JSON.parse(this.images)
      if (objectImage['large']) {
        return objectImage['large'].map(item => {
          item.url = item.absURL
          return item
        })
      }
    }
    return []
  }

  @Expose()
  getPhoto() {
    if (this.images) {
      const objectImage = JSON.parse(this.images)
      if (objectImage['large']) {
        return objectImage['large'][0].absURL
      }
    }
    return ''
  }

  @Expose()
  getPrice() {
    return `${numeral(this.price).format('0,0')}đ`;
  }

  @Expose()
  getStandarUnitPrice() {
    return `${numeral(this.standarUnitPrice).format('0,0')}đ/m²`;
  }

  @Expose()
  getNumberBed = () => {
    return this.numberBedroom
  }

  @Expose()
  getNumberBath = () => {
    return this.numberBathroom
  }

  @Expose()
  getDirection = () => {
    return this.direction
  }

  @Expose()
  getCarpetArea = () => {
    return `${this.carpetArea}m²`
  }

}
