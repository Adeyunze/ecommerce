import React from 'react';
import { useContext, useState, useEffect, useCallback } from 'react';
const url = 'https://yunzestore.herokuapp.com/api/v1/products/'
const url2 = 'https://yunzestore.herokuapp.com/api/v1/products?sort='

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [singleProduct, setSingleProduct] = useState([]);
  const [myColor, setmyColor] = useState([])
  const [sortString, setSortString] = useState('');



  const fetchProduct = async(sort) => {
    setLoading(true);
    try {
      const response = await fetch(`${url2}${sort}`);
      const data = await response.json();
      if(data) {
          const myData = data.products
          const newProducts = myData.map((item) => {
            const { _id, name, price, rating, imageSrc, featured, color, gender, createdAt } = item;

            return{
              id: _id,
              name: name,
              image: imageSrc,
              rating: rating,
              price: price,
              featured: featured,
              color: color,
              gender: gender,
              createdAt: createdAt
            }
          })
          setProducts(newProducts)
      } else {
        setProducts([])
      }
      setLoading(false)
    } catch (error) {
      console.error(error);
      setLoading(true)
    }
  }


  const fetchSingleProduct = useCallback(async(id) => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${id}`);
      const data = await response.json();
      if(data) {
          const singleProduct = data.product
          const { _id, name, price, ratings, imageSrc, featured, color, gender, createdAt, images, description, stars} = singleProduct;

          const newProduct = {
            id: _id,
            name,
            image: imageSrc,
            ratings,
            price,
            featured,
            color,
            gender,
            createdAt,
            images,
            description,
            stars
          }
          setSingleProduct(newProduct)
        }
    } catch (error) {
      console.error(error);
    }
    setLoading(false)
  }, [setLoading])



  useEffect(() => {
    fetchProduct(sortString);
  }, [sortString]);

  return <AppContext.Provider
            value={{
              products,
              loading,
              setLoading,
              fetchSingleProduct,
              singleProduct,
              myColor,
              setmyColor,
              setSortString,
              sortString,
              fetchProduct
            }}
        >{children}</AppContext.Provider>
}

export const useEcommerceContext = () => {
  return useContext(AppContext);
}

export { AppProvider, AppContext };