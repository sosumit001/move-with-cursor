import React from "react";




const MoveableCursor = (props) => {
//
    const {Position } = props;
    const {x, y} = Position;

   const handleMoveableCursorStyle = {
    parent:{
        position: 'absolute',
        left: x + 'px', 
        top: y + 'px',
        backgroundColor:"teal",
        height:'30px',
        width:'30px',
        borderRadius:"50%",
        transition:"200",
    },
    child:{
        position:'relative',
        // left: x + 'px', 
        // top: y + 'px',
        // transform:"translater(-50%, -50%)",
        width:'10px',
        height:'10px',
        borderRadius:"50%",
        transition:"1000",
        // border:"1px solid black"l
    }
}


    return (
    <div   style={handleMoveableCursorStyle.parent}>
       <div style={handleMoveableCursorStyle.child}></div>
    </div>
    );
}

export {MoveableCursor}