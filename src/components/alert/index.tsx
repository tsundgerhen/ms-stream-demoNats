"use client";

import { Box, Button } from "@chakra-ui/react";
import alertData from "@/components/alert.json";

import {
    MenuContent,
    MenuItem,
    MenuItemCommand,
    MenuRoot,
    MenuTrigger,
} from "@/components/ui/menu";
import { useState } from "react";
import Header from "@/components/alert/header";

interface GifSettings {
    size: number;      // size is a number (e.g., 30)
    alignment: string; // alignment is a string (e.g., "center")
}

interface SoundSettings {
    volume: number; // volume is a number (e.g., 75)
}

interface TextSettings {
    fontSize: number;  // fontSize is a number (e.g., 24)
    fontColor: string; // fontColor is a string (e.g., "#FFFFFF")
}

interface Alert {
    title: string;        // title is a string (e.g., "Alert 1")
    gifUrl: string;       // gifUrl is a string (e.g., "https://example.com/alert.gif")
    soundUrl: string;     // soundUrl is a string (e.g., "https://example.com/alert.mp3")
    mainText: string;     // mainText is a string (e.g., "**[{amount}₮]** donation орж ирлээ.")
    minAmount: number;    // minAmount is a number (e.g., 1000)
    maxAmount: number;    // maxAmount is a number (e.g., 19999)
    duration: number;     // duration is a number (e.g., 5)
    transition: string;   // transition is a string (e.g., "fade")
    textAlignment: string; // textAlignment is a string (e.g., "center")
    gifSettings: GifSettings; // gifSettings is an object of type GifSettings
    soundSettings: SoundSettings; // soundSettings is an object of type SoundSettings
    textSettings: TextSettings;   // textSettings is an object of type TextSettings
}

export default function AlertPage() {
    const [alerts, setAlerts] = useState<Alert[]>(alertData.alerts);
    const [alert, setAlert] = useState<Alert>(alertData.alerts[0]);
    const handleAlertClick = (alert: Alert) => {
        setAlert(alert);
    }

    return (
        <Box display={"flex"} flexDir={"column"} justifyContent={"center"} alignItems={"center"} >
            <Header
                alerts={alerts}
                alertLink = {"http://localhost:3000/obs-alert"}
                handleAlertClick={handleAlertClick}
            />

        </Box>
    );
}