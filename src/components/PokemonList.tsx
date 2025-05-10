import { FlatList, View, StyleSheet, ActivityIndicator, Image, TouchableOpacity, Text } from 'react-native'
import PokemonCard from './PokemonCard'
import PokemonToday from './PokemonToday'

export default function PokemonList(props) {
  const { pokemons, loadPokemons, isNext } = props;

  const laodMore = () => {
    loadPokemons();
  };

  return (
    <View style={styles.container}>
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      columnWrapperStyle ={styles.columnWrapper}
      onEndReached={isNext && laodMore}
      onEndReachedThreshold={0.1}
      contentContainerStyle={styles.containerMain}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator
            size="large"
            style={styles.spinner}
            color="#AEAEAE"
          />
        )
      }
      ListHeaderComponent={PokemonToday}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  columnWrapper: {
    marginBottom: 40,
    justifyContent: 'space-evenly'
  },
  spinner: {
    marginTop: 20,
    marginBottom: 70
  },
  containerMain:{
    paddingTop: 10
  }
})
