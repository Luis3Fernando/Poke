import {createStackNavigator} from '@react-navigation/stack'
import Favorites from '../screens/Favorites'

const Stack = createStackNavigator();

export default function FavoritesNavigation(){
    return (
      <Stack.Navigator>
        <Stack.Screen name='Favorites' component={Favorites} options={{title: "Favoritos"}}></Stack.Screen>
      </Stack.Navigator>
    )
}
