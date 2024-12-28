import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route.js";
import HomeIcon from '@/components/svg/HomeIcon';
import SearchIcon from '@/components/svg/SearchIcon';
import X from '@/components/svg/X';
import NotificationIcon from '@/components/svg/NotificationIcon';
import MessageIcon from '@/components/svg/MessageIcon';
import GrokIcon from '../components/svg/GrokIcon';
import CommunitesIcon from "@/components/svg/Communites";
import Profile from '@/components/svg/Profile';
import MoreIcon from '@/components/svg/MoreIcon';
import Verification from "@/components/svg/Verification";


const HomePage = async () => {
  const session = await getServerSession(authOptions);


  console.log("clearing the signout session", session); // Check if session is cleared after sign out

  return (
    <div className="flex flex-row w-screen h-screen">
      <section className="lg:flex-shrink lg:flex w-[360px] border-r-[.2px] border-border h-full py-10 bg-black px-2 pt-2 flex lg:justify-center md:justify-end">
        <div className='left_sidebar flex flex-col justify-self-start lg:w-auto'>
          <ul className="flex lg:px-auto md:px-0 lg:self-left md:self-end md:pr-2 flex-col space-y-1 w-auto h-full">
            <li className="bg-black flex rounded-full  w-full h-auto text-white items-center">
              <X />
            </li>
            <li className="px-2 hover:bg-transparentBlack rounded-full py-2 w-full h-auto flex text-white items-center">
              <HomeIcon />
              <span className="ml-4 lg:block md:hidden">Home</span>
            </li>
            <li className="rounded-full py-2 hover:bg-transparentBlack w-auto px-2 h-auto flex text-white items-center text-bold ">
              <SearchIcon />
              <span className="ml-4 lg:block md:hidden font-bold">Explore</span>
            </li>
            <li className="rounded-full py-2 hover:bg-transparentBlack w-auto px-2 h-auto flex text-white items-center text-bold overflow-visible">
              <NotificationIcon />
              <span className=" ml-4 lg:flex md:hidden font-bold text-white">Notifications</span>
            </li>
            <li className="rounded-full py-2 hover:bg-transparentBlack w-full px-2 h-auto flex text-white items-center text-bold ">
              <MessageIcon />
              <span className="ml-4 lg:block md:hidden font-bold">Messages</span>
            </li>
            <li className="rounded-full py-2 hover:bg-transparentBlack w-full px-2 h-auto flex text-white items-center text-bold ">
              <GrokIcon />
              <span className="ml-4 lg:block md:hidden font-bold">Grok</span>
            </li>
            <li className="rounded-full py-2 hover:bg-transparentBlack w-full px-2 h-auto flex text-white items-center text-bold ">
              <CommunitesIcon />
              <span className="ml-4 lg:block md:hidden font-bold">Communities</span>
            </li>
            <li className="rounded-full py-1 hover:bg-transparentBlack h-auto flex text-white items-center font-bold">
              <X />
              <span className="ml-4 lg:inline-block md:hidden font-bold">Premium</span>
            </li>
            <li className="rounded-full py-2 hover:bg-transparentBlack px-2 h-auto flex text-white items-center font-bold">
              <Verification />
              <span className="ml-4 lg:inline-block md:hidden font-bold">Verified Orgs</span>
            </li>
            <li className="rounded-full py-2 hover:bg-transparentBlack px-2 h-auto flex text-white items-center font-bold">
              <Profile />
              <span className="ml-4 lg:inline-block md:hidden font-bold">Profile</span>
            </li>
            <li className="rounded-full py-2 hover:bg-transparentBlack px-2 h-auto flex text-white items-center font-bold">
              <MoreIcon />
              <span className="ml-4 lg:inline-block md:hidden font-bold">More</span>
            </li>
            <button className="mt-4 lg:block md:hidden bg-white text-black w-full px-auto py-3 rounded-full">Posts</button>
          </ul>
          <div>
            <button className="rounded-full items-center"></button>
            <span className="flex flex-col">
            {session?.user?.name}</span>
            ...
          </div>
        </div>
      </section>
      <section className="min-w-[600px] flex-1 border-r-[.2px] border-l-[.2px] border-border h-full main_section">
        <div className="post_container">

        </div>
      </section>
      <section className="w-[400px] md:block sm:hidden md:flex-shrink p-4 border-l-[.2px] border-border h-full side_content">
        <div className="right_container">

        </div>
      </section>
    </div>
  );
};


export default HomePage;
