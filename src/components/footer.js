import React from "react";
import {
  Segment,
  Grid,
  List,
  Header,
  Container,
  GridColumn,
  Divider,
} from "semantic-ui-react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
function Footer(props) {
  return (
    <Segment
      className="footer"
      inverted
      vertical
      style={{ padding: "2em 0em" }}
    >
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={16} textAlign="center">
              <p style={{color: "var(--font-color-base)"}}>&copy; Copyright 2020, Ashik Simon</p>
            </Grid.Column>     
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
}

export default Footer;
