import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet,View } from 'react-native';
import { Provider } from "react-redux";
import { store } from './app/store';
import HomeScreen from './screens/HomeScrean';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './screens/MapScreen';
import FoodScreen from './screens/FoodScreen';


export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false
          }}
          />
           <Stack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{
            headerShown: false
          }}
          />
          <Stack.Screen
          name="EastsScreen"
          component={FoodScreen}
          options={{
            headerShown: false
          }}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}


