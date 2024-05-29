import React from "react";
import Search from "../search/Search";
import Categories from "../categories/Categories";
import Commodities from "../commodities/Commodities";
import Stories from "../stories/Stories";
import IndexText from "../popular/IndexText";

function Home() {
  return (
    <>
      <Search />
      <Categories />
      <Commodities />

      <Stories />
      <IndexText />
    </>
  );
}

export default Home;
