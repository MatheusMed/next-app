import { Post } from "../../types/Posts";

type Props = {
  posts: Post[]

}

function Blog({ posts }: Props) {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((item, index) => (
          <div key={index} style={{ padding: '10px', flexDirection: 'column', margin: '10px' }} >
            <li >
              titulo: <a href={`/blog/${item.id}`}>{item.title}</a>
            </li>

          </div>
        ))}
      </ul>
    </div>

  );
}

export const getStaticProps = async () => {

  const resp = await fetch('https://jsonplaceholder.typicode.com/posts');

  const posts: Post[] = await resp.json();

  return {
    props: {
      posts
    },
    revalidate: 7200
  }

}


export default Blog;