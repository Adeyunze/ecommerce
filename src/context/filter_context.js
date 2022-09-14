/* eslint-disable no-unused-vars */
import React from "react";
import { useContext, useState, useEffect, useCallback, useRef } from 'react';
import { useEcommerceContext } from "./product_context";

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
    const [selectedColor, setSelectedColor] = useState('');
    const { products } = useEcommerceContext()

    const filterSectionColor = (section, sectionColor) => {
        products.filter(product => product.gender === `${section}`).map(product => {
            const {color} = product;
            sectionColor.push(color)
        })
    const uniqueColors = [...new Set(sectionColor)]
    return uniqueColors;
    }


    
    
    return <FilterContext.Provider
        value={{
            selectedColor,
            setSelectedColor,
            filterSectionColor,
        }}
    >{children}</FilterContext.Provider>
}

export const useFilterContext = () => {
    return useContext(FilterContext)
}