import * as React from 'react';
import { IChirp } from '../utils/types';
import { useHistory, Link } from 'react-router-dom'

const HomeChirpCard: React.FC<HomeChirpCardProps> = props => {

    const history = useHistory();

    return (
    <div className="col-md-6 mx-1">
        <div className="card my-2 shadow">
            <div className="card-body text-center">
                <div className="card-text bg-dark text-light justify-content-center">{props.chirp.timestamp}</div>
                <h3 className="card-title mt-2">{props.chirp.username}:</h3>
                <p className="card-text">{props.chirp.message}</p>
                <button className="btn btn-dark btn-block mt-3" onClick={() => history.push(`/details/${props.chirp.id}`)}>Details</button>
            </div>
        </div>
    </div>
    );
};

interface HomeChirpCardProps {
    chirp: IChirp
}

export default HomeChirpCard;