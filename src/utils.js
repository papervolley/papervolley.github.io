export function randomPick(array = []) {
    return array[Math.floor(Math.random() * array.length)];
}

export function mouseXY(e) {
    /*const x = e.clientX;
    const y = e.clientY;
    return [x, y];*/
    if(e.type === 'touchstart' || e.type === 'touchmove' || e.type === 'touchend' || e.type === 'touchcancel'){
        var touch = e.changedTouches[0];
        if (touch === undefined) {
            return [0, 0];
        }
        const x = touch.pageX;
        const y = touch.pageY;
        return [x, y];
    } else if (e.type === 'mousedown' || e.type === 'mouseup' || e.type === 'mousemove' || e.type === 'mouseover'|| e.type === 'mouseout' || e.type === 'mouseenter' || e.type === 'mouseleave') {
        const x = e.clientX;
        const y = e.clientY;
        return [x, y];
    }
}