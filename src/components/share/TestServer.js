
import React,{Component} from 'react';
import {fetch,post,api} from './../../utils/server/';

class TestServer extends Component{

    constructor(){

        super();
        this.myTest = this.myTest.bind(this);
        this.mytest_data = this.mytest_data.bind(this);
        this.state = {
            data:{},
            loginData:{}
        };
    };
    
    myTest(){

       post(api.getInion).then(data=>console.log(data)).catch(err=>console.log(err)) 
    }
    mytest_data(){

        fetch(api.getHomePage,{'tmn':1})
            .then(data=>{
                console.log(data);
                this.setState({data:data});
            })
            .catch(err=>console.log(err))
    }

    myLogin(){
        post(api.getLogin,{"tmn":1}).then(data => {
            
            this.setState({
                loginData:data
            })

        }).catch(err=>{
            alert(err);
        })

    }
    render(){
        const {data,loginData} = this.state;
        return (
                    <div>
                        <button onClick={this.myTest} >test server</button>    
                        <button onClick={this.mytest_data}>test server for data</button>
                        <button onClick={this.myLogin.bind(this)}>test post server for data</button>
                        <p>{data.errMsg}</p>
                        <p>{loginData.errMsg}</p>
                    </div>

               )
            }
}

export default TestServer;
