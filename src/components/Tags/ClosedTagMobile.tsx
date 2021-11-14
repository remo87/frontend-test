import React from "react";
import { MobileIndicator, Tag } from "../Styled/";
import { IProps } from "./interface";

export const ClosedTagMobile = ({ big }: IProps) => (
  <Tag enabled={false} big={big}>
    <MobileIndicator enabled={false}>
      <span className="text">Closed</span>
    </MobileIndicator>
  </Tag>
);
