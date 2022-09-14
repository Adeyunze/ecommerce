/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import BreadCrumbs from '../components/BreadCrumbs';
import '../styles/Men.css';
import Product from '../components/Product';
import Dropdowns from '../components/Dropdowns';
import { useEcommerceContext } from '../context/product_context';
import Loading from '../components/Loading';
import { useFavContext } from '../context/favourite_context';






const Men = () => {
  const { loading } = useEcommerceContext();
  const [menColor, setMenColor] = useState(['all'])
  const { addToFavourite, favourite } = useFavContext();


  if(loading) {
    return <Loading/>
  }

  
  return (
    <>
      <BreadCrumbs page="Men"/>
      <h1 className='flex justify-center items-center mt-6 text-2xl'>Men's Clothing</h1>
      <div className=''>
        <Dropdowns section={`male`} sectionColor={menColor}/>
      </div>
      <Product section='male'/>
    </>
  )
}

export default Men