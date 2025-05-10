import React, { useState } from 'react'
import { Text, SafeAreaView, StyleSheet, View, TextInput } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import LoginForm from '../components/Auth/LoginForm';
import UserData from '../components/Auth/UserData';
import useAuth from '../hooks/useAuth';

function Search() {
    const [search, setSearch] = useState('');
    const [filteredPokemons, setFilteredPokemons] = useState(null);
    const {user} = useAuth()

    /*const handleSearch = (text) => {
        setSearch(text);
         if (text) {
             const filtered = pokemons.filter(pokemon =>
                 pokemon.name.toLowerCase().includes(text.toLowerCase())
             );
             setFilteredPokemons(filtered);
         } else {
             setFilteredPokemons(pokemons);
         }
        console.log(text)
    };*/

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/*<View style={styles.containerSearch}>
                <TextInput
                    style={styles.searchBar}
                    placeholder="Buscar pokémon"
                    value={search}
                    onChangeText={handleSearch}
                />

                <View style={styles.contentIcon}>
                    <Feather name="search" size={26} color={"#fff"} />
                </View>
            </View>*/}
            {user ?
                <UserData></UserData>
                :
                <LoginForm></LoginForm>}
        </SafeAreaView>
    )
}

export default Search

const styles = StyleSheet.create({
    containerSearch: {
        width: '80%',
        position: 'relative',
        justifyContent: 'center',
        marginBottom: 20

    },
    searchBar: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 0,
        borderRadius: 20,
        margin: 10,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        fontSize: 17

    },
    contentIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#B50320',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: -5
    }
})
