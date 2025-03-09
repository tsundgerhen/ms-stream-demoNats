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

export interface Alert {
    title: string;        // title is a string (e.g., "Alert 1")
    gifUrl: string;       // gifUrl is a string (e.g., "https://example.com/alert.gif")
    soundUrl: string;     // soundUrl is a string (e.g., "https://example.com/alert.mp3")
    mainText: string;     // mainText is a string (e.g., "**[{amount}₮]** donation орж ирлээ.")
    minAmount: number;    // minAmount is a number (e.g., 1000)
    maxAmount: number;    // maxAmount is a number (e.g., 19999)
    duration: number;     // duration is a number (e.g., 5)
    transition: string;   // transition is a string (e.g., "fade")
    textAlignment: string; // textAlignment is a string (e.g., "center")
    editedAt: string;
    gifSettings: GifSettings;
    soundSettings: SoundSettings;
    textSettings: TextSettings; // editedAt is a string (e.g., "2023-10-05T00:00:00Z")
}