// Components/Details/NumberListItem.js

import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Image,
} from 'react-native';
import data from '../../Data/Data';
import { TouchableOpacity } from 'react-native-gesture-handler';

class NumberListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  imageOrText(image, text) {
    if (text == '') {
      return <Image style={styles.image} source={image} />;
    } else  {
      return <Text style={styles.symboleAsImg}>{text}</Text>;
    }
  }

  render() {
    return (
      <TouchableOpacity style={styles.itemBox}>
        <Text style={styles.romanValue}>{this.props.language.value} </Text>
        { this.imageOrText(this.props.language.image, this.props.language.carac) }
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    romanValue: {
        fontSize: 50
    },
    itemBox: {
        backgroundColor: '#CCC',
        height: 70,
        margin: 4,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: "center"
    },
    image: {
        height: '100%',
        width: 70,
        resizeMode: 'contain',
    },
    symboleAsImg: {
        width: 80,
        height: 80,
        fontSize: 50,
        lineHeight: 80,
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: '#EEE',
        borderRadius: 40,
        borderWidth: 2,
        borderColor: 'red',
      },
});

export default NumberListItem;
