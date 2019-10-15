/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React from 'react';
 import {
 	SafeAreaView,
 	StyleSheet,
 	ScrollView,
 	View,
 	Text,
 	StatusBar,
 	TouchableOpacity,
 	Image,
 } from 'react-native';

 import {
 	Header,
 	LearnMoreLinks,
 	Colors,
 	DebugInstructions,
 	ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';

//import Home from './Components/Home';
import Navigation from './Navigation/Navigation'




 const App: () => React$Node = () => {
 	return (
 		<>
 		<StatusBar barStyle="dark-content" />
 			<Navigation /> 			
 		</>
 		);
 	};

 	const styles = StyleSheet.create({
 		scrollView: {
 			backgroundColor: Colors.lighter,
 		}
 	});

 	export default App;
