import Link from 'next/link';

const NAVBAR_ITEMS = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'About',
    link: '/about',
  },
];

const Navbar = () => {
  return (
    <div className="h-14 w-full flex justify-end items-center">
      <ul className="flex">
        {NAVBAR_ITEMS.map((item, index) => (
          <li className="mx-5 my-2 rounded hover:text-gray-500" key={index}>
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
