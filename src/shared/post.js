import React from 'react';
import { Link } from "react-router-dom";
import { Card, Media, Content, Heading } from 'react-bulma-components';

export default class postCard extends React.Component {
    
    render() {
        return(
            <div className="general-container">
                <div className="card-container">
                    <Link to="/recipe/1">
                        <Card>
                            {/* <Card.Image size="4by3" src="" /> */}
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
                    </Link>
                </div>
            </div>
        )

    }
}