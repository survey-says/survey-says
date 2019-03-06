import { Draggable, Droppable } from 'react-drag-and-drop'
import React from 'react';
import { any } from 'prop-types';
export class building extends React.Component{
  onDrop(data) {
        console.log(data)
        // => banana 
    }  
    
    render() {
    return(
        <div>
            <ul>
                <Draggable type="fruit" data="banana"><li>Banana</li></Draggable>
                <Draggable type="fruit" data="apple"><li>Apple</li></Draggable>
                <Draggable type="metal" data="silver"><li>Silver</li></Draggable>
            </ul>
            <Droppable
                types={['fruit']} // <= allowed drop types
                onDrop={this.onDrop.bind(this)}>
                <ul className="Smoothie"></ul>
            </Droppable>
        </div>
    )}
    
   
}
export default building;