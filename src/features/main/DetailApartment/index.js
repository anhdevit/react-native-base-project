/**
 * @format
 * @flow
 */

import ButtonIconVertical from '@components/ButtonIconVertical';
import ButtonLinearGradient from '@components/ButtonLinearGradient';
import ItemHome from '@components/ItemHome';
import ItemMenu from '@components/ItemMenu';
import ListImage from '@components/ListImage';
import { PreviewImages } from '@components/PreviewImage';
import DetailTopTabbar from '@navigation/DetailTopTabbar';
import images from '@res/icons';
import { plainToClass } from 'class-transformer';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, ScrollView, Text, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { connect } from 'react-redux';
import { Apartment } from 'src/data/model/HomeModelNew.ts';
import { showAlertRequiredLogin } from 'src/utility';
import * as actions from '../../cart/modules/actions';
import { getProductDetail } from '../homeSlice';
import { stylesDetail } from './style';


const styles = stylesDetail;

function DetailApartment(props) {

  // Props
  const { route } = props;
  const { item } = route.params;

  // Hooks
  const { t } = useTranslation();

  // States
  const [data, setData] = useState(item);
  const [dataPreviewImage, setDataPreview] = useState({
    isPreviewImages: false,
    index: 0
  });

  const getData = async () => {
    try {
      const data = await getProductDetail(item.id);
      const dataObject = plainToClass(Apartment, data);
      console.log("getData -> dataObject", dataObject)
      setData(dataObject);
    } catch (error) {
      console.log("getData -> error", error)
    }
  };

  useEffect(() => { getData(); }, []);

  const previewWithIndex = (index) => {
    setDataPreview({
      isPreviewImages: true,
      index: index
    })
  }

  const onRequestClose = () => {
    setDataPreview({
      isPreviewImages: false,
      index: 0
    })
  }
  console.log("DetailApartment -> data", data)

  return (
    <SafeAreaView
      forceInset={{ bottom: 'always', top: 'never' }}
      style={styles.safeView}>
      <View style={styles.container}>
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          <View style={styles.bg}>
            <ListImage
              data={data?.getListPhoto()}
              styleContainer={styles.bg}
              onPress={previewWithIndex}
            />
            <PreviewImages
              isPreview={dataPreviewImage.isPreviewImages}
              listImages={data?.getListPhoto()}
              index={dataPreviewImage.index}
              onRequestClose={onRequestClose}
            />
            <View style={styles.viewItemMenu}>
              <ItemMenu
                icon={images.ic_images}
                onPress={() => previewWithIndex(0)}
              />
              {/* <ItemMenu icon={images.ic_360} /> */}
              <ItemMenu icon={images.ic_esale} />
              {/* <ItemMenu icon={images.ic_share} /> */}
            </View>
          </View>
          <View style={styles.body}>
            <View style={styles.viewRow}>
              <Text style={styles.title}>{data.title}</Text>
              {/* TODO: paging for image */}
              {/* <View style={styles.viewNumberPage}>
                <Text style={styles.numberPage}>1/15</Text>
              </View> */}
            </View>
            <View style={styles.viewItemHome}>
              <Image source={images.ic_location} style={styles.iconAddress} />
              <Text style={styles.address}>Gia Lâm, Hà Nội</Text>
            </View>
            <Text style={styles.titleHome}>CĂN HỘ R1.021809- TOÀ R1.02</Text>
            <View style={styles.viewItemHome}>
              <ItemHome icon={images.ic_bed} title={data.getNumberBed()} />
              <ItemHome
                icon={images.ic_m2}
                title={data.getCarpetArea()}
                customStyls={styles.itemHome}
              />
              <ItemHome
                icon={images.ic_bathroom}
                title={data.getNumberBath()}
                customStyls={styles.itemHome}
              />
              <ItemHome
                icon={images.ic_compass}
                title={data.getDirection()}
                customStyls={styles.itemHome}
              />
            </View>
            <View style={styles.viewRow}>
              <Text style={styles.titleprice}>Giá niêm yết</Text>
              <Text style={styles.price}>{data.getPrice()}</Text>
            </View>
            <View style={styles.viewRow}>
              <Text style={styles.titleprice}>Giá thông thuỷ</Text>
              <Text style={styles.titleTrade}>
                {data.getStandarUnitPrice()}
              </Text>
            </View>
          </View>
          <DetailTopTabbar longDescription={data.longDescription} />
        </ScrollView>
        <View style={styles.viewFooter}>
          <ButtonIconVertical title={'Gọi ngay'} icon={images.ic_phone} />
          <ButtonIconVertical icon={images.ic_chat_now} title={'Chat ngay'} />
          <ButtonLinearGradient
            title={data.totalOrder === 0 ? 'Mua ngay' : 'Xếp hàng mua'}
            onPress={() => {
              if (!props.isLoggedIn) {
                showAlertRequiredLogin(t('checkout.please_sign_in'));
              }
              if (data.id) props.addProduct(data.id);
            }}
            styleContainer={styles.buttonLinear}
            styleLinear={styles.styleLinear}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isUseLogin,
});

const mapDispatchToProps = {
  ...actions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailApartment);
