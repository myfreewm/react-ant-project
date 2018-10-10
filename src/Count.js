
import React,{Component} from 'react';

import PropTypes from 'prop-types';

class Count extends Component{
    
    static propTypes={
        count:PropTypes.number.isRequired
    }
    constructor(props){
        
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {

            count:props.count
        }
    };
    
    componentWillReceiveProps(nextProps){
        console.log(nextProps)

        this.setState({...nextProps})
    }
    shouldComponentUpdate(nextProps,nextState){

        console.log(nextProps,nextState);
        return true
    }
    handleClick(e){

        e.preventDefault();

        this.setState({
            count:this.state.count+1
        })
    };
    
    render(){

        return(
                <div>
                    {/* this is 注释 */}
                    <p>{this.state.count}</p>
                    <a href="#" onClick={this.handleClick}>update</a>
                </div>
              )
    }

}

export default Count;
