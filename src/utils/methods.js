import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { POKEMON_TYPE_ICONS } from "./constants";
import { Audio } from 'expo-av';

export function getIconByPokemonType(type, size = 35, color = "#A1A1A3") {
  const iconName = POKEMON_TYPE_ICONS[type.toLowerCase()];
  return iconName ? (
    <MaterialCommunityIcons name={iconName} size={size} color={color} />
  ) : null;
}

export function getMove(moves) {
  if (moves.length === 0) {
    return "No hay movimientos disponibles";
  }

  const indiceAleatorio = Math.floor(Math.random() * moves.length);

  const nombreMovimiento = moves[indiceAleatorio].move.name;

  const nombreMovimientoFormateado = nombreMovimiento
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return nombreMovimientoFormateado;
}

export async function  playSound(url){
    const { sound } = await Audio.Sound.createAsync(
      { uri: url },
      { shouldPlay: true }
    );
    
    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.didJustFinish) {
        sound.unloadAsync();
      }
    });
  };
