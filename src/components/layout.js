import { createMedia } from "@artsy/fresnel";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet"

import {
  Container,
  Menu,
  Segment,
  Sidebar,
  Visibility,
  Dropdown,
} from "semantic-ui-react";
import Footer from "../components/footer";
import { FaBars } from "react-icons/fa";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: true });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;
 
    return (
      <Media greaterThan="mobile">

       
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
              style={{padding: "1em"}}
            >
              <Menu.Item href="https://ashiksimon.com/" position="right">
                <h1
                  style={{
                    fontFamily: "Poppins",
                    fontcolor: "#ffffff",
                    fontWeight: 700,
                  }}
                  className="logo"
                >
                  Ashik Simon
                </h1>
              </Menu.Item>
              <Container>
         
              </Container>
            </Menu>

        {children}
      </Media>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });
  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Media as={Sidebar.Pushable} at="mobile">
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item
              href="https://ashiksimon.com/"
              activeClassName="active"
              position="right"
            >
              Home
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 80, padding: "1em 0em" }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <FaBars size={30} />
                  </Menu.Item>
                  <Menu.Item position="right">
                    <h1
                      href="https://ashiksimon.com/"
                      style={{
                        fontFamily: "Poppins",
                        fontcolor: "#ffffff",
                        fontWeight: 700,
                      }}
                      className="logo"
                    >
                      Ashik Simon
                    </h1>
                  </Menu.Item>
                </Menu>
              </Container>
            </Segment>
            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
};

const ResponsiveContainer = ({ children }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

export default function Layout({ children }) {
  return (
    <div className="Site">
      <Helmet title={"Photo Gallery"}/>
      <div className="Site-content" style={{color: "var(--font-color-base)"}}>
        <ResponsiveContainer style={{background: "#414141"}}>{children}</ResponsiveContainer>
      </div>
      <Footer />
    </div>
  );
}
