import type { Metadata } from "next";
import Link from "next/link";

import { Icons } from "@/components/icons";
import { getPostsByCategory } from "@/features/blog/data/posts";

export const metadata: Metadata = {
  title: "Components",
  description: "A collection of reusable components.",
};

export default function Page() {
  const posts = getPostsByCategory("components");

  return (
    <div className="min-h-svh [--color-react:#087EA4] dark:[--color-react:#58C4DC]">
      <div className="screen-line-after px-4">
        <h1 className="text-3xl font-semibold">Components</h1>
      </div>

      <div className="screen-line-after p-4">
        <p className="font-mono text-sm text-balance text-muted-foreground">
          {metadata.description}
        </p>
      </div>

      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/components/${post.slug}`}
          className="group/post flex items-center border-b border-edge pr-4"
        >
          <Icons.react
            className="mx-4 size-5 shrink-0 text-(--color-react)"
            aria-hidden
          />

          <div className="border-l border-dashed border-edge p-4">
            <h2 className="leading-snug font-medium text-balance underline-offset-4 group-hover/post:underline">
              {post.metadata.title}
            </h2>
          </div>

          {post.metadata.new && (
            <span
              className="shrink-0 rounded-md bg-info px-1.5 font-mono text-sm font-medium text-white text-shadow-xs"
              aria-hidden
            >
              New
            </span>
          )}
        </Link>
      ))}

      <div className="h-4" />
    </div>
  );
}
