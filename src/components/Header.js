import React from 'react';

export default function Header() {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-pink-400">FC hub</h1>
      <input
        type="text"
        placeholder="What service are you looking for today?"
        className="w-1/2 px-4 py-2 rounded-full text-black"
      />
      <div className="space-x-4">
        <a href="#" className="hover:text-pink-400">Explore</a>
        <a href="#" className="hover:text-pink-400">Become a Seller</a>
        <a href="#" className="hover:text-pink-400">Sign In</a>
        <button className="bg-pink-500 text-white px-4 py-1 rounded-md">Join</button>
      </div>
    </header>
  );
}
