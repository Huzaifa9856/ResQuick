import { Text, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/Login'
import Signup from './Screens/Signup';
import Authentication from './Screens/Authentication';
import InputOTPscreen from './Screens/InputOTPscreen';
import HomeScreen from './Screens/HomeScreen';
import Notifications from './Screens/Notifications';
import History from './Screens/History';
import Setting from './Screens/Setting';
import FormScreen from './Screens/FormScreen';
import SplashScreen from './Screens/SplashScreen';
import Location from './Screens/Location'
// import PehliScreen from "./Screens/Authentication1"

import Notification1 from 'react-native-vector-icons/Ionicons';
import LocationHistory from 'react-native-vector-icons/MaterialIcons';
import InformationCircleOutline from 'react-native-vector-icons/Ionicons';
import Setting1 from 'react-native-vector-icons/AntDesign';

const Stack = createNativeStackNavigator();
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
          {/* <Stack.Screen name="PehliScreen" component={PehliScreen} /> */}
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Authentication" component={Authentication} />
          {/* <Stack.Screen name="Location" component={Location} /> */}
          {/* <Stack.Screen name="InputOTPscreen" component={InputOTPscreen} /> */}
          <Stack.Screen name="HomeScreen" component={BottomTab} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
const Tab = createMaterialBottomTabNavigator();

function BottomTab() {
  return (

    <Tab.Navigator>
      <Tab.Screen name="Notifications" component={Notifications} options={{
                    tabBarIcon: ({size, color}) => (<Notification1 name={"notifications"}
                     color={"white"} size={20} />)
                }} />
      <Tab.Screen name="History" component={History}  options={{
                    tabBarIcon: ({size, color}) => (<LocationHistory name={"location-history"} 
                    color={"white"} size={20} />)
                }}/>
      <Tab.Screen name="FormScreen" component={FormScreen} options={{
                    tabBarIcon: ({size, color}) => (<InformationCircleOutline name={"information-circle-outline"} 
                    color={"white"} size={20} />)
                }} />
      <Tab.Screen name="Setting" component={Setting} options={{
                    tabBarIcon: ({size, color}) => (<Setting1 name={"setting"} color={"white"} size={20} />)
                }} />
    </Tab.Navigator>

  );
}