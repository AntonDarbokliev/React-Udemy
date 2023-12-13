// import { useState } from "react"
// import { useEffect } from "react"
import useHttp from "../hooks/useHttp.js"
import Error from "./Error.jsx"
import MealItem from "./MealItem.jsx"


export default function Meals() {
    const {data : meals,loading,errors} = useHttp('http://localhost:3000/meals',[])


    if(errors){
        return(
            <Error title={'Failed to fetch meals'} message={errors}/>
        )
    }

    if(loading) {
        return <p className="center">Loading meals...</p>
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