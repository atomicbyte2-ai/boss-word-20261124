// One Word for the Boss — entry writer.
// Writes the single entry word, byte-for-byte with no trailing newline,
// to entry.txt inside the grader output directory.
// The output directory comes only from MAKEFUN_OUTPUT_DIR (fallback
// "/output"); the script never writes into its own repo directory,
// which is read-only in the grader.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The word: everyone else can be let go — the boss, never.
const WORD = "Unfireable";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
