import { Slot } from "@radix-ui/react-slot";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";
import gsap from "gsap";
import { entranceAnimations } from "@/libs/animations/entranceAnimation";

const tooltipVariants = cva(
  `absolute z-50 rounded-md text-sm font-medium px-3 py-2 whitespace-nowrap pointer-events-none`,
  {
    variants: {
      variant: {
        dark: "bg-slate-900 text-white shadow-lg",
        light: "bg-white text-gray-800 shadow-lg border border-gray-200",
        primary: "bg-indigo-600 text-white shadow-lg",
      },
      size: {
        sm: "text-xs px-2 py-1",
        md: "text-sm px-3 py-2",
        lg: "text-base px-4 py-3",
      },
    },
    defaultVariants: {
      variant: "dark",
      size: "md",
    },
  }
);

type TooltipPosition = "top" | "bottom" | "left" | "right";

interface TooltipProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tooltipVariants> {
  asChild?: boolean;
  content: string;
  position?: TooltipPosition;
  delay?: number;
  animation?: keyof typeof entranceAnimations;
}

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      content,
      position = "top",
      delay = 200,
      animation = "fadeIn",
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "div";
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const tooltipRef = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const positionStyles: Record<TooltipPosition, React.CSSProperties> = {
      top: {
        bottom: "100%",
        left: "50%",
        transform: "translateX(-50%)",
        marginBottom: "8px",
      },
      bottom: {
        top: "100%",
        left: "50%",
        transform: "translateX(-50%)",
        marginTop: "8px",
      },
      left: {
        right: "100%",
        top: "50%",
        transform: "translateY(-50%)",
        marginRight: "8px",
      },
      right: {
        left: "100%",
        top: "50%",
        transform: "translateY(-50%)",
        marginLeft: "8px",
      },
    };

    const arrowStyles: Record<TooltipPosition, string> = {
      top: "left-1/2 -translate-x-1/2 top-full border-t-current border-x-transparent border-b-transparent",
      bottom:
        "left-1/2 -translate-x-1/2 bottom-full border-b-current border-x-transparent border-t-transparent",
      left: "top-1/2 -translate-y-1/2 left-full border-l-current border-y-transparent border-r-transparent",
      right:
        "top-1/2 -translate-y-1/2 right-full border-r-current border-y-transparent border-l-transparent",
    };

    useEffect(() => {
      if (visible && tooltipRef.current && animation !== "none") {
        gsap.set(tooltipRef.current, { opacity: 0 });
        entranceAnimations[animation]?.(tooltipRef.current);
      }
    }, [visible, animation]);

    const handleMouseEnter = () => {
      timeoutRef.current = setTimeout(() => {
        setVisible(true);
      }, delay);
    };

    const handleMouseLeave = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      if (tooltipRef.current) {
        gsap.to(tooltipRef.current, {
          opacity: 0,
          duration: 0.15,
          onComplete: () => setVisible(false),
        });
      } else {
        setVisible(false);
      }
    };

    return (
      <Comp
        ref={(node) => {
          wrapperRef.current = node as HTMLDivElement;
          if (typeof ref === "function") ref(node as HTMLDivElement);
          else if (ref)
            (ref as React.MutableRefObject<HTMLDivElement | null>).current =
              node;
        }}
        className={cn("relative inline-block", className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {children}
        {visible && (
          <div
            ref={tooltipRef}
            className={cn(tooltipVariants({ variant, size }))}
            style={positionStyles[position]}
            role="tooltip"
          >
            {content}
            <span
              className={cn(
                "absolute w-0 h-0 border-[5px]",
                arrowStyles[position]
              )}
            />
          </div>
        )}
      </Comp>
    );
  }
);

Tooltip.displayName = "Tooltip";

export { Tooltip, tooltipVariants };
