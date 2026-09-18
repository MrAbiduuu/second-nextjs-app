import React from "react";
import FoodCard from "../components/FoodCard";

const MenuPage = async () => {
  const res = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods",
  );
  const data = await res.json();
  const foods = data.data;
  console.log("food data", foods);
  return (
    <div>
      <h1>Menu page</h1>
      <div className="grid grid-cols-3 gap-4">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
