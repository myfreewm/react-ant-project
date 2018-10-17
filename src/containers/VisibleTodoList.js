
import {connect} from 'react-redux';
import {toggleTodo,VisibilityFilter} from '../redux/actions'
import TodoList from '../components/share/TodoList';

const getVisibleTodos = (todos,filter)=>{

    switch(filter){

        case VisibilityFilter.SHOW_ALL:
            return todos
        case VisibilityFilter.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case VisibilityFilter.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        default:
            throw new Error('UNknow filter')
    }
}


const mapStateToProps = state => ({

    todos:getVisibleTodos(state.todos,state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({

    toggleTodo:id => dispatch(toggleTodo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
