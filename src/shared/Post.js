import React from "react";
import { Card, Media, Content, Heading, Image} from 'react-bulma-components';

export default class postCard extends React.Component {

  componentDidMount = () => {
    this.setState({favourite: false})
    this.setState({following: false})
    this.isFollowing()
    this.isFavourited()
  } 

  isFollowing = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/following/${this.props.userId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.status >= 400) {
        throw new Error("You must be logged in to do this!");
      } else {
        const follow = await response.json();
        this.setState({ following: follow.followed });
      }
    } catch (err) {
      this.setState({
        errMessage: err.message,
      });
    }
  }

  isFavourited = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/favourited/${this.props.recipeId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.status >= 400) {
        throw new Error("You must be logged in to do this!");
      } else {
        const favourite = await response.json();
        this.setState({ favourite: favourite.favourited });
      }
    } catch (err) {
      this.setState({
        errMessage: err.message,
      });
    }
  }

  toggleFollow = () => {
    // if(this.state?.following){
    //   try {
    //     const response = await fetch(
    //       `${process.env.REACT_APP_BACKEND_URL}/following/${this.props.userId}`,
    //       {
    //         method: "GET",
    //         headers: {
    //           Authorization: `Bearer ${localStorage.getItem("token")}`,
    //         },
    //       }
    //     );
    //     if (response.status >= 400) {
    //       throw new Error("You must be logged in to do this!");
    //     } else {
    //       const follow = await response.json();
    //       this.setState({ following: follow.followed });
    //     }
    //   } catch (err) {
    //     this.setState({
    //       errMessage: err.message,
    //     });
    //   }
    // }
    // else {
    //   alert("you clicked toggle follow")
    //   // follow
    // }
  }

  toggleFavourite = () => {
    if(this.state?.favourite){
      // unfavourite
    }
    else {
      // favourite
    }
    alert("you clicked toggle favourite")
  }

  render = () => { 

    return(
    <> 
      <Card style={{width: "80%"}}>
      
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
          {this.props?.post}
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
            {this.props?.title}
            <br />
            {this.props?.blog}
          </Content>
        </Content>
      </Card.Content>
      </a>
      <Card.Footer>
        <Card.Footer.Item renderAs="a" onClick={this.toggleFavourite} href={`/recipe/${this.props?.recipeId}`}>
          {(this.state?.favourite && <> Unfavourite recipe </>) || <>Favourite recipe</>}
        </Card.Footer.Item>
        <Card.Footer.Item renderAs="a" onClick={this.toggleFollow} href={`/user/${this.props?.userId}`}>
          {(this.state?.following && <> Unfollow user </>) || <>Follow user</>}
        </Card.Footer.Item>
      </Card.Footer>
    </Card>
    </>
    )
  }
}
