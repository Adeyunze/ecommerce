/* eslint-disable no-unused-vars */
import React, {useState, useEffect, useContext, useReducer} from "react";
import reducer from "../reducers/favourite_reducer";

import {
    ADD_TO_FAVOURITES,
} from "../actions";

const getLocalStorage = () => {
    let fav = localStorage.getItem("favourite");
    if (fav) {
        return JSON.parse(localStorage.getItem("favourite"));
    } else {
        return [];
    }
}

const initialState = {
    liked: false,
    favourite : getLocalStorage(),
}

const FavContext = React.createContext();

export const FavProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addToFavourite = (id, name, image, price) => {
        dispatch({ type: ADD_TO_FAVOURITES, payload: {id, name, image, price} });
    }

    useEffect(() => {
        localStorage.setItem("favourite", JSON.stringify(state.favourite));
    }, [state.favourite]);

    return (
        <FavContext.Provider value={{
            ...state,
            addToFavourite,
        }}>
            {children}
        </FavContext.Provider>
    );
}

export const useFavContext = () => {
    return useContext(FavContext);
}