import { PLACES } from "./types";

const { ADD_PLACE } = PLACES;

export const addPlace = (placeName) => {
    return {
        type: ADD_PLACE,
        placeName: {placeName}
    }
};