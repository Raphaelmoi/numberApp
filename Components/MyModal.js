// Components/MyModal.js
import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import ListLanguage from './ListLanguage';
import data from '../Data/Data';
import {connect} from 'react-redux';

class MyModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedItem: 0,
    };
    this.toggleInfoView = this.toggleInfoView.bind(this);
  }

  toggleInfoView(id) {
    //si l'onglet de description est ouvert, le ferme
    if (this.state.clickedItem === id) {
      id = 0;
    }
    this.setState({
      clickedItem: id,
    });
  }

  _showInfos() {
    if (this.state.clickedItem !== 0) {
      return (
        <View>
          <Text style={styles.title_text}>
            Compter en {data[this.state.clickedItem - 1].name}
          </Text>
          <Text>{data[this.state.clickedItem - 1].description}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.saveChoiceThenCloseModal()}>
            <Text style={styles.buttonText}>Je commence</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }

  saveChoiceThenCloseModal() {
    const action = {type: 'SELECTED_LANG', value: this.state.clickedItem};
    this.props.dispatch(action);
    this.props.toggleModal();
  }

  render() {
    return (
      <View style={styles.Modal}>
        <View>
          <Text style={styles.MainTitle}>
            Dans quelle langue souhaitez vous apprendre à compter en premier ?
          </Text>
        </View>

        <View style={styles.boxAllLanguages}>
          <ListLanguage data={data} toggleInfoView={this.toggleInfoView} />
        </View>

        <View>{this._showInfos()}</View>

        <View>
          <Text> Clé retrouvé : {this.props.languageList[0]} </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Modal: {
    paddingTop: 20,
    backgroundColor: '#EEE',
  },
  MainTitle: {
    fontSize: 24,
    textAlign: 'center',
    borderRadius: 1,
    borderWidth: 3,
    borderColor: '#d6d7da',
    margin: 10,
  },
  boxAllLanguages: {
    flexDirection: 'row',
  },
  title_text: {
    textAlign: 'center',
    fontSize: 24,
  },

  button: {
    height: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#29b6f6',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#0086c3',
    width: '50%',
    marginTop: 50,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
});

const mapStateToProps = state => {
  return {
    languageList: state.selectedLanguageId.languageList,
  };
};
export default connect(mapStateToProps)(MyModal);
