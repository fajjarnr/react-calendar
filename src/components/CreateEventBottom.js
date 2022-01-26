import React, { useContext } from 'react';
import Plus from '../assets/plus.svg';
import GlobalContext from '../context/GlobalContext';

export default function CreateEventBottom() {
  const { setShowModal } = useContext(GlobalContext);

  return (
    <button
      onClick={() => setShowModal(true)}
      className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl"
    >
      <img src={Plus} alt="plus" className="w-7 h-7" />
      <span className="pl-3 pr-7">Create</span>
    </button>
  );
}
