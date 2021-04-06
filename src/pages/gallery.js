import "../styles/semantic.css";
import React , { useState, useEffect } from "react";
import { Grid, Header, Segment } from "semantic-ui-react";
import Layout from "../components/layout";
import { photos } from "../images/gallery/gallery";
import { SRLWrapper } from "simple-react-lightbox";
import Gallery from "react-photo-gallery";
import SimpleReactLightbox from "simple-react-lightbox";
import "react-lazy-load-image-component/src/effects/blur.css";

/*}
const imageRenderer = ({ left, top, key, photo }) => (
  <div style={{margin: '6px 8px 6px 8px'}} className="centered" > 
  <LazyLoadImage
    width={photo.width}
    height={photo.height}
    key={key}
    src={photo.src}
    effect="blur"
  />
  </div>
);
*/

export default function PhotoGallery() {
    useEffect(() => {
      photos.map(photo => {
        photo.loading = "lazy";
        return photo;
      });
    }, []);

return(
  <Layout>
    <Segment
      style={{ padding: "4em 0em", background: "var(--theme-background1)" }}
      vertical
    >
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={16} textAlign="center" >
            <Header as="h3" style={{ fontSize: "2em" }}>
              Gallery
            </Header>
            <SimpleReactLightbox>
              <SRLWrapper>
                <Gallery 
                  photos={photos}
                  margin={8}
                />
              </SRLWrapper>
            </SimpleReactLightbox>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </Layout>
);
}
