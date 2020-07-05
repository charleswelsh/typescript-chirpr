import * as React from 'react';
import {useState } from 'react';
import Details from '../views/Details';
import { useHistory } from 'react-router';


const Compose: React.FC<ComposeProps> = () => {

    const moment = require('moment');
    
    const history = useHistory();

    const [username, setUsername] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const submitChirp = async (e: React.MouseEvent<HTMLButtonElement>) => {
        let timestamp= moment().format('LLL')
        e.preventDefault();
        let res = await fetch('/api/chirps', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'          
            },
            body: JSON.stringify({username, message, timestamp})
        })
        if (res.ok) {
            history.push('/');
        }
        else{
            alert("Something Went Wrong")
        }
    }

    return (
        <div className="container">
            <div className="row my-2 justify-content-center">
                <div className="col-5">
                    <form action="" className="form-group p-3 shadow border rounded">
                        <label htmlFor="username">Username:</label>
                        <input type="text" className="form-control" id="username" placeholder="Who Dis?" value={username} onChange={e => setUsername(e.target.value)}/>
                        <label className="mt-1" htmlFor="message">Message:</label>
                        <textarea rows={5} id="message" className="form-control" placeholder="Say Whaaaaa?" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                        <button className="btn btn-dark btn-block mt-3" onClick={submitChirp}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

interface ComposeProps {}

export default Compose;

