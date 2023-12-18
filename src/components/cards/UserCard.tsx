"use client";

import { Button, Card } from "@chakra-ui/react";
import { FC } from "react";
import { LogoutIcon, UserIcon } from "../ui/Icons";
import { signOut } from "next-auth/react";

interface UserCardProps {
  username: string | undefined;
}

const UserCard: FC<UserCardProps> = ({ username }) => {
  return (
    <div className="flex shadow-md border gap-3 border-gray-300 items-center justify-between space-x-1 rounded-md p-2 h-10">
      <div className="flex items-center gap-2">
        <div className="h-6 w-6">
          <UserIcon></UserIcon>
        </div>
        <p className="text-base text-gray-600 leading-none">{username}</p>
      </div>
      <Button
        size="sm"
        padding="0.5px"
        bgColor="white"
        _hover={{ bgColor: "gray.100" }}
        onClick={() => {
          signOut();
        }}
      >
        <a className="h-5 w-5">
          <LogoutIcon></LogoutIcon>
        </a>
      </Button>
    </div>
  );
};

export default UserCard;
