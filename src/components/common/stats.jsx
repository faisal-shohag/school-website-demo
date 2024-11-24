"use client"

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Users, GraduationCap, Monitor, Trophy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
  {
    id: 1,
    title: "Students",
    value: 1500,
    icon: Users,
    suffix: "+",
    color: "text-blue-600",
    description: "Bright young minds"
  },
  {
    id: 2,
    title: "Teachers",
    value: 100,
    icon: GraduationCap,
    suffix: "+",
    color: "text-green-600",
    description: "Dedicated educators"
  },
  {
    id: 3,
    title: "Labs",
    value: 15,
    icon: Monitor,
    suffix: "",
    color: "text-purple-600",
    description: "Modern facilities"
  },
  {
    id: 4,
    title: "Years of Excellence",
    value: 25,
    icon: Trophy,
    suffix: "+",
    color: "text-yellow-600",
    description: "Educational legacy"
  }
];

const Counter = ({ value, suffix = '', duration = 2 }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef();
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      let startTime;
      let animationFrame;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.min(Math.floor(value * progress), value));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [isInView, value, duration]);

  return (
    <span ref={nodeRef} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export function AnimatedStats() {
  return (
    <div className="w-full mt-5 py-16 px-4 sm:px-6 lg:px-8 custom-glass rounded-xl">
      <div className="max-w-7xl mx-auto my-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold  sm:text-4xl mb-4">
            Our Achievement Numbers
          </h2>
          <p className="text-lg text-gray-600">
            A testament to our commitment to educational excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: stat.id * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className={`inline-flex p-3 rounded-full ${stat.color} bg-opacity-10 mb-4`}>
                      <Icon className={`w-8 h-8 ${stat.color}`} />
                    </div>
                    <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {stat.title}
                    </h3>
                    <p className="text-gray-600">
                      {stat.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AnimatedStats;