import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../Components/Home';
import Quiz from '../Components/Quiz';
import NumberList from '../Components/Details/NumberList';

const MainNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    },
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz',
    },
  },
  Details: {
    screen: NumberList,
    navigationOptions: {
      title: 'Details',
    },
  }
});

const Nav = createAppContainer(MainNavigator);

export default Nav;
