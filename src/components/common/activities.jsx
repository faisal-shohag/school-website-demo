"use client"

import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

const activities = [
  {
    image: "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/October%20dossier%202024_49.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:719,h:404",
    title: "Science Exhibition",
    description: "Students showcasing innovative projects at our annual science fair",
  },
  {
    image: "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/October%20dossier%202024_49.jpg/:/cr=t:0%25,l:7.81%25,w:84.38%25,h:84.38%25/rs=w:719,h:404",
    title: "Digital Learning",
    description: "Modern computer labs equipped with latest technology",
  },
  {
    image: "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/October%20dossier%202024_10.jpg/:/cr=t:5.56%25,l:0%25,w:100%25,h:88.89%25/rs=w:719,h:360",
    title: "Picnic",
    description: "Students learning programming and development skills",
  },
  {
    image: "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/October%20dossier%202024_08.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:719,h:404",
    title: "Sports Activities",
    description: "Promoting physical fitness through various sports activities",
  },
];

export function GlimpseOfActivities() {
  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold  sm:text-4xl mb-4">
            Glimpse of Activities
          </h2>
          <p className="text-lg text-gray-600">
            Discover the diverse range of activities and experiences we offer
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-sm text-gray-200">
                    {activity.description}
                  </p>
                </div>
              </div>

              {/* Default Title (visible when not hovering) */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-lg font-semibold text-white">
                  {activity.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GlimpseOfActivities;