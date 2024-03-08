import {cn} from "@/utils/cn";

interface ChipProps {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  blur?: "sm" | "md" | "lg";
  rounded?: "sm" | "md" | "lg" | "xl" | "2xl";
  className?: string;
}

export function Chip({children, variant, blur = "sm", rounded = "2xl", className}: ChipProps) {
  return (
    <div
      className={cn(
        `flex max-w-fit items-center rounded-${rounded} px-4 py-1 ${`backdrop-blur-${blur}`}`,
        variant == "primary" ? "border-[1px] border-[#0004] dark:border-[#fff4]" : "bg-[#0004]",
        className,
      )}
    >
      {children}
    </div>
  );
}
