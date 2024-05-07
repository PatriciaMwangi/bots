import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Enlisted() {
    const { id } = useParams();
    const [fetched, setFetched] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3001/bots/${id}`)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error(`Problem: ${res.statusText}`);
                }
            })
            .then((data) => {
                setFetched(data);
            })
            .catch((error) => {
                console.error("Error fetching bot data:", error);
            });
    }, [id]);

    if (!fetched) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            <h1>Hello</h1>
            <img src={fetched.avatar_url} alt="Bot Avatar" />
        </>
    );
}
