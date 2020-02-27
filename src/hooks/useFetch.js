import { useState, useEffect } from 'react';
import url  from '../config';


const useFetch = endpoint => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchResource = async () =>{
            try {
                let res = await fetch(`${url}${endpoint}`);
                let data = await res.json();

                setData(data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(error);
            }
        }

        fetchResource();
    }, [endpoint]); // parameters to useEffect

    return {data, loading, error};
}

export default useFetch;