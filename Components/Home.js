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

  toggleModal() {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
    return;
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  onStart() {
    if (this.props.languageList === undefined) {
      this.state.modalVisible = true;
    }
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
        {this.onStart()}
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
          <ReturnStorage />
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