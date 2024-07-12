/* eslint-disable react/prop-types */
import styles from './CountryList.module.css'
import CountryItem from './CountryItem'
import Spinner from './Spinner'
import Message from './Message'
function CountryList({cities,loading}) {
    if(loading) return <Spinner/>

    if(!cities.length) return <Message message="Add your first city by clicking on the map"/>

    const countries=cities.reduce((acc,city)=>{
        if(!acc.map(el=>el.country).includes(city.country)){
            return [...acc,{country:city.country,emoji:city.emoji}]
        }
        else{
            return acc
        }
    }
        ,[])
    return (

        <ul className={styles.countryList}>
            {countries.map(countries=><CountryItem country={countries} key={countries.country}/>)}
        </ul>
    )
}

export default CountryList
