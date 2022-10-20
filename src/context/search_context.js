import React,{useState, useContext, useEffect, useCallback} from "react";
const url3 = `https://yunzestore.herokuapp.com/api/v1/products?name=`


const SearchContext = React.createContext();

export const SearchProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState(false)
    const [searchList, setSearchList] = useState([])
    const [search, setSearch] = useState('')

    const fetchSearch = useCallback(async(search)=> {
        setLoading(true)
        try {
            const response = await fetch(`${url3}${search}`)
            const data = await response.json()
            if(data){
                const myData = data.products
                const newProduct = myData.map((item) => {
                    const { _id, name, imageSrc} = item;

                    return{
                        id: _id,
                        name,
                        image: imageSrc
                    }
                })
                setSearchList(newProduct)
            }else{
                setSearchList([])
            }
        } catch (error) {
            console.error(error);
            setLoading(true)
        }
    }, [setLoading])

    useEffect(() => {
        fetchSearch(search)
    }, [search, fetchSearch])


    return <SearchContext.Provider
        value={{search, setSearch, searchList, loading, setModal, modal}}
    >{children}</SearchContext.Provider>
}

export const useSearchContext = () => {
    return useContext(SearchContext)
}