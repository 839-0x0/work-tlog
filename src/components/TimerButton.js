import React from 'react';

const TimerButton = ({ isRunning, toggleTimer }) => {
    const iconPath = isRunning ? '../public/assets/images/stop.png' : '../public/assets/images/start.png';
    return (
        <input type="image" src={iconPath} alt={isRunning ? '停止' : '開始'} className="timer" onClick={toggleTimer} >
        </input>
    );
};

export default TimerButton;