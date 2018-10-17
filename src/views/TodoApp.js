import React,{Component} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App  from './../components/share/App';
import rootReducer from './../redux/reducers';

const store = createStore(rootReducer);

class TodoApp extends Component{

    render(){

        return(
                <Provider store={store}>
                    <App />
                </Provider>
              )
    }
}


export default TodoApp;
