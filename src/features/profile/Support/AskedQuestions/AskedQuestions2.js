import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import images from '@res/icons';
import { Icon } from '../../../../data/theme';
import ButtonAccount from '../../components/button';
import { useTranslation } from 'react-i18next';

const ButtonAskedQuestions = props => {
  const { icon, title } = props;
  return (
    <TouchableOpacity style={[styles.row, styles.btnAsked]}>
      <Icon assets={icon} />
      <Text style={styles.txtAsked}>{title}</Text>
    </TouchableOpacity>
  );
};

export default function AskedQuestionScreen2(props) {
  const { t } = useTranslation();
  return (
    <View>
      <ScrollView>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 140,
          }}>
          <Image source={images.bg_item_list} style={styles.ig_banner} />
          <View style={styles.opacity} />
          <View style={{ position: 'absolute' }}>
            <Text style={styles.title_search}>
              {t('support.title_asked_questions')}
            </Text>
            <View style={[styles.row, styles.box_search]}>
              <View style={{ padding: 10 }}>
                <Icon assets={images.ic_search} />
              </View>
              <TextInput
                placeholder={t('support.placeholder_search')}
                style={{ width: width - 100 }}
              />
            </View>
          </View>
        </View>
        <View>
          <View style={styles.boxHeader}>
            <Text style={styles.header}>{t('support.popular_topic')}</Text>
          </View>
          <ButtonAccount title={t('support.asked_questions1')} />
          <ButtonAccount title={t('support.asked_questions2')} />
          <ButtonAccount title={t('support.asked_questions3')} />
        </View>
        <View>
          <Text style={styles.header}>{t('support.title_category')}</Text>
        </View>
        <ButtonAskedQuestions
          icon={images.ic_user_support}
          title={t('support.account')}
        />
        <ButtonAskedQuestions
          icon={images.ic_coupon}
          title={t('support.about_promotion')}
        />
        <ButtonAskedQuestions
          icon={images.ic_mobile}
          title={t('support.estate_online')}
        />
        <ButtonAskedQuestions
          icon={images.ic_home_support}
          title={t('support.complete_purchase')}
        />
      </ScrollView>
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  row: { flexDirection: 'row' },
  ig_banner: {
    width: width,
    height: 140,
  },
  box_search: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    height: 35,
    alignItems: 'center',
  },
  boxHeader: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#E5E5E5',
    backgroundColor: '#FFFFFF',
  },
  header: {
    fontSize: 17,
    lineHeight: 22,
    color: '#242424',
    fontWeight: '600',
    padding: 16,
  },
  title_search: {
    fontSize: 17,
    fontWeight: '600',
    color: '#FFFFFF',
    paddingVertical: 10,
  },
  btnAsked: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginVertical: 5,
    height: 50,
    alignItems: 'center',
    padding: 15,
  },
  txtAsked: {
    paddingLeft: 15,
    fontSize: 15,
    fontWeight: '600',
  },
  opacity: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: '#162B75',
    opacity: 0.3,
  },
});
