import React from 'react';
import StarRating from './StarRating';
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { exportAllDeclaration } from '@babel/types';
it('renders 5 stars by default', () => {
  const { getByTestId, queryByTestId } = render(<StarRating />);
  expect(queryByTestId("StarRating").children.length).toBe(5);
});

it('renders a specified number of stars', () => {
  const {getByTestId, getAllByTestId,queryByTestId} = render(<StarRating starCount={2}/>);
  expect(queryByTestId("StarRating").children.length).toBe(2);
  
});

it('renders empty stars with color #bbb by default', () => {
  const {getByTestId, getAllByTestId,queryByTestId} = render( <StarRating starCount={2} value={0} />);
  expect(getAllByTestId("FontAwesome")[0].getAttribute("color")).toBe("#bbb")
  expect(getAllByTestId("FontAwesome")[1].getAttribute("color")).toBe("#bbb")

  

});

it('renders empty stars with the color of the emptyColor value', () => {
  const {getByTestId, getAllByTestId,queryByTestId} = render( <StarRating starCount={2} value={0} emptyColor={"rgb(128,128,128)"}/>);
  expect(getAllByTestId("FontAwesome")[0].getAttribute("color")).toBe("rgb(128,128,128)")
  expect(getAllByTestId("FontAwesome")[1].getAttribute("color")).toBe("rgb(128,128,128)")
});

it('renders filled stars as yellow by default', () => {
  const {getByTestId, getAllByTestId,queryByTestId} = render( <StarRating starCount={2} value={2} />);
  expect(getAllByTestId("FontAwesome")[0].getAttribute("color")).toBe("yellow")
  expect(getAllByTestId("FontAwesome")[1].getAttribute("color")).toBe("yellow")

});

it('renders filled stars with the color of the filledColor value', () => {
  const {getByTestId, getAllByTestId,queryByTestId} = render( <StarRating starCount={2} value={2} filledColor={"red"} />);
  expect(getAllByTestId("FontAwesome")[0].getAttribute("color")).toBe("red")
  expect(getAllByTestId("FontAwesome")[1].getAttribute("color")).toBe("red")
});

it('renders a star using the 1x size by default', () => {
  const {getByTestId, getAllByTestId,queryByTestId} = render( <StarRating starCount={1} value={1} filledColor={"red"} />);
  expect(getAllByTestId("FontAwesome")[0]).toHaveClass("fa-1x")
});

it('renders a star using the size value', () => {
  const {getByTestId, getAllByTestId,queryByTestId} = render( <StarRating starCount={1} value={1} filledColor={"red"} size="2x"/>);
  expect(getAllByTestId("FontAwesome")[0]).toHaveClass("fa-2x")
});

it('renders 0 filled stars when value is 0', () => {
  const {getByTestId, getAllByTestId,queryByTestId} = render( <StarRating starCount={3} value={0} filledColor={"red"} />);
  expect(getAllByTestId("FontAwesome")[0].getAttribute("color")).not.toBe("red")
  expect(getAllByTestId("FontAwesome")[1].getAttribute("color")).not.toBe("red")
  expect(getAllByTestId("FontAwesome")[2].getAttribute("color")).not.toBe("red")

});

it('renders filled stars equal to value when value is greater than 0', () => {
  const {getByTestId, getAllByTestId,queryByTestId} = render( <StarRating starCount={4} value={2} filledColor={"red"} />);
  expect(getAllByTestId("FontAwesome")[0].getAttribute("color")).toBe("red")
  expect(getAllByTestId("FontAwesome")[1].getAttribute("color")).toBe("red")
  expect(getAllByTestId("FontAwesome")[2].getAttribute("color")).not.toBe("red")
  expect(getAllByTestId("FontAwesome")[2].getAttribute("color")).not.toBe("red")

});

it('updates when clicking on an empty star', () => {

});

it('sets the value to 0 when clicking on a filled star', () => {

});
