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
import { Icon } from '../../../../data/theme';
import ButtonAccount from '../../components/button';
import { useTranslation } from 'react-i18next';
import images from '@res/icons';
import { Colors } from '@config/index';

const ButtonAskedQuestions = props => {
  const { icon, title, onPress } = props;
  return (
    <TouchableOpacity style={[styles.row, styles.btnAsked]} onPress={onPress}>
      <Icon assets={icon} />
      <Text style={styles.txtAsked}>{title}</Text>
    </TouchableOpacity>
  );
};

export default function AskedQuestionScreen(props) {
  const { t } = useTranslation();
  const { navigate } = props.navigation;
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
              <Image source={images.ic_search} style={styles.ig_search} />
              <TextInput
                placeholder={t('support.placeholder_search')}
                style={{ width: width - 100 }}
                placeholderTextColor={Colors.placeholder}
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
          onPress={() =>
            navigate('askedquestions1', { title: t('support.account') })
          }
        />
        <ButtonAskedQuestions
          icon={images.ic_coupon}
          title={t('support.about_promotion')}
          onPress={() =>
            navigate('askedquestions1', { title: t('support.about_promotion') })
          }
        />
        <ButtonAskedQuestions
          icon={images.ic_mobile}
          title={t('support.estate_online')}
          onPress={() =>
            navigate('askedquestions1', { title: t('support.estate_online') })
          }
        />
        <ButtonAskedQuestions
          icon={images.ic_home_support}
          title={t('support.complete_purchase')}
          onPress={() =>
            navigate('askedquestions1', {
              title: t('support.complete_purchase'),
            })
          }
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
    backgroundColor: Colors.background,
    borderRadius: 20,
    height: 35,
    alignItems: 'center',
  },
  boxHeader: {
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.border,
    backgroundColor: Colors.background,
  },
  header: {
    fontSize: 17,
    lineHeight: 22,
    color: Colors.ColorBody,
    fontWeight: '600',
    padding: 16,
  },
  title_search: {
    fontSize: 17,
    fontWeight: '600',
    color: Colors.background,
    paddingVertical: 10,
  },
  btnAsked: {
    backgroundColor: Colors.background,
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
    backgroundColor: Colors.TextLink,
    opacity: 0.3,
  },
  ig_search: {
    tintColor: Colors.iconColor,
    margin: 10,
  },
});
