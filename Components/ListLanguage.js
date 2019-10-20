// Components/FilmList.js

import React from 'react';
import { Text, StyleSheet, FlatList} from 'react-native';
import LanguageItem from './LanguageItem';

class ListLanguage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <FlatList
            horizontal
            style={styles.list}
            data={this.props.data}
            renderItem={({item}) => (
                <LanguageItem
                language={item}
                toggleInfoView = { this.props.toggleInfoView }

                />
            )}
            keyExtractor={item => item.id}
            />            
        )
    }
}

const styles = StyleSheet.create({
    list: {
      flex: 1
  }
})


export default ListLanguage;