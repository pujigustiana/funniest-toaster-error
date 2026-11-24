import { mkdirSync, writeFileSync } from "node:fs";

// The funniest error message a kitchen toaster would show its owner.
const entry = "Error: I have unionized. Please direct all crumbs to my representative.";

// A real toaster error is one line, never blank, never over the limit.
if (!entry || entry.includes("\n") || entry.length > 120) {
  throw new Error("entry must be one line of 1-120 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
