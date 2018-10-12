
import React,{Component} from 'react';

import {BrowserRouter as Router,Route,Link,Prompt} from 'react-router-dom';


const PreventForm = () => (
            
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to='/form'> Form </Link>
                        </li>
                        <li>
                            <Link to='/one'> One </Link>
                        </li>
                        <li>
                            <Link to='/two'> Two </Link>
                        </li>
                    </ul>
                    <hr />
                    <Route path='/form' component={Form} />
                    <Route path='/one' component={One} />
                    <Route path='/two' component={Two} />
                </div>
            </Router>

);

const One = () => (

        <div>One</div>
)
const Two = () => (

        <div>Two</div>
)

class Form extends Component {

    constructor(){

        super();
        
        this.submitEvent = this.submitEvent.bind(this);
        this.state = {

            isBlocking:false
        }
    }
    
    submitEvent(e){
        
        e.preventDefault();
        e.target.reset();
        this.setState({
            isBlocking:false
        })
    }
    render(){

        const {isBlocking} = this.state;

        return(
                <form onSubmit={this.submitEvent}>
                    <Prompt 
                        when={isBlocking}
                        message = {location => 
                            `Are you sure you want to go to ${location.pathname}`
                        }
                    /> 

                    <p>
                        Blocking?{" "}
                        {isBlocking?"Yes,click a link or the back button":"Nope"}
                    </p>
                    <p>
                        <input
                            size="50"
                            placeholder="type something to block transition"
                            onChange={event => {
                                this.setState({
                                    isBlocking:event.target.value.length > 0
                                })
                            }}
                        />
                    </p>
                    <p>
                        <input type="submit" value="Submit to stop blocking" />
                        <button > Submit to stop blocking</button>
                    </p>
                </form>
              )
    }
}

export default PreventForm;
