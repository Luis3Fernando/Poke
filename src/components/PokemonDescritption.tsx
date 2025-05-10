import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'

export default function PokemonDescritption(props) {
    const {order, weight, height} = props
    return (
        <View style={styles.container}>
            <View style={styles.block}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <FontAwesome6 name={"hashtag"} size={18} color={'#1D1D1D'}/>
                    <Text style={{color: '#1D1D1D', marginLeft: 10, fontSize: 15}}>{order}</Text>
                </View>
                <Text style={{color: '#666666', marginTop: 5}}>Orden</Text>
            </View>
            <View style={styles.separator}></View>

            <View style={styles.block}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <FontAwesome6 name={"weight-hanging"} size={18} color={'#1D1D1D'}/>
                    <Text style={{color: '#1D1D1D', marginLeft: 10, fontSize: 15}}>{weight} kg</Text>
                </View>
                <Text style={{color: '#666666', marginTop: 5}}>Peso</Text>
            </View>
            <View style={styles.separator}></View>

            <View style={styles.block}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <FontAwesome6 name={"ruler-vertical"} size={18} color={'#1D1D1D'}/>
                    <Text style={{color: '#1D1D1D', marginLeft: 10, fontSize: 15}}>{height} m</Text>
                </View>
                <Text style={{color: '#666666', marginTop: 5}}>Altura</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    block: {
        width: '30%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    separator: {
        width: 2,
        height: 60,
        backgroundColor: '#E0E0E0'
    }
})
