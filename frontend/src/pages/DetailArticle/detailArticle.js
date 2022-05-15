import React from "react";

import { RegisterBg } from "../../assets";
import { useNavigate } from "react-router-dom";

import "./detailArticle.css";
import Button from "../../components/addOns/Button/index";

const DetailArticle = () => {
  const navigate = useNavigate();
  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={RegisterBg} alt="thumb" />
      <p className="blog-title">Title Blog</p>
      <p className="blog-author">Author-Date Post</p>
      <p className="blog-body">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <Button title="Kembali" onClick={() => navigate("/")} />
    </div>
  );
};

export default DetailArticle;
