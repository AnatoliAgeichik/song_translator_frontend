import React from 'react';

import {SingerCard} from './SingerCard'
import {Button} from "react-bootstrap";


export class SingerList extends React.Component{
    constructor(){
        super();
        this.state={
          data:[],
          count:0,
          next_page:"",
          previous_page:"",
          current_page:"/singers/"
        };
    }

    changePage(link){
        if (link) {
            this.state.current_page = link.substr(link.indexOf("singers"))
            this.fetchData()
        }
    }

    prevPage = (e) =>{
        this.changePage(this.state.previous_page)
    }

    nextPage = (e) =>{
        this.changePage(this.state.next_page)
    }


    fetchData(){
        fetch(`${this.state.current_page}`)
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
            data:data.results,
            count:data.count,
            previous_page:data.previous,
            next_page:data.next,

            });
        });
    }

    componentDidMount(){
        this.fetchData();
    }

    render(){
        const singers=this.state.data;        
        return (
        <div>
            <div className="m-5">
                {singers.map(singer =>
                <SingerCard singer={singer} key={singer.id}/>
                )}
            </div>
            <div className="d-flex justify-content-around pb-3">
                <Button className="btn-secondary" onClick={this.prevPage}>Previous</Button>
                <Button className="btn-secondary" onClick={this.nextPage}>Next</Button>
            </div>
        </div>
        );
    }
}

export default SingerList;
