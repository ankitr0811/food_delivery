import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "./../components/card";
import Carousal from "../components/Carousal";

export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItems, setFoodItems] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setFoodItems(response[0]);
    setFoodCat(response[1]);
    //console.log(response[0], response[1]);
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        {" "}
        <Navbar />
      </div>
      <div>
        <Carousal />
      </div>

      <div className="container">
        {foodCat !== [] ? (
          foodCat.map((data) => {
            return <div>{data.CategoryName}</div>;
          })
        ) : (
          <div>'''''''''</div>
        )}

        <Card />
      </div>

      <div>
        {" "}
        <Footer />
      </div>
    </div>
  );
}
