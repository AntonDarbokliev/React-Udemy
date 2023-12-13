// import { useState } from "react"
// import { useEffect } from "react"
import useHttp from "../hooks/useHttp.js"
import MealItem from "./MealItem.jsx"


export default function Meals() {
    const {data : meals,loading} = useHttp('http://localhost:3000/meals',[])

    if(loading) {
        return <p>Loading meals...</p>
    }

    return (
            <ul id="meals">
                {meals.map(x => {
                    return(
                    <MealItem key={x.id} meal={x}/>
                    )
                })}
            </ul>
    )
}