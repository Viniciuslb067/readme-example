import { useState, useRef } from 'react';
import { PhoneKeypad } from './PhoneKeypad/PhoneKeypad';
import {
  IconEdit,
  IconMicrophone,
  IconPlayerRecord,
  IconWifi
} from '@tabler/icons-react';

const PhoneCall = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isCallActive, setIsCallActive] = useState(false);
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null as ReturnType<typeof setInterval> | null);

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current as ReturnType<typeof setInterval>);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current as ReturnType<typeof setInterval>);
    setTimer(0);
  };

  const handleCall = () => {
    setIsCallActive(!isCallActive);
    if (!isCallActive) {
      startTimer();
    } else {
      stopTimer();
      resetTimer();
    }
  };

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600)
      .toString()
      .padStart(2, '0');
    const minutes = Math.floor((time % 3600) / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="px-8 py-12">
      <div className="flex items-center justify-center space-x-2">
        <div className="flex items-center space-x-2 rounded-xl p-3 shadow-sm shadow-gray-300">
          <IconMicrophone size={24} color="#30D158" />
          <p className="text-xs font-normal text-gray-500">Microfone</p>
        </div>
        <div className="flex w-40 flex-col items-center justify-center">
          <p className="text-base font-normal text-[#6B7280]">Duração</p>
          <p className="text-[26px] font-normal text-gray-700">
            {formatTime(timer)}
          </p>
        </div>
        <div className="flex items-center space-x-2 rounded-xl p-3 shadow-sm shadow-gray-300">
          <IconWifi size={24} color="#30D158" />
          <p className="text-xs font-normal text-gray-500">Rede</p>
        </div>
      </div>
      <PhoneKeypad
        handleCall={handleCall}
        isCallActive={isCallActive}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
      />
      <div className="mt-28 flex justify-center space-x-4">
        <button className="bg-brand-primary cursor pointer flex items-center space-x-2 rounded-xl px-6 py-2">
          <IconPlayerRecord size={24} color="#fff" />
          <p className="text-[16px] font-medium text-white">Gravar ligação</p>
        </button>
        <button className="bg-brand-primary cursor pointer flex items-center space-x-2 rounded-xl px-6 py-2">
          <IconEdit size={24} color="#fff" />
          <p className="text-[16px] font-medium text-white">
            Transcrever ligação
          </p>
        </button>
      </div>
    </div>
  );
};

export { PhoneCall };
