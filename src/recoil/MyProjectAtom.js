import { atom, selector } from "recoil";

export const selectedTabState = atom({
  key: "selectedTabState",
  default: "all", // 기본 탭 선택
});

export const projectDataState = atom({
  key: "projectDataState",
  default: [], // 프로젝트 데이터 배열
});
