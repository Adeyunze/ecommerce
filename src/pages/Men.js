import React, { useState } from 'react';
import BreadCrumbs from '../components/BreadCrumbs';
import '../styles/Men.css';
import Product from '../components/Product';
import Dropdowns from '../components/Dropdowns';






const Men = () => {
  const [menColor] = useState(['all'])

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