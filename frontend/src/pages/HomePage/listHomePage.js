import React, { useState, useEffect } from "react";
import { LoginBg } from "../../assets";
import { Button } from "../../components/addOns";
import { useNavigate } from "react-router-dom";
import { getPosting } from "../../actions/postingAxios";
import "./listHomePage.css";

const ListHomePage = () => {
  const [Posting, setPosting] = useState([]);
  useEffect(() => {
    getPosting((result) => setPosting(result));
  }, []);

  const navigate = useNavigate();

  const nextHandler = () => {
    navigate("/DetailArticle");
  };

  return (
    <div className="blog-item">
      {Posting.length > 0 ? (
        Posting.map((postingResult) => {
          const { image, title, content, UserId } = postingResult;

          return (
            <div className="content-detail">
              <img className="image-thumb" src={image} alt="post" />
              <p className="title">{title}</p>
              <p className="author">{UserId}</p>
              <p className="body">{content}</p>
              <Button title="View Detail" onClick={() => nextHandler()} />
            </div>
          );
        })
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default ListHomePage;
