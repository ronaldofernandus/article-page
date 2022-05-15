import React from "react";
import { Routes, Route } from "react-router-dom";

import PostingPage from "../../pages/PostingPage/PostingPage";
import ListPostingPage from "../../pages/PostingPage/ListPostingPage";
import AddPostingPage from "../../pages/PostingPage/AddPostingPage";
import EditPostingPage from "../../pages/PostingPage/EditPostingPage";

const Content = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="posting" element={<PostingPage></PostingPage>}>
          <Route path="" element={<ListPostingPage></ListPostingPage>}></Route>
          <Route path="add" element={<AddPostingPage></AddPostingPage>}></Route>
          <Route path="edit">
            <Route
              path=":id"
              element={<EditPostingPage></EditPostingPage>}
            ></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default Content;
