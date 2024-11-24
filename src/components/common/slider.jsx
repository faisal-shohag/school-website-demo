"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useEffect, useState } from "react"
import Autoplay from "embla-carousel-autoplay"

const images = [
  "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/vbs_bulidingpic.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:719,h:407",
  "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%201.37.18%20PM.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:719,h:470",
  "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/0168ad0b-5280-4be9-a8d7-b1ce26880481.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:719,h:601",
  "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/31fd881b-32f5-4a3c-b953-1b6b002cf881.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:719,h:539",
  "https://img1.wsimg.com/isteam/ip/8bfc3ae8-6b51-422e-bd0c-84e4f6f53018/WhatsApp%20Image%202024-11-18%20at%201.42.17%20PM.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:719,h:539",
]

export function AutoSliderCarousel() {
  const [api, setApi] = React.useState()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const autoplay = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )

  return (
    <div className="w-full mx-auto">
      <Carousel
        setApi={setApi}
        className="w-full"
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        <CarouselContent className="mt-5">
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full ">
                {/* Blurred background image */}
                <div className="absolute rounded-xl inset-0 overflow-hidden">
                  <div 
                    className="absolute inset-0 scale-110 blur-md opacity-50"
                    style={{
                      backgroundImage: `url(${src})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                </div>
                {/* Main image */}
                <CardContent className="flex w-full py-5 items-center justify-center relative">
                  <div className="relative w-full max-w-2xl aspect-video">
                    <Image
                      src={src}
                      alt={`Slide ${index + 1}`}
                      fill
                      className="object-contain rounded-xl"
                      priority={index === 0}
                    />
                  </div>
                </CardContent>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}