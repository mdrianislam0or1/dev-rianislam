"use client"

import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import Navbar from "./Navbar"

const TransitionProvider = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname()
  return (
    <AnimatePresence mode="wait">
      {/* w-screen h-screen  bg-gradient-to-r from-rose-200 to-yellow-200 */}
      <div key={pathName} className="
      
    bg-indigo-950
      
      ">
        <motion.div
          className="h-screen w-screen fixed bg-blackFaded rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {pathName.substring(1)}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-blackFaded rounded-t-[100px] bottom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">
          {children}
        </div>
      </div>
    </AnimatePresence>
  )
}

export default TransitionProvider
