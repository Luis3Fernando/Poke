import {createStackNavigator} from '@react-navigation/stack'
import Search from '../screens/Search'

const Stack = createStackNavigator();

export default function SearchNavigation(){
    return (
      <Stack.Navigator>
        <Stack.Screen name='search' component={Search} options={{title: "Search"}}></Stack.Screen>
      </Stack.Navigator>
    )
}