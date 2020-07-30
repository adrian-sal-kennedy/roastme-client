import React from "react";
import { Card, Media, Content, Heading, Image} from 'react-bulma-components';

export default class postCard extends React.Component {

  render = () => { 

    return(
    <> 
      <Card style={{width: "100%", padding: "10px", marginBottom: "5px"}}>
      
      <a href={`user/${this.props?.userId}`}>
      <Card.Header>
        <Card.Header.Title>        
          <Media>
            <Media.Item>
              <Heading size={4}>{this.props?.username}</Heading>
            </Media.Item>
          </Media>
        </Card.Header.Title>
      </Card.Header>

      </a>
      <a href={`recipe/${this.props?.recipeId}`}>
      <Card.Content>
        <Content style={{align_items: "centre"}}>
          <p>{this.props?.post}</p>
          <br />
        </Content>
        <Content style={{display: "flex"}}>
          <Media.Item position="left" style={{width: "30%"}}>
            <Image
              size="16by9"
              alt="64x64"
              src={`pics/${Math.floor(Math.random() * 26)}.jpg`}
              className="image-crop-cover"
            />
          </Media.Item>
          <Content>
            <h1>{this.props?.title}</h1>
            <br />
            <p>{this.props?.blog}</p>
          </Content>
        </Content>
      </Card.Content>
      </a>
    </Card>
    </>
    )
  }
}
