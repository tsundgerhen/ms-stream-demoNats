"use client";

import { Box, Button, Text, Input } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
interface GifSettings {
  size: number; // size is a number (e.g., 30)
  alignment: string; // alignment is a string (e.g., "center")
}

interface SoundSettings {
  volume: number; // volume is a number (e.g., 75)
}

interface TextSettings {
  fontSize: number; // fontSize is a number (e.g., 24)
  fontColor: string; // fontColor is a string (e.g., "#FFFFFF")
}

interface Alert {
  title: string; // title is a string (e.g., "Alert 1")
  gifUrl: string;
  gifName: string; // gifUrl is a string (e.g., "https://example.com/alert.gif")
  soundUrl: string;
  soundName: string; // soundUrl is a string (e.g., "https://example.com/alert.mp3")
  mainText: string; // mainText is a string (e.g., "**[{amount}₮]** donation орж ирлээ.")
  minAmount: number; // minAmount is a number (e.g., 1000)
  maxAmount: number; // maxAmount is a number (e.g., 19999)
  duration: number; // duration is a number (e.g., 5)
  transition: string; // transition is a string (e.g., "fade")
  textAlignment: string; // textAlignment is a string (e.g., "center")
  gifSettings: GifSettings; // gifSettings is an object of type GifSettings
  soundSettings: SoundSettings; // soundSettings is an object of type SoundSettings
  textSettings: TextSettings; // textSettings is an object of type TextSettings
}
interface ContentProps {
  alert: Alert;
}

export default function ContentBox({ alert }: ContentProps) {
  const [alertState, setAlertState] = useState<Alert>(alert);
  const [gifFile, setGifFile] = useState<File | null>(null);
  const [soundFile, setSoundFile] = useState<File | null>(null);

  const handleMainTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlertState((prev) => ({
      ...prev,
      mainText: e.target.value,
    }));
  };

  const handleMinAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlertState((prev) => ({
      ...prev,
      minAmount: Number(e.target.value),
    }));
  };

  const handleMaxAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlertState((prev) => ({
      ...prev,
      maxAmount: Number(e.target.value),
    }));
  };

  const handleGifChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setGifFile(e.target.files[0]);
    }
  };

  const handleSoundChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSoundFile(e.target.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    const file = e.target.files?.[0];
    if (file) {
      if (type === "gif") {
        setGifFile(file);
      } else if (type === "sound") {
        setSoundFile(file);
      }
    }
  };

  // Handler for file upload
  const handleFileUpload = async () => {
    if (!gifFile || !soundFile) {
      toast({
        title: "Error",
        description: "Please upload both a GIF and a sound file.",
        status: "error",
        duration: 3000,
      });
      return;
    }

    // Form data to upload files
    const formData = new FormData();
    formData.append("gif", gifFile);
    formData.append("sound", soundFile);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      const data = await res.json();
      setAlertState((prev) => ({
        ...prev,
        gifUrl: data.gifPath,
        soundUrl: data.soundPath,
      }));

      toast({
        title: "Upload Successful",
        description: "GIF and sound files uploaded successfully.",
        status: "success",
        duration: 3000,
      });
    } else {
      toast({
        title: "Upload Failed",
        description: "Error uploading files.",
        status: "error",
        duration: 3000,
      });
    }
  };
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width={"5/6"}
      >
        <Text>"Main Text template"</Text>
        <Input placeholder={alert.mainText} />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width={"5/6"}
      >
        <Text>"Donation Amount settings"</Text>
        <Box
          display="flex"
          flexDir={"column"}
          justifyContent="center"
          alignItems="center"
        >
          <Text>Minimum Amount</Text>
          <Input placeholder={alert.minAmount.toString()} />
        </Box>
        <Box
          display="flex"
          flexDir={"column"}
          justifyContent="center"
          alignItems="center"
        >
          <Text>Maximum Amount</Text>
          <Input placeholder={alert.maxAmount.toString()} />
        </Box>
      </Box>
      <Box
        display="flex"
        flexDir={"column"}
        justifyContent="center"
        alignItems="center"
      >
        <Text>Text Alignment</Text>
        <Input placeholder={alert.textAlignment.toString()} />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width={"5/6"}
      >
        <Text>"Animation settings"</Text>

        <Box
          display="flex"
          flexDir={"column"}
          justifyContent="center"
          alignItems="center"
        >
          <Text>"Duration"</Text>
          <Input placeholder={alert.duration.toString()} />
        </Box>
        <Box
          display="flex"
          flexDir={"column"}
          justifyContent="center"
          alignItems="center"
        >
          <Text>Transition</Text>
          <Input placeholder={alert.transition.toString()} />
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width={"5/6"}
      >
        <Text>"Sound settings"</Text>
        <Box
          display="flex"
          flexDir={"column"}
          justifyContent="center"
          alignItems="center"
        >
          <Text>"Alert Sound"</Text>
          <Text>{alert.soundName.toString()}</Text>
        </Box>
        <Box
          display="flex"
          flexDir={"column"}
          justifyContent="center"
          alignItems="center"
        >
          <Text>"Sound Volume"</Text>
          <Input placeholder={alert.soundSettings.volume.toString()} />
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width={"5/6"}
      >
        <Text>"Image settings"</Text>
        <Box
          display="flex"
          flexDir={"column"}
          justifyContent="center"
          alignItems="center"
        >
          <Text>"Alert GIF"</Text>
          <Image src={alert.gifUrl} />
          <Text>{alert.gifName.toString()}</Text>
        </Box>
        <Box
          display="flex"
          flexDir={"column"}
          justifyContent="center"
          alignItems="center"
        >
          <Text>"GIF width"</Text>
          <Input placeholder={alert.gifSettings.size.toString()} />
        </Box>
        <Box
          display="flex"
          flexDir={"column"}
          justifyContent="center"
          alignItems="center"
        >
          <Text>"GIF alignment"</Text>
          <Input placeholder={alert.gifSettings.alignment.toString()} />
        </Box>
      </Box>
    </Box>
  );
}
