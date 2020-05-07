import ItemCart from '@components/CartItem';
import InputTextCustom from '@components/InputTextCustom';
import colors from '@config/colors';
import images from '@res/icons';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { Tooltip } from 'react-native-elements';
import * as actions from '@features/cart/modules/actions';
import styles from './styles';
import { connect } from 'react-redux';
import { FONT_FAMILY } from '@config/typography';
import { showAlert } from 'src/utility';

function ProductViews({
  hasDiscount,
  cartInfo,
  hasTotal,
  addGiftcode,
  statusAddGiftCode,
  addSaleNumber,
  statusAddSale,
}) {
  const { t } = useTranslation();
  const inputGift = React.useRef(null);
  const [salePersonNumber, setSalesPersonNumber] = React.useState('');
  const [isAppliedGift, setAppliedGift] = React.useState(false);
  const [isAppliedSaleNumber, setAppliedSaleNumber] = React.useState(false);

  React.useEffect(() => {
    setAppliedGift(statusAddGiftCode);
    setAppliedSaleNumber(statusAddSale);
  }, [statusAddGiftCode, statusAddSale]);

  const applyGiftCode = () => {
    let gift = inputGift.current.getValue();
    if (!gift) return showAlert('Quý khách chưa nhập mã giảm giá');

    let params = {
      couponCode: gift,
      action: isAppliedGift ? 'add' : 'delete',
    };
    addGiftcode(params);
  };

  const applySaleNumber = async () => {
    if (!salePersonNumber)
      return showAlert('Quý khách chưa nhập mã của nhân viên');

    let params = {
      saleNumber: salePersonNumber,
    };
    await addSaleNumber(params);
    setAppliedSaleNumber(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={{width: '80%'}}>
          <Text style={styles.apartmentName}>
            {cartInfo.getProductDetail().getProjectName()}
          </Text>
          <View style={styles.row}>
            <Image source={images.ic_address} />
            <Text style={styles.address}>
              {cartInfo.getProductDetail().getAddress()}
            </Text>
          </View>
          <Text style={styles.apartment}>
            {cartInfo.getProductDetail().getProductName()}
          </Text>
        </View>
        <Image style={styles.ig} source={{ uri: cartInfo.getImageUrl() }} />
      </View>

      <ItemCart
        title={t('cart.area_apartment')}
        content={cartInfo.getProductDetail().getArea()}
        unit="2"
      />
      <ItemCart
        title={t('cart.type_of_apartment')}
        content={cartInfo.getProductDetail().getHouseStyle()}
      />
      <ItemCart
        title={t('cart.direction')}
        content={cartInfo.getProductDetail().getDirection()}
      />
      <ItemCart
        title={t('cart.apartment_price')}
        assets={images.ic_info_16}
        content={cartInfo.getProductDetail().getOriginPrice()}
        tips={t('cart.tooltip_apartment_price')}
        heightTooltip={70}
        widthTooltip={250}
        unit="đ"
      />
      <ItemCart
        title={t('cart.vat')}
        assets={images.ic_info_16}
        content={cartInfo.getProductDetail().getVatTax()}
        tips={t('cart.tooltip_vat')}
        heightTooltip={50}
        widthTooltip={200}
        unit="đ"
      />
      <ItemCart
        title={t('cart.maintenance_cost')}
        assets={images.ic_info_16}
        content={cartInfo.getProductDetail().getMaintainFee()}
        tips={t('cart.tooltip_maintenance')}
        heightTooltip={50}
        widthTooltip={150}
        unit="đ"
      />
      <ItemCart
        title={t('cart.total_amount_listed')}
        assets={images.ic_info_16}
        content={cartInfo.getProductDetail().getTotalPrice()}
        tips={t('cart.tooltip_total_amount_listed')}
        heightTooltip={90}
        widthTooltip={280}
        unit="đ"
      />

      <View style={styles.boxReduction}>
        {hasDiscount ? (
          <View style={[styles.boxInPutReduction, styles.row]}>
            <InputTextCustom
              placeholder={t('cart.placeholder_reduction')}
              wrapperInput={{ borderWidth: 0 }}
              containerInput={{ borderWidth: 0 }}
              containerStyle={{
                flex: 1,
              }}
              autoCapitalize={true}
              defaultValue={''}
              placeholderTextColor={colors.placeholder}
              returnKeyType={'done'}
              onRef={ref => (inputGift.current = ref)}
            />
            <View style={styles.iconTxtReduction}>
              <Tooltip
                overlayColor={null}
                popover={
                  <Text style={styles.tooltip_voucher}>
                    {t('cart.tooltip_voucher')}
                  </Text>
                }
                height={90}
                width={280}
                backgroundColor={colors.grayBorder01}>
                <Image source={images.ic_info_16} />
              </Tooltip>
            </View>
            <TouchableOpacity style={styles.btnApply} onPress={applyGiftCode}>
              <Text style={styles.txtBtnApply}>
                {(isAppliedGift
                  ? t('cart.not_apply')
                  : t('cart.apply')
                ).toLocaleUpperCase()}
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}

        <View style={[styles.row, { justifyContent: 'space-between' }]}>
          <Text style={styles.titleItem}>{t('cart.reduction_amount')}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.contentItem, styles.txtDiscount]}>
              0
            </Text>
            <Text style={[styles.subText, { color: 'red' }]}>{'đ'}</Text>
          </View>
        </View>
      </View>

      {hasTotal && (
        <ItemCart
          title={t('checkout.total_amount_online')}
          assets={images.ic_info_16}
          content={cartInfo.getProductDetail().getTotalPrice()}
          tips={t('checkout.total_amount_online')}
          titleStyle={{ fontWeight: '600' }}
          valueStyle={{ color: colors.colorPrimary }}
          subTextStyle={{ color: colors.colorPrimary }}
          heightTooltip={90}
          widthTooltip={280}
          unit="đ"
        />
      )}

      {hasDiscount ? (
        <View style={{ padding: 16, backgroundColor: colors.background }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.salesperson_code}>
              {t('cart.salesperson_code')}
            </Text>
            <Tooltip
              overlayColor={null}
              popover={
                <Text style={styles.tooltip_voucher}>
                  {t('cart.tooltip_salesperson_code')}
                </Text>
              }
              height={90}
              width={280}
              backgroundColor={colors.grayBorder01}>
              <Image source={images.ic_info_16} />
            </Tooltip>
          </View>

          <View style={[styles.boxInPutReduction, styles.row]}>
            <TextInput
              placeholder={t('cart.salesperson_code')}
              autoCapitalize={'characters'}
              placeholderTextColor={colors.textColor}
              style={styles.textInput}
              value={salePersonNumber}
              onChangeText={text => setSalesPersonNumber(text)}
            />
            <View style={[styles.iconTxtReduction, { paddingRight: 0 }]}>
              <View style={styles.separator} />
              <TouchableOpacity
                style={styles.btnApply}
                onPress={applySaleNumber}>
                <Text style={styles.txtBtnApply}>
                  {(isAppliedSaleNumber
                    ? t('checkout.edit')
                    : t('checkout.add')
                  ).toLocaleUpperCase()}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
}

const mapStateToProps = state => ({
  statusAddGiftCode: state.cart.statusAddGiftCode,
  statusAddSale: state.cart.statusAddSale,
});

const mapDispatchToProps = {
  ...actions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductViews);
