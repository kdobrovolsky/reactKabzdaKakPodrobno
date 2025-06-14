
export type AccordionTitlePropsType = {
    title: string
    onClick?: () => void
}

export const AccordionTitle = ({title,onClick}:AccordionTitlePropsType) => {
  return (
    <div>
      <h3 onClick={onClick}>{title}</h3>
    </div>
  );
};
