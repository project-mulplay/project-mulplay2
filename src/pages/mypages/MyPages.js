import { Outlet } from "react-router-dom";
import { useCookies } from "react-cookie";

import MyProfile from "../../components/layout/mypage/MyProfile";
import MyCategory from "../../components/layout/mypage/MyCategory";

const MyPages = () => {
  const [cookies, setCookie] = useCookies();

  const loggedInUser = cookies.token;

  return (
    <div className="MyPages">
      <MyProfile
        user_name={loggedInUser.user_name}
        user_sns={loggedInUser.user_sns}
        user_no={loggedInUser.user_no}
      />
      <MyCategory />
      <Outlet />
    </div>
  );
};

export default MyPages;
