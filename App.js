import * as React from "react";
import Head from "react-helmet";
import { Router, Route, browserHistory, Link } from "react-router";
import {
  createApp,
  renderApp,
  createContainer,
  query,
  BodyRenderer,
  textRenderer
} from "@phenomic/preset-react-app/lib/client";

import HomeContainer from "./Home";
import Layout from "./Layout";
import PageError from "./PageError";

const DefaultPostLayout = ({ title, body }) => (
  <article>
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content={textRenderer(body).slice(0, 150) + "…"}
      />
    </Head>
    <h1>{title}</h1>
    <BodyRenderer>{body}</BodyRenderer>
  </article>
);

const HeroPostLayout = ({ title, body }) => (
  <article>
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content={textRenderer(body).slice(0, 150) + "…"}
      />
    </Head>
    <div style={{ padding: "4rem", background: "pink", color: "#fff" }}>
      <h1>{title}</h1>
    </div>
    <BodyRenderer>{body}</BodyRenderer>
  </article>
);

const PostLayouts = {
  default: DefaultPostLayout,
  hero: HeroPostLayout
};

const BlogPost = ({ hasError, isLoading, page }) => {
  if (hasError) {
    return <PageError error={page.error} />;
  }

  const PostLayout =
    (page.node && PostLayouts[page.node.layout]) || PostLayouts.default;
  return (
    <Layout>
      {isLoading && "Loading..."}
      {!isLoading && page.node && <PostLayout {...page.node} />}
      <footer>
        <Link to="/">Go to home</Link>
      </footer>
    </Layout>
  );
};

const BlogPostContainer = createContainer(BlogPost, props => ({
  page: query({ path: "posts", id: props.params.splat })
}));


const routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={HomeContainer} />
    <Route path="/after/:after" component={HomeContainer} />
    <Route path="/blog/*" component={BlogPostContainer} />
    <Route path="*" component={PageError} />
  </Router>
);

export default createApp(routes);

if (module.hot) {
  module.hot.accept(() => renderApp(routes));
}
