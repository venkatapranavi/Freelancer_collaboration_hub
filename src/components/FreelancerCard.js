import React from 'react';

export default function FreelancerCard({ name, role, level, image }) {
  return (
    <div className="bg-purple-900 text-white rounded-xl shadow-md p-4 text-center">
      <h3 className="text-lg font-bold">{name}</h3>
      <p>{role}</p>
      <p className={`text-sm ${level === 'Expert' ? 'text-pink-400' : level === 'Intermediate' ? 'text-purple-300' : 'text-yellow-300'}`}>
        {level}
      </p>
      <img
        src={image}
        alt={name}
        className="mt-4 w-full h-40 object-cover rounded-lg"
      />
    </div>
  );
}
