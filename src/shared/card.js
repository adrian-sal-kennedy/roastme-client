import React from "react";
// import { Link } from "react-router-dom";
import { Card, Media, Content, Heading, Image } from "react-bulma-components";

export default class recipeCard extends React.Component {
  render() {
    return (
      <Card>
        <Card.Header>
          <Card.Header.Title>Title</Card.Header.Title>
        </Card.Header>
        <Card.Content>
          <Media>
            <Media.Item renderAs="figure" position="left">
              <Image
                size="16by9"
                alt="64x64"
                src="http://bulma.io/images/placeholders/128x128.png"
              />
            </Media.Item>
            <Media.Item>
              <Heading size={4}>John Smith</Heading>
              <Heading subtitle size={6}>
                @johnsmith
              </Heading>
            </Media.Item>
          </Media>
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris. <a>@bulmaio</a>.<a href="#1">#css</a>{" "}
            <a href="#2">#responsive</a>
            <br />
            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </Content>
        </Card.Content>
        <Card.Footer>
          <Card.Footer.Item renderAs="a" href="#Yes">
            Yes
          </Card.Footer.Item>
          <Card.Footer.Item renderAs="a" href="#No">
            No
          </Card.Footer.Item>
          <Card.Footer.Item renderAs="a" href="#Maybe">
            Maybe
          </Card.Footer.Item>
        </Card.Footer>
      </Card>
    );
  }
}

//     render() {
//         return(
//             <div className="general-container">
//                 <div className="card-container">
//                     <Link to="/recipe/1">
//                         <Card>
//                             {/* <Card.Image size="4by3" src="" /> */}
//                             <Card.Content>
//                             <Media>
//                                 <Media.Item>
//                                 <Heading size={4}>"placeholder1 "</Heading>
//                                 <Heading subtitle size={6}>"placeholder2"</Heading>
//                                 </Media.Item>
//                             </Media>
//                             <Content>
//                                 placeholder3
//                             </Content>
//                             </Card.Content>
//                             <Card.Footer>
//                                 <Card.Footer.Item renderAs="div" href="#Yes">
//                                     <Link to="/user/1">User</Link>
//                                 </Card.Footer.Item>
//                             </Card.Footer>
//                         </Card>
//                     </Link>
//                 </div>
//             </div>
//         )
//     }
// }
