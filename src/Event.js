
import React, {Component} from 'react';

import List from './list'


class Event extends Component{

    constructor(props){

        super(props);
        this.state = {

            list:[1,2,3,4]
        }
    }


    render(){
        return(

                <div><List list={this.state.list} title='this is list' /></div>
              )
    }
}

export default Event;
