import React, { useState } from 'react';
import BreadCrumbs from '../components/BreadCrumbs';
import Product from '../components/Product';
import Dropdowns from '../components/Dropdowns';

const Girls = () => {
  const [color] = useState(['all'])
  
  return (
    <>
      <BreadCrumbs page="Girls"/>
      <h1 className='flex justify-center items-center mt-6 text-2xl'>Girls's Clothing</h1>
      <Dropdowns section={'girls'} sectionColor={color}/>
      <Product section='girls'/>
    </>
  )
}

export default Girls