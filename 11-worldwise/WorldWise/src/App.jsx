/* eslint-disable no-inner-declarations */
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Product from"./pages/Product"
import Pricing from"./pages/Pricing"
import HomePage from"./pages/HomePage"
import AppLayout from"./pages/AppLayout"
import PageNotFound from"./pages/PageNotFound"
import Login from "./pages/Login"
import CityList from "./components/CityList"
import { useEffect, useState } from "react"
import CountryList from "./components/CountryList"
import City from "./components/City"
import Form from'./components/Form'

const BASE_URL="http://localhost:8000"

function App() {
  const [cities,setCities]=useState([])
  const [loading,setLoading]=useState(false)

  useEffect(function(){
    
    async function fetchCities(){
      try{
        setLoading(true)
      const res =await fetch(`${BASE_URL}/cities`)
      const data= await res.json()
      setCities(data)
    }
      catch{
        alert("Some Error")
      }
      finally{
        setLoading(false)
      }
    }
    fetchCities()
      }
      ,[])

  return (
    <BrowserRouter>

    <Routes>
      <Route path="/product"element={<Product/>}></Route>
      <Route index element={<HomePage/>}></Route>
      <Route path="/login"element={<Login/>}></Route>
      <Route path="/app"element={<AppLayout/>}>
      <Route index element={<Navigate replace to="cities"/>}/>
      <Route path="cities" element={<CityList cities={cities} loading={loading}/>}/>
      <Route path="cities/:id" element={<City/>}/>
      <Route path="countries" element={<CountryList cities={cities} loading={loading}/>}/>
      <Route path="form" element={<Form/>}/>
      </Route>
      <Route path="/pricing"element={<Pricing/>}></Route>
      {/* <Route path="/form" element={<Form/>}/> */}
      <Route path="*"element={<PageNotFound/>}></Route>
      
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
