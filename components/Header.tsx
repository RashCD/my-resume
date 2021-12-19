export const Header = ({ title, description }: { title: string; description: string }) => (
  <div className="shadow-md">
    <div className="bg-white flex h-12 px-3 py-0 font-bold text-lg items-center relative">
      <div className="">{title}</div>
    </div>
    <div className="bg-white h-48">{description}</div>
  </div>
);
