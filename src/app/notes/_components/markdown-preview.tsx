"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function MarkdownPreview({ content }: { content: string }) {
  if (!content.trim()) {
    return <p className="text-sm text-neutral-300">Nothing to preview.</p>;
  }
  return (
    <div className="markdown text-sm text-neutral-800">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
