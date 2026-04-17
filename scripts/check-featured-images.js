#!/usr/bin/env node
// Build-time guard: fails if any blog post is missing a featuredImage
// or points to an image that doesn't exist. Runs before `next build`.

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const POSTS_DIR = path.join(__dirname, "..", "content", "posts");
const PUBLIC_DIR = path.join(__dirname, "..", "public");

// Legacy posts that predate the featuredImage requirement — allowed without one.
// Do NOT add new posts to this list.
const GRANDFATHERED = new Set([
  "beginner-skincare-routine-for-teens",
  "foods-that-help-and-hurt-acne",
  "when-to-see-a-dermatologist",
]);

const errors = [];

const files = fs.readdirSync(POSTS_DIR).filter(
  (f) => f.endsWith(".md") && !f.startsWith("_")
);

for (const file of files) {
  const slug = file.replace(/\.md$/, "");
  if (GRANDFATHERED.has(slug)) continue;

  const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
  const { data } = matter(raw);

  if (!data.featuredImage) {
    errors.push(`${slug}: missing featuredImage in frontmatter`);
    continue;
  }

  // Check the image file actually exists on disk
  const imgPath = path.join(PUBLIC_DIR, data.featuredImage.replace(/^\//, ""));
  if (!fs.existsSync(imgPath)) {
    errors.push(`${slug}: featuredImage "${data.featuredImage}" not found on disk`);
  }
}

if (errors.length > 0) {
  console.error("\n❌ Featured image check failed:\n");
  errors.forEach((e) => console.error(`   • ${e}`));
  console.error(
    `\n${errors.length} post(s) have issues. Add featuredImage to frontmatter ` +
      `and generate the image at /public/images/grid-SLUG.png\n`
  );
  process.exit(1);
}

console.log(`✅ All ${files.length} posts have valid featured images`);
