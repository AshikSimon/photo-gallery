import React from "react";
import { Card, Grid } from "semantic-ui-react";

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
function CourseCards(props) {
  //const images = props.images;
  const names = props.names;

  return (
    <Grid.Row className="centered" >
      <Grid.Column width={16}>
      <Card.Group className="centered">
        <Card>
          {props.image1}
          <Card.Content>
            <Card.Header>{names[0]}</Card.Header>

            <Card.Description>
              
            </Card.Description>
          </Card.Content>
        </Card>

        <Card>
          {props.image2}
          <Card.Content>
            <Card.Header>{names[1]}</Card.Header>

            <Card.Description>
              
            </Card.Description>
          </Card.Content>
        </Card>

        <Card style={props.style_last}>
          {props.image3}
          <Card.Content>
            <Card.Header>{names[2]}</Card.Header>

            <Card.Description>
              
            </Card.Description>
          </Card.Content>
        </Card>
        
      </Card.Group>
      </Grid.Column>
    </Grid.Row>
  );
}

export default CourseCards;
