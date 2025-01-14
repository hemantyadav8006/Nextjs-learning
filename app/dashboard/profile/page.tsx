import type { NextPage } from "next";
import { preloadTodos } from "../todos/page";

const ProfilePage: NextPage = () => {
  preloadTodos(); // we can ready this todo data before even clicking on the todo url
  return (
    <div>
      <h1>Profile Page!</h1>
    </div>
  );
};

export default ProfilePage;
