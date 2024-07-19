/* eslint-disable no-inner-declarations */
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"
import { CitiesProvider } from "./context/CitiesContext"
import { AuthProvider } from "./context/FakeAuthContext"
import ProtectedRoute from "./pages/ProtectedRoute"

// import Product from"./pages/Product"
// import Pricing from"./pages/Pricing"
// import HomePage from"./pages/HomePage"
// import AppLayout from"./pages/AppLayout"
// import PageNotFound from"./pages/PageNotFound"
// import Login from "./pages/Login"

const HomePage=lazy(()=>import ("./pages/HomePage"))
const Product=lazy(()=>import ("./pages/Product"))
const Pricing=lazy(()=>import ("./pages/Pricing"))
const AppLayout=lazy(()=>import ("./pages/AppLayout"))
const PageNotFound=lazy(()=>import ("./pages/PageNotFound"))
const Login=lazy(()=>import ("./pages/Login"))

import CityList from "./components/CityList"
import CountryList from "./components/CountryList"
import City from "./components/City"
import Form from'./components/Form'
import SpinnerFullPage from './components/SpinnerFullPage'


function App() {
  
  return (
    <AuthProvider>
    <CitiesProvider>
     
    <BrowserRouter>
    <Suspense fallback={<SpinnerFullPage/>}>
    <Routes>
      <Route path="/product"element={<Product/>}></Route>
      <Route index element={<HomePage/>}></Route>
      
      <Route path="/login"element={<Login/>}></Route>
        
      <Route path="/app"element={
        <ProtectedRoute>

        <AppLayout/>
        </ProtectedRoute>
        }>
      <Route index element={<Navigate replace to="cities"/>}/>
      <Route path="cities" element={<CityList />}/>
      <Route path="cities/:id" element={<City/>}/>
      <Route path="countries" element={<CountryList />}/>
      <Route path="form" element={<Form/>}/>
      </Route>
      <Route path="/pricing"element={<Pricing/>}></Route>
      <Route path="*"element={<PageNotFound/>}></Route>
      
    </Routes>
    </Suspense>
    </BrowserRouter>
    
    </CitiesProvider>
    </AuthProvider>
  )
}

export default App
