import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from './screens/HomeScreen';
import EditScreen from './screens/EditScreen';

const Stack = createStackNavigator();

export default function App() {
  const [emergencyInfo, setEmergencyInfo] = useState({
    name: '',
    surname: '',
    phone: '',
    bloodGroup: '',
    age: ''
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const savedData = await AsyncStorage.getItem('emergencyInfo');
        if (savedData) {
          setEmergencyInfo(JSON.parse(savedData));
        }
      } catch (e) {
        console.error('Failed to load emergency info.', e);
      }
    };
    loadData();
  }, []);

  const saveInfo = async (info) => {
    try {
      await AsyncStorage.setItem('emergencyInfo', JSON.stringify(info));
      setEmergencyInfo(info);
    } catch (e) {
      console.error('Failed to save emergency info.', e);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} emergencyInfo={emergencyInfo} />}
        </Stack.Screen>
        <Stack.Screen name="Edit">
          {(props) => <EditScreen {...props} emergencyInfo={emergencyInfo} saveInfo={saveInfo} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
