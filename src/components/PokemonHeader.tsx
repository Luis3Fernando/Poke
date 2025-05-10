import { StyleSheet, View, SafeAreaView, Text, Image, Dimensions, StatusBar } from "react-native";
import { capitalize, map } from "lodash";
import { getColorByPokemonTypeColor } from "../utils/paletteColor";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const { width, height } = Dimensions.get("window");
const HEIGHT = height;

export default function PokemonHeader(props) {
    const { name, image, type, types } = props;
    const color = getColorByPokemonTypeColor(type, 'primary');
    const circleColor = getColorByPokemonTypeColor(type, 'secondary');

    const bgStyle = [{ backgroundColor: color, ...styles.bg }];

    return (
        <SafeAreaView style={styles.card}>
            <View style={bgStyle}>
                <MaterialCommunityIcons name="pokeball" style={styles.circle} color={circleColor} size={400}></MaterialCommunityIcons>
                <View style={styles.contentImg}>
                    <Image source={{ uri: image }} style={styles.image} />
                </View>
                
                <View style={styles.content}>
                    {map(types, (item, index) => (
                        <View
                            key={index}
                            style={{ ...styles.pill, backgroundColor: getColorByPokemonTypeColor(item.type.name, 'tertiary'), }}>

                            <Text style={styles.textPill}>{capitalize(item.type.name)}</Text>
                        </View>))}
                </View>
                <View style={styles.contentDown}>

                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    card: {
        height: 390,
        width: '100%',
    },
    bg: {
        width: "100%",
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        position: 'relative'
    },
    circle: {
        position: 'absolute',
        alignSelf: 'center',
        top: -100,
        right: -100
    },
    contentImg: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 150,
        zIndex: 1
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: "contain",
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1
    },
    pill: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 20,
        marginHorizontal: 10,
    },
    textPill: {
        color: 'white'
    },

    contentDown: {
        width: '100%',
        backgroundColor: '#f0f0f0',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        position: 'absolute',
        height: 100,
        bottom: 0
    },
});