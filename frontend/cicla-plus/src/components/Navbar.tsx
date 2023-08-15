import React, { useEffect, useState } from "react";
import {
  GlobeAmericasIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import {
  Typography,
  MenuItem,
  Button,
  IconButton,
  Collapse,
  Navbar as MtNavbar,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useDispatch } from "../store/configureStore";
import { logoutAction } from "../actions/login";

const navListItems = [
  {
    label: "Início",
    icon: HomeIcon,
    path: "/",
  },
  {
    label: "Anúncios",
    icon: GlobeAmericasIcon,
    path: "/advertisements",
  },
  {
    label: "Conta",
    icon: UserIcon,
    path: "/account",
  },
];

function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map(({ label, icon, path }) => (
        <Typography
          key={label}
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          <Link to={path}>
            <MenuItem className={"flex items-center gap-2 lg:rounded-full"}>
              {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
              {label}
            </MenuItem>
          </Link>
        </Typography>
      ))}
    </ul>
  );
}

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const dispatch = useDispatch();

  const logout = async () => {
    await dispatch(logoutAction());
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <>
      <MtNavbar className="sticky top z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to={"/"}>
            <Typography className="mr-4 cursor-pointer py-1.5 font-medium">
              Cicla+
            </Typography>
          </Link>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">
              <NavList />
            </div>
            <div className="hidden gap-2 lg:flex">
              <Button
                onClick={() => logout()}
                variant="gradient"
                size="sm"
                color="red"
              >
                Sair
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          <NavList />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
            <Button
              onClick={() => logout()}
              variant="gradient"
              size="sm"
              color="red"
              fullWidth
            >
              Sair
            </Button>
          </div>
        </Collapse>
      </MtNavbar>
    </>
  );
}
