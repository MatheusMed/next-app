import { GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { Post } from "../../types/Posts";

type Props = {
  post: Post

};

function blogItem({ post }: Props) {


  return (
    <div>
      <h1>Blog</h1>
      <h1>{post.id}</h1>
      <h2>{post.body}</h2>
      <p>{post.title}</p>
    </div>
  );

}


export default blogItem;


export const getStaticPaths = async () => {
  const resp = await fetch('https://jsonplaceholder.typicode.com/posts');

  const posts: Post[] = await resp.json();

  const paths = posts.map((post) => ({
    params: {
      id: post.id.toString(),
    }
  }));
  return { paths, fallback: false };

}

interface IParams extends ParsedUrlQuery {
  id: string;
}
export const getStaticProps: GetStaticProps = async (context) => {

  const { id } = context.params as IParams;

  const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  const post = await resp.json();


  return {
    props: {
      post
    }
  };

}