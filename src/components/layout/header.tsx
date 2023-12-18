import { headingFont } from "@/config/layout";
import { authOptions } from "@/lib/auth/auth-options";
import { getServerSession } from "next-auth";
import UserCard from "../cards/UserCard";
import SearchBar from "./search-bar";


const Header = async ({}) => {
  const session = await getServerSession(authOptions)
  return (
    <header className="sticky shadow-sm top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto h-16 container px-2 flex items-center justify-between">
        <div>
          <h2 className={headingFont.className + " text-2xl font-semibold"}>NewsApp</h2>
        </div>
        <div className="flex gap-2">
          <SearchBar></SearchBar>
          <UserCard username={session?.user.username}></UserCard>
        </div>
      </div>
    </header>
  );
};

export default Header;
