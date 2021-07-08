import React from 'react';
import s from './counter.module.css'

type propsType = {
    resetCallback: () => void
}

const ResetButton = (props: propsType) => {
    return (
        <div>
            <button onClick={props.resetCallback} className={s.resetButton}>RESET</button>
        </div>
    );
};

export default ResetButton;