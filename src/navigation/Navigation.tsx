import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View} from 'react-native'

import SearchNavigation from './SearchNavigation';
import HomeNavigation from './HomeNavigation';
import FavoritesNavigation from './FavoritesNavigation';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather'

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName='HomeNavigation'
            screenOptions={{
                headerShown: false,
                tabBarLabel: () => null,
                tabBarStyle: { height: 50, backgroundColor: '#ffffff' },
                tabBarActiveTintColor: '#B50320'
            }}>
                <Tab.Screen
                    name="FavoritesNavigation"
                    component={FavoritesNavigation}
                    options={{
                        tabBarIcon: ({color, size})=>(
                            <MaterialIcons name='favorite' size={size} color={color}/>
                        ),
                        headerShown: false,
                    }}
                ></Tab.Screen>

                <Tab.Screen
                    name="HomeNavigation"
                    component={HomeNavigation}
                    options={{
                        tabBarIcon: ({color})=>(
                            <View style={{alignItems: 'center', justifyContent: 'center',top: -20, backgroundColor: 'white', width: 90, height: 90, borderRadius: 50}}>
                                <MaterialIcons name='catching-pokemon' size={80} color={color}/>
                            </View>
                        ),
                        tabBarLabel: ""
                    }}
                ></Tab.Screen>

                <Tab.Screen
                    name="SearchNavigation"
                    component={SearchNavigation}
                    options={{
                        tabBarIcon: ({color, size})=>(
                            <Feather name='search' size={size} color={color}/>
                        )
                    }}
                ></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
