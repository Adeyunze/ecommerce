import React from 'react';
import { useEcommerceContext } from '../context/product_context';
import { useFilterContext } from '../context/filter_context';
import Loading from './Loading';
import '../styles/Product.css';
import ProductList from './ProductList';
import TempProducts from './TempProducts';

const Product = ({section, myColor}) => {
  const { loading, setSortString } = useEcommerceContext();
  const { selectedColor, selectedFilter } = useFilterContext()


  if(selectedFilter === 'most relevant'){
    setSortString('')
  }else if(selectedFilter === 'alphabetical'){
      setSortString('name')
  }else if(selectedFilter === 'price: low - high'){
    setSortString('price')
  }else if(selectedFilter === 'price: high - low'){
    setSortString('-price')
  }

    if(loading) {
    return <Loading/>
  }
  if(selectedColor !== 'all') {
    return (
      <TempProducts section={section}/>
    )
  }

  return (
    <ProductList section={section}/>
  )
}

export default Product