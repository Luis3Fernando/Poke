import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screens/Home'
import Pokemon from '../screens/Pokemon'

const Stack = createStackNavigator();

export default function HomeNavigation(){
    return (
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{title: "", headerTransparent: true}}></Stack.Screen>
        <Stack.Screen name='Pokemon' component={Pokemon} options={{title: "", headerTransparent: true}}></Stack.Screen>
      </Stack.Navigator>
    )
}