import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import colors from '@config/colors';
import { FONT_FAMILY } from '@config/typography';
import { useTranslation } from 'react-i18next';
import images from '@res/icons';
import ButtonIcon from '@components/ButtonIcon';
import { navigate } from '@navigation/RootNavigation';
import { Tooltip } from 'react-native-elements';
import * as actions from '@features/board/modules/actions';
import { connect } from 'react-redux';
import ModalNote from '@features/board/BoardTransaction/ModalNote';

function HeaderBoardTransaction({
  toogleModalNote,
  toogleModalPreviewProduct,
}) {
  const { t } = useTranslation();
  const toolTip = React.useRef(null);

  const ViewPopOver = () => (
    <View style={styles.containerPopOver}>
      <TouchableOpacity
        style={styles.btnInPop}
        onPress={() => {
          toolTip.current.toggleTooltip();
        }}>
        <Text style={styles.txt} numberOfLines={1}>
          {t('board.show_board')}
        </Text>
      </TouchableOpacity>
      <View style={styles.border} />
      <TouchableOpacity
        style={styles.btnInPop}
        onPress={() => {
          toolTip.current.toggleTooltip();
          setTimeout(() => toogleModalNote(), 200);
        }}>
        <Text style={styles.txt} numberOfLines={1}>
          {t('board.note')}
        </Text>
      </TouchableOpacity>
      <View style={styles.border} />
      <TouchableOpacity
        style={styles.btnInPop}
        onPress={() => {
          toolTip.current.toggleTooltip();
        }}>
        <Text style={styles.txt} numberOfLines={1}>
          {t('board.advice_buy_house')}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <ButtonIcon
        onPress={() => {}}
        style={styles.btn}
        icon={images.ic_phone_rorate}
      />

      <ButtonIcon
        onPress={() => {}}
        style={styles.btn}
        icon={images.ic_full_screen}
      />

      <View>
        <Tooltip
          ref={toolTip}
          popover={<ViewPopOver />}
          width={200}
          height={138.5}
          withOverlay={false}
          containerStyle={styles.containerToolTip}
          backgroundColor={colors.background}>
          <ButtonIcon
            onPress={() => toolTip.current.toggleTooltip()}
            style={[styles.btn, { marginRight: 16 }]}
            styleImage={{
              tintColor: colors.background,
            }}
            icon={images.ic_more}
          />
        </Tooltip>
      </View>

      <ModalNote />
    </View>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  ...actions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderBoardTransaction);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    paddingVertical: 14,
    marginLeft: 24,
  },
  containerToolTip: {
    borderRadius: 4,
    elevation: 3,
    shadowColor: colors.bodyText,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    paddingVertical: 0,
  },
  containerPopOver: {
    flex: 1,
    width: '100%',
  },
  txt: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 13,
    color: colors.bodyText,
  },
  btnInPop: {
    flex: 1,
    justifyContent: 'center',
  },
  border: {
    borderColor: colors.border,
    borderWidth: 0.5,
  },
});
