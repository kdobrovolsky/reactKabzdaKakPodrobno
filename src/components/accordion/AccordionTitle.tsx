
export type AccordionTitlePropsType = {
    title: string
}

export const AccordionTitle = ({title}:AccordionTitlePropsType) => {
  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
};
