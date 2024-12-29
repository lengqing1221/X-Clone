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
import Image from "next/image.js";
import SignOutButton from "@/components/SignOutButton";


const HomePage = async () => {
  const session = await getServerSession(authOptions);


  console.log("clearing the signout session", session); // Check if session is cleared after sign out

  return (
    <div className="flex flex-row w-screen h-screen">
      <section className="lg:flex-shrink lg:flex max-w-[360px] border-r-[.2px] border-border h-full py-10 bg-black px-2 pt-2 flex lg:justify-center md:justify-end justify-end w-auto">
        <div className='left_sidebar flex flex-col justify-self-end lg:w-auto lg:justify-items-start w-auto'>
          <ul className="flex lg:px-auto md:px-0 lg:self-left md:self-end md:pr-2 flex-col space-y-1 h-full w-auto">
            <li className="bg-black flex rounded-full  w-full h-auto text-white items-center">
              <X />
            </li>
            <li className="px-2 hover:bg-transparentBlack rounded-full py-2 w-full h-auto flex text-white items-center">
              <HomeIcon />
              <span className="ml-4 lg:block md:hidden hidden">Home</span>
            </li>
            <li className="rounded-full py-2 hover:bg-transparentBlack w-auto px-2 h-auto flex text-white items-center text-bold ">
              <SearchIcon />
              <span className="ml-4 lg:block md:hidden font-bold hidden">Explore</span>
            </li>
            <li className="rounded-full py-2 hover:bg-transparentBlack w-auto px-2 h-auto flex text-white items-center text-bold overflow-visible">
              <NotificationIcon />
              <span className=" ml-4 lg:flex md:hidden font-bold text-white hidden">Notifications</span>
            </li>
            <li className="rounded-full py-2 hover:bg-transparentBlack w-full px-2 h-auto flex text-white items-center text-bold ">
              <MessageIcon />
              <span className="ml-4 lg:block md:hidden font-bold hidden">Messages</span>
            </li>
            <li className="rounded-full py-2 hover:bg-transparentBlack w-full px-2 h-auto flex text-white items-center text-bold ">
              <GrokIcon />
              <span className="ml-4 lg:block md:hidden font-bold hidden">Grok</span>
            </li>
            <li className="rounded-full py-2 hover:bg-transparentBlack w-full px-2 h-auto flex text-white items-center text-bold ">
              <CommunitesIcon />
              <span className="ml-4 lg:block md:hidden font-bold hidden">Communities</span>
            </li>
            <li className="rounded-full py-1 hover:bg-transparentBlack h-auto flex text-white items-center font-bold">
              <X />
              <span className="ml-4 lg:inline-block md:hidden font-bold hidden">Premium</span>
            </li>
            <li className="rounded-full py-2 hover:bg-transparentBlack px-2 h-auto flex text-white items-center font-bold">
              <Verification />
              <span className="ml-4 lg:inline-block md:hidden font-bold hidden">Verified Orgs</span>
            </li>
            <li className="rounded-full py-2 hover:bg-transparentBlack px-2 h-auto flex text-white items-center font-bold">
              <Profile />
              <span className="ml-4 lg:inline-block md:hidden font-bold hidden">Profile</span>
            </li>
            <li className="rounded-full py-2 hover:bg-transparentBlack px-2 h-auto flex text-white items-center font-bold">
              <MoreIcon />
              <span className="ml-4 lg:inline-block md:hidden font-bold hidden">More</span>
            </li>
            <button className="mt-4 lg:block md:hidden bg-white text-black hidden px-auto py-3 rounded-full w-auto">Posts</button>
          </ul>
          <div className="flex w-auto flex-row text-sm items-center h-auto justify-center space-x-2">
          {session?.user?.image ? (
      <Image
        src={session.user.image}
        alt="profile picture"
        width={40}
        height={40}
        className="rounded-full mt-2"
      />
    ) : (
      <div className="w-[30px] h-[30px] bg-gray-500 rounded-full"></div> // Placeholder for missing image
    )}
  <div className="flex-col h-8 text-white lg:flex md:hidden hidden">
    <span className="text-nowrap">{session?.user?.name}</span>
    <span className="text-nowrap">{`@${String(session?.user?.name || '').trim()}${session?.user?.id ? session.user.id.slice(0, 4  ) : ''}`}</span>
  </div>
  <span className="text-white lg:block md:hidden">...</span>
</div>
        </div>
      </section>
      <section className="lg:min-w-[600px] md:min-w-[500px] sm:min-w-[450px] xs:min-w-[400px] flex-1 border-r-[.2px] border-l-[.2px] border-border h-full main_section">
        <div className="post_container w-full">
        <SignOutButton />
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
