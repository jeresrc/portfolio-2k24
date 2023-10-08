interface IProps {
  children: React.ReactNode;
}

function Chip({ children }: IProps) {
  return <div className="px-2 py-1">{children}</div>;
}

export default Chip;
