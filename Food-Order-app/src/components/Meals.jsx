import { useState } from "react"
import { useEffect } from "react"
import MealItem from "./MealItem.jsx"

export default function Meals() {
    const [meals,setMeals] = useState([])

    useEffect(() => {
        async function fetchMeals() {
           const response = await fetch('http://localhost:3000/meals')
            const meals = await response.json()
            setMeals(meals)
        }

        fetchMeals()

    },[])

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