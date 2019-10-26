import React from 'react';
import {
  Text,
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

class LanguageItem extends React.Component {
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
    const language = this.props.language;

    return (
      <TouchableOpacity
        style={styles.btnItemLangue}
        onPress={() => this.props.toggleInfoView(language.id)}>
        { this.imageOrText(language.numbers[18].image,language.numbers[6].carac) }
        <View style={styles.content_container}>
          <Text style={styles.title_text}>Compter en {language.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  btnItemLangue: {
    margin: 10,
    backgroundColor: 'whitesmoke',
    borderRadius: 4,
    borderWidth: 3,
    borderColor: '#d6d7da',
    width: 140,
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
  },
  chinois: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'MaShanZheng-Regular',
  },
  symboleAsImg: {
    width: 120,
    height: 120,
    fontSize: 80,
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#EEE',
    borderRadius: 60,
    borderWidth: 3,
    borderColor: 'red',
  },
  title_text: {
    textAlign: 'center',
    fontSize: 24,
  },
});

export default LanguageItem;

