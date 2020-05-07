import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { 
    backgroundColor: '#FFFFFF', 
    flex: 1,
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
  },
  ig_user: {
    width: 50,
    aspectRatio: 1,
    backgroundColor: '#C4C4C4',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  boxUserIg: {
    width: '100%',
    height: 100,
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  btnRight: {
    paddingRight: 20,
  },
  txtChangeImage: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'normal',
    lineHeight: 20,
    color: '#162B75',
  },
  txt_hello_user: {
    color: '#FFFFFF',
    fontSize: 13,
  },
  boxInput: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#E5E5E5',
    height: 50,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  innerContainer: {
    // alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    paddingHorizontal: 24,
  },
  textInput: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'gray'
  }
});

export default styles;
