import SocialIcon from './SocialIcon';

type ProfileTypes = {
  name?: string;
  title?: string;
  position?: string;
  description?: string;
  social?: mySocialTypes;
};

type mySocialTypes = {
  facebook?: string;
  twitter?: string;
  github?: string;
  linkedin?: string;
};

const Profile: React.FC<ProfileTypes> = props => {
  const {
    name = 'Rashidi',
    position = 'Software Engineer',
    description = 'Hi welcome to my website',
  } = props;

  return (
    <div className="p-4 relative mt-16">
      <div className="text-center mb-4 absolute -top-16 right-1/2 transform translate-x-1/2">
        <div className="block relative">
          <img
            alt="profile"
            src="https://image.shutterstock.com/image-photo/word-example-written-on-magnifying-600w-1883859943.jpg"
            className="mx-auto object-cover rounded-full h-40 w-40  border-2 border-white dark:border-gray-800"
          />
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow px-8 py-4 pt-24">
        <div className="text-center">
          <p className="text-2xl text-gray-800 dark:text-white">{name}</p>
          <p className="text-xl text-gray-500 dark:text-gray-200 font-light">{position}</p>
          <p className="text-md text-gray-500 w-60 dark:text-gray-400 mx-auto py-4 font-light">
            {description}
          </p>
        </div>
        <div className="pt-8 flex border-t border-gray-200 w-40 mx-auto text-gray-500 items-center justify-between">
          <SocialIcon type="Facebook" url="https://www.freecodecamp.org/" />
          <SocialIcon type="Twitter" url="https://www.freecodecamp.org/" />
          <SocialIcon type="Github" url="https://www.freecodecamp.org/" />
          <SocialIcon type="LinkedIn" url="https://www.freecodecamp.org/" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
