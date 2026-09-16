import React from 'react';
import { UserProfile } from '@/lib/types';

interface HexagonGameAppProps {
  user: UserProfile;
  initData: string;
  onBack: () => void;
}

export const HexagonGameApp: React.FC<HexagonGameAppProps> = ({ user, initData, onBack }) => {
  return (
    <div className="w-full h-full flex items-center justify-center text-white bg-[#0f0a1c]">
      <h1>Hexagon Block Sort</h1>
      <button onClick={onBack} className="mt-4 px-4 py-2 bg-blue-500 rounded">
        Back
      </button>
    </div>
  );
};
