import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, ActivityIndicator, ScrollView } from 'react-native'
import { getRandomPokemon } from '../api/pokemon'
import { getColorByPokemonTypeColor } from "../utils/paletteColor";
import { capitalize } from "lodash";
import { POKEMON_TYPES } from '../utils/constants'
import {getIconByPokemonType} from '../utils/methods'

export default function PokemonToday() {
    const [pokemon, setPokemon] = useState(null)
    useEffect(() => {
        (async () => {
            try {
                const response = await getRandomPokemon();
                setPokemon(response);
            } catch (error) {
                console.error("Error: ", error);
            }
        })();
    }, [])

    if (!pokemon) {
        return <ActivityIndicator />;
    }

    const bgColor = getColorByPokemonTypeColor(pokemon.types[0].type.name, 'secondary');
    const buttonColor = getColorByPokemonTypeColor(pokemon.types[0].type.name, 'tertiary');
    const bgContainer = { backgroundColor: bgColor, ...styles.CardToday };
    const button = { backgroundColor: buttonColor, ...styles.button };


    return (
        <View style={styles.container}>
            <View style={bgContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>{capitalize(pokemon.name)}</Text>
                    <TouchableOpacity style={button}>
                        <Text style={styles.headerButton}>Conocer!</Text>
                    </TouchableOpacity>
                </View>
                <Image style={styles.headerImage} source={{ uri: pokemon.sprites.other['home'].front_default }} />
            </View>
            <Text style={styles.subtitle}>Categorías:</Text>
            <ScrollView horizontal>
                {POKEMON_TYPES.map((type, index) => {
                    const primaryColor = getColorByPokemonTypeColor(type, 'tertiary');
                    const secondaryColor = getColorByPokemonTypeColor(type, 'secondary');
                    return (
                        <TouchableOpacity key={index} style={[styles.cardCategory, { backgroundColor: primaryColor }]}>
                            {getIconByPokemonType(type, 50, secondaryColor)}
                            <Text style={styles.cardText}>{capitalize(type)}</Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
            <Text style={[styles.subtitle, {marginBottom: 20}]}>Pokemones:</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignSelf: 'center',
    },
    CardToday: {
        height: 130,
        marginBottom: 20,
        borderRadius: 10,
        flexDirection: 'row',
        position: 'relative'
    },
    headerContainer: {
        flexDirection: 'column',
        padding: 20,
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    headerButton: {
        fontSize: 16,
        color: 'white',
    },
    headerImage: {
        position: 'absolute',
        width: 150,
        height: 150,
        bottom: 5,
        right: -10,
        zIndex: 1
    },
    button: {
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 20
    },
    cardCategory: {
        width: 120,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 20
    },
    cardText: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
    },
    subtitle:{
        fontSize: 17,
        fontWeight: '500',
    }
})
