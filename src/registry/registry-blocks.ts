import type { Registry } from "shadcn/schema";

export const blocks: Registry["items"] = [
  {
    name: "wheel-picker-block-01",
    type: "registry:block",
    registryDependencies: ["@ncdai/wheel-picker"],
    files: [
      {
        path: "examples/wheel-picker-demo.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "wheel-picker-block-02",
    type: "registry:block",
    dependencies: ["react-hook-form", "@hookform/resolvers", "zod"],
    registryDependencies: ["@ncdai/wheel-picker", "form", "button", "sonner"],
    files: [
      {
        path: "examples/wheel-picker-form-demo.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "work-experience-block-01",
    type: "registry:block",
    registryDependencies: ["@ncdai/work-experience"],
    files: [
      {
        path: "examples/work-experience-demo.tsx",
        type: "registry:component",
      },
    ],
  },
];
