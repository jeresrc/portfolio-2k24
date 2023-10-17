interface IProps {
  children: React.ReactNode
  variant: 'primary' | 'secondary'
  blur: 'sm' | 'md' | 'lg'
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

function Chip({ children, variant, blur, rounded }: IProps) {
  return (
    <div
      className={`max-w-fit rounded-${
        rounded ?? '2xl'
      } px-4 py-1 ${`backdrop-blur-${blur}`} ${
        variant == 'primary'
          ? 'border-[1px] border-[#0004] dark:border-[#fff4]'
          : 'bg-[#0004]'
      }
`}
    >
      {children}
    </div>
  )
}

export default Chip
