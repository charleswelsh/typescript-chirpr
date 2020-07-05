import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const Admin: React.FC<AdminProps> = () => {

    const { id } = useParams();
    const moment = require('moment');
    
    const history = useHistory();

    const [username, setUsername] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    useEffect(() => {
        (async () => {
            let res = await fetch(`/api/chirps/${id}`);
            let chirp = await res.json();
            setUsername(chirp.username);
            setMessage(chirp.message);
        })();

    }, [id]);

    const editChirp = async (e: React.MouseEvent<HTMLButtonElement>) => {
        let timestamp= moment().format('LLL')
        e.preventDefault();
        let res = await fetch(`/api/chirps/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'          
            },
            body: JSON.stringify({username, message, timestamp})
        })
        if (res.ok) {
            history.push(`/details/${id}`);
        }
        else{
            alert("Something Went Wrong")
        }
    }

    const deleteChirp = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let res = await fetch(`/api/chirps/${id}`, {
            method: 'DELETE',
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
                    <button className="btn btn-primary btn-block mt-3" onClick={editChirp}>Submit Edit</button>
                    <button className="btn btn-warning btn-block mt-3" onClick={deleteChirp}>Delete</button>

                </form>
            </div>
        </div>
    </div>
    );
};

interface AdminProps {}

export default Admin;

