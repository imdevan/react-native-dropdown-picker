import { StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

export const ICONS = {
  ARROW_DOWN: require('./icons/arrow-down.png'),
  ARROW_UP: require('./icons/arrow-up.png'),
  TICK: require('./icons/tick.png'),
  CLOSE: require('./icons/close.png'),
};


/**
 *  Pulled out colors for clairity and easeier rework
 */
export const THEME = {
  badgeDotBackgroundColor: Colors.GREY,
  badgeBackgroundColor: Colors.ALTO,
  dropDownContainerBackgroundColor: Colors.EBONY_CLAY,
  dropDownContainerBorderColor: Colors.BLACK,
  itemSeparatorBackgroundColor: Colors.SHUTTLE_GREY,
  labelColor: Colors.HEATHER,
  ListItemLabelColor: Colors.HEATHER,
  modalContentContainerBackgroundColor: Colors.EBONY_CLAY,
  modalTitleColor: Colors.HEATHER,
  listMessageTextColor: Colors.HEATHER,
  searchContainerBorderBottomColor: Colors.SHUTTLE_GREY,
  searchTextInputBorderColor: Colors.SHUTTLE_GREY,
  searchTextInputColor: Colors.WHITE,
  backgroundColor: Colors.EBONY_CLAY,
  borderColor: Colors.BLACK
}

export default StyleSheet.create({
  arrowIcon: {
    height: 20,
    width: 20,
  },
  arrowIconContainer: {
    marginLeft: 10,
  },
  badgeDotStyle: {
    backgroundColor: THEME.badgeDotBackgroundColor,
    borderRadius: 10 / 2,
    height: 10,
    marginRight: 8,
    width: 10,
  },
  badgeSeparator: {
    width: 5,
  },
  badgeStyle: {
    alignItems: 'center',
    backgroundColor: THEME.badgeBackgroundColor,
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  closeIcon: {
    height: 30,
    width: 30,
  },
  closeIconContainer: {
    marginLeft: 10,
  },
  container: {
    width: '100%',
  },
  customItemContainer: {},
  customItemLabel: {
    fontStyle: 'italic',
  },
  dropDownContainer: {
    backgroundColor: THEME.dropDownContainerBackgroundColor,
    borderColor: THEME.dropDownContainerBorderColor,
    borderRadius: 8,
    borderWidth: 1,
    overflow: 'hidden',
    position: 'absolute',
    width: '100%',
    zIndex: 1000,
  },
  extendableBadgeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
  extendableBadgeItemContainer: {
    marginEnd: 7,
    marginVertical: 3
  },
  flatListContentContainer: {
    flexGrow: 1,
  },
  iconContainer: {
    marginRight: 10,
  },
  itemSeparator: {
    backgroundColor: THEME.itemSeparatorBackgroundColor,
    height: 1,
  },
  label: {
    color: THEME.labelColor,
    flex: 1,
  },
  labelContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  listBody: {
    height: '100%',
  },
  listBodyContainer: {
    alignItems: 'center',
    flexGrow: 1,
  },
  listChildContainer: {
    paddingLeft: 40,
  },
  listChildLabel: {},
  listItemContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 40,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  listItemLabel: {
    color: THEME.ListItemLabelColor,
    flex: 1,
  },
  listMessageContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  listMessageText: {
    color: THEME.listMessageTextColor,
  },
  listParentContainer: {},
  listParentLabel: {},
  modalContentContainer: {
    backgroundColor: THEME.modalContentContainerBackgroundColor,
    flexGrow: 1,
  },
  modalTitle: {
    color: THEME.modalTitleColor,
    fontSize: 18,
  },
  searchContainer: {
    alignItems: 'center',
    borderBottomColor: THEME.searchContainerBorderBottomColor,
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: 10,
  },
  searchTextInput: {
    borderColor: THEME.searchTextInputBorderColor,
    borderRadius: 8,
    borderWidth: 1,
    color: THEME.searchTextInputColor,
    flexGrow: 1,
    flexShrink: 1,
    margin: 0,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  selectedItemContainer: {},
  selectedItemLabel: {},
  style: {
    alignItems: 'center',
    backgroundColor: THEME.backgroundColor,
    borderColor: THEME.borderColor,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 50,
    paddingHorizontal: 10,
    paddingVertical: 3,
    width: '100%',
  },
  tickIcon: {
    height: 20,
    width: 20,
  },
  tickIconContainer: {
    marginLeft: 10,
  },
});
