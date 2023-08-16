const fs = require("fs").promises;
const sfs = require("fs");
const path = require("path");

const folderPath = "/Users/jamescarvallyo/Documents/code/";
// const isFile = (fileName) => {
//   return fs.lstatSync(fileName).isFile();
// };
// console.log(fs.readdirSync(folderPath));
// const files = fs
//   .readdirSync(folderPath)
//   .filter((file) => isFile(file))
//   .map((fileName) => {
//     return path.join(folderPath, fileName);
//   });

// console.log(files);

// files.forEach((file) => getFileMetadata(file));

async function getFileMetadata(
  filePath,
  regex = new RegExp("node_modules|.git", "g")
) {
  try {
    const stats = await fs.stat(filePath);
    const statsObj = {
      path: filePath,
      size: stats.size,
      isDir: stats.isDirectory(),
      isFile: stats.isFile(),
    };
    const matches = statsObj.path.match(regex);
    if (statsObj.isDir && !matches) {
      // console.log(`handling directory: ${statsObj.path}`);
      const files = await getAllFilesInDirectory(statsObj.path);
      const filePromises = await Promise.all(files);
      console.log(filePromises);
      return await Promise.all(
        filePromises.map(async (file) => {
          const fileMetaData = await getFileMetadata(file);
          console.log(fileMetaData);
          return fileMetaData;
        })
      );
    }

    console.log(statsObj);
    return statsObj;
  } catch (err) {
    console.error("Error:", err);
  }
}

async function getAllFilesInDirectory(directoryPath) {
  try {
    const files = await fs.readdir(directoryPath);
    return files.map((fileName) => {
      return path.join(directoryPath, fileName);
    });
  } catch (err) {
    console.error("Error:", err);
  }
}

function processFile(data, outputDir) {
  const outputPath = outputDir + "/test.json";
  const dataJson = JSON.stringify(data);

  const writeStream = sfs.createWriteStream(outputPath, { flags: "a" });

  writeStream.write(dataJson, "utf-8");
  writeStream.end();

  writeStream.on("finish", () => {
    console.log(`Processed stats and saved output to ${outputPath}`);
  });

  writeStream.on("error", (err) => {
    console.error("Error writing to output:", err);
  });
}

async function main() {
  const files = await getAllFilesInDirectory(folderPath);
  const metaDataPromises = files.map((file) => {
    return getFileMetadata(file);
  });
  let metaDataResults = await Promise.all(metaDataPromises);
  while (metaDataResults.some(Array.isArray)) {
    metaDataResults = metaDataResults.flat();
  }
  metaDataResults.sort((a, b) => a.size - b.size);
  // console.log(metaDataResults);

  processFile(metaDataResults, __dirname);
}

main();
