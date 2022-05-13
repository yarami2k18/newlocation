import  PLACES  from './types/places.types';

const { ADD_PLACE } = PLACES;

export default {
    addPlace : (name) => {
        return {
            type: ADD_PLACE,
            placeName: {
                name
            }
        }
 
    }   
};




