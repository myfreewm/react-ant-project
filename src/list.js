/**
 *无状态组件
 *
 * */

import React,{Component} from 'react';

function ListItem({value}){

    return(
            <li>
                <span>{value}</span>
            </li>
          )
}

function ListTitle({title}){

    return (
            <p>{title}</p>
           )
}

function List({list,title}){

    return(
            <div>
                <ListTitle title={title} />
                <ul>
                    
                {
                    list.map((val,index)=>(<ListItem key={`list-${index}`} value={val} />))
                }
                </ul>
            </div>
          )
} 

export default List;
