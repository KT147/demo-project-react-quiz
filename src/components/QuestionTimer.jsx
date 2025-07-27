import { useEffect, useState } from "react";

function QuestionTimer({ timeout, onTimeOut }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("SETTING TIMEOUT")
    const timer = setTimeout(onTimeOut, timeout);

    return () => {
        clearTimeout(timer)
    }
  }, [onTimeOut, timeout]);

  useEffect(() => {
    console.log("SETTING INTERVAL")
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingtime) => prevRemainingtime - 100);
    }, 100);

    return () => {
        clearInterval(interval)
    }
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
}

export default QuestionTimer;
