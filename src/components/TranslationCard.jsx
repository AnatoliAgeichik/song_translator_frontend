import React from 'react';
import { Link } from "react-router-dom"


export class TranslationCard extends React.Component{
    render(){
        return(
            <div className="card text-center p-3 mt-3">
                <div className="card-body">
                <h5 className="card-title">{this.props.translation.language}</h5>
                <p className="card-text">{this.props.translation.text}</p>
                <Link className="btn btn-secondary"
                      to={{pathname:`/tracks/${this.props.translation.track_id}/translations/${this.props.translation.id}`,
                           state: this.props.translation}}>View detail</Link>
                </div>
            </div>
        )
    }
}

export default TranslationCard
