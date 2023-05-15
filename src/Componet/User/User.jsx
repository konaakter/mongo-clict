import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const User = () => {
    const useloders = useLoaderData()
    const [loders, setloders] = useState(useloders)

    const handleremove = _id =>{
        console.log('remove', _id)
        fetch(`http://localhost:5000/users/${_id}`, {
            method: "DELETE"
        })

        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.deletedCount > 0) {
                alert("usser been delete")
                
            }
            const remaing = loders.filter( loder=> loder._id !== _id)
                setloders (remaing)
        })
    } 
    return (
        <div>
            <h1>{loders.length}</h1>
            {
                loders.map(loder => <p>{loder.email}: {loder.password} {loder._id} <button> <Link to={`/update/${loder._id}`}>update</Link> </button> <button onClick={ () => handleremove(loder._id)}>X</button></p>)
            }
            
        </div>
    );
};

export default User;