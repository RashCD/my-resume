import FacebookIcon from './Icon/FacebookIcon';
import GithubIcon from './Icon/GithubIcon';
import LinkedInIcon from './Icon/LinkedInIcon';
import TwitterIcon from './Icon/TwitterIcon';

type SocialIconType = {
  type: 'Facebook' | 'Twitter' | 'Github' | 'LinkedIn';
  url: string;
};

const DynamicIconComponent = {
  FacebookIcon,
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
};

const SocialIcon: React.FC<SocialIconType> = ({ type, url }) => {
  const Icon = DynamicIconComponent[`${type}Icon`];

  return (
    <a target="_blank" href={url} rel="noreferrer">
      <Icon />
    </a>
  );
};

export default SocialIcon;
