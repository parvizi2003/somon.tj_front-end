import React from "react";
import styles from "./Home.module.css";
import axios from "../../../axios";
import { useNavigate } from "react-router-dom";
import Card from "../card/Card";

export default function Home() {
  const [posts, setPosts] = React.useState();
  const navigate = useNavigate();
  React.useEffect(() => {
    axios
      .get("/admin/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
        navigate("/admin/login");
      });
  }, []);
  return (
    <section className={styles.home}>
      <div className="container">
        <div className={styles.cards}>
          {posts && console.log(posts.length)}
          {(posts ? posts : [...Array(8)]).map((post, index) =>
            posts ? (
              <Card key={post._id} post={post} />
            ) : (
              <Card key={index} isLoading={true} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
