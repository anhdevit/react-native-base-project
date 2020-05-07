import React from 'react';
import { Text, View } from 'react-native';
import ButtonAccount from '../components/button';
import styles from './styles';
import { useTranslation } from 'react-i18next';

export default function SupportScreen(props) {
  const { t } = useTranslation();

  const { navigate } = props.navigation;
  return (
    <View>
      <ButtonAccount
        title={t('support.frequently_asked_questions')}
        onPress={() => navigate('askedquestions')}
      />
      <ButtonAccount
        title={t('support.buying_guide')}
        onPress={() => navigate('askedquestions')}
      />
      <ButtonAccount
        title={t('support.forms')}
        onPress={() => navigate('askedquestions')}
      />
      <ButtonAccount
        title={t('support.online_sales_policy')}
        onPress={() => navigate('askedquestions')}
      />
      <ButtonAccount
        title={t('support.anhdevs_online')}
        onPress={() => navigate('askedquestions')}
      />
      <ButtonAccount
        title={t('support.contact')}
        onPress={() => navigate('askedquestions')}
      />
      <ButtonAccount
        title={t('support.terms_of_use')}
        onPress={() => navigate('askedquestions')}
      />
      <ButtonAccount
        title={t('support.chat_online')}
        onPress={() => navigate('askedquestions')}
      />
      <View style={styles.box_version}>
        <View style={styles.version}>
          <Text style={styles.txt}>{t('support.version')}</Text>
          <Text style={styles.txt}>{'1.0.0'}</Text>
        </View>
      </View>
    </View>
  );
}
