import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transform-gpu preserve-3d",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg hover:scale-105 hover:-translate-y-1 active:scale-95 active:translate-y-0",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md hover:shadow-lg hover:scale-105 hover:-translate-y-1 active:scale-95",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm hover:shadow-md hover:scale-105 hover:-translate-y-1 active:scale-95",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm hover:shadow-md hover:scale-105 hover:-translate-y-1 active:scale-95",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:scale-105 hover:-translate-y-1 active:scale-95",
        link: "text-primary underline-offset-4 hover:underline hover:scale-105 active:scale-95",
        hero: "btn-glow text-primary-foreground font-semibold backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-110 hover:-translate-y-2 active:scale-100 active:translate-y-0 transition-all duration-300 ease-out",
        gradient: "bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 active:scale-95",
        glass: "bg-card/20 backdrop-blur-md border border-border/50 text-foreground hover:bg-card/30 hover:border-primary/50 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 active:scale-95",
        floating: "bg-primary text-primary-foreground shadow-lg hover:shadow-2xl animate-float-3d hover:scale-110 hover:-translate-y-3 transition-all duration-500 ease-out",
      },
      size: {
        default: "h-10 px-4 py-2 text-sm",
        sm: "h-8 rounded-md px-3 text-xs sm:h-9 sm:px-3 sm:text-sm",
        lg: "h-10 rounded-md px-6 text-sm sm:h-11 sm:px-8 sm:text-base",
        xl: "h-12 rounded-lg px-8 text-base sm:h-14 sm:px-10 sm:text-lg",
        icon: "h-8 w-8 sm:h-10 sm:w-10",
        responsive: "h-8 px-3 text-xs sm:h-10 sm:px-4 sm:text-sm md:h-11 md:px-6 md:text-base lg:h-12 lg:px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
