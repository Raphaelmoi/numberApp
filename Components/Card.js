// Components/Card.js

import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import data from '../Data/Data';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.card}>
        <View style={styles.headCard}>
          <Image style={styles.image} source={data[0].numbers[14].image} />
        </View>
        <View style={styles.bottomCard}>
          <Text style={styles.text}> {data[0].numbers[14].value} </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    top: 20,
    left: 20,
    bottom: 20,
    right: 20,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: 'gray',
  },
  headCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomCard: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 80,
    textAlign: 'center',
  },
});

export default Card;
