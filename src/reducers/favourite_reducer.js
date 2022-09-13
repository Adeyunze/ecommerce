import {
    ADD_TO_FAVOURITES,
} from '../actions';


const fav_reducer = (state, action) => {
    if(action.type === ADD_TO_FAVOURITES) {
        const {id, name, image, price} = action.payload;
        const tempFav = state.favourite.find(fav => fav.id === id);
        if(tempFav) {
            const filterFav = state.favourite.filter(fav => fav.id !== id);
            return { ...state, favourite: [...filterFav] };
        }
        const newFav = {
            id,
            name,
            image,
            price
        }
        return { ...state, favourite: [...state.favourite, newFav] }
    }
}

export default fav_reducer;