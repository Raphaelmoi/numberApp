// Components/Home.js
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableHighlight,
  Modal,
  StyleSheet,
} from 'react-native';
import MyModal from '../Components/MyModal';
import ReturnStorage from './ReturnStorage';
import {connect} from 'react-redux';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }
  componentDidMount() {
    // if no language found on storage set modal visible
    if (this.props.languageList === undefined) {
      this.state.modalVisible = true;
    }
  }
  // change state of modal visible or not
  toggleModal() {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
    return;
  }

  displayModal() {
    return (
      <Modal
        animationType="fade"
        transparent={false}
        visible={this.state.modalVisible}>
        <MyModal toggleModal={this.toggleModal} />
      </Modal>
    );
  }

  render() {
    return (
      <SafeAreaView>
        {this.displayModal()}
        <TouchableHighlight
          style={styles.btnModal}
          onPress={() => {
            this.toggleModal();
            this.displayModal();
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
        
        <View>
          <ReturnStorage navigate={this.props.navigation.navigate} />
        </View>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  btnModal: {
    width: 100,
    padding: 10,
    margin: 10,
    backgroundColor: '#DDD',
  },
});

// export default Home;
const mapStateToProps = state => {
  return {
    languageList: state.selectedLanguageId.languageList,
  };
};
export default connect(mapStateToProps)(Home);