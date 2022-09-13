/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useEcommerceContext } from '../context/product_context';
import Loading from './Loading';
import ProductImages from './ProductImages';
import Stars from './Stars';
import '../styles/Product.css';
import BreadCrumbs from './BreadCrumbs';
import ProductCart from './ProductCart';


const ProductPage = () => {
  const { loading, fetchSingleProduct, singleProduct } = useEcommerceContext()
  const { id } = useParams();



  useEffect(() => {
    fetchSingleProduct(id)
  }, [id, fetchSingleProduct]);

  const { images, name, description, stars, ratings, price, image } = singleProduct;

  if(loading) {
    return <Loading/>
  }

  return (
    <>
      <BreadCrumbs page={name} />
      <article className='xl:mx-24 mx-6 my-8 flex lg:flex-row flex-col'>
        <ProductImages images={images} />
        <div className='lg:ml-12 ml-0 sm:ml-16 lg:mt-0 mt-7 lg:w-[50%] sm:w-[90%] w-[100%]'>
          <h1 className='md:text-3xl text-2xl'>{name}</h1>
          <div className='pt-3 font-sans font-light'>
            <Stars stars={stars} reviews={ratings} />
          </div>
          <p className="price font-sans text-xl pt-3">{`£${price}`}</p>
          <p className="desc pt-3">{description}</p>
          <div className='pb-4 border-b mt-7'>
            <p className='font-bold'>Available: <span className='font-normal'>In Stock</span></p>
          </div>
        <ProductCart product={singleProduct}/>
        </div>
      </article>
    </>
  )
}

export default ProductPage