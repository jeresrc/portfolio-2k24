interface IProps {
  children: React.ReactNode;
  variant: "primary" | "secondary";
}

function Chip({ children, variant }: IProps) {
  return <div className="px-4 py-1 w-fit rounded-2xl">{children}</div>;
}

export default Chip;
