"use client";

import {
  NavbarItem,
  Button,
  Avatar,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import * as actions from "@/actions";
import { useSession } from "next-auth/react";

export default function HeaderAuth() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return null;
  }

  if (session?.user) {
    return (
      <Popover placement="left">
        <PopoverTrigger>
          <Avatar src={session.user.image || ""} />
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
            <form action={actions.signOut}>
              <Button type="submit">Sign Out</Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    return (
      <Dropdown>
        <NavbarItem>
          <DropdownTrigger>
            <Button color="secondary" variant="bordered">
              Sign In
            </Button>
          </DropdownTrigger>
        </NavbarItem>
        <DropdownMenu aria-label="Sign In Options">
          <DropdownItem>
            <form action={actions.signInWithGithub}>
              <Button type="submit" color="secondary" variant="light" fullWidth>
                Sign In with GitHub
              </Button>
            </form>
          </DropdownItem>
          <DropdownItem>
            <form action={actions.signInWithKeycloak}>
              <Button type="submit" color="secondary" variant="light" fullWidth>
                Sign In with Keycloak
              </Button>
            </form>
          </DropdownItem>
          <DropdownItem>
            <form action={actions.signInWithGoogle}>
              <Button type="submit" color="secondary" variant="light" fullWidth>
                Sign In with Google
              </Button>
            </form>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}