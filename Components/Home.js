// Components/Home.js

import React from 'react'
import { SafeAreaView, StyleSheet, ScrollView, View, Text, TouchableOpacity, Image, Button,} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ListLanguage from './ListLanguage';
import data from '../Data/Data';


class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      clickedItem:0
    }

    this.toggleInfoView = this.toggleInfoView.bind(this)
  }


  toggleInfoView(id) {
    if (this.state.clickedItem == id) {
      id = 0;
    }
    this.setState({
      clickedItem:id
    });
  }

    _showInfos(){
        if (this.state.clickedItem != 0){
            return (
                <View>
                    <Text> Compter en { data[this.state.clickedItem-1].name }</Text>
                    <Text >
                        Donnees qques infos sur la langues 
                        et mentionner quils pourront en choisir d'autre après    
                    </Text>
                    <Button style={styles.button} 
                    title= 'cest parti'
                    onPress={() => this.props.navigation.navigate('Quiz')}
                    />
                </View>
            )
        }
    }   

  render() {
    return (
      <SafeAreaView>

        <View>
          <Text style={styles.MainTitle}>
            Dans quelle langue souhaitez vous apprendre à compter en premier ?
          </Text>
        </View>

          <View style={styles.boxAllLanguages}>
            <ListLanguage
              data={ data }
              toggleInfoView = { this.toggleInfoView }
             />
          </View>

        <View>
          {this._showInfos()}
        </View>

    </SafeAreaView>
     
    )
  }
}

const styles = StyleSheet.create({

    MainTitle : {
      fontSize : 24,
      textAlign : 'center',
      borderRadius: 1,
        borderWidth: 3,
        borderColor: '#d6d7da',
        margin : 10,
    },
    boxAllLanguages :{
      flexDirection : 'row',
    },
    
    chinois: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      fontFamily: "MaShanZheng-Regular",
    },
    symboleAsImg :{
      width : 120,
      height : 120,
      fontSize : 80,
      textAlign : 'center',
      alignItems : 'center',
      backgroundColor : '#EEE',
      borderRadius: 60,
        borderWidth: 3,
        borderColor: 'red',
    },
    image :{
      width : 120,
      height : 120,
    },
    title_text : {
      textAlign : 'center',
      fontSize: 24,

    }

  });

export default Home
