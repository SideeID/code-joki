import { cn } from "@/lib/utils"

export const BottomLeftCorner = ({
   className,
   ...props
} : React.ComponentProps<"span">) => (
   <span aria-hidden="true" className={cn("absolute left-0 bottom-0 border-l border-b border-primary size-3", className)} {...props}></span>
)
export const BottomRightCorner = ({
   className,
   ...props
} : React.ComponentProps<"span">) => (
   <span aria-hidden="true" className={cn("absolute right-0 bottom-0 border-r border-b border-primary size-3", className)} {...props}></span>
)
export const TopLeftCorner = ({
   className,
   ...props
} : React.ComponentProps<"span">) => (
   <span aria-hidden="true" className={cn("absolute left-0 top-0 border-l border-t border-primary size-3", className)} {...props}></span>
)
export const TopRightCorner = ({
   className,
   ...props
} : React.ComponentProps<"span">) => (
   <span aria-hidden="true" className={cn("absolute right-0 top-0 border-r border-t border-primary size-3", className)} {...props}></span>
)