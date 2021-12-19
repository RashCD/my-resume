import fs from 'node:fs';
import matter from 'gray-matter';
import { GetStaticProps } from 'next';

import Circle from 'components/Circle';
import Card from 'components/Card';
import Profile from 'components/Profile';

interface IMyDetails {
  name: string;
  info: string;
  age: number;
  birthDate: string;
  phoneNumber: number;
}

interface IMyExperiences {
  company: string;
  duration: number;
  position: string;
  task: string;
}

type IHomeProps = {
  posts: IMyDetails[] & IMyExperiences[];
};

const Home = (props: IHomeProps) => {
  const myExperiences = props.posts.filter((data: IMyExperiences) => data.company);

  return (
    <>
      <Profile />
      <div className="flex flex-1 justify-center">
        <div className="flex justify-center mt-5 flex-col w-screen max-w-screen-sm p-1">
          <Circle />
          <Card>
            <span>My Experiences</span>
            {myExperiences.map(({ company, duration, position, task }) => (
              <div key={company}>
                <li>{company}</li>
                <li>{duration}</li>
                <li>{position}</li>
                <li>{task}</li>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(`${process.cwd()}/content/details`);

  const posts = files.map(filename => {
    const markdownWithMetadata = fs.readFileSync(`content/details/${filename}`).toString();

    const { data } = matter(markdownWithMetadata);

    const frontMatter = JSON.parse(JSON.stringify(data));

    return frontMatter;
  });

  return {
    props: {
      posts,
    },
  };
};

export default Home;
