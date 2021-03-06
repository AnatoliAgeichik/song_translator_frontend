import React from 'react';
import {Dropdown, DropdownButton} from "react-bootstrap";

import {Footer} from 'components/Footer'
import {Header} from 'components/Header'
import {PageMenu} from 'components/PageMenu'
import {ItemList} from 'components/ItemList'
import {SingerCard} from 'components/SingerCard'

export class SingersPage extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            search:"",
            title_dropdown:"name",
            ordering:"&ordering=name",
            page:"",
            data:[]
        }
    }

    searchCallback = data => {
        this.setState({search:data})

    }

    dataCallback = data => {
        this.setState({data:data})
    }

    historyCallback = data => {
        this.props.history.push(data)
    }

    orderHandler = data =>{
        this.setState({ordering:data})
        if (data.substr(data.indexOf("=")+1) === "name"){
            this.setState({title_dropdown:"name"})
        }
        else if (data.substr(data.indexOf("=")+1) === "-name"){
            this.setState({title_dropdown:"name desc"})
        }
    }

    render() {
        return (
            <div>
                <Header/>
                <div className='min-vh-100'>
                    <div className="d-flex justify-content-center">
                        <div className="pt-5 pl-5">
                            <PageMenu parentCallback = {this.searchCallback} btnText="Add Singer"
                                      form_link="/addSinger" />
                            <span>Sort by</span>
                            <DropdownButton alignRight title={this.state.title_dropdown} id="dropdown-menu-align-right"
                                            variant="secondary"
                                            onSelect={this.orderHandler}>
                                <Dropdown.Item eventKey="&ordering=name">name</Dropdown.Item>
                                <Dropdown.Item eventKey="&ordering=-name">name desc</Dropdown.Item>
                            </DropdownButton>

                        </div>
                        <div className="col-md-10 pr-5">

                            <div>
                                <div className="m-5">
                                    {this.state.data.map(singer =>
                                    <SingerCard singer={singer} key={singer.id}/>
                                    )}
                                </div>
                            </div>
                            <ItemList search={this.state.search} ordering={this.state.ordering}
                                      histroyCallaback = {this.historyCallback} page = 'singers'
                                      dataCallback = {this.dataCallback} />
                        </div>
                    </div>
                 </div>
                <Footer/>
            </div>
        );
    }
}
