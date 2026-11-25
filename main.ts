import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const line = "I'm not saying my cooking is bad, but the smoke alarm and I now have a safe word.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputPath = `${outputDir}/entry.txt`;

try {
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(outputPath, `${line}\n`, "utf8");
} catch (cause) {
  throw new Error(`Failed to write entry from ${import.meta.url}`, { cause });
}

const characterCount = readFileSync(outputPath, "utf8").trim().length;
if (characterCount === 0 || characterCount > 200) {
  throw new Error(
    `Competition gate failed: entry must contain 1–200 characters after trimming; found ${characterCount}.`,
  );
}
