export const displayPosition = (event,reactElement) => {
    if(event.target)
    {
        const { clientX, clientY } = event;
        const { left, top,height,width } = reactElement.current.getBoundingClientRect();

        let posX = clientX - left - 8;
        let posY = clientY - top - 8
        let _x = (posX < 0 )?8:(posX > width)? width - 8:posX;
        let _y = (posY < 0 )?8:(posY > height)? height - 8:posY;

    return { x: _x,  y: _y };
    }
}