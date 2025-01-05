import { GptSearchBar } from "./GptSearchBar";
import { BACKGROUND_IMG } from "../utils/constants";
import { GptSuggetions } from "./GptSuggetions";
export const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10 opacity-90">
        <img alt="logo" src={BACKGROUND_IMG}></img>
      </div>
      <GptSearchBar />
      <GptSuggetions />
    </div>
  );
};
