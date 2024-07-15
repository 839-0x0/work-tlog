import React, { useState } from 'react';
import TimerButton from './TimerButton';
import TimerComponent from './TimerComponent';

function TimerItem(props) {
    const { itemName } = props;
    const [isRunning, setIsRunning] = useState(false);
    const [timeSets, setTimeSets] = useState([]);
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);

    const toggleTimer = () => {
        const currentTime = new Date();
        if (isRunning) {
            setIsRunning(false);
            setTimeSets(prev => [...prev, { startTime: prev[prev.length - 1].startTime, stopTime: currentTime }]);
        } else {
            setIsRunning(true);
            setTimeSets(prev => [...prev, { startTime: currentTime, stopTime: null }]);
        }
    };

    const toggleAccordion = () => {
        setIsAccordionOpen(!isAccordionOpen);
    };

    const calculateTotalTime = () => {
        return timeSets.reduce((acc, curr) => {
            if (curr.stopTime) {
                return acc + (curr.stopTime - curr.startTime);
            }
            return acc;
        }, 0);
    };

    return (
        <>
        <div className={`item ${isRunning ? 'running' : ''}`} onClick={toggleAccordion}>
            <span>{itemName}</span> <TimerButton isRunning={isRunning} toggleTimer={toggleTimer} /> {"total:" + new Date(calculateTotalTime()).toISOString().substr(11, 8)}
            {props.isRemovable && <input type="image" src="../public/assets/images/close.png" alt="×" class="close-button" onClick={() => props.handleRemoveClick()}></input>}
        </div>
        {isAccordionOpen && (
            <div class="log-detail">
                {timeSets.map((set, index) => {
                    // 停止時間がある場合のみTimerComponentを表示
                    if (set.stopTime) {
                        return <TimerComponent key={index} startTime={set.startTime} stopTime={set.stopTime} />;
                    }
                    // 停止時間がない場合（開始ボタンを押した直後）、開始時間のみを表示
                    if (isRunning && index === timeSets.length - 1) {
                        const jstTime = new Date(set.startTime.getTime() + 9 * 60 * 60 * 1000);
                        return <div key={index}>開始時間: {jstTime.toISOString().substr(11, 8)}</div>;
                    }
                    return null; // それ以外の場合は何も表示しない
                })}
            </div>
        )}
    </>
    );
}

export default TimerItem;