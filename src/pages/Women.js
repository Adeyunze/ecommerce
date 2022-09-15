import React, {useState} from 'react';
import BreadCrumbs from '../components/BreadCrumbs';
import '../styles/Men.css';
import Product from '../components/Product';
import Dropdowns from '../components/Dropdowns';

const Women = () => {
  const [womenColor] = useState(['all'])

  return (
    <>
      <BreadCrumbs page="Women"/>
      <h1 className='flex justify-center items-center mt-6 text-2xl'>Women's Clothing</h1>
      <Dropdowns section={`female`} sectionColor={womenColor}/>
      <Product section='female'/>
    </>
  )
}

export default Women