import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export function WelcomeSection() {
  return (
    <section className=" mx-auto mt-5">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900 rounded-md dark:to-indigo-950">
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-blue-800 dark:text-blue-200">
            <Image src="https://i.postimg.cc/4NdbXCFd/image.png" alt="VBS Logo" width={150} height={150} className="mx-auto mb-2" />
            Vishal Bharti Senior Secondary School
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <CardDescription className="text-xl md:text-2xl font-semibold mb-3 text-indigo-700 dark:text-indigo-300">
            Discover Vishal Bharti Senior Secondary School&apos;s Unique Approach to Learning
          </CardDescription>
          <Separator className="my-3" />
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            At Vishal Bharti Senior Secondary School, we believe that every student has the potential to excel academically and personally. That&apos;s why we&apos;ve developed a unique approach to learning that focuses on each student&apos;s individual needs and learning style. Our teachers are dedicated to fostering a supportive and inclusive learning environment, where students are encouraged to explore new ideas and take risks. We offer a wide range of academic and extracurricular programmes that enable our students to build a strong foundation for success.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Learn More About Our Approach
          </Button>
        </CardFooter>
      </div>
    </section>
  )
}

