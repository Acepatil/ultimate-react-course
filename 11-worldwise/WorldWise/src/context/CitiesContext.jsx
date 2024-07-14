/* eslint-disable react/prop-types */
import { createContext, useEffect, useContext, useReducer } from "react";

const BASE_URL = "http://localhost:8000";

const CitiesContext = createContext();

const initialState={
  cities:[],
  loading:false,
  currentCity:{},
  error:""
}

function reducer(state,action){
  switch(action.type){
    case "loading":
      return{
        ...state,loading:true,
      }
    case 'cities/loaded':
      return{
        ...state,loading:false,
        cities:action.payload
      }

    case 'city/loaded':
      return{
        ...state,loading:false,
        currentCity:action.payload
      }
    case 'city/created':
      return{
        ...state,loading:false,
        cities:[...state.cities,action.payload]
      }
    case 'city/deleted':
      return{
        ...state,loading:false,
        cities:state.cities.filter((city)=>city.id!==action.payload)
      }
    case "rejected":
      return{
        ...state,loading:false,
        error:action.payload
      }
      default:
        throw new Error("Unknown action type")
  }
}

function CitiesProvider({ children }) {

  const [{cities,loading,currentCity},dispatch]=useReducer(reducer,initialState)
  // const [cities, setCities] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function fetchCities() {
      dispatch({type:'loading'})
      try {
        // setLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        // setCities(data);
        dispatch({type:'cities/loaded',payload:data})
      } catch {
        // alert("Some Error");
        dispatch({type:'rejected',payload:"There is some error loading data ..."})
      }
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    if(Number(id)===currentCity.id)return
    try {
      // setLoading(true);
      dispatch({type:'loading'})
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      // setCurrentCity(data);
      dispatch({type:'city/loaded',payload:data})
    } catch {
      // alert("Some Error");
      dispatch({type:'rejected',payload:"There is some error getting new city ..."})
    } 
  }

  async function createNewCity(newCity) {
    dispatch({type:'loading'})
    try {
      const res = await fetch(`${BASE_URL}/cities`,{
        method:"POST",
        body:JSON.stringify(newCity),
        headers:{"Content-type":"application/json"
        }
      });
      const data = await res.json();
      // console.log(data)
      // setCities(cities=>[...cities,data])
      dispatch({type:'city/created', payload:data})
    } catch {
      // alert("Some Error");
      dispatch({type:'rejected',payload:"There is some error adding new city ..."})
    } 
  }

  async function deleteCity(id) {
    dispatch({type:'loading'})
    try {
        await fetch(`${BASE_URL}/cities/${id}`,{
        method:"DELETE"
      });
      // console.log(data)
      // setCities(cities=>cities.filter((city)=>city.id!==id))
      dispatch({type:'city/deleted', payload:id})
    } catch {
      // alert("Some Error");
      dispatch({type:'rejected',payload:"There is some error deleting city ..."})
    } 
  }



  return (
    <CitiesContext.Provider
      value={{
        cities,
        loading,
        currentCity,
        getCity,
        createNewCity,
        deleteCity
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("Cities Context is used outside the Cities Provider");
  return context;
}

export { CitiesProvider, useCities };
