"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import "@/app/components/header/background-boxes/background-boxes.css";

let colors = [
  "#00145A",
  "#F3EAF0",
  "#A14CE5",
  "#9D8EF2",
  "#F6C6F0",
  "#333BFF",
];
const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

export const BoxesCore = ({
  className,
  ...rest
}) => {
  const rows = new Array(50).fill(1);
  const cols = new Array(30).fill(1);


  return (
    <div
      className={cn(
        "absolute -top-1/4 left-1/4 z-0 flex h-full w-full -translate-x-1/2 -translate-y-1/2 p-4 transform-custom",
        className
      )}
      {...rest}>
      {rows.map((_, i) => (
        <motion.div key={`row` + i} className="relative h-20 w-40 ">
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: `${getRandomColor()}`,
                transition: { duration: 0 },
              }}
              key={`col` + j}
              className="relative h-20 w-40  ">
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="pointer-events-none absolute -top-[14px] -left-[22px] h-6 w-10 stroke-[1px] text-slate-700">
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
