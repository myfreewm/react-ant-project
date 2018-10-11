import React, { Component } from 'react';
import './App.less';

import Count from './Count';
import Input from './Input';

import Event from './Event';
import Lists from './Child';
class App extends Component{

    constructor(props){
        super(props);
       
        this.changeDefaultCount = this.changeDefaultCount.bind(this);
        this.handleItemChange = this.handleItemChange.bind(this);
        this.state = {

            defaultCount:1
        }
    }
    
    handleItemChange(item){
        console.log(item);
    }
    changeDefaultCount(){
        
        this.setState({
            defaultCount:this.state.defaultCount + 1
        })
    }
    render(){
        
        return(
                <div >
                    <p onClick={this.changeDefaultCount} className="test-less">hello world lixiang</p>
                    <Count count={this.state.defaultCount}/>
                    {/*<Input />  */}
                    <Event />
                    <Lists 
                        list={[{text:1},{text:2}]}
                        handleItemChange ={this.handleItemChange}
                    />
                </div>
              )
    }
}


export default App;
