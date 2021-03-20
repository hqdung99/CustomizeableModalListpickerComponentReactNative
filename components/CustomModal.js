import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
  }

  renderItem(item) {
    const {
      onPickLanguage,
      defaultValue,
      activeItemStyle,
      itemStyle,
    } = this.props;

    return (
      <TouchableOpacity
        onPress={() => {
          onPickLanguage({item: item});
        }}
        style={[
          itemStyle || styles.item,
          defaultValue?.value === item.value &&
            (activeItemStyle || styles.activeItem),
        ]}>
        <Text
          style={[
            styles.itemText,
            defaultValue?.value === item.value && styles.activeItemText,
          ]}>
          {item.label}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    const {visible, toggleModal, listOption} = this.props;

    return (
      <Modal visible={visible} animationType={'slide'} transparent={true}>
        <View style={styles.viewModalContainer}>
          <View style={styles.contentWrapper}>
            <View style={styles.listContainer}>
              <FlatList
                data={listOption || []}
                keyExtractor={item => item.value}
                renderItem={({item}) => this.renderItem(item)}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                toggleModal();
              }}
              style={styles.button}>
              <Text style={styles.text}>Clode Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    padding: 50,
  },
  button: {
    backgroundColor: '#e48257',
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
  },
  text: {
    color: '#f2edd7',
    textAlign: 'center',
  },
  language: {
    height: 40,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#393232',
  },
  listContainer: {
    // flex: 1,
  },
  item: {
    height: 30,
    justifyContent: 'center',
  },
  activeItem: {
    backgroundColor: '#ffab73',
  },
  itemText: {
    textAlign: 'center',
  },
  activeItemText: {
    color: 'white',
  },
  viewModalContainer: {
    height: '100%',
    borderColor: 'red',
    padding: 50,
  },
  contentWrapper: {
    // flex: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    overflow: 'hidden',
  },
});
