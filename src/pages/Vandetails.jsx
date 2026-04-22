import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Vandetails =()=>{
    const {id} = useParams();
    console.log(id)
    const [van, setVan] = useState(null);
    useEffect(() => {
        fetch(`/api/vans/${id}`)
            .then(res => res.json())
            .then(data => setVan(data.van))
    }, [id]);
    return(
        <div>
            {van ? (
                <div>
                    <h1>{van.name}</h1>
                    <p>{van.price}</p>
                </div>
            ) : (
                <div>
                    <h1>Loading...</h1>
                </div>
            )}
        </div>
    )
}
export default Vandetails;