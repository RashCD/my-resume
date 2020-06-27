import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticProps } from 'next';

import Circle from 'components/Circle';
import Card from 'components/Card';

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

const Header = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="shadow-md">
      <div className="bg-white flex h-12 px-3 py-0 font-bold text-lg items-center relative">
        <div className="">{title}</div>
      </div>
      <div className="bg-white h-48">{description}</div>
    </div>
  );
};

const Home = (props: IHomeProps) => {
  const myDetails = props.posts.filter((data: IMyDetails) => data.name);
  const myExperiences = props.posts.filter((data: IMyExperiences) => data.company);

  const { name, info } = myDetails[0];

  return (
    <div>
      <Header title={name} description={info} />
      <div className="flex flex-1 justify-center">
        <div className="flex justify-center mt-5 flex-col w-screen max-w-screen-sm p-1">
          <Circle />
          <Card>
            <span>My Experiences</span>
            {myExperiences.map(({ company, duration, position, task }) => {
              return (
                <div key={company}>
                  <li>{company}</li>
                  <li>{duration}</li>
                  <li>{position}</li>
                  <li>{task}</li>
                </div>
              );
            })}
          </Card>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(`${process.cwd()}/content/details`);

  const posts = files.map(filename => {
    const markdownWithMetadata = fs.readFileSync(`content/details/${filename}`).toString();

    const { data } = matter(markdownWithMetadata);

    const frontmatter = JSON.parse(JSON.stringify(data));

    return frontmatter;
  });

  return {
    props: {
      posts,
    },
  };
};

export default Home;
