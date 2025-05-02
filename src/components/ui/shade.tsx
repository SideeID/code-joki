import { cn } from "@/lib/utils";
import { 
   BottomLeftCorner,
   BottomRightCorner,
   TopLeftCorner,
   TopRightCorner
} from "./corners";

export const corners = ["top-left" , "top-right" , "bottom-left" , "bottom-right"] as const
export interface ShadeTypes extends React.ComponentProps<"div"> {
   corners?: "all" | typeof corners[number][],
   cornerClass ?: string
}
export const Shade = ({
   className,
   corners,
   cornerClass,
   ...props
} : ShadeTypes) => (
   <div className={cn("h-16 bg-[repeating-linear-gradient(45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)] relative", className)} {...props}>
      {corners === "all" && (
         <>
         <BottomLeftCorner className={cn(cornerClass)} />
         <BottomRightCorner className={cn(cornerClass)} />
         <TopLeftCorner className={cn(cornerClass)} />
         <TopRightCorner className={cn(cornerClass)} />
         </>
      )}

      {corners?.includes("bottom-left") && <BottomLeftCorner className={cn(cornerClass)} /> }
      {corners?.includes("bottom-right") && <BottomRightCorner className={cn(cornerClass)} /> }
      {corners?.includes("top-left") && <TopLeftCorner className={cn(cornerClass)} /> }
      {corners?.includes("top-right") && <TopRightCorner className={cn(cornerClass)} /> }
   </div>
);

