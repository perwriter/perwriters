"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { AnimatedBeam } from "./animated-beam";

const Square = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 bg-white flex h-40 w-40 items-center justify-center rounded-sm border-2 border-border p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Square.displayName = "Square";

export function AnimatedBeamMultipleOutputDemo({
  className,
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);
  const div9Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex h-screen w-full items-center justify-center overflow-hidden p-6",
        className,
      )}
      ref={containerRef}
    >
      {/* Square grid */}
      <div className="grid grid-cols-5 gap-6 max-w-screen-xl z-10">
        <Square ref={div1Ref}>
          <Image
            src={"../next.svg"}
            width={10000}
            height={10000}
            className="w-20 h-20"
            alt="image"
          />
        </Square>
        <div />
        <Square ref={div2Ref}>
          <Image
            src={"../messenger.svg"}
            height={1000}
            width={1000}
            className="w-20 h-20"
            alt="logo"
          />
        </Square>
        <div />
        <Square ref={div3Ref}>
          <Image
            src={"/logo.svg"}
            width={10000}
            height={10000}
            className="w-20 h-20"
            alt="image"
          />
        </Square>
        <div />
        <Square ref={div4Ref}>
          <Image
            src={"../user.svg"}
            height={1000}
            width={1000}
            className="w-20 h-20"
            alt="logo"
          />
        </Square>
        <div />
        <Square ref={div6Ref}>
          <Image
            src={"../notion.svg"}
            height={1000}
            width={1000}
            className="w-20 h-20"
            alt="logo"
          />
        </Square>
        <div />
        <Square ref={div7Ref} className="bg-white">
          <Image
            src={"../drive.svg"}
            height={1000}
            width={1000}
            className="w-20 h-20"
            alt="logo"
          />
        </Square>
        <div />
        <div />
        <div />
        <Square ref={div8Ref} className="bg-white">
          <Image
            src={"../zapier.svg"}
            height={1000}
            width={1000}
            className="w-20 h-20"
            alt="logo"
          />
        </Square>
        <div />
        <div />
      
        <Square ref={div9Ref} className="bg-white">
          <Image
            src={"../zapier.svg"}
            height={1000}
            width={1000}
            className="w-20 h-20"
            alt="logo"
          />
        </Square>
      </div>

      {/* Animated Beams with lower z-index */}
      <div className="absolute inset-0 z-0">
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div7Ref}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div6Ref}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div6Ref}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div4Ref}
          toRef={div6Ref}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div6Ref}
          toRef={div7Ref}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div4Ref}
          toRef={div8Ref}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div8Ref}
          toRef={div9Ref}
        />
      </div>
    </div>
  );
}
