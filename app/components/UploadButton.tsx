"use client";

import { UploadButton } from "@/utils/uploadthing";
import { useState } from "react";

type Props = {
  onUploadComplete: (url: string) => void;
};

export default function ImageButton({ onUploadComplete }: Props) {
  const [uploaded, setUploaded] = useState(false);

  return (
    <div className="flex flex-col items-center space-y-2">
      <UploadButton
        disabled={uploaded}
        endpoint="imageUploader"
        onClientUploadComplete={async (res) => {
          onUploadComplete(res[0].url);
          setUploaded(true);
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />
      {uploaded && <p className="text-green-600 text-sm">File uploaded successfully!</p>}
    </div>
  );
}
