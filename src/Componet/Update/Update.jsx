import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {

    const loderupdate = useLoaderData()
    console.log(loderupdate)
    const handleupdate = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const updateusers = { email, password }
        console.log(updateusers);

        fetch(`http://localhost:5000/users/${loderupdate._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateusers),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert("usser been update")

                }
            })

    }

    return (
        <div>
            <h1>upadate{loderupdate.email}</h1>
            <form onSubmit={handleupdate}>
                <input type="email" name="email" defaultValue={loderupdate?.email} id="" /><br />
                <input type="password" name="password" defaultValue={loderupdate?.password} id="" /><br />
                <button>submit</button>

            </form>




        </div>
    );
};

export default Update;

/*
 app.put('/users/:id', async (req, res ) =>{
        const id = req.params.id;
        const updateuser = req.body;
        console.log(id, updateuser )
        const filter = { _id: new ObjectId(id)};
        const options = { upsert: true };
        const upadatedoc = {
            $set:{
                email: updateuser.email,
                password: updateuser.password
            }
        }
        const updateresult = await userscollectoin.updateOne(filter, upadatedoc, options);
        console.log(updateresult)
        res.send(updateresult)
        

    })*/

/*fetch(`http://localhost:5000/users/${loderupdate._id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updateusers),
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.modifiedCount > 0) {
                alert("usser been update")
                
            }
        })*/