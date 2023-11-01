import { atom } from "recoil";
import profile from "../assets/image/profile.png";

export const ProfileImgAtom = atom({
  key: "ProfileImgAtom",
  default: profile,
});
