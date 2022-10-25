import React from "react";

const Links = (props) => {
  return (
    <div className="page-link">
      <div className="container">
        <a href={props.linkto}>
          <button id={props.id}>{props.page}</button>
        </a>
      </div>
    </div>
  );
};

export default Links;
