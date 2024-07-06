import React from 'react';

function TimerComponent ({ startTime, stopTime }) {
    const formatTime = (date) => {
        if (!date) return '00:00:00';
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }

    function calculateTimeDifference(startTime, stopTime) {
        if (!startTime || !stopTime || stopTime === '00:00:00') return '00:00:00';
        const difference = stopTime - startTime; // ミリ秒単位の差
        const seconds = Math.floor((difference / 1000) % 60).toString().padStart(2, '0');
        const minutes = Math.floor((difference / (1000 * 60)) % 60).toString().padStart(2, '0');
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }
    
    return (
        <div>
            <div>
                <span>開始時間: {formatTime(startTime)}{stopTime && stopTime !== '00:00:00' ? ` / 停止時間: ${formatTime(stopTime)}` : ''}</span>
                {stopTime && stopTime !== '00:00:00' ? <span> ( {calculateTimeDifference(startTime, stopTime)} ) </span> : ''}
            </div>
        </div>
    );
}

export default TimerComponent;