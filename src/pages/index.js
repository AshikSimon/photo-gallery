import "../styles/semantic.css"
import React from 'react'
import {
  Grid,
  Header,
  Segment,
} from 'semantic-ui-react'
import Layout from "../components/layout"
  

const HomepageLayout = () => (
  <Layout>
    <Segment style={{ padding: "4em 0em", background: "var(--theme-background1)" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={16} textAlign="center">
            <Header as="h3" style={{ fontSize: "2em" }}>
              About Me
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus
              in mollis nunc sed id semper risus in hendrerit. Eu ultrices vitae
              auctor eu augue ut lectus arcu. Fames ac turpis egestas sed. Neque
              sodales ut etiam sit amet nisl purus. Nec feugiat nisl pretium
              fusce id velit ut tortor pretium. Lacus sed viverra tellus in hac
              habitasse platea dictumst vestibulum. Augue ut lectus arcu
              bibendum at varius vel pharetra. Sed lectus vestibulum mattis
              ullamcorper velit sed ullamcorper morbi tincidunt. Volutpat odio
              facilisis mauris sit amet massa. Fusce ut placerat orci nulla. Nec
              feugiat nisl pretium fusce.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    </Layout>
)
export default HomepageLayout