"use client";
import TimeAgo from "react-timeago";

type IProps = {
  createdAt: string;
};

export const ReactTimeAgo = ({ createdAt }: IProps) => {
  return <TimeAgo date={createdAt || "--"} />;
};
