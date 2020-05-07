## Navigation

- NavigationContainer
  Check login
  if (userLogin) {
  - AuthStack - SignIn - SingUp - ForgotPassword
    } else {
  - Drawer - MainStack - HomeUserTabs(BottomTab) - Search - Cart - CheckoutStack - Deal - Sale - Table - Infomation
    }

## 1, Build Ios device

- mobileprovision: ios/anhdev_Development.mobileprovision
- development cer: ios/ios_development.cer
- p12: ios/Certificates.p12 -> pass: <no password required>

## Localize

- Add text to file json in folder: src/translations
- use const { t, i18n } = useTranslation(); and then call text like that t('hello_world')

## Redux with Redux Toolkit

- Currenlty we have only one combine reducer
- Each feature add new slice reducer with redux toolkit we don't have action or type
- Desscibe in slice reducer of toolkit
  Read doc to understand: https://redux-toolkit.js.org/tutorials/intermediate-tutorial

## Flow Data

- Descript about how to get data from data provider and show on UI
- Data provider(API or Socket) -> Repository -> Model -> View

## Theme

- Check folder config: Color, spacing, typography

## Images

- All assets need to store in resources/icons
- run command: npm run images to generate file manager images
- import and call "images" from other file

## Defined Modal

https://github.com/typestack/class-transformer

```
export class CartItem {
  uuid;
  id;
  productName;
  productType;
  brand;
  @Type(() => Price)
  price;
}

export class Price {
  @Type(() => Sales)
  sales;
  list;
}

export class Sales {
  value;
  currency;
}
```
