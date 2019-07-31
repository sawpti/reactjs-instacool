import * as React from 'react';
import Post from '../../components/Post'
import Container from '../../components/Container';
export default class NewsFeed extends React.Component {
  public render() {
    return (
      <Container>
        <div style={{
          margin:'0 auto'
        }}>
          <Post image={"http://lorempixel.com/200/200"} />
          <Post image={"http://lorempixel.com/200/200"} />
      </div>
      </Container>
    );
  }
}
