import React, {useState} from "react";
import { BottomSheet } from 'react-spring-bottom-sheet';
import './style.css';
import './Sheet.css';

function Sheet() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <button onClick={() => setOpen(true)}>Open</button>
            <BottomSheet className="absolute right-0" open={open} onDismiss={() => { setOpen(false) }}>
                <div className="sheet">My awesome contents here</div>
            </BottomSheet>
        </>
    );
}

export default Sheet;