import React from "react";

// import mini components
import IconRead from '../../assets/svg/icons/icon-read.svg';
import CardVideo from '../utils/cards/card-video/index';
import { seasons } from "../constants/seasons";

import "./home.scss";

class Home extends React.Component {
  render() {
    return (
      <section className="section-home" id="/">

        <div className="content-banner">

          <h1 className="title section-home__title l-inner-p l-inner-mx32">
            developer advocate at
            <span className="section-home__content-cta">heroku
              <a 
              className="btn btn-cta btn-visit" 
              href="https://www.heroku.com/"
              target="_blank"
              rel="noopener noreferrer"
              >
                visit</a>
            </span>
          </h1>

        </div>

        <div className="content-stay-tuned">

          <p className="section-home__description l-inner-p">
            stay tuned for more live <span className="tag-nodejs">Node.js</span>
          </p>
          <a className="btn btn-twitch"
             href="https://www.twitch.tv/julianduque"
             target="_blank"
             rel="noopener noreferrer"
          >go to twitch
          </a>
        </div>

        <div className="content-recommended recommended l-inner-p">
          
          <h2 className="title recommended-title">
            mis recomendados
          </h2>

          <div className="recent-videos l-outer-mx32">

            <h3 className="title recent-videos__title l-outer-m">
              videos más recientes
            </h3>

            <CardVideo 
              nameList="recent-video"
              url="#"
              banner={seasons.season01.episode01.banner()}
              title={seasons.season01.episode01.title}
            />
            <CardVideo 
              nameList="recent-video"
              url="#"
              banner={seasons.season01.episode01.banner()}
              title={seasons.season01.episode01.title}
            />
            <CardVideo 
              nameList="recent-video"
              url="#"
              banner={seasons.season01.episode01.banner()}
              title={seasons.season01.episode01.title}
            />

          </div>

          <div className="recent-posts l-outer-mx32">

            <h3 className="title recent-posts__title l-outer-m">publicaciones recientes</h3>
            
            <a className="post-link" href="#" aria-label="posts">
              <article className="post-article last-post">
                <h2 className="post-article__title">
                  Deploying Node.js microservices to ZEIT ▲ Now
                </h2>
                <p className="post-article__description">
                  ZEIT Now is a cloud platform to deploy serverless applications, one of the things I like the most about Now...
                </p>
                <div className="icon icon-blog">
                  <span className="icon-read">
                    <IconRead />
                  </span>
                </div>
              </article>
            </a>

            <a className="post-link" href="#" aria-label="posts">
              <article className="post-article last-post">
                <h2 className="post-article__title">
                  Deploying Node.js microservices to ZEIT ▲ Now
                </h2>
                <p className="post-article__description">
                  ZEIT Now is a cloud platform to deploy serverless applications, one of the things I like the most about Now...
                </p>
                <div className="icon icon-blog">
                  <span className="icon-read">
                    <IconRead />
                  </span>
                </div>
              </article>
            </a>

            <a className="post-link" href="#" aria-label="posts">
              <article className="post-article last-post">
                <h2 className="post-article__title">
                  Deploying Node.js microservices to ZEIT ▲ Now
                </h2>
                <p className="post-article__description">
                  ZEIT Now is a cloud platform to deploy serverless applications, one of the things I like the most about Now is their DX (Developer Experience), it makes it very pleasant to deploy microservices to the cloud...
                </p>
                <div className="icon icon-blog">
                  <span className="icon-read">
                    <IconRead />
                  </span>
                </div>
              </article>
            </a>

            </div>

        </div>

      </section>
    );
  }
}

export default Home;