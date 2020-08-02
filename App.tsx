import React from 'react';  
import {StyleSheet, Text, View,Button} from 'react-native';  
import { createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  

import Explore from './components/activities/Explore'
import Recipies from './components/activities/Recipies'
import Upload from './components/activities/Upload'
import Viewer from './components/activities/Viewer'
import Account from './components/activities/Account'

import data from './constants/recipies'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'


const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center'
    },  
});  
const TabNavigator = createMaterialBottomTabNavigator(  
    {  
        Home: { screen: Explore,  
            navigationOptions:{  
                tabBarLabel:'Search',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-search'}/>
                    </View>),  
            }  
        },  
        Profile: { screen: Recipies,
            navigationOptions:{  
                tabBarLabel:'Recipies',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-pizza'}/>  
                    </View>),
            }  
        },   
        Image: { screen: Upload,
            navigationOptions:{
                tabBarLabel:'Upload',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-arrow-up'}/>  
                    </View>)
            }  
        },
        Account: { screen: Account,
            navigationOptions:{  
                tabBarLabel:'Account',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
                    </View>),
            }  
        }, 
    },  
    {  
      initialRouteName: "Home",  
      activeColor: '#f0edf6',  
      inactiveColor: '#226557',  
      barStyle: { backgroundColor: '#3BAD87' },  
    },  
);  

const mapStateToProps = (state: any) => {

};
  
const mapDispatchToProps = (dispatch: any) => {
  return {
      
  }
}

//export default createAppContainer(TabNavigator);  

export default connect(mapStateToProps, mapDispatchToProps)(createAppContainer(TabNavigator))

