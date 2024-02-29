import { useContext, useState } from "react";
import { Context } from "../context/contextApi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loader from "../shared/Loader";
import { CgClose } from "react-icons/cg";
import { SlMenu } from "react-icons/sl";
import ytLogo from "../assets/images/yt-logo.png";
import ytLogoMobile from "../assets/images/yt-logo-mobile.png";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const { loading, mobileMenu, setMobilemenu } = useContext(Context);
  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`searchResult/${searchQuery}`);
    }
  };
  const mobileMenuToggle = () => {
    setMobilemenu(!mobileMenu);
  };
  const { pathname } = useLocation();
  const pageName = pathname?.split("/")?.filter(Boolean)?.[0];

  return (
    <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-black">
      {loading && <Loader />}
      <div className="flex h-5 items-center">
        {pageName !== "video" && (
          <div
            className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
            onClick={mobileMenuToggle}
          >
            {mobileMenu ? (
              <CgClose className="text-white text-xl" />
            ) : (
              <SlMenu className="text-white text-xl" />
            )}
          </div>
        )}
        <Link to="/" className="flex h-5 items-center">
          <img
            className="h-full hidden dark:md:block"
            src={ytLogo}
            alt="youtube"
          />
          <img
            className="h-full dark:hidden"
            src={ytLogoMobile}
            alt="youtube"
          />
        </Link>
      </div>
    </div>
  );
}

export default Header;
