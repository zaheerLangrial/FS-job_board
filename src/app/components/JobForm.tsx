"use client";
import React, { FormEvent, FormEventHandler, useState } from "react";
import {
  Button,
  RadioGroup,
  TextArea,
  TextField,
  Theme,
} from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import { BiUser } from "react-icons/bi";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import ImageUploader from "./ImageUploader";
import { redirect, useParams } from "next/navigation";
import { SaveJobAction, typeJobData } from "../actions/jobAction";
import { useRouter } from "next/navigation";

const JobForm = () => {
  let { orgId } = useParams();
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);
  const [, setcityid] = useState(0);
  const [countryName, setCountryName] = useState("");
  const [stateName, setStateName] = useState("");
  const [cityName, setCityName] = useState("");
  const [personImage, setPersonImage] = useState("");
  const [iconImage, setIconImage] = useState("");
  const router = useRouter()

  const saveJob = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event?.target as HTMLFormElement);
    const jobData = {
      ...Object.fromEntries(data.entries()),
      countryName,
      stateName,
      cityName,
      personImage,
      iconImage,
      orgId,
    };
   const jobDoc = await SaveJobAction(jobData as typeJobData)
   router.push('/jobs/'+jobDoc.orgId)
  };
  return (
    <Theme className="max-w-5xl mx-auto">
      <form onSubmit={saveJob} className="mt-6 px-6 flex flex-col gap-4">
        <TextField.Root placeholder="Job title" name="jobTitle" />
        <div className="grid grid-cols-3 *:grow">
          <div>
            Remote?
            <RadioGroup.Root defaultValue="hybrid" name="remote">
              <RadioGroup.Item value="onsite">On-site</RadioGroup.Item>
              <RadioGroup.Item value="hybrid">Hybrid-remote</RadioGroup.Item>
              <RadioGroup.Item value="remote">Fully remote</RadioGroup.Item>
            </RadioGroup.Root>
          </div>
          <div>
            Full time?
            <RadioGroup.Root defaultValue="full" name="type">
              <RadioGroup.Item value="project">Project</RadioGroup.Item>
              <RadioGroup.Item value="part">Part-time</RadioGroup.Item>
              <RadioGroup.Item value="full">Full-time</RadioGroup.Item>
            </RadioGroup.Root>
          </div>
          <div>
            Salary
            <TextField.Root name="salary">
              <TextField.Slot>$</TextField.Slot>
              <TextField.Slot>k/year</TextField.Slot>
            </TextField.Root>
          </div>
        </div>
        <div>
          Location?
          <div className="flex gap-6 *:grow">
            <CountrySelect
              onChange={(e: any) => {
                setCountryid(e.id);
                setCountryName(e.name);
              }}
              placeHolder="Select Country"
            />
            <StateSelect
              countryid={countryid}
              onChange={(e: any) => {
                setstateid(e.id);
                setStateName(e.name);
              }}
              placeHolder="Select State"
            />
            <CitySelect
              countryid={countryid}
              stateid={stateid}
              onChange={(e: any) => {
                setcityid(e.id);
                setCityName(e.name);
              }}
              placeHolder="Select City"
            />
          </div>
        </div>
        <div className="flex">
          <div className="w-1/3">
            <h3>Job Icon</h3>
            <ImageUploader setImage={setIconImage} />
          </div>
          <div className="grow">
            <h3>Contact Person</h3>
            <div className="flex gap-4">
              <div>
                <ImageUploader setImage={setPersonImage} />
              </div>
              <div className="flex flex-col gap-1 grow">
                <TextField.Root placeholder="John Doe" name="name">
                  <TextField.Slot>
                    <BiUser />
                  </TextField.Slot>
                </TextField.Root>

                <TextField.Root placeholder="Phone" type="tel" name="phone">
                  <TextField.Slot>
                    <FaPhone />
                  </TextField.Slot>
                </TextField.Root>

                <TextField.Root placeholder="Email" type="email" name="email">
                  <TextField.Slot>
                    <FaEnvelope />
                  </TextField.Slot>
                </TextField.Root>
              </div>
            </div>
          </div>
        </div>
        <TextArea
          resize="vertical"
          placeholder="Job description"
          name="description"
        />
        <div className="flex justify-center">
          <Button size="3" type="submit">
            <span className="px-8">Save</span>
          </Button>
        </div>
      </form>
    </Theme>
  );
};

export default JobForm;
