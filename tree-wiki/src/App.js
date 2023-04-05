import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';

import { Footer } from "./components/footer/Footer";
import { Login } from "./components/login/Login";
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { Logout } from './components/logout/Logout';
import { Register } from "./components/register/Register";
import { Create } from "./components/create/Create";
import { Details } from "./components/details/Details";
import { Catalog } from "./components/catalog/Catalog";
import { Edit } from './components/edit/Edit';
import { ArticleProvider } from './context/ArticleContext';
import { RouteGuard } from './components/common/RouteGuard';
import { PageNotFound } from './components/404/404';
import { HomeDetails } from './components/homeDetails/Homedetails';
import { Profile } from './components/profile/Profile';

function App() {
    return (
        <AuthProvider>
            <ArticleProvider>
                <div className="App">
                    <Header />

                    <main>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/home/:treeId' element={<HomeDetails />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/catalog' element={<Catalog  />} />
                            <Route path='/catalog/:articleId' element={<Details />} />

                            <Route element={<RouteGuard />}>
                                <Route path='/profile' element={<Profile />} />
                                <Route path='/create-article' element={<Create  />} />
                                <Route path='/catalog/:articleId/edit' element={<Edit  />} />
                                <Route path='/logout' element={<Logout />} />
                            </Route>

                            <Route path='*' element= {<PageNotFound />} />
                        </Routes>
                    </main>

                    <Footer />
                </div>
            </ArticleProvider>
        </AuthProvider>
    );
}

export default App;
