import React, { Component } from "react";

export default class test extends Component {
  constructor(props) {
    super(props);
  }

  onInputChange = (event) => {
    const key = event.target.id;
    if (event.target?.files) {
      this.setState({
        [key]: event.target.files[0]
      })
    } else {
      this.setState({
        [key]: event.target.value,
      });
    }
  };

  onFormSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData()
    for (let key in this.state) {
      data.append(`bookmark[${key}]`, this.state[key])
    }
    console.log(data)
    const response = await fetch(
      `https://localhost:3000/bookmarks`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: data,
      }
    );
  };

  render() {
    return (
      <>
        <h1>Create a bookmark</h1>
        <form onSubmit={this.onFormSubmit} encType="multipart/form-data">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={this.onInputChange}
          />
          <label htmlFor="description">blog</label>
          <textarea
            name="blog"
            id="blog"
            onChange={this.onInputChange}
          ></textarea>
          <label htmlFor="image">Image</label>
          <input
            type="file"
            name="image"
            id="image"
            onChange={this.onInputChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}