import { useState, useEffect, useRef } from 'react'
import { View, Text, Image, ScrollView, StyleSheet, SafeAreaView, Animated } from 'react-native'
import { getPokemonDetailsAPI } from '../api/pokemon'
import { capitalize, map } from "lodash";
import { getColorByPokemonTypeColor } from "../utils/paletteColor";
import PokemonHeader from '../components/PokemonHeader'
import PokemonStats from '../components/PokemonStats'
import PokemonDescritption from '../components/PokemonDescritption'
import PokemonMoves from '../components/PokemonMoves'
import FastImage from 'react-native-fast-image'
import { Video } from 'expo-av';

function Pokemon(props) {
  const { navigation, route: { params } } = props
  const [pokemon, setPokemon] = useState(null)
  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsAPI(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params])

  if (!pokemon) return null;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
      >
        <PokemonHeader
          name={pokemon.name}
          order={pokemon.order}
          image={pokemon.sprites.other["official-artwork"].front_default}
          type={pokemon.types[0].type.name}
          types={pokemon.types}
        />
        <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
        <PokemonDescritption 
          order={pokemon.order} 
          weight={pokemon.weight} 
          height={pokemon.height}/>
        <PokemonMoves 
          gif={pokemon.sprites.other["showdown"].front_default} 
          moves={pokemon.moves} 
          type={pokemon.types[0].type.name}
          sound={pokemon.cries.latest}/>
        <PokemonStats stats={pokemon.stats} />
        
      </ScrollView>
    </SafeAreaView>
  )
}

export default Pokemon

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  scrollContainer: {
    width: '100%',
  },
  contentHeader: {
    width: '100%',
    height: 800,
    backgroundColor: 'orange',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  name: {
    color: "#110f0f",
    fontWeight: "bold",
    fontSize: 27,
    textAlign: 'center',
    marginTop: 10
  },
})

