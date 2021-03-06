import React from "react";
import styled from "styled-components";
import { foods } from "../Data/FoodData";
import { FoodGrid, Food, FoodLabel } from "./FoodGrid";

const MenuStyled = styled.div`
  height: 1000px;
  margin: 0px 400px 50px 20px;
`;

export const Menu = ({ setOpenFood }) => {
  console.log(Object.entries(foods));
  return (
    <MenuStyled>
      {Object.entries(foods).map(([sectionName, foods]) => (
        <>
          <h1>{sectionName}</h1>
          <FoodGrid>
            {foods.map(food => (
              <Food
                img={food.img}
                key={food.name}
                onClick={() => {
                  setOpenFood(food);
                }}
              >
                <FoodLabel>{food}</FoodLabel>
              </Food>
            ))}
          </FoodGrid>
        </>
      ))}
    </MenuStyled>
  );
};
