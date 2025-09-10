import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function NotFound({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-[calc(100svh-5.5rem)] flex-col items-center justify-center",
        className
      )}
    >
      <svg
        className="h-28 w-full text-border"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 514 258"
        fill="none"
      >
        <path
          d="M192 256H64v-64h128v64ZM448 64H320v128h256v64H256V0h192v64ZM64 192H0V0h64v128ZM512 192h-64V0h64v128ZM192"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <h1 className="mt-8 mb-6 font-mono text-8xl font-medium">404</h1>

      <Button variant="default" asChild>
        <Link href="/">
          Go to Home
          <ArrowRightIcon />
        </Link>
      </Button>
    </div>
  );
}
