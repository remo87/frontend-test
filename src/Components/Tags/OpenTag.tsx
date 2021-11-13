import React from "react";
import { Tag } from "../Styled";
import { IProps } from "./interface";

export const OpenTag = ({ big }: IProps) => (
  <Tag enabled={true} big={big}>
    <span className="indicator"></span>
    <span className="text">Open Now</span>
  </Tag>
);
