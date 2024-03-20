import {
  IconBackspaceFilled,
  IconPhoneFilled,
  IconPhoneOff
} from '@tabler/icons-react';
import { numbers } from 'modules/Home/constants/phoneKeyboardNumbers';
import { formatPhoneNumber } from 'modules/Home/utils/formatPhoneNumber';

interface PhoneKeypadProps {
  phoneNumber: string;
  isCallActive: boolean;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  handleCall: () => void;
}

const PhoneKeypad = ({
  phoneNumber,
  isCallActive,
  handleCall,
  setPhoneNumber
}: PhoneKeypadProps) => {
  const dialNumber = (digit: string) => {
    if (phoneNumber.length < 11) {
      setPhoneNumber((prevPhoneNumber) => prevPhoneNumber + digit);
    }
  };

  const deleteDigit = () => {
    setPhoneNumber((prevPhoneNumber) => prevPhoneNumber.slice(0, -1));
  };

  return (
    <div className="mt-24 flex flex-col items-center justify-center">
      {phoneNumber ? (
        <h3 className="mb-10 text-3xl font-medium text-gray-700">
          {formatPhoneNumber(phoneNumber) || ''}
        </h3>
      ) : (
        <h3 className="mb-10 text-3xl font-medium text-gray-200">
          Digite um número
        </h3>
      )}
      <div className="grid grid-cols-3 gap-4">
        {numbers.map((digit, index) => (
          <button
            key={index}
            className="flex size-16 flex-col items-center justify-center rounded-full bg-gray-100 hover:opacity-80"
            onClick={() => dialNumber(digit.number)}
          >
            <p className="text-3xl font-normal text-gray-700">{digit.number}</p>
            <p className="text-[8.3px] font-normal text-gray-700">
              {digit.letters}
            </p>
          </button>
        ))}
        <button></button>
        <button
          disabled={phoneNumber.length !== 11}
          className={`flex size-16 cursor-pointer flex-col items-center justify-center rounded-full hover:opacity-80 ${
            !isCallActive ? 'bg-support-success' : 'bg-support-error'
          } ${phoneNumber.length !== 11 && 'opacity-50'}`}
          onClick={handleCall}
        >
          {!isCallActive ? (
            <IconPhoneFilled size={28} color="#fff" />
          ) : (
            <IconPhoneOff size={28} color="#fff" />
          )}
        </button>
        <button
          className="flex size-16 items-center justify-center rounded-full hover:opacity-80"
          onClick={deleteDigit}
        >
          <IconBackspaceFilled size={32} color="#AFAFAF" />
        </button>
      </div>
    </div>
  );
};

export { PhoneKeypad };
