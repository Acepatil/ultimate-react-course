import { useNavigate, useSearchParams } from 'react-router-dom'
import styles from './Map.module.css'

function Map() {
    const navigate=useNavigate();

    const [searchParams,setSearchParams]=useSearchParams();
    // console.log(searchParams)
    const lat=searchParams.get("lat")
    const lng=searchParams.get("lng")
    // console.log(lng)
    // console.warn(lng)

    return (
        <div className={styles.mapContainer} onClick={()=>{navigate("form")}}>
            <h1>Map</h1>
            <h1>Postion:{lat},{lng}</h1>
            <button onClick={()=>{
                setSearchParams({lat:24,lng:50})
            }}>Search</button>
        </div>
    )
}

export default Map
