import React from "react";

const MoveableCursor = (props) => {

    const { Position } = props;
    const {x, y} = Position;

   const handleMoveableCursorStyle = {
    parent:{
        position: 'absolute',
        left: `${x}px`, 
        top: `${y}px`,
        // translate:`transform(${x}px, ${y}px))`,
        background:`${props.color}`,//using ternary operator for defaulting??
        width:`${props.width}px`,
        height:`${props.height}px`,
        borderRadius:"50%",
        transition:"200ms ease-out",
    },
    child:{
        position:'relative',
        width:'10px',
        height:'10px',
        borderRadius:"50%",
        transition:"500ms",

    }
}


    return (
    <div style={handleMoveableCursorStyle.parent}>
       <div style={handleMoveableCursorStyle.child}></div>
    </div>
    );
}

export default MoveableCursor