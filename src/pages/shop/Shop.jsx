import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Shop = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  async function fetchItems() {
    try {
      const res = await axios.get(
        "https://fortnite-api.theapinetwork.com/upcoming/get"
      );
      const data = res.data.data;
      setItems(data);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      {items.map(
        (item, index) =>
          index < 10 &&
          (
            <h1 key={item.itemId}>
              <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
            </h1>
          )
        )}
    </div>
  );
};

export default Shop;
