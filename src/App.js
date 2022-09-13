import React from 'react';
import Landing from './components/Landing';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Men from './pages/Men';
import Women from './pages/Women';
import Boys from './pages/Boys';
import Girls from './pages/Girls';
import Gifts from './pages/Gifts';
import ProductPage from './components/ProductPage'
import NotFound from './pages/NotFound';
import CartPage from './pages/CartPage';
import Favourite from './pages/FavouritePage';


function App() {
    return (
        <Routes>
            <Route path='/' element={<Landing />} >
                <Route index element={<Home />} />
                <Route  path='product/:id' element={<ProductPage />}/>
                <Route path='/men' element={<Men/>} />
                <Route path='/women' element={<Women/>} />
                <Route path='/boys' element={<Boys/>} />
                <Route path='/girls' element={<Girls/>} />
                <Route path='/gifts' element={<Gifts/>} />
                <Route path='/gifts' element={<Gifts/>} />
                <Route path='/cart' element={<CartPage/>} />
                <Route path='/favourite' element={<Favourite/>} />
                <Route path='*' element={<NotFound/>} />
            </Route>
        </Routes>
)
}

export default App;