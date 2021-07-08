import React from 'react';
import s from './counter.module.css'

type propsType = {
    onClickSetValue: () => void
}

const ButtonSetValue = (props: propsType) => {

    const onClickHandler = () => {
        props.onClickSetValue()
    }

    return (
        <div>
            <button onClick={onClickHandler}
                    className={s.setButton}>SET
            </button>
        </div>
    );
};

export default ButtonSetValue;