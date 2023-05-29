//npm install @react-navigation/native
//npm install @react-navigation/stack
//npm install @react-navigation/drawer
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AppContacts from "./src/pages/AppContacts";
import Contacts from "./src/pages/Contacts"
import Information from "./src/pages/Information"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs(){
  return(
  <Tab.Navigator>
    <Tab.Screen name="AppContacts" component={AppContacts}/>
    <Tab.Screen name="Contacts" component={Contacts}/>
  </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={Tabs}></Stack.Screen>
        <Stack.Screen name="Information" component={Information}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

