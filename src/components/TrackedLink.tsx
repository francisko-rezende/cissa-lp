"use client";

import { track } from "@vercel/analytics";
import type { ComponentPropsWithoutRef, MouseEvent } from "react";

type TrackedLinkProps = ComponentPropsWithoutRef<"a"> & {
  event: "whatsapp_click" | "phone_click" | "directions_click";
  location: string;
};

export function TrackedLink({
  event,
  location,
  onClick,
  ...props
}: TrackedLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    track(event, { location });
    onClick?.(e);
  };

  return <a {...props} onClick={handleClick} />;
}
