import React from "react";

function search(props) {
  const onChange = (e) => {
   
    props.handleChange(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("searching...");
    props.searchMovies();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} />
        <button type="submit"> <i className="fa fa-search" /></button>
      </form>
    </div>
  );
}

export default search;
