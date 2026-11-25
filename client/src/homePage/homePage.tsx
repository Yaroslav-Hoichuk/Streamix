import "./homePage.css";
import phonologo from "../public/iphone.png";
import tabletlogo from "../public/tablet.png";
import tvlogo from "../public/tv.png";

import { DeviceInfo } from "./deviceInfo";
import { FaqComponent } from "./faqComponent";
import { TopicHeader } from "./topicHeader";
import { useState } from "react";
import { MemberPlan } from "./memberPlan";
const DESC =
  "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store";

export const HomePage = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <>
      <div
        id="bannerContainer"
        className="
          flex justify-center items-end text-center
          h-51
          laptop:h-204"
      >
        <h1
          className="
          text-white text-2xl font-bold
            laptop:mb-35  laptop:text-5xl"
        >
          The Best Streaming Experience
        </h1>
      </div>
      <div
        id="siteDescription"
        className="
          text-center
          "
      >
        <p
          className="
            subparagraph laptop:text-[20px] laptop:text-[#bdbdbd] laptop:-mt-30
            "
        >
          Streamix is the best streaming experience for watching your favorites movies and shows on
          demand. Anytime! Anywhere!
        </p>
      </div>
      <button className="flex justify-center items-center text-sm bg-red-600 mt-7 mb-25 mx-auto rounded-md px-6 py-3.5 gap-1 font-semibold laptop:text-xl">
        <span className="material-symbols-outlined ">play_arrow</span>
        <p>Start Watching Now</p>
      </button>

      <div className="mx-4 laptop:mx-20">
        <div id="category-container">
          <div id="preview-text" className="mb-10">
            <TopicHeader
              heading="Explore our wide variety of categoties"
              description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a
              documentary to learn something new"
              textSize={24}
            />
          </div>
          <div id="scrol-horizontal-category-container" className="">
            <div
              id="scroll-category-list"
              className="
              flex gap-5 [&>div]:w-44.5 [&>div]:rounded-xl [&>div]:h-50 [&>div]:bg-[#1A1A1A]
            overflow-x-scroll [&>div]:shrink-0 scrollbar-thumb-red-600 scrollbar-gutter-stable pb-6
               laptop:[&>div]:w-60 laptop:[&>div]:rounded-xl laptop:&>div]:h-70 
            "
            >
              <div>
                <p>Action</p>
              </div>
              <div>
                <p>Adventure</p>
              </div>
              <div>
                <p>Horror</p>
              </div>
              <div>
                <p>Comedy</p>
              </div>
              <div>
                <p>Trailer</p>
              </div>
              <div>
                <p>Fantasy</p>
              </div>
            </div>
          </div>
        </div>

        <div id="supporting-device-container" className="mt-12.5">
          <TopicHeader
            heading="We Provide you streaming experience across various devices"
            description="With Streamix, you can enjoy your favorite movies and TV shows anytime, anywhere."
          />

          <div
            id="support-device-list"
            className="mt-10 laptop:grid laptop:grid-cols-4 laptop:gap-x-5 laptop:[&>*]:col-span-2"
          >
            <DeviceInfo deviceLogo={phonologo} deviceName={"Smartphones"} />
            <DeviceInfo deviceLogo={tabletlogo} deviceName={"Tablets"} />
            <DeviceInfo deviceLogo={tvlogo} deviceName={"Smart TV"} />
            <DeviceInfo deviceLogo={phonologo} deviceName={"Laptops"} />
          </div>
        </div>

        <div id="question-container" className="mt-20">
          <div id="question--form">
            <TopicHeader
              heading="Frequently Asked Questions"
              description="Got questions? We've got answers! Check out our FAQ section to find answers to the
              most common questions about StreamVibe."
            />

            <button className="mt-5 button bg-red-600">Ask a Question</button>
          </div>

          <div id="faq-list" className="mt-10 grid laptop:grid-cols-2">
            <FaqComponent
              number="01"
              heading="What is Streamix?"
              description={DESC}
              underline={2}
            />

            <FaqComponent
              number="02"
              heading="How much does Streamix cost?"
              description={DESC}
              underline={2}
            />

            <FaqComponent
              number="03"
              heading="What content is available on Streamix"
              description={DESC}
              underline={2}
            />

            <FaqComponent
              number="04"
              heading="How can I watch Streamix"
              description={DESC}
              underline={2}
            />

            <FaqComponent
              number="05"
              heading="How do I sign up for Streamix"
              description={DESC}
              underline={2}
            />

            <FaqComponent
              number="06"
              heading="What is the Streamix free trial?"
              description={DESC}
              underline={0}
            />
          </div>
        </div>

        <div className="mb-20" id="memberPlan-container">
          <div id="member-plan" className="mt-20">
            <TopicHeader
              heading="Choose the plan that's right for you"
              description="Join Streamix and select from our flexible subscription options tailored to suit your
            viewing preferences. Get ready for non-stop entertainment!"
            />
            <div
              id="timeline-slider"
              className="relative flex justify-between p-2 border border-[#333333]
    text-center rounded-md bg-[#0F0F0F] w-fit text-sm mt-5 mb-10"
            >
              <div
                className={`absolute top-2 bottom-2 left-2 w-[calc(50%-0.5rem)]
    rounded-md bg-[#292929] transition-transform duration-300 ease-in-out
    ${clicked ? "translate-x-full" : "translate-x-0"}`}
              />

              <button
                onClick={() => setClicked(false)}
                className={`relative z-10 px-5 py-3 rounded-md
      transition-colors duration-300
      ${!clicked ? "text-white" : "text-[#999999]"}`}
              >
                Monthly
              </button>

              <button
                onClick={() => setClicked(true)}
                className={`relative z-10 px-5 py-3 rounded-md
      transition-colors duration-300
      ${clicked ? "text-white" : "text-[#999999]"}`}
              >
                Yearly
              </button>
            </div>
            <div className="laptop:flex  laptop:gap-5">
              <MemberPlan
                summary="9.99"
                heading="Basic Plan"
                description="Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles."
              />

              <MemberPlan
                summary="12.99"
                heading="Standard Plan"
                description="Access to a wider selection of movies and shows, including most new releases and exclusive content"
              />
              <MemberPlan
                summary="14.99"
                heading="Premium Plan"
                description="Access to a widest selection of movies and shows, including all new releases and Offline Viewing"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
