
interface ButtonProps {
    value: string
    type: "submit" | "reset" | "button"
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    
}

function Button({value,type}:ButtonProps) {
  return (
    <button type={type}>{value}</button>
  )
}

export default Button