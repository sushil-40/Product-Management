import React, { useState } from "react";

export const ChallengeBlog = () => {
  const [count, setCount] = useState({ likes: 0, dislikes: 0 });
  const [inputComment, setInputComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleOnChange = (e) => {
    setInputComment(e.target.value);
  };

  const counter = (type) => {
    setCount((prevCounts) => ({ ...prevCounts, [type]: prevCounts[type] + 1 }));
  };
  const handleOnPost = () => {
    setComments([...comments, inputComment]);
  };

  return (
    <div className="blog-wrapper">
      <div className="blog-container">
        <div className="blog-content p-5">
          <div className="blog" style={{ border: "1px solid blue" }}>
            <h3>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
              non debitis harum totam necessitatibus aspernatur magni, fugiat
              quod earum ducimus.
            </h3>
          </div>

          <div className="interaction mt-2 d-flex gap-2">
            <div>
              <span className="count-like">{count.likes} &nbsp;</span>
              <button type="button" onClick={() => counter("likes")}>
                <i className="fa-solid fa-thumbs-up"></i>
              </button>
            </div>
            <div>
              <span className="count-dislike">{count.dislikes} &nbsp;</span>
              <button type="button" onClick={() => counter("dislikes")}>
                <i className="fa-regular fa-thumbs-down"></i>
              </button>
            </div>
            <div>
              <span className="count-comment">5 &nbsp;</span>
              <button type="button">
                <i className="fa-solid fa-comment"></i>
              </button>
            </div>
          </div>
          <div className="comments-container mt-2">
            <div className="ms-5 mt-3">
              <textarea
                onChange={handleOnChange}
                id="comments"
                rows={3}
                cols={30}
                placeholder="Write your comment"
              />

              <button type="button" onClick={handleOnPost}>
                Post
              </button>
            </div>
            {comments.map((cment, i) => {
              return (
                <div className="comments-list" key={i}>
                  {cment}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
