import { ChatTeardropDots } from 'phosphor-react';

export function Widget() {
  return (
    <button
      className="bg-violet-500 rounded-full px-3 h-12 text-white"
      type="button"
    >
      <ChatTeardropDots className="w-6 h-6" />
    </button>
  );
}
