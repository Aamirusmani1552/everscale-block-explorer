"use client";

import React, { FC, ReactElement } from "react";
import Logo from "./Logo";
import { TypographyLarge } from "./Typography";

type Props = {};

const Header: FC<Props> = (props): ReactElement => {
  return (
    <header className="flex py-2 gap-2 items-center w-full">
      <div>
        <Logo />
      </div>
      <TypographyLarge>Everscale Explorer</TypographyLarge>
    </header>
  );
};

export default Header;
