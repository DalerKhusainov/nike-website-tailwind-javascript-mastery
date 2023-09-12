// NEXTJS HOOKS
import Link from "next/link";
import Image from "next/image";
// FROM ASSETS
import { footerLogo } from "../../public/images";
import { copyrightSign } from "../../public/icons";
// FROM CONSTANTS
import { socialMedia, footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="padding text-white bg-black padding-y padding-t pb-8"
    >
      <div className="max-container">
        <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
          {/* LOGO & ICONS WRAPPER START */}
          <div className="flex flex-col items-start">
            <Link href="/">
              <Image
                src={footerLogo}
                alt="Footer logo"
                width={150}
                height={46}
              />
            </Link>
            <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
              Get shoes ready for the new term at your nearest Nike store. Find
              Your perfect Size in Store. Get Rewards
            </p>
            <div className="flex items-center gap-5 mt-8">
              {socialMedia.map((icon) => (
                <div
                  key={icon.alt}
                  className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                >
                  <Image src={icon.src} alt={icon.alt} width={24} height={24} />
                </div>
              ))}
            </div>
          </div>
          {/* LOGO & ICONS WRAPPER END */}
          {/* FOOTER LINKS START */}
          <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link) => (
                    <li
                      key={link.name}
                      className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                    >
                      <Link href={link.link}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {/* FOOTER LINKS END */}
          </div>
        </div>
        {/* FOOTER BOTTOM START */}
        <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
          <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
            <Image
              src={copyrightSign}
              alt="copy right sign"
              width={20}
              height={20}
              className="rounded-full m-0"
            />
            <p>Copyright. All rights reserved.</p>
          </div>
          <p className="cursor-pointer font-montserrat">Terms & Conditions</p>
        </div>
        {/* FOOTER BOTTOM END */}
      </div>
    </footer>
  );
};

export default Footer;
