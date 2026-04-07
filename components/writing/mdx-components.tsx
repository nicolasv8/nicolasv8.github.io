import type { ComponentPropsWithoutRef } from "react"

function joinClassNames(...classNames: Array<string | undefined>) {
  return classNames.filter(Boolean).join(" ")
}

export const writingMdxComponents = {
  a: ({ className, href, rel, target, ...props }: ComponentPropsWithoutRef<"a">) => {
    const isExternal = typeof href === "string" && /^https?:\/\//.test(href)

    return (
      <a
        {...props}
        href={href}
        target={isExternal ? "_blank" : target}
        rel={isExternal ? "noreferrer" : rel}
        className={joinClassNames(
          "underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-900",
          className
        )}
      />
    )
  },
  img: ({ alt, className, ...props }: ComponentPropsWithoutRef<"img">) => (
    <img
      {...props}
      alt={alt ?? ""}
      loading="lazy"
      className={joinClassNames("my-10 w-full rounded-sm", className)}
    />
  ),
}
