import { Routes, Route , useNavigate} from 'react-router-dom';
import { useState } from "react";

import { AuthContext } from './context/AuthContext';
import {authServiceFactory} from './services/authService';

import { Footer } from "./components/footer/Footer";
import { Login } from "./components/login/Login";
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { Logout } from './components/logout/Logout';
import { Register } from "./components/register/Register";
import { Create } from "./components/create/Create";
import { Details } from "./components/details/Details";
import { Catalog } from "./components/catalog/Catalog";
import { articleServiceFactory } from './services/treeArticle';

function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({});
    const authService = authServiceFactory(auth.accessToken)
    const articleService = articleServiceFactory(auth.accessToken); 

    const onCreateGameSubmit = async (data) => {
        const newArticle = await articleService.create({...data, publisher: auth.username});
        
        navigate('/catalog');
    };

    const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data);
            console.log(result);
            setAuth(result);

            navigate('/catalog');
        } catch (error) {
            console.log('There is a problem');
        }
    };

    const onRegisterSubmit = async (data) => {
        const { confirmPassword, ...registerData } = data;
        if (confirmPassword !== registerData.password) {
            return;
        }

        try {
            const result = await authService.register(registerData);

            setAuth(result);

            navigate('/catalog');
        } catch (error) {
            console.log('There is a problem');
        }
    };

    const onLogout = async () => {
        await authService.logout();

        setAuth({});
    };

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        username: auth.username,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <AuthContext.Provider value={contextValues}>
            <div className="App">
                <Header />

                <main>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/logout' element={<Logout />} />
                        <Route path='/create-article' element={<Create onCreateGameSubmit={onCreateGameSubmit}/>} />
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
