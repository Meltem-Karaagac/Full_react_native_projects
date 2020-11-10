// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import First from './pages/First';
import Second from './pages/Second';
import Third from "./pages/Third";

const Stack = createStackNavigator();

function Router() {
    console.log("Router");
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: true,
                    gestureEnabled: true
                }}
            >
                <Stack.Screen
                    name="FirstPage"
                    component={First}
                />
                <Stack.Screen
                    name="SecondPage"
                    component={Second}
                />
                <Stack.Screen
                    name="ThirdPage"
                    component={Third}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;