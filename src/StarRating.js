import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Star({ number, value, onClick, emptyColor, filledColor, size }) {
  function handleClick() {
    onClick(number === value ? 0 : number);
  }

  return (
    <span
      data-testid="Star"
      className="clickable"
      onClick={handleClick}
      data-index={`star-${number}`}
    >
      <FontAwesomeIcon
        icon={faStar}
        color={number <= value ? filledColor : emptyColor}
        size={size}
        data-testid="FontAwesome"
      />
    </span>
  );
}

export default function StarRating(props) {
  const {
    className,
    value,
    onClick,
    emptyColor = "#bbb",
    filledColor = "yellow",
    size = "1x",
    starCount = 5
  } = props;

  return (
    <span className={className} data-testid="StarRating">
      {[...Array(starCount).keys()].map(position => {
        return (
          <Star
            emptyColor={emptyColor}
            filledColor={filledColor}
            size={size}
            number={position + 1}
            value={value}
            key={position}
            onClick={onClick}
          />
        );
      })}
    </span>
  );
}
