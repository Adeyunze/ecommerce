import React, { useState } from 'react';
import BreadCrumbs from '../components/BreadCrumbs';
import Product from '../components/Product';
import { useEcommerceContext } from '../context/product_context';
import Loading from '../components/Loading';
import Dropdowns from '../components/Dropdowns';

const Boys = () => {
  const { loading } = useEcommerceContext();
  const [color] = useState([])
  if(loading) {
    return <Loading/>
  }
  return (
    <>
      <BreadCrumbs page="Boys"/>
      <h1 className='flex justify-center items-center mt-6 text-2xl'>Boys's Clothing</h1>
      <Dropdowns section={'boys'} sectionColor={color}/>
      <Product section='boys'/>
    </>
  )
}

export default Boys