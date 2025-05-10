import React, { useState, useEffect, useRef } from 'react'
import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native'
import { getPokemonsAPI, getPokemonsDetailsByUrlAPI } from '../api/pokemon'
import PokemonList from '../components/PokemonList'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

function Home() {
    const [pokemons, setPokemons] = useState([])
    const [nextUrl, setNextUrl] = useState(null)

    useEffect(() => {
        (async () => {
            await loadPokemons();
        })();
    }, []);

    const loadPokemons = async () => {
        try {
            const response = await getPokemonsAPI(nextUrl);
            const pokemonArray = [];
            for await (const pokemon of response.results) {
                const pokemonDetails = await getPokemonsDetailsByUrlAPI(pokemon.url);
                pokemonArray.push({
                    id: pokemonDetails.id,
                    name: pokemonDetails.name,
                    type: pokemonDetails.types[0].type.name,
                    order: pokemonDetails.order,
                    imagen: pokemonDetails.sprites.other['official-artwork'].front_default
                    //imagen: pokemonDetails.sprites.other['home'].front_default
                    //imagen: pokemonDetails.sprites.front_default
                })
            }
            setPokemons([...pokemons, ...pokemonArray])
            setNextUrl(response.next)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'flex-start', position: 'relative' }}>
            <MaterialCommunityIcons name="pokeball" style={styles.backIcon} size={350} color={'#E6E6E6'} />
            <Text style={styles.title}>Pokédex</Text>
            <Text style={styles.sub}>Explora</Text>
            <PokemonList pokemons={pokemons} loadPokemons={loadPokemons} isNext={nextUrl}></PokemonList>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 400,
    },
    contentList: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        marginTop: -40,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    title: {
        marginTop: 60,
        fontSize: 30,
        color: 'black',
        fontWeight: '600',
        textAlign: 'left',
        marginLeft: '5%'
    },
    sub: {
        marginTop: 5,
        fontSize: 16,
        color: 'black',
        marginBottom: 15,
        fontWeight: '400',
        textAlign: 'left',
        marginLeft: '5%',
    },
    backIcon: {
        position: 'absolute',
        right: -120,
        top: -120
    },
})
