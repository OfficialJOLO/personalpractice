import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // 1초마다 현재 시간을 업데이트하는 인터벌 설정
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div> Current Time: {time}</div>;
};

export default Clock;
