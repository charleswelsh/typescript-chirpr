import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { IChirp } from '../utils/types';

const Details: React.FC<DetailsProps> = () => {

    const { id } = useParams();
    const history = useHistory();

    const [chirp, setChirp] = useState<IChirp>(null);

    useEffect(() => {
        (async () => {
            let res = await fetch(`/api/chirps/${id}`);
            let chirp = await res.json();
            setChirp(chirp);
        })();

    }, [id]);

    return (
        <div className="container">
            <section className="row my-2 justify-content-center">
                <div className="col-5 md-12">
                    <div className="card shadow">
                        <div className="card-body text-center">
                        <div className="card-text bg-dark text-light justify-content-center">{chirp?.timestamp}</div>
                            <h3 className="card-title mt-2">{chirp?.username}:</h3>
                            <p className="card-text">{chirp?.message}</p>
                            <div className="d-flex justify-content-center align-items-center">
                                <button onClick={() => history.push('/')} className="btn btn-sm btn-outline-dark mx-1">Back</button>
                                <Link className="btn btn-sm btn-outline-dark mx-1" to={`/admin/${chirp?.id}`}>Edit</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

interface DetailsProps { }

export default Details;

