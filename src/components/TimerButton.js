import React from 'react';

const TimerButton = ({ isRunning, toggleTimer }) => {
    return (
        <button className="timer" onClick={toggleTimer}>
            {isRunning ? '停止' : '開始'}
        </button>
    );
};

export default TimerButton;