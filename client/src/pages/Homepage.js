import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment"; 

const Homepage = () => {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/comments").then((response) => {
      const data = response.data;
      //reverse array so that newest comment shows up first
      const revData = data.reverse();
      setCommentList(revData);
    });
  }, []);

  return (
    <div className="homePage">
      <div className="homePageHeader">
        <h1>Post A Comment</h1>
      </div>
      <div className="commentContainer">
        <div className="commentList">
          {commentList.map((value, index) => {
            const time = value.createdAt;
            return (
              <div key={value.id} className="comment">
                <div className="commentHeader">
                  <div className="user">{value.username}</div>
                  <div className="time">{moment(time).fromNow()}</div>
                </div>
                <div className="body">{value.commentText}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
