"use client";

import { Box, Button, Text } from "@chakra-ui/react";

import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";

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
interface HeaderProps {
    alerts: Alert[]; // List of alerts to display
    alertLink: string; // Link for alert details or action
    handleAlertClick: (alert: Alert) => void
  }
  
  export default function Header({ alerts, alertLink, handleAlertClick }: HeaderProps) {

  return (
    <Box
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant="outline" size="sm">
            {alerts[0].title}
          </Button>
        </MenuTrigger>
        <MenuContent>
          {alerts.map((alert) => (
            <MenuItem key={alert.title} value="new-txt-a">
              <Button variant="outline" size="sm" onClick={() => handleAlertClick(alert)}>
                {alert.title}
              </Button>
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>

      <Text>{alertLink}</Text>
    </Box>
  );
}
