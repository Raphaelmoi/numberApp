// Components/Details/NumberList.js

import React from 'react';
import { StyleSheet, FlatList, View, Text} from 'react-native';
import data from '../../Data/Data';
import NumberListItem from './numberListItem';

class NumberList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languageData: {},
    };
  }
  componentDidMount(){
    let id = JSON.stringify(this.props.navigation.getParam('id'));
    id--;
    this.setState({
      languageData: data[id],
    });
    return;
  }
  render() {
    console.log(this.props.language);
    return (
      <View>
      <View>
        <Text>{this.state.languageData.name} </Text>
      </View>
      <FlatList
        data={this.state.languageData.numbers}
          renderItem={({item}) => <NumberListItem language={item} />}
      />
      </View>

    );
  }
}

const styles = StyleSheet.create({
});

export default NumberList;

