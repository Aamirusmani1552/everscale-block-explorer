"use client";

import React, { FC, ReactElement } from "react";
import Logo from "./Logo";
import { TypographyLarge } from "./Typography";

type Props = {};

const Header: FC<Props> = (props): ReactElement => {
  return (
    <nav className="flex py-4 gap-2 items-center w-full">
      <div>
        <Logo />
      </div>
      <TypographyLarge>Everscale Explorer</TypographyLarge>
    </nav>
  );
};

export default Header;
