import { useEffect, useState } from "react";
import "../App.css";

const Feed = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  const redditUrl = "https://www.reddit.com";

  const api = {
    popular: "https://www.reddit.com/r/all/top.json",
  };

  const getData = async () => {
    const response = await fetch(
      `https://www.reddit.com/search.json?q=${query}`
    )
      .then((data) => data.json())
      .then((data) => setData(data.data.children));
  };

  return (
    <>
      <div className="m-auto d-flex align-items-center justify-content-center  m-5">
        <input
          className="h5 text-dark m-1"
          type="text"
          placeholder="Search Reddit"
          onChange={(e) => setQuery(e.target.value)}
        />
        &nbsp;
        <input type="submit" className="m-3 btn btn-dark" onClick={getData} />
      </div>
      <div className="h-100 w-50 m-auto d-flex align-items-center justify-content-center border">
        <br />
        <div id="display">
          {data.map((post) => (
            <>
              <div id="post">
                <div id="subreddit" key={post.data.id}>
                  {post.data.subreddit_name_prefixed}&nbsp;
                </div>
                <div id="title">
                  <a href={`${redditUrl}${post.data.permalink}`}>
                    {post.data.title}
                  </a>
                </div>
                <div id="image">
                  {post.data.url.includes(".png") ||
                  post.data.url.includes("jpg") ? (
                    <img src={post.data.url} alt="no picture" />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Feed;
