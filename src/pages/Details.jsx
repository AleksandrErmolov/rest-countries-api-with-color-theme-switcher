import React from 'react'
import { useParams } from 'react-router-dom';


export default function Details() {

    const { name } = useParams();
    


    return (
        <div>
            details {name}
        </div>
    )
}
