type RatingPropsType = {
  value: number;
};

export const Rating = ({ value }: RatingPropsType) => {
    return (
      <div>
        <Star selected={value > 0} />
        <Star selected={value > 1} />
        <Star selected={value > 2} />
        <Star selected={value > 3} />
        <Star selected={value > 4} />
      </div>
    );
};

type StarPropsType = {
  selected: boolean;
};

export const Star = ({ selected }: StarPropsType) => {
  if (selected) {
    return (
      <span>
        <b>star</b>{" "}
      </span>
    );
  } else {
    return <span>star </span>;
  }
};
