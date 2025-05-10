import { POKEMON_TYPE_COLORS } from "./constants";
import { POKEMON_PALETTE_COLORS } from "./constants";

const getColorByPokemonType = (type) => POKEMON_TYPE_COLORS[type.toLowerCase()];

export default getColorByPokemonType;

export function getColorByPokemonTypeColor(type, colorType) {
    const colorPalette = POKEMON_PALETTE_COLORS[type.toLowerCase()];
    return colorPalette ? colorPalette[colorType] : null;
}
