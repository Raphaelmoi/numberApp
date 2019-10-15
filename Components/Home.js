// Components/Home.js

import React from 'react'
import { SafeAreaView, StyleSheet, ScrollView, View, Text, TouchableOpacity, Image, Button,} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      isClicked:false
    }
  }

  toggleInfoView() {
    this.setState({
      isClicked:!this.state.isClicked
    });
  }

    _showInfos(){
        if (this.state.isClicked){
            return (
                <View>
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

        <ScrollView
        horizontal={true}
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>

          <View style={styles.boxAllLanguages}>
            <TouchableOpacity
                  style={styles.btnItemLangue}
                  onPress={() => this.toggleInfoView()}
                  >
                    <Image
                      style={styles.image}
                      source={require('../images/maya/17_maia.png')}
                    />
                  <View style={styles.content_container}>
                      <Text style={styles.title_text}>
                        Compter en Maya
                      </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btnItemLangue}
                  onPress={() => this.toggleInfoView()}
                  >
                    <Text style={styles.symboleAsImg} >
                      五
                    </Text>
                  <View style={styles.content_container}>
                      <Text style={styles.title_text}>
                        Compter en chinois
                      </Text>
                  </View>
                </TouchableOpacity>               
                <TouchableOpacity
                  style={styles.btnItemLangue}
                  onPress={() => this.toggleInfoView()}
                  >
                    <Image
                      style={styles.image}
                      source={{uri: 'https://raphaelmouly.com/photo/image/TOP/top006.jpg'}}
                    />

                  <View style={styles.content_container}>
                      <Text style={styles.title_text}>
                        Compter en Coréen
                      </Text>
                  </View>
                </TouchableOpacity>
          </View>

      </ScrollView>
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
    btnItemLangue :{
      margin :10,
      backgroundColor: 'whitesmoke',
      borderRadius: 4,
        borderWidth: 3,
        borderColor: '#d6d7da',
        width : 140,
        alignItems : 'center'
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
