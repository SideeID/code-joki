"use client"

import { motion } from "motion/react";
import { Button } from "./button";
import { useCallback, useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export const ScrollToTop = () => {
   const [isVisible, setIsVisible] = useState(false)

   const handleVisible = useCallback(() => {
      if(window.scrollY > 100){
         setIsVisible(true)
      }else{
         setIsVisible(false)
      }
   }, [setIsVisible])

   useEffect(() => {
      window.addEventListener("scroll", handleVisible)

      return () => {
         window.removeEventListener("scroll", handleVisible)
      }
   }, [handleVisible])

   return (
      <motion.div 
         animate={{
            translateY: isVisible ? "0" : "200%"
         }}
         className={cn("fixed right-3 bottom-3 z-30", !isVisible && "sr-only")}>
         <Button 
            onClick={() => {
               window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth"
               })
            }}
            variant={"secondary"}
            className="rounded-full"
            >
            <span className="sr-only md:not-sr-only">Ke atas</span>
            <ArrowUp />
         </Button>
      </motion.div>
   )
};
