import React from 'react';
import { Link } from "react-router-dom"
import {FaSearch} from "react-icons/fa";

import {Footer} from 'components/Footer'
import {Header} from 'components/Header'
import {Dropdown, DropdownButton} from "react-bootstrap";
import {ItemList} from "../../components/ItemList";
import {TranslationCard} from "../../components/TranslationCard";


export class TranslationsPage extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            search:"",
            ordering:"&ordering=language",
            title_dropdown:"Language",
            data:[]
        }
    }

    dataCallback = data => {
        this.setState({data:data})
    }

    historyCallback = data => {
        this.props.history.push(data)
    }

    searchHandler = e => {
       this.setState({[e.target.name]:e.target.value})
    }

    orderHandler = data =>{
        this.setState({ordering:data})
        if (data.substr(data.indexOf("=")+1) === "language"){
            this.setState({title_dropdown:"Language"})
        }
        else if (data.substr(data.indexOf("=")+1) === "-language"){
            this.setState({title_dropdown:"Language desc"})
        }
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="min-vh-100">
                    <div className="d-flex justify-content-center">
                        <div className="pt-5 pl-5">
                            <Link className="btn btn-secondary"
                                  to={{pathname:"/addTranslation", state: this.props.location.state}}>Add Translation</Link>
                            <form className="input-group mb-3 pt-4" onSubmit={this.searchHandler}>
                                <input type="text" className="form-control" placeholder="search"
                                       name="search" onChange={this.searchHandler}/>
                                <FaSearch className="input-group-append align-self-md-center pl-1"/>
                            </form>
                            <span>Sort by</span>
                            <DropdownButton alignRight title={this.state.title_dropdown} id="dropdown-menu-align-right"
                                                variant="secondary"
                                                onSelect={this.orderHandler}>
                                    <Dropdown.Item eventKey="&ordering=track_name">Language</Dropdown.Item>
                                    <Dropdown.Item eventKey="&ordering=-track_name">Language desc</Dropdown.Item>
                            </DropdownButton>
                        </div>
                        <div className='col-md-9 pr-5'>
                            <div className="m-5">
                                {this.state.data.map(translation =>
                                  <TranslationCard translation={translation} key={translation.id}/>)}

                            </div>
                            <ItemList search={this.state.search} ordering={this.state.ordering}
                                      histroyCallaback = {this.historyCallback}
                                      page = {`/tracks/${this.props.location.state}/translations`}
                                      dataCallback = {this.dataCallback} />
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default TranslationsPage
