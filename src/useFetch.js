import { useState, useEffect } from "react";

const useFetch = (url) => {

    // Blogs useState is set to Null in the beginning because there is no data pulled from an API yet
    const [data, setData] = useState(null);

    //Pending useState is set to True in the begging because data is being fetched
    const [isPending, setIsPending] = useState(true);

    //Error useState used to track if there is an Error
    const [error, setError] = useState(null);

    //Fetch Data using Fetch API
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw Error('Could not fetch data for that resource');
                    }
                    return response.json();
                }).then((data) => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                }).catch(err => {
                    setError(err.message);
                    setIsPending(false);
                });
        }, 1000)
    }, [url]);

    return { data, isPending, error}

};

export default useFetch;