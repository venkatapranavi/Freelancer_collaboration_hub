import React from 'react';

const categories = [
  { name: 'Programming & Tech', icon: '💻' },
  { name: 'Graphics & Design', icon: '👨‍💼' },
  { name: 'Digital Marketing', icon: '📈' },
  { name: 'Writing & Translation', icon: '🛌' },
  { name: 'Video & Animation', icon: '🍭' },
  { name: 'AI Services', icon: '✨' },
  { name: 'Music & Audio', icon: '📘' },
  { name: 'Business', icon: '🎓' },
  { name: 'Consulting', icon: '📋' },
];

export default function CategorySection() {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-6">
      {categories.map((cat, i) => (
        <div key={i} className="w-36 text-center bg-white p-4 rounded-md shadow-md">
          <div className="text-3xl mb-2">{cat.icon}</div>
          <div className="font-semibold">{cat.name}</div>
        </div>
      ))}
    </div>
  );
}
