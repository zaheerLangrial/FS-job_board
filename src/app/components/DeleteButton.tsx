"use client";
import React from "react";
import { DELETE } from "../actions/jobDelete";

type IProps = {
  jobId: string;
};

const DeleteButton = async ({ jobId }: IProps) => {
  const handleDeleteJob = async (id: string) => {
    const res = await DELETE(id);
    window.location.reload();
  };
  return <button onClick={() => handleDeleteJob(jobId)}>Delete</button>;
};

export default DeleteButton;
