import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import CustomModal from './components/CustomModal';

const list_languages = [
  {value: 1, label: 'English'},
  {value: 2, label: 'Spanish'},
  {value: 3, label: 'Portuguese'},
  {value: 4, label: 'Russian'},
  {value: 5, label: 'Japanese'},
  {value: 6, label: 'Korean'},
  {value: 7, label: 'Vietnamese'},
  {value: 8, label: 'French'},
  {value: 9, label: 'Kannada'},
  {value: 10, label: 'Polish'},
  {value: 11, label: 'Hungarian'},
  {value: 12, label: 'Algerian Arabic'},
  {value: 13, label: 'Italian'},
  {value: 14, label: 'Italian'},
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: undefined,
      modalVisible: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.language}>{this.state.languages?.label}</Text>
        <TouchableOpacity
          onPress={() => {
            this.setState({modalVisible: true});
          }}
          style={styles.button}>
          <Text style={styles.text}>Pick language</Text>
        </TouchableOpacity>
        <CustomModal
          visible={this.state.modalVisible}
          toggleModal={this.toggleModal}
          listOption={list_languages}
          defaultValue={this.state.languages}
          onPickLanguage={({item}) => {
            this.setState({
              languages: {value: item.value, label: item.label},
              modalVisible: false,
            });
          }}
          // Custom active item style
          activeItemStyle={styles.activeItemStyle}
          // Custom item style
          itemStyle={styles.itemStyle}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    padding: 50,
    backgroundColor: '#caf7e3',
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
  activeItemStyle: {
    borderColor: 'red',
    backgroundColor: 'red',
  },
  itemStyle: {
    backgroundColor: '#ffd384',
  },
});
