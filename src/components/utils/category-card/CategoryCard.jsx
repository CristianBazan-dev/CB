import React from "react";
import "./categoryCard.css";
import Tick from "../../../assets/icons/tick.svg?react";
import { Link } from "react-router-dom";

function CategoryCard({ title, content, items, img, contact }) {
  return (
    <div className="category-card">
      <div className="title">
        <h4>{title}</h4>
      </div>

      <div className="description">
        <p>{content}</p>
      </div>

      <ul className="items">
        {items.map((item) => {
          return (
            <li>
              <Tick />  {item}
            </li>
          );
        })}
      </ul>

      <img src={img} alt="" />

      <Link to={contact} target="_blank">
        <button>Obtener mi {title}</button>
      </Link>
    </div>
  );
}

export default CategoryCard;
