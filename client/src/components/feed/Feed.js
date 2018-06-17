import React from 'react';
import { Card, Container } from 'semantic-ui-react';
import Masonry from 'react-masonry-component';
import { Tweet } from './../../components';
import momentCustom from './../../utils/momentCustom';

momentCustom();

const Feed = ({ items }) => {
  const renderFeed = () => {
    if (!items.length) return <div> Nothing to see here...</div>;

    return items.map(item => <Tweet tweet={item} key={item._id} />);
  };

  return (
    <Container>
      <Masonry
        options={{
          itemSelector: '.card',
          percentPosition: true,
          transitionDuration: 0
        }}>
        <Card.Group itemsPerRow={3} stackable doubling>
          {renderFeed()}
        </Card.Group>
      </Masonry>
    </Container>
  );
};

export default Feed;
