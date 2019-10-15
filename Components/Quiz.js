// Components/Quiz.js

import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, Image } from 'react-native'
import data from '../Data/Data'
import Card from '../Components/Card'

class Quiz extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {

    return (
      <SafeAreaView>
	      <View style={styles.mainContener}>
	      	<Card />
	      </View>
     </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  mainContener : {
  	backgroundColor : 'whitesmoke',
  	height : '100%',
  },
  
})

export default Quiz



