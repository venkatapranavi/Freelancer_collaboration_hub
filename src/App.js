// App.jsx
import React from 'react';
import Header from './components/Header';
import CategorySection from './components/CategorySection';
import FreelancerCard from './components/FreelancerCard';
import './index.css'
const freelancers = [
  {
    name: 'Nandini Sonekar',
    role: 'CyberSecurity',
    level: 'Expert',
    image: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
  {
    name: 'Kotra Jahnavi',
    role: 'Web Developer',
    level: 'Expert',
    image: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    name: 'Kalipu Manasa',
    role: 'Web Developer',
    level: 'Intermediate',
    image: 'https://randomuser.me/api/portraits/women/3.jpg'
  },
  {
    name: 'Venkata Pranavi',
    role: 'Graphic Designer',
    level: 'Intermediate',
    image: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    name: 'Renu',
    role: 'SEO Specialist',
    level: 'Beginner',
    image: 'https://randomuser.me/api/portraits/women/5.jpg'
  }
];

export default function App() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <CategorySection />

      <h2 className="text-2xl font-bold text-center mt-10">Popular Freelancers</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 px-6 py-10">

        {freelancers.map((freelancer, index) => (
          <FreelancerCard key={index} {...freelancer} />
        ))}
      </div>
    </div>
  );
}
