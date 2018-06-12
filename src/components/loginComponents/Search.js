import React from "react";

const Search = props => (
  <form>
    <div className="form-group">
      <label htmlFor="search">creat new user</label>
      <input
        onChange={props.handleInputChange}
        value={props.value}
        name="username"
        type="text"
        className="form-control"
        placeholder="type username"
        id="username"
      />
      <input
        onChange={props.handleInputChange}
        value={props.value}
        name="password"
        type="text"
        className="form-control"
        placeholder="type password"
        id="password"
      />
      <br />
      <button onClick={props.handleFormSubmit} className="btn btn-primary">
       Create
      </button>
      <button onClick={props.handleloginSubmit} className="btn btn-primary pull-right">
      login
      </button>
    </div>
  </form>
);

export default Search;
