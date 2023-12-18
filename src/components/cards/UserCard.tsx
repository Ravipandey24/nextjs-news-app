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
    <div className="flex shadow-md border border-gray-300 items-center space-x-1 rounded-md p-2 h-10">
      <div className="h-7 w-7 border border-gray-300 rounded-md p-1">
        <UserIcon></UserIcon>
      </div>
      <p className="text-lg text-gray-500 leading-none">{username}</p>
      <Button
        size="sm"
        padding="1px"
        bgColor="white"
        _hover={{ bgColor: "gray.200" }}
        onClick={() => {
          signOut();
        }}
      >
        <a className="h-5 w-5 text-gray-500">
          <LogoutIcon></LogoutIcon>
        </a>
      </Button>
    </div>
  );
};

export default UserCard;
