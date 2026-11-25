import { FooterItem } from "./footerItem";
import fbLogo from "../public/facebook.png";
import twLogo from "../public/twitter.png";
import liLogo from "../public/linkedin.png";

export function Footer() {
  return (
    <footer className="pt-12.5 px-4 pb-5 laptop:px-20 laptop:pt-20 laptop:pb-10">
      <div
        id="themes"
        className="
          grid grid-cols-6 gap-4 grid-rows-2 text-xs
          laptop:grid-rows-1 laptop:[&>*]:col-span-1
        "
      >
        <FooterItem heading="Home" category={["Categories", "Devices", "Pricing", "FAQ"]} />
        <FooterItem heading="Movies" category={["Genres", "Trending", "New Release", "Popular"]} />
        <FooterItem heading="Shows" category={["Genres", "Trending", "New Release", "Popular"]} />
        <FooterItem heading="Support" category={["Contact Us"]} />
        <FooterItem heading="Subscription" category={["Plans", "Features"]} />
        <FooterItem heading="Connect With Us" iconsLink={[fbLogo, twLogo, liLogo]} />
      </div>
      <div
        className="
          border-t-1 border-[#262626] mt-10 pt-5
          laptop:flex laptop:justify-between laptop:items-center"
      >
        <p className="subparagraph">@2023 streamix, All Rigths Reserved</p>
        <div className="flex subparagraph mt-5 [&>a]:border-r-1 [&>a]:border-[#262626] [&>a]:px-3">
          <a className="">Terms of Use</a>
          <a>Privacy Policy</a>
          <a className="border-none">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
