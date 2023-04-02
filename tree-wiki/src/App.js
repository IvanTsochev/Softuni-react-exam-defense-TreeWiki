import { Routes, Route } from 'react-router-dom';
import { useState } from "react";

import { AuthContext } from './context/AuthContext';

import { Footer } from "./components/footer/Footer";
import { Login } from "./components/login/Login";
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { Register } from "./components/register/Register";
import { Create } from "./components/create/Create";
import { Details } from "./components/details/Details";
import { Catalog } from "./components/catalog/Catalog";



function App() {
    const [auth, setAuth] = useState({});

    const onLoginSubmit = async (data) => {
        console.log(data);
    };

    return (
        <AuthContext.Provider value={{onLoginSubmit}}>
            <div className="App">
                <Header />

                <main>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/create-tree' element={<Create />} />
                        <Route path='/catalog' element={<Catalog />} />
                        <Route path='/catalog/:gameId' element={<Details />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </AuthContext.Provider>
    );
}

export default App;
