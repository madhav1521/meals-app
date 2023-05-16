import React, { useState, useEffect } from 'react'
import Card from '../UI/Card'
// import MealForm from './MealForm'
// import CArtContext from '../../Store/CArtContext'
import MealItem from './MealItem'
import loadingGif from '../../Assets/Images/loading-img.gif'

export default function Meal(props) {

    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(null);

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await fetch('https://mealicious-app-default-rtdb.firebaseio.com/Meals.json');
                if (!response.ok) {
                    console.log('Failed to fetch meals.')
                    throw new Error('Failed to fetch meals.');
                }
                const responseData = await response.json();

                const loadedMeals = [];
                for (const key in responseData) {
                    if (responseData[key] && responseData[key].name) {
                        loadedMeals.push({
                            id: key,
                            name: responseData[key].name,
                            description: responseData[key].description,
                            price: responseData[key].price,
                        });
                    }
                }
                setMeals(loadedMeals);
                setIsLoading(false);
            }
            catch (error) {
                console.error(error);
                setIsLoading(false);
                setHasError(error);
            }
            };
            fetchMeals();
    }, []);

    if (isLoading) {
        return (
            <section className='loading-state'>
                <img src={loadingGif} alt='loading gif' />
            </section>
        );
    };
    if (hasError) {
        return (
            <section className='loading-state'>
            <h1>Http server error</h1>
            </section>
        );
    };

    const mealList = meals.map((meal) => {
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
