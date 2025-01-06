import { GptSearchBar } from "./GptSearchBar";
import { BACKGROUND_IMG } from "../utils/constants";
import { GptSuggetions } from "./GptSuggetions";
export const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10 opacity-90">
        <img
          className="h-screen object-cover md:h-full"
          alt="logo"
          src={BACKGROUND_IMG}
        ></img>
      </div>
      <div className="pt-[30%] md:p-0">
        <GptSearchBar />
        <GptSuggetions />
      </div>
    </>
  );
};
