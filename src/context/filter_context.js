/* eslint-disable array-callback-return */
import React from "react";
import { useContext, useState } from 'react';
import { useEcommerceContext } from "./product_context";

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('')
    const { products } = useEcommerceContext()

    const filterSectionColor = (section, sectionColor) => {
        products.filter(product => product.gender === `${section}`).map(product => {
            const {color} = product;
            sectionColor.push(color)
        })
    const uniqueColors = [...new Set(sectionColor)]
    return uniqueColors;
    }
    const filteredProduct = (section) => {
        let tempProduct
        tempProduct = products.filter(product => product.gender === `${section}`)
        let filtered = tempProduct.filter(product => product.color === `${selectedColor}`)
        return filtered
    }



    
    
    return <FilterContext.Provider
        value={{
            selectedColor,
            setSelectedColor,
            filterSectionColor,
            filteredProduct,
            selectedFilter,
            setSelectedFilter
        }}
    >{children}</FilterContext.Provider>
}

export const useFilterContext = () => {
    return useContext(FilterContext)
}