import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function Loading() {
  return (
    <div className="loading">
      <div className="loading__spinner">
        <AiOutlineLoading3Quarters />
      </div>
    </div>
  );
}