import React from "react";
import { Tag, MobileIndicator } from "../Styled";
import { IProps } from "./interface";

export const OpenTagMobile = ({ big }: IProps) => (
  <Tag enabled={true} big={big}>
    <MobileIndicator enabled={true}>
      <span className="text">Open</span>
    </MobileIndicator>
  </Tag>
);
