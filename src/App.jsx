import { useState } from "react";

const time = {
  count: 0,
  hour: 0,
  minute: 0,
  seconds: 0,
};
export default function App() {
  const StartTimer = () => {
    setTimer(!timer);
    if (timer) {
      time.count++;

      if (time.count === 100) {
        time.count = 0;
        time.seconds++;
      }
    }

    return setTimeout(StartTimer, 10);
  };
  const stopTimer = () => {
    setTimer(!timer);
  };

  const resetTimer = () => {
    setTimer(false);
    time.count = 0;
    time.seconds = 0;
    time.minute = 0;
    time.hr = 0;
  };

  const [timer, setTimer] = useState(false);

  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center font-mono ">
        <div className="text-4xl flex">
          {`${time.hour} : ${time.minute} :${time.seconds}: ${time.count}`}
        </div>
        <div className="flex space-x-10">
          <button
            onClick={() => StartTimer()}
            className="bg-slate-300 px-4 py-2 rounded-lg font-bold text-slate-700 text-2xl"
          >
            Start
          </button>
          <button
            onClick={() => stopTimer()}
            className="bg-red-300 px-4 py-2 rounded-lg font-bold text-slate-700 text-2xl"
          >
            Stop
          </button>
          <button
            onClick={() => resetTimer()}
            className="bg-green-300 px-4 py-2 rounded-lg font-bold text-slate-700 text-2xl"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
