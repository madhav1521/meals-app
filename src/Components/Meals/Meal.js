<<<<<<< HEAD
import React, { useState, useRef, useContext, useEffect } from 'react'
=======
import React, { useState, useEffect } from 'react'
>>>>>>> 2252d56dd8c73f698ed4728a7080e578928cf1fa
import Card from '../UI/Card'
import MealItem from './MealItem'

export default function Meal(props) {

    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(null);

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await fetch('https://meals-app-8e612-default-rtdb.firebaseio.com/Meals.json');
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
                {/* <img src={loadingGif} alt='loading gif' /> */}
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{margin:'auto',background:'#fff',display:'block'}} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <g transform="translate(50,50)"><circle cx="0" cy="0" r="8.333333333333334" fill="none" stroke="#e15b64" strokeWidth="4" strokeDasharray="26.179938779914945 26.179938779914945">
                        <animateTransform attributeName="transform" type="rotate" values="0 0 0;360 0 0" times="0;1" dur="1s" calcMode="spline" keySplines="0.2 0 0.8 1" begin="0" repeatCount="indefinite"></animateTransform>
                    </circle><circle cx="0" cy="0" r="16.666666666666668" fill="none" stroke="#f47e60" strokeWidth="4" strokeDasharray="52.35987755982989 52.35987755982989">
                            <animateTransform attributeName="transform" type="rotate" values="0 0 0;360 0 0" times="0;1" dur="1s" calcMode="spline" keySplines="0.2 0 0.8 1" begin="-0.2" repeatCount="indefinite"></animateTransform>
                        </circle><circle cx="0" cy="0" r="25" fill="none" stroke="#f8b26a" strokeWidth="4" strokeDasharray="78.53981633974483 78.53981633974483">
                            <animateTransform attributeName="transform" type="rotate" values="0 0 0;360 0 0" times="0;1" dur="1s" calcMode="spline" keySplines="0.2 0 0.8 1" begin="-0.4" repeatCount="indefinite"></animateTransform>
                        </circle><circle cx="0" cy="0" r="33.333333333333336" fill="none" stroke="#abbd81" strokeWidth="4" strokeDasharray="104.71975511965978 104.71975511965978">
                            <animateTransform attributeName="transform" type="rotate" values="0 0 0;360 0 0" times="0;1" dur="1s" calcMode="spline" keySplines="0.2 0 0.8 1" begin="-0.6" repeatCount="indefinite"></animateTransform>
                        </circle><circle cx="0" cy="0" r="41.666666666666664" fill="none" stroke="#849b87" strokeWidth="4" strokeDasharray="130.89969389957471 130.89969389957471">
                            <animateTransform attributeName="transform" type="rotate" values="0 0 0;360 0 0" times="0;1" dur="1s" calcMode="spline" keySplines="0.2 0 0.8 1" begin="-0.8" repeatCount="indefinite"></animateTransform>
                        </circle></g>
                </svg>
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
