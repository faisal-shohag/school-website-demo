"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { ModeToggle } from "./theme-toggle"



const navigationItems = [
    {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    items: [
      { title: "Introduction", href: "#" },
      { title: "Mission & Vision", href: "#" },
      { title: "Mandatory Disclosure", href: "#" },
      { title: "Pricipal's Desk", href: "#" },
    ],
  },
  {
    title: "Infrastructure",
    items: [
      { title: "Reception", href: "#" },
      { title: "Mathematics Laboratory", href: "#" },
      { title: "Bio , Chem , Phy Lab", href: "#" },
      { title: "Computer Lab", href: "#" },
      { title: "Play Zone", href: "#" },
      { title: "Music", href: "#" },
      { title: "Playground", href: "#" },
      { title: "Library", href: "#" },
      { title: "Transportation", href: "#" },
      { title: "Class Room", href: "#" },
    ],

  },
  {
    title: "Admission",
    items: [
      { title: "Procedure", href: "#" },
      { title: "Registration Form", href: "#" },
      { title: "Admission/Withdrawal rule", href: "#" },
    ],
  },
  {
    title: "Academics",
    items: [
      { title: "Rules & Regulations", href: "#" },
      { title: "Assessement", href: "#" },
      { title: "Counselling", href: "#" },
    ],
  },
  {
    title: "Activities",
    items: [
      { title: "Glimpse of Activities", href: "#" },
      { title: "Planner", href: "#" },
    ],
  },
  {
    title: "Contact",
    items: [
      { title: "Contact Us", href: "#" },
      { title: "Feedback", href: "#" },
    ],
  },
  
]

export function SchoolNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:bg-zinc-900">
        
      <div className=" flex h-14 items-center justify-between lg:px-10 px-5">
    <div className="flex items-center">
      <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 "
            >
              <Menu size={25}  />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <MobileNav />
          </SheetContent>
        </Sheet>

          <Link href="/" className=" flex items-center space-x-2 shimmer">
            <Image className="h-14 w-14" height={80} width={80} src="https://i.postimg.cc/4NdbXCFd/image.png" alt="logo" />
            <div className=" text-sm hidden lg:block md:block font-bold sm:inline">
                <div>Vishal Bharti</div>
                <div>Senior Secondary School</div>

            </div>
          </Link>
          </div>

      
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.items ? (
                      <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                    ) : (
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink className="text-sm font-semibold">
                          {item.title}
                        </NavigationMenuLink>
                      </Link>
                    )}
                    {item.items && (
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.items.map((subItem) => (
                            <li key={subItem.title}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={subItem.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">
                                    {subItem.title}
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
       

       <div className="flex gap-2 items-center">
       <button className="apply-now-button bg-white px-4 py-2 rounded-xl text-sm font-semibold">
             <span className="shimmer">Apply Now</span>
         </button>
         <ModeToggle/>
       </div>

       
      </div>
    </header>
  )
}

function MobileNav() {
  return (
    <div className="flex flex-col space-y-3">
      {navigationItems.map((item) => (
        <div key={item.title}>
          {item.href ? (
            <Link
              href={item.href}
              className="text-foreground/70 transition-colors hover:text-foreground"
            >
              {item.title}
            </Link>
          ) : (
            <>
              <h4 className="font-medium">{item.title}</h4>
              <ul className="mt-2 space-y-2">
                {item.items?.map((subItem) => (
                  <li key={subItem.title}>
                    <Link
                      href={subItem.href}
                      className="text-foreground/70 transition-colors hover:text-foreground"
                    >
                      {subItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}

    </div>
  )
}

