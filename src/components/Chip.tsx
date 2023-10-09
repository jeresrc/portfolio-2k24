interface IProps {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  blur: "sm" | "md" | "lg";
}

function Chip({ children, variant, blur }: IProps) {
  return (
    <div
      className={`px-4 py-1 w-fit rounded-2xl bg-[#0004] ${`backdrop-blur-${blur}`}`}
    >
      {children}
    </div>
  );
}

export default Chip;
