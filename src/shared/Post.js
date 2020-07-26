import React from "react";
import Markdown from "react-markdown";
// import { Link } from "react-router-dom";
// import { Card, Media, Content, Heading } from 'react-bulma-components';

export default class postCard extends React.Component {
  state = {
    postMarkdown: {
      title: "Test Title",
      body: `
# Heading

## Subheading

## unordered list
* list item 1
* list item 2

## ordered List
1. someting
2. something else
3. I misspelled something on point 1

## List Item 1

here is a bit of text just for you, dawg.

Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit sequi hic voluptates repellendus. Et a sequi fugiat! Quod, voluptate quam dolorem iste reprehenderit facilis eos impedit repudiandae similique cum beatae molestias nemo quaerat porro mollitia, eaque ipsam asperiores fuga deleniti enim rerum accusantium. Veniam possimus, molestiae aliquam magnam nihil quibusdam?
        `,
    },
  };
  render() {
    return (
      <div className="general-container">
        <div className="card-container">
          <h1 className="md">{`${this.state.postMarkdown?.title}`}</h1>
          <Markdown color="is-white" className="md" source={this.state.postMarkdown?.body} />
          {/* <Link to="/recipe/1">
                        <Card>
                            <Card.Image size="4by3" src="" />
                            <Card.Content>
                            <Media>
                                <Media.Item>
                                <Heading size={4}>"placeholder1 "</Heading>
                                <Heading subtitle size={6}>"placeholder2"</Heading>
                                </Media.Item>
                            </Media>
                            <Content>
                                placeholder3
                            </Content>
                            </Card.Content>
                            <Card.Footer>
                                <Card.Footer.Item renderAs="div" href="#Yes">
                                    <Link to="/user/1">User</Link>
                                </Card.Footer.Item>
                            </Card.Footer>
                        </Card>
                    </Link> */}
        </div>
      </div>
    );
  }
}
