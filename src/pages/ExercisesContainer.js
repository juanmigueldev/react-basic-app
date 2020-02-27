import React from 'react';
import Loader from '../components/Loader';
import ServerError from './ServerError';
import Exercises from './Exercises';

// custom hook
import useFetch from '../hooks/useFetch';



const ExercisesContainer = () => {

    const { data, loading, error } = useFetch('/exercises');

    if (loading)
        return <Loader />
    
    if(error)
        return <ServerError/>

    return <Exercises
            data={data}/>
}

export default ExercisesContainer