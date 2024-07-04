import app from "@/firebase";
import { Button } from "@radix-ui/themes";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import React, { ChangeEvent, Dispatch, SetStateAction, useRef } from "react";
import { FaUpload } from "react-icons/fa";

type IProps = {
    setImage: Dispatch<SetStateAction<string>>;
    image: string;
}

const ImageUploader = ({setImage , image}: IProps) => {
  const fileInRef = useRef<HTMLInputElement>(null);

  const upload = async (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    const image = input.files?.[0];
    try {
        if(image) {
            const storage = getStorage(app)
            const storageRef = ref(storage, 'images/' + image.name)
            await uploadBytes(storageRef , image)
            const ImageUrl = await getDownloadURL(storageRef);
            setImage(ImageUrl)
        }
    } catch (error) {
        console.log(error)
    }
  };
  return (
    <>
      <div className="bg-gray-100 rounded-md size-24 inline-flex items-center  justify-center">
        {
          !!image ? (
            <img src={image} alt="Image" />
          ) : (
            <FaUpload size={24} className="text-gray-400" />
          )
        }
      </div>
      <div className="mt-2">
        <input
          type="file"
          ref={fileInRef}
          className="hidden"
          onChange={e => upload(e)}
        />
        <Button
          type="button"
          onClick={() => fileInRef.current?.click()}
          variant="soft"
        >
          Select file
        </Button>
      </div>
    </>
  );
};

export default ImageUploader;
