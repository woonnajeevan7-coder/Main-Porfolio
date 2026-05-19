import * as React from "react";
import { cva } from "class-variance-authority";
import "./GlassButton.css";

function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}

const glassButtonVariants = cva(
  "glass-button relative isolate cursor-pointer rounded-full transition-all flex items-center justify-center",
  {
    variants: {
      size: {
        default: "text-base font-semibold",
        sm: "text-sm font-semibold",
        lg: "text-lg font-bold",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const glassButtonTextVariants = cva(
  "glass-button-text relative block select-none tracking-tight",
  {
    variants: {
      size: {
        default: "px-8 py-4",
        sm: "px-5 py-2.5",
        lg: "px-10 py-5",
        icon: "flex h-full w-full items-center justify-center",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const GlassButton = React.forwardRef(
  ({ className, children, size, contentClassName, ...props }, ref) => {
    return (
      <div className={cn("glass-button-wrap group", className)}>
        <button
          className={cn(glassButtonVariants({ size }))}
          ref={ref}
          {...props}
        >
          <span className={cn(glassButtonTextVariants({ size }), contentClassName)}>
            {children}
          </span>
        </button>
        <div className="glass-button-shadow rounded-full"></div>
      </div>
    );
  }
);

GlassButton.displayName = "GlassButton";

export { GlassButton, glassButtonVariants };
