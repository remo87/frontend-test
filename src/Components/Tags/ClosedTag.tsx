import React from "react";
import { Tag } from "../Styled/";
import { IProps } from "./interface";

export const ClosedTag = ({ big }: IProps) => (
  <Tag enabled={false} big={big}>
    <span className="indicator"></span>
    <span>Closed</span>
  </Tag>
);
