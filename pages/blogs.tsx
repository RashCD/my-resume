import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticProps } from 'next';

interface IBlogProps {
  posts: {
    slug: string;
    frontmatter: IMarkdownPost;
  }[];
}

interface IMarkdownPost {
  title: string;
  description: string;
  updatedAt: Date;
}

export default function Blogs({ posts }: IBlogProps) {
  return (
    <div>
      {posts.map(({ frontmatter: { title, description, updatedAt } }, index) => (
        <article key={index}>
          <header>
            <h3>{title}</h3>
            <span>{updatedAt}</span>
          </header>
          <section>
            <p>{description}</p>
          </section>
        </article>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(`${process.cwd()}/content/posts`);

  const posts = files.map(filename => {
    const markdownWithMetadata = fs.readFileSync(`content/posts/${filename}`).toString();

    const { data } = matter(markdownWithMetadata);

    const frontmatter = JSON.parse(JSON.stringify(data));

    return {
      slug: filename.replace('.md', ''),
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
};
