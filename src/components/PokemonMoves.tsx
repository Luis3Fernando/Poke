import React, {useState, useEffect} from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import {getIconByPokemonType, getMove, playSound} from '../utils/methods'

export default function PokemonMoves(props) {
    const { gif, type, moves, sound } = props
    const [move, setMove] = useState(null)

    useEffect(()=>{
        const asignar = ()=>{
            setMove(getMove(moves))
        }

        asignar()
    }, [])

    const changeMove = () => {
        setMove(getMove(moves))
    };

    return (
        <View style={styles.content}>
            <TouchableOpacity onPress={()=>playSound(sound)}>
                <Image
                    style={styles.gift}
                    source={{
                        uri: gif
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.contentMove} onPress={changeMove}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontSize: 12, color: '#A1A1A3' }}>Habilidad</Text>
                    <Text style={{ fontSize: 15 }}>{move}</Text>
                </View>
                <View>
                    {getIconByPokemonType(type)}
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    content: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 30,
        flexDirection: 'row',
        alignSelf: 'center',
        verticalAlign: 'middle',
    },
    gift: {
        width: 70,
        height: 70,
        objectFit: 'scale-down'
    },
    contentMove: {
        flexDirection: 'row',
        width: '65%',
        height: 60,
        backgroundColor: '#EDEDF0',
        borderRadius: 5,
        justifyContent: 'space-around',
        alignItems: 'center',
    }
})

