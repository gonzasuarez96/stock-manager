import NavBar from "../ui/NavLinks/nav-links";
import UserInfo from "../UserInfo/UserInfo";
import Logo from "../../../public/logo/logo";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col rounded-b-[2.19rem] bg-bg-custom md:px-0">
      <div className="flex justify-center pt-9">
        <Logo />
      </div>
      <div className="flex grow flex-row justify-between space-x-2 px-0 md:flex-col md:space-x-0 md:space-y-2">
        <div className="px-4">
          <NavBar />
        </div>
        <UserInfo />
      </div>
    </div>
  );
}
