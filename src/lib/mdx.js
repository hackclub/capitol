import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "guides");

export function getSlugs() {
  return fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getMdxBySlug(slug) {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);
  return { content, frontMatter: data };
}

// Guides only need headers, bold/italic, links, and flat lists, so a full
// MDX pipeline is more than this needs - a handful of regex passes covers it.
export function markdownToHtml(markdown) {
  return markdown
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    .replace(/\*\*(.*)\*\*/gim, "<strong>$1</strong>")
    .replace(/\*(.*)\*/gim, "<em>$1</em>")
    .replace(/\[([^\]]*)\]\(([^\)]*)\)/gim, '<a href="$2" class="text-blue-600 underline">$1</a>')
    .replace(/^\* (.*$)/gim, "<li>$1</li>")
    .replace(/(<li>.*<\/li>)/s, '<ul class="list-disc ml-6">$1</ul>')
    .replace(/\n\n/gim, "</p><p>")
    .replace(/^(.*)$/gim, "<p>$1</p>")
    .replace(/<p><\/p>/gim, "")
    .replace(/<p>(<h[1-6]>)/gim, "$1")
    .replace(/(<\/h[1-6]>)<\/p>/gim, "$1")
    .replace(/<p>(<ul)/gim, "$1")
    .replace(/(<\/ul>)<\/p>/gim, "$1");
}
