import React from "react";
import styles from "./MyPosts.module.css";

import MediumCard from "../medium-card/MediumCard";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";

export default function MyPosts() {
  const [posts, setPosts] = React.useState();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (window.localStorage.getItem("token")) {
      axios
        .get("/userPosts")
        .then((res) => {
          setPosts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return navigate("/");
    }
  }, [navigate]);

  return (
    <section className={styles.myPosts}>
      <div className="container">
        <div className={styles.cards}>
          {(posts ? posts : [...Array(5)]).map((post, index) =>
            posts ? (
              <MediumCard key={post._id} post={post} />
            ) : (
              <MediumCard key={index} isLoading={true} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
