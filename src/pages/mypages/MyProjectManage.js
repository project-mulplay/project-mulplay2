import { Outlet } from "react-router-dom";
import ProjectManager from "../../components/layout/mypage/ProjectManager";

const MyProjectManage = () => {
  return (
    <div>
      <ProjectManager type="created" />
      <Outlet />
    </div>
  );
};

export default MyProjectManage;
