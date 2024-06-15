import React from "react";
import { Link, useParams } from "react-router-dom";

import "./CategoryPage.css";

import Search from "../search/Search";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import categories from "../../content/categories.json";
import LargeCard from "../large-card/LargeCard";
import axios from "../../axios";

export default function CategoryPage() {
  const params = useParams();
  const [posts, setPosts] = React.useState();
  React.useEffect(() => {
    axios.get("/" + params.category).then((post) => setPosts(post.data));
  }, []);
  const [toggleSwitch, setToggleSwitch] = React.useState(false);

  return (
    <div className="categoryPage">
      <Search />
      <div className="container">
        <div className="page-container">
          <main>
            <Breadcrumbs categories={[params.category]} />
            <h1 className="categoryPage__title">
              {categories[params.category].title}
            </h1>
            <ul className="categoryPage__links">
              {!params.subCategory &&
                categories[params.category].links.map((link) => {
                  return (
                    <li key={link.route} className="categoryPage__links-item">
                      <Link
                        to={link.route}
                        className="categoryPage__links-link"
                      >
                        {link.title}
                      </Link>
                    </li>
                  );
                })}
            </ul>
            <hr className="categoryPage__line" />
            <div className="categoryPage__subscribeORadd">
              <div className="categoryPage__subscribe">
                <div
                  className={`categoryPage__favourites-toggle ${
                    toggleSwitch ? "active" : ""
                  }`}
                  onClick={() => setToggleSwitch((prev) => !prev)}
                ></div>
                <p className="categoryPage__toggle-title">
                  Подписаться на обновления в этой категории
                </p>
              </div>
              <Link to="/" className="add-post categoryPage__add-post">
                Подать объявление
              </Link>
            </div>
            <div className="categoryPage__cards">
              {(posts ? posts : [...Array(5)]).map((post, index) =>
                posts ? (
                  <LargeCard key={index} post={post} />
                ) : (
                  <LargeCard key={index} isLoading={true} />
                )
              )}
            </div>
            {/* <ul className="categoryPage__number-list">
              <div className="categoryPage__number-list-start">
                <li>
                  <Link to={`${url}/page/1`}>1</Link>
                </li>
                <li>
                  <Link to={`${url}/page/2`}>2</Link>
                </li>
                <li>...</li>
              </div>
              <div className="categoryPage__number-list-end">
                <li>...</li>
                <li>
                  <Link to={`${url}/page/3`}>122</Link>
                </li>
                <li>
                  <Link to={`${url}/page/4`}>123</Link>
                </li>
              </div>
            </ul> */}
          </main>
          <aside></aside>
        </div>
      </div>
    </div>
  );
}
