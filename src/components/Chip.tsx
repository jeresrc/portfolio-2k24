interface IProps {
  children: React.ReactNode
  variant: 'primary' | 'secondary'
  blur: 'sm' | 'md' | 'lg'
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

export function Chip({children, variant, blur, rounded = '2xl'}: IProps) {
  return (
    <div
      className={`flex max-w-fit items-center rounded-${rounded} px-4 py-1 ${`backdrop-blur-${blur}`} ${
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
