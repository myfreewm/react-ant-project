
import React,{Component} from 'react';
import {http,api} from './../../utils/server/';

class TestServer extends Component{

    constructor(){

        super();
        this.myTest = this.myTest.bind(this);
    };
    
    myTest(){
        
       http.post(api.getInion).then(data=>console.log(data)).catch(err=>console.log(err)) 
    }

    render(){
        return (
                    <div>
                        <button onClick={this.myTest} >test server</button>    
                    </div>

               )
            }
}

export default TestServer;
