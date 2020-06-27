import Circle from 'components/Circle';
import Card from 'components/Card';

const Header = (): JSX.Element => {
  return (
    <div className="shadow-md">
      <div className="bg-white flex h-12 px-3 py-0 font-bold text-lg items-center relative">
        <div className="">title here</div>
      </div>
      <div className="bg-white h-48">hero here</div>
    </div>
  );
};

const Content = (): JSX.Element => {
  return (
    <div className="flex flex-1 justify-center">
      <div className="flex justify-center mt-5 flex-col w-screen max-w-screen-sm p-1 border">
        <Circle />
        <Card />
      </div>
    </div>
  );
};

const Home = (): JSX.Element => {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
};

export default Home;
