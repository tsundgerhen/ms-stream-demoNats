import fs from "fs";
import path from "path";
const formidable = require('formidable');
import { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: false, // Disable default body parser for file uploads
  },
};

interface File {
  newFilename: string;
}

interface FormidableFiles {
  gif: File[];
  sound: File[];
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // Cast IncomingForm to any to avoid type issues
    const form: any = new formidable.IncomingForm();
    form.uploadDir = path.join(process.cwd(), "public/uploads"); // Specify the upload folder
    form.keepExtensions = true; // Keep file extensions

    // Parse the form data
    form.parse(req, (err, fields, files: FormidableFiles) => {
      if (err) {
        return res.status(500).json({ error: "Error during file upload" });
      }

      const gifFile = files.gif[0]; // Get the uploaded GIF file
      const soundFile = files.sound[0]; // Get the uploaded sound file

      // Paths to save the files in the public directory
      const gifPath = `/uploads/${gifFile.newFilename}`;
      const soundPath = `/uploads/${soundFile.newFilename}`;

      // Respond with file paths to the frontend
      res.status(200).json({ gifPath, soundPath });
    });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}