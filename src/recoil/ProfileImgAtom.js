import { atom, selector } from "recoil";

export const ProfileImgAtom = atom({
  key: "ProfileImgAtom",
  default: "0",
});

export const ImgUrlSelector = selector({
  key: "ImgUrlSelector",
  get: ({ get }) => {
    const ImgNum = get(ProfileImgAtom);
    return `${ImgNum}`;
  },
});
