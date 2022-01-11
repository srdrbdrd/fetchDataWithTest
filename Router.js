import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Details from './src/screens/Details';
import Home from './src/screens/Home';
import AddNewCharacter from './src/screens/AddNewCharacter';

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerTitleAlign: "center" }}>
                <Stack.Screen name="Home" component={Home} options={{ title: "Simpsons" }} />
                <Stack.Screen name="Details" component={Details} />
                <Stack.Screen name="AddNewCharacter" component={AddNewCharacter} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router
