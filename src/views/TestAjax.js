
import React,{Component} from 'react';

import axios from 'axios';


class TestAjax extends Component{

    constructor(){

        super();
        this.testAjax = this.testAjax.bind(this);

    }
    
    testAjax(){

        axios.get('/user?ID=12345')
            .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });

    }
    render(){

        return (

            <div>
                <button onClick={this.testAjax}>testAjax</button>
            </div>
        )
    }
}

export default TestAjax;
