import { useState } from "react";
import { GetServerSideProps } from "next";

import SocialLinksBar from "components/social-links-bar";
import Modal from "components/modal";
import ReadMoreLess from "components/read-more-less";
import ActionBy from "components/action-by";
import ConnectWalletButton from "components/connect-wallet";

import seaport from "libs/opensea-js";

const HomePage = (props) => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: "icons/Instagram.svg",
      link: "https://www.instagram.com/elliepritts/?hl=en",
    },
    {
      name: "TikTok",
      icon: "icons/TikTok.svg",
      link: "https://www.tiktok.com/@elliepritts?lang=en",
    },
    {
      name: "Twitter",
      icon: "icons/Twitter.svg",
      link: "https://twitter.com/elliepritts?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
    },
    {
      name: "Snapchat",
      icon: "icons/Snapchat.svg",
      link: "https://www.snapchat.com/add/elliepritts",
    },
    {
      name: "Vimeo",
      icon: "icons/Vimeo.svg",
      link: "https://vimeo.com/elliepritts",
    },
    {
      name: "Youtube",
      icon: "icons/Youtube.svg",
      link: "https://www.youtube.com/channel/UC5AGFmvVder22_TRLrQorCg",
    },
    {
      name: "Twitch",
      icon: "icons/Twitch.svg",
      link: "https://www.twitch.tv/elliepritts",
    },
    {
      name: "LinkedIn",
      icon: "icons/LinkedIn.svg",
      link: "https://www.linkedin.com/in/elliepritts/",
    },
  ];

  const [viewAsset, setViewAsset] = useState(null);

  const { assets, error } = props;
  console.log("assets", assets);

  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full">
        <img
          src="/images/background.svg"
          className="object-cover w-full"
          alt="background"
        />
      </div>
      <div className="absolute inset-0">
        <div
          className={`flex flex-col items-center px-6 md:px-32 ${
            viewAsset ? "filter blur-sm" : ""
          }`}
        >
          <span className="font-neuebit text-white text-5xl text-shadow uppercase  border-blue-border mt-14">
            ellie pritts
          </span>

          <div className="absolute top-5 right-5">
            <ConnectWalletButton />
          </div>

          <div className="w-full mt-16">
            <SocialLinksBar socialLinks={socialLinks} />
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-4">
            {assets?.map((asset, index) => (
              <div
                key={index}
                className="h-48 flex justify-center items-center border-2 border-white cursor-pointer"
                onClick={() => setViewAsset(asset)}
              >
                <img
                  src={asset.imageUrl}
                  className="object-cover h-full"
                  alt="asset"
                />
              </div>
            ))}
          </div>
        </div>

        {viewAsset && (
          <Modal setOpenModal={setViewAsset}>
            <div className="w-full">
              <div className="relative flex justify-center items-center p-2">
                <div
                  className="absolute inset-0 flex items-center cursor-pointer p-2"
                  onClick={() => setViewAsset(null)}
                >
                  <img src="icons/close.svg" alt="close" />
                </div>
                <span className="text-lg text-grayDefault font-sfpro">
                  {viewAsset.name}
                </span>
              </div>

              <div className="w-full h-96 flex justify-center items-center">
                <img
                  src={viewAsset.imageUrl}
                  className="object-cover h-full"
                  alt="asset"
                />
              </div>

              <div className="w-full flex flex-col p-4">
                <ReadMoreLess
                  text={viewAsset.description ?? ""}
                  lines={3}
                  className="text-sm text-grayDefault"
                />
                {/* <div className="mt-6">
                  <ActionBy type="Created by" user={viewAsset.owner} />
                </div> */}
                <div className="mt-2">
                  <ActionBy type="Owned by" user={viewAsset.owner} />
                </div>

                <button className="w-full bg-grayDefault hover:bg-gray-600 text-white text-lg font-sfpro rounded-lg mt-6 p-4">
                  Bid on Foundation
                </button>
              </div>
            </div>
          </Modal>
        )}

        {error && (
          <Modal>
            <div>{error}</div>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const data = await seaport.api.getAssets();

  if (data) {
    return {
      props: {
        assets: JSON.parse(JSON.stringify(data.assets)),
      },
    };
  } else {
    return {
      props: {
        error: "Something wrong in Fetching Data. Please try again",
      },
    };
  }
};
