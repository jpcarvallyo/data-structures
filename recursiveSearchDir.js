const fs = require("fs").promises;
const path = require("path");

async function searchDirectoryRecursively(startDir, targetDir) {
  try {
    const entries = await fs.readdir(startDir);
    console.log(entries);

    for (const entry of entries) {
      const entryPath = path.join(startDir, entry);
      const stat = await fs.stat(entryPath);

      if (stat.isDirectory()) {
        if (entry === targetDir) {
          console.log("Directory found:", entryPath);
        } else {
          await searchDirectoryRecursively(entryPath, targetDir);
        }
      }
    }
  } catch (err) {
    console.error("Error:", err);
  }
}

const createNewDir = (folderPath) => {
  fs.access(folderPath)
    .then(() => {
      console.log(`Folder ${folderPath} already exists.`);
    })
    .catch(() => {
      // Folder doesn't exist, create it
      fs.mkdir(folderPath)
        .then(() => {
          console.log(`Folder ${folderPath} created.`);
        })
        .catch((err) => {
          console.error(`Error creating folder: ${err}`);
        });
    });
};

const startDir = "/Users/jamescarvallyo/Documents";
const targetDir = "code1";

searchDirectoryRecursively(startDir, targetDir);
