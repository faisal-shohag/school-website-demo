"use client"

import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Clock, ArrowRight } from 'lucide-react';

const newsAndActivities = [
  {
    title: "Annual Sports Day 2024",
    category: "Sports",
    date: "March 15, 2024",
    time: "9:00 AM",
    image: "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%201.25.46%20PM.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:719,h:539",
    description: "Join us for an exciting day of athletic competitions and team spirit. Students from all grades will participate in various sports events.",
    featured: true
  },
  {
    title: "Science Exhibition Success",
    category: "Academics",
    date: "March 10, 2024",
    time: "2:00 PM",
    image: "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/3da41ab8-9b4e-4293-bba4-9093f52adb15.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:719,h:539",
    description: "Our students showcased remarkable scientific projects at the annual science exhibition, demonstrating innovation and creativity.",
  },
  {
    title: "Cultural Festival Announcement",
    category: "Events",
    date: "March 20, 2024",
    time: "5:00 PM",
    image: "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/IMG-20220811-WA0010.jpg/:/cr=t:0%25,l:12.5%25,w:75%25,h:100%25/rs=w:400,h:400,cg:true",
    description: "Save the date for our upcoming cultural festival celebrating diversity through music, dance, and art performances.",
  },
  {
    title: "Parent-Teacher Meeting",
    category: "Academic",
    date: "March 25, 2024",
    time: "3:30 PM",
    image: "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/31fd881b-32f5-4a3c-b953-1b6b002cf881.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:870",
    description: "Schedule for the upcoming parent-teacher meeting to discuss student progress and academic achievements.",
  }
];

const CategoryBadge = ({ category }) => {
  const categoryColors = {
    Sports: 'bg-blue-100 text-blue-800',
    Academics: 'bg-green-100 text-green-800',
    Events: 'bg-purple-100 text-purple-800',
    Academic: 'bg-yellow-100 text-yellow-800'
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[category] || 'bg-gray-100 text-gray-800'}`}>
      {category}
    </span>
  );
};

export function NewsAndActivities() {
  return (
    <div className="w-full rounded-lg py-12 px-4 sm:px-6 lg:px-8 custom-glass">
      <div className="max-w-7xl mx-auto my-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold  sm:text-4xl mb-4">
            News & Activities
          </h2>
          <p className="text-lg text-gray-600">
            Stay updated with the latest happenings and upcoming events
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured News */}
          <Card className="col-span-1 lg:col-span-2 overflow-hidden group hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-96 lg:h-[500px]">
              <Image
                src={newsAndActivities[0].image}
                alt={newsAndActivities[0].title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <CategoryBadge category={newsAndActivities[0].category} />
                  <div className="flex items-center text-sm">
                    <CalendarDays className="w-4 h-4 mr-1" />
                    {newsAndActivities[0].date}
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {newsAndActivities[0].time}
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                  {newsAndActivities[0].title}
                </h3>
                <p className="text-gray-200 mb-4">
                  {newsAndActivities[0].description}
                </p>
                <button className="flex items-center text-white hover:text-blue-400 transition-colors">
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </Card>

          {/* Other News Items */}
          {newsAndActivities.slice(1).map((item, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <CategoryBadge category={item.category} />
                  <div className="flex items-center text-sm text-gray-600">
                    <CalendarDays className="w-4 h-4 mr-1" />
                    {item.date}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {item.description}
                </p>
                <button className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsAndActivities;