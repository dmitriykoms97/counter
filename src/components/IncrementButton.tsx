import React from 'react';
import s from './counter.module.css'

type propsType = {
    addCount: () => void
    totalNumber: number
}

export let value: number;

const IncrementButton = (props: propsType) => {

    return (
        <div>
            <button disabled={props.totalNumber >= value} onClick={props.addCount}
                    className={s.incButton}>INC
            </button>
        </div>
    );
};

export default IncrementButton;