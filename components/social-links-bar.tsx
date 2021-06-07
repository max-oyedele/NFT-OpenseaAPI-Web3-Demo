import Link from "next/link"

const SocialLinksBar = (props) => {
  const { socialLinks } = props;

  return (
    <div className="relative">
      <div className="w-full h-16 bg-grayBg opacity-60 bg-blend-multiply rounded-xl"></div>
      <div className="absolute inset-0 grid grid-cols-8 gap-x-1 px-6 md:px-16 py-2 md:py-4">
        {socialLinks.map((item, index) => (
          <div key={index} className="flex justify-center items-center cursor-pointer">
            <Link href={item.link}>
              <img src={item.icon} alt={item.name} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialLinksBar;
