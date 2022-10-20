import { useEffect, useState } from "react";
import "../App.css";

const Feed = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [popular, setPopular] = useState([]);

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

  const getPopular = async () => {
    const response = await fetch("https://www.reddit.com/r/popular.json")
      .then((data) => data.json())
      .then((data) => setPopular(data.data.children));
  };

  console.log(popular);

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
        <input
          type="submit"
          value="SEARCH"
          className="m-3 btn btn-dark"
          onClick={getData}
        />
        <div id="top-posts">
          <button className="m-3 btn btn-dark" onClick={getPopular}>
            GET TOP POSTS
          </button>
        </div>
      </div>
      <div className="h-100 w-50 m-auto d-flex align-items-center justify-content-center">
        <br />

        <div id="display">
          {popular.map((post) => (
            <>
              <a
                target="_blank"
                className="h4 text-decoration-none text-dark"
                href={`${redditUrl}${post.data.permalink}`}
              >
                <div key={post.data.id} id="post">
                  <div id="author">Posted by: {post.data.author} </div>
                  <div
                    id="subreddit"
                    className="h6 text-dark"
                    key={post.data.id}
                  >
                    {post.data.subreddit_name_prefixed}&nbsp;
                  </div>

                  <div id="title">{post.data.title}</div>
                  <div id="image" className="m-2">
                    {post.data.url.includes(".png") ||
                    post.data.url.includes("jpg") ? (
                      <img src={post.data.url} alt="no picture" />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </a>
            </>
          ))}
        </div>
      </div>

      <div className="h-100 w-50 m-auto d-flex align-items-center justify-content-center">
        <br />

        <div id="display">
          {data.map((post) => (
            <>
              <a
                target="_blank"
                className="h4 text-decoration-none text-dark"
                href={`${redditUrl}${post.data.permalink}`}
              >
                <div key={post.data.id} id="post">
                  <div
                    className="h6 text-dark"
                    id="subreddit"
                    key={post.data.id}
                  >
                    {post.data.subreddit_name_prefixed}&nbsp;
                  </div>
                  <div id="title">{post.data.title}</div>
                  <div id="image">
                    {post.data.url.includes(".png") ||
                    post.data.url.includes("jpg") ? (
                      <img src={post.data.url} alt="no picture" />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </a>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Feed;
