import images from '@res/icons';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Switch } from 'react-native';
import Icon from '../../../data/theme/Icon';
import styles from './styles';
import { useTranslation } from 'react-i18next';
import { Colors } from '@config/index';

export default function SettingScreen(props) {
  const { t } = useTranslation();
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <TouchableOpacity style={[styles.row, styles.btn]}>
        <Text style={styles.btnTitle}>{t('setting.language')}</Text>
        <View style={styles.row}>
          <Text style={[styles.btnTitle, styles.txtLanguage]}>
            {'Tiếng việt'}
          </Text>
          <View style={{ marginTop: 3 }}>
            <Icon assets={images.ic_goto} />
          </View>
        </View>
      </TouchableOpacity>
      <View style={[styles.row, styles.btn]}>
        <Text style={styles.btnTitle}>
          {t('setting.receive_notifications')}
        </Text>
        <View style={styles.row}>
          <Switch
            trackColor={{ false: Colors.grayText, true: Colors.green }}
            thumbColor={isEnabled ? Colors.background : Colors.green}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    </View>
  );
}
