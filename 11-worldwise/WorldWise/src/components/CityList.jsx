/* eslint-disable react/prop-types */
import styles from './CityList.module.css'
import CityItem from './CityItem'
import Spinner from './Spinner'
import Message from './Message'
import { useCities } from '../context/CitiesContext'
function CityList() {
    const {cities,loading}=useCities()
    if(loading) return <Spinner/>

    if(!cities.length) return <Message message="Add your first city by clicking on the map"/>
    return (

        <ul className={styles.cityList}>
            {cities.map(city=><CityItem city={city} key={city.id}/>)}
        </ul>
    )
}

export default CityList
