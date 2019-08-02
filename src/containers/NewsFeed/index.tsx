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
          <Post image={"http://placeimg.com/200/200/nature"} />
          <Post image={"http://placeimg.com/200/200/nature"} />
      </div>
      </Container>
    );
  }
}
