// Components/ListLanguage.js

import React from 'react';
import {Text, StyleSheet, FlatList} from 'react-native';
import LanguageItem from './LanguageItem';

class ListLanguage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <FlatList
        horizontal
        data={this.props.data}
        renderItem={({item}) => (
          <LanguageItem
            language={item}
            toggleInfoView={this.props.toggleInfoView}
          />
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
});

export default ListLanguage;

