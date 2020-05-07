import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon } from '../../../../data/theme';
import ButtonAccount from '../../components/button';
import { useTranslation } from 'react-i18next';

export default function AskedQuestionScreen1(props) {
  const { t } = useTranslation();
  const { params } = props.route;

  return (
    <View>
      <View>
        <View style={styles.boxHeader}>
          <Text style={styles.header}>{params.title}</Text>
        </View>
        <ButtonAccount title={t('support.asked_questions1')} />
        <ButtonAccount title={t('support.asked_questions2')} />
        <ButtonAccount title={t('support.asked_questions3')} />
      </View>
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
