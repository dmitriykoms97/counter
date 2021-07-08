import React, {useState} from 'react';
import s from './counter.module.css'

type propsType = {
    totalNumber: number
}

const Display = (props: propsType) => {

    return (
        <div className={s.displayContainer}>
            <div className={props.totalNumber >= 5 ? s.displayContentLimit : s.displayContent}>
                {props.totalNumber}
            </div>
        </div>
    );
};

export default Display;