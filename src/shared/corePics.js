import React from "react";

var corePicList = [
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
function RandomPicUrl() {
    const rnd = Math.floor(Math.random() * 3);
    console.log(corePicList[rnd].url)
    return corePicList[rnd].url
}
class RandomPic extends React.Component {
  constructor(props) {
    super(props);
    const rnd = Math.floor(Math.random() * 3);
    this.state = { url: corePicList[rnd].url, alt: corePicList[rnd].alt };
  }
  render() {
    return (
      <figure className="image">
        <img src={this.state.url} alt={this.state.alt} />
      </figure>
    );
  }
}

export { RandomPic as default, RandomPicUrl };
