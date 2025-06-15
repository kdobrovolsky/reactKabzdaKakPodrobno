type ButtonPropsType = {
    title: string
    className?: string
    onClick?: () => void
}

export const Button = ({title,className,onClick}:ButtonPropsType) => {
  return (
      <button className={className} onClick={onClick}>{title}</button>
  );
};
