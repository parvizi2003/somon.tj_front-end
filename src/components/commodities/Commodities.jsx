import React from "react";
import "./Commodities.css";
import CategoryGallery from "../categoryGallery/CategoryGallery";
import { Link } from "react-router-dom";

export default function Commodities() {
  return (
    <section className="commodities">
      <div className="container">
        <CategoryGallery
          title={"Электромобили"}
          route={"/transport"}
          gridColumns={6}
        />
        <CategoryGallery
          title={"Электромобили"}
          route={"/transport"}
          gridColumns={6}
        />
        <CategoryGallery
          title={"Электромобили"}
          route={"/transport"}
          gridColumns={6}
        />
        <CategoryGallery
          title={"Электромобили"}
          route={"/transport"}
          gridColumns={6}
        />
        <CategoryGallery
          title={"Новые объявления"}
          route={"/transport"}
          gridColumns={4}
          cardsCount={8}
        />
        <Link to="/search" className="all-announcement">
          Все объявления
        </Link>
      </div>
    </section>
  );
}
