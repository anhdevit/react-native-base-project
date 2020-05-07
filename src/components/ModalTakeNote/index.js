import React from 'react';
import { Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import colors from '@config/colors';
import { connect } from 'react-redux';
import InputTextCustom from '@components/InputTextCustom';
import { useTranslation } from 'react-i18next';
import styles from './styles';

const ModalTakeNote = props => {
  const [currentNote, setCurrentNote] = React.useState('');
  const note = React.useRef('');
  const { t } = useTranslation();

  const toogleModal = () => {
    props.toogleModal();
  };

  React.useEffect(() => {
    if (note.current) {
      note.current.setValue(currentNote);
    }
  }, [props.isVisible]);

  const takeNote = () => {
    setCurrentNote(note.current.getValue());
    props.takeNote(note.current.getValue());
    props.toogleModal();
  };

  return (
    <View>
      <Modal
        visible={props.isVisible}
        hideModalContentWhileAnimating
        useNativeDriver={true}
        onBackButtonPress={toogleModal}
        onBackdropPress={toogleModal}
        style={styles.container}>
        <View style={styles.content}>
          <View style={styles.wrapperLabel}>
            <Text style={styles.labelNote}>{t('checkout.aware')}</Text>
          </View>

          <InputTextCustom
            onRef={ref => (note.current = ref)}
            containerStyle={styles.containerStyle}
            containerInput={styles.containerInput}
            inputStyle={styles.inputStyle}
            placeholder={t('checkout.take_note_for_seller')}
            maxLength={200}
            multiline={true}
          />

          <View style={styles.footer}>
            <TouchableOpacity style={styles.btn} onPress={toogleModal}>
              <Text style={styles.textCancel}>{t('checkout.cancel')}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.btn,
                { borderLeftWidth: 0.5, borderLeftColor: colors.border },
              ]}
              onPress={takeNote}>
              <Text style={styles.textSend}>{t('checkout.send')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalTakeNote);
