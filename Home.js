import * as React from "react";
import Head from "react-helmet";
import { Link } from "react-router";
import { createContainer, query } from "@phenomic/preset-react-app/lib/client";

import Layout from "./Layout";

import "./main.css";

const Home = ({ isLoading, posts }) => (
    <Layout>
        <Head>
        <title>Hello world!</title>
        <meta name="description" content="Everything is awesome!" />
        </Head>
        <header className="t-a:c">
            <h1 className="f:10 f-f:sans f-w:800 t-t:u">RV Mendoza</h1>
        </header>

        {isLoading && "Loading..."}

        <div>
					<p>
							I’m a <a href="https://github.com/RVMendoza" target="_blank">front-end web developer</a> and Detroit, Michigan is my home.
					</p>

					<p>
						HTML, CSS, and javascript are a given, but <a href="http://vimeo.com/68470326" target="_blank">doing the right thing</a> is what I care about the most.
					</p>
				</div>




        {!isLoading && (
        <ul>
            {posts &&
            posts.node &&
            posts.node.list &&
            posts.node.list.map(post => (
                <li key={post.id}>
                <Link to={`/blog/${post.id}/`}>{post.title || post.id}</Link>
                </li>
            ))}
        </ul>
        )}

        <div>
        {posts.node &&
            posts.node.hasPreviousPage && (
                <Link
                to={
                    posts.node.previousPageIsFirst ? (
                    `/`
                    ) : (
                    `/after/${posts.node.previous}/`
                    )
                }
                >
                Newer posts
                </Link>
            )}{" "}
            {posts.node &&
            posts.node.hasNextPage && (
                <Link to={`/after/${posts.node.next}/`}>Older posts</Link>
            )}
        </div>
    </Layout>
  );

  const HomeContainer = createContainer(Home, props => ({
    posts: query({
      path: "posts",
      limit: 2,
      after: props.params.after
    })
  }));


export default HomeContainer;