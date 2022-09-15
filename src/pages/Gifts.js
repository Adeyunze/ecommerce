import React, { useState } from 'react';
import BreadCrumbs from '../components/BreadCrumbs';
import Product from '../components/Product';
import Dropdowns from '../components/Dropdowns';

const Gifts = () => {
  const [color] = useState(['all'])
  
  return (
    <>
      <BreadCrumbs page="Gifts"/>
      <h1 className='flex justify-center items-center mt-6 text-2xl'>The Gift Shop</h1>
      <Dropdowns section={"gifts"} sectionColor={color}/>
      <Product section='gifts'/>
    </>
  )
}

export default Gifts