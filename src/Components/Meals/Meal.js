import React, { useState, useRef, useContext } from 'react'
import Card from '../UI/Card'
// import MealForm from './MealForm'
// import CArtContext from '../../Store/CArtContext'
import MealItem from './MealItem'

const dummy_meals = [
    {
        id: 1,
        name: "Chicken Tikka Masala",
        description: 'Finest food ever',
        price: 22.551,
    },
    {
        id: 2,
        name: "Burger Masala",
        description: 'Finest food ever',
        price: 20.1522,
    },
    {
        id: 3,
        name: "Sushi",
        description: 'Finest food ever',
        price: 32.557,
    },
    {
        id: 4,
        name: "Maggie Masala",
        description: 'Finest food ever',
        price: 15.5534,
    },
]
export default function Meal(props) {

    const mealList = dummy_meals.map((meal) => {
        return (<MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price} id={meal.id} />)
    })

    return (
        <React.Fragment>
            <Card className='meal-card'>
                <section>
                    <p>Find some delicious food here..</p>
                    <p>Find some delicious food here..</p>
                    <p>Find some delicious food here..</p>
                    <p>Find some delicious food here..</p>
                </section>
            </Card>
            <Card className='add-meal-card'>
                <section>
                    <ul>
                        {mealList}
                    </ul>
                </section>
            </Card>

        </React.Fragment>
    )
}
