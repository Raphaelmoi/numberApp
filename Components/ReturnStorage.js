// Components/Quiz.js

import React from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
import data from '../Data/Data';

class ReturnStorage extends React.Component {
  constructor(props) {
    super(props);
    this.language;
  }
  // _displayDetailForLanguage = () => {
  //   console.log("Display Langue ")
  //   this.props.navigation.navigate('FilmDetail', {idFilm: idFilm})
  // }

  render() {
    this.language = data[this.props.languageList[0] - 1];
    return (
      <View>
        <View>
          <Text style={styles.title}>Les chiffres {this.language.name} </Text>
        </View>

        <View style={styles.btnBlock}>
          <TouchableHighlight
            style={styles.btn}
            onPress={() => this.props.navigate('Details', {id: this.language.id})}>
            <Text style={styles.btnText}>Voir les cartes</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.btn}>
            <Text style={styles.btnText}>Réviser</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: "center",
  },
  btnBlock:{
    flexDirection: 'row',
  },
  btn: {
    flex: 1,
    backgroundColor: '#26c6da',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    height: 42,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: '#0095a8',
  },
  btnText: {
    color: 'white',
    fontSize: 20
  }
});
const mapStateToProps = state => {
  return {
    languageList: state.selectedLanguageId.languageList,
  };
};
export default connect(mapStateToProps)(ReturnStorage);
