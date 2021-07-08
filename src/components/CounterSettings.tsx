import React, {ChangeEvent, useState} from 'react';
import s from './counter.module.css';
import IncrementButton, {value} from "./IncrementButton";
import ResetButton from "./ResetButton";
import ButtonSetValue from "./ButtonSetValue";

const CounterSettings = () => {

    let [maxValue, setMaxValue] = useState('')
    let [startValue, setStartValue] = useState(0)


    const onClickSetValue = () => {
        maxValue = JSON.stringify(value)
        setMaxValue('')
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        e.currentTarget.value = JSON.stringify(value)
        setMaxValue(JSON.parse(e.currentTarget.value))
    }

    return (
        <div className={s.containerCounterSettings}>
            <div className={s.displaySettingsContainer}>
                <div className={s.namesOfSetting}>
                    <div className={s.maxValue}>
                        MaxValue :
                    </div>
                    <div className={s.startValue}>
                        StartValue :
                    </div>
                </div>
                <div className={s.inputValue}>
                    <div className={s.inputFieldMax}>
                        <input value={maxValue}
                               onChange={onChangeHandler}
                        />
                    </div>
                    <div className={s.inputFieldStart}>
                        <input/>
                    </div>
                </div>
            </div>
            <div className={s.buttonsGroup}>
                <ButtonSetValue onClickSetValue={onClickSetValue}/>
            </div>
        </div>
    );
};

export default CounterSettings;