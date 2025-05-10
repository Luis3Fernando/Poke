import { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { capitalize } from "lodash";
import {getColorByPokemonTypeColor} from "../utils/paletteColor";
import {useNavigation} from '@react-navigation/native'

export default function PokemonCard(props) {
  const { pokemon } = props;
  const navigation = useNavigation()

  const goToPokemon = () => {
    navigation.navigate('Pokemon', {id: pokemon.id})
  };
  
  const pokemonColor = getColorByPokemonTypeColor(pokemon.type, 'primary');
  const titleColor = getColorByPokemonTypeColor(pokemon.type, 'tertiary');
  const cardColor = { backgroundColor: pokemonColor, ...styles.cardColor };
  const contentTitle = { backgroundColor: titleColor, ...styles.containerTitle };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={cardColor}>

        </View>
        <View style={styles.cardBorder}>
          <Image source={{ uri: pokemon.imagen }} style={styles.image} />
          <View style={contentTitle}>
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 170,
    width: 160,
    position: 'relative',
  },
  cardColor: {
    height: 170,
    width: 160,
    borderRadius: 20,
    position: 'absolute',
    top: 5,
    left: 5
  },
  cardBorder: {
    height: 170,
    width: 160,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 130,
    height: 130,
    position: 'absolute',
    right: -20,
    top: -15,
  },
  containerTitle: {
    position: 'absolute',
    padding: 10,
    borderRadius: 15,
    bottom: -8,
    left: 10
  },
  name: {
    fontSize: 15,
    color: 'white',
    fontWeight: '600'
  }
});