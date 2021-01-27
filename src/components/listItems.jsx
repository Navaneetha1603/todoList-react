import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
class ListItem extends Component {
    getListItems(){
        const items=this.props.items;
        return <ul>
            {items.map(tag=><li  key={tag.key}> <input type="text" id={tag.key}
                    value={tag.text}
                    onChange={(e)=>this.props.setUpdate(e.target.value,tag.key)}
                    ></input>
            <button className="btn btn-danger m-2" onClick={()=>{this.props.deleteItem(tag.key)}}>Delete</button></li>)}
        </ul>


        // return <ul>
        //     {items.map(tag=><li  key={tag.key}>{tag.text}
        //     <button onClick={()=>{this.props.deleteItem(tag.key)}}>Delete</button></li>)}
        // </ul>
    //     return <ul>
    //         {items.map(item=>{
    //         <li key={item.key}>
    //                 <input type="text" id={item.key}
    //                 value={item.text}
    //                 onChange={(e)=>this.props.setUpdate(e.target.value,item.key)}
    //                 ></input>
                    
    //                     <button onClick={()=>{this.props.deleteItem(item.key)}}>*</button>
    //         </li>
    //     }
    // }
    // )
    //     </ul>
       
    }
    render() { 
        return ( 
            <div>
                   {/* <FlipMove duration={300} easing="ease-in-out"> */}
                   {this.getListItems()}
                   {/* </FlipMove> */}
            </div>
        );
    }
}
 
export default ListItem;