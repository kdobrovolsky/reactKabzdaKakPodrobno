import { Accordion } from "./components/accordion/Accordion";
import { Rating } from "./components/accordion/Rating";

export const App = () => {
  return (
    <div>
      <AppTitle title="This is APP component"/>
      <Rating value={3} />
      <Accordion title="Menu" collapsed={true} />
      <Accordion title="Users" collapsed={false} />
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />

    </div>
  );
};


export type AppTitlePropsType = {
  title: string
}

export const AppTitle = ({title}:AppTitlePropsType) => {
  return <h3>{title}</h3>;
};






