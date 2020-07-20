import React from "react";

export default class RandomPic extends React.Component {
  constructor(props) {
    super(props);
    const pics = [
      { alt: "Hasselback potatoes", url: "stockpics/focus.jpg" },
      {
        alt: "Crackers shot softly and dizzyingly with a tilt-shift lens",
        url: "stockpics/crackers-tiltshift.jpg",
      },
      {
        alt: "Pao De Queijo with chunky tomato bits",
        url: "stockpics/pao-de-queijo.jpg",
      },
    ];
    const rnd = Math.floor(Math.random() * 3);
    this.state = { url: pics[rnd].url, alt: pics[rnd].alt };
  }
  render() {
    return (
      <figure className="image">
        <img src={this.state.url} alt={this.state.alt} />
      </figure>
    );
  }
}
