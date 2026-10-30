"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";
import { buttonClass, type ButtonKind } from "./ui";

// Copies the email address in one click. If the clipboard is blocked, it opens the mail app instead.
export function CopyEmailButton({ kind = "primary", label = "Copy email" }: { kind?: ButtonKind; label?: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  }

  return (
    <>
      <button type="button" onClick={copy} className={buttonClass(kind)}>
        <span className="grid">
          {/* Both labels share one cell, so the button keeps its width when the text changes. */}
          <span className={`col-start-1 row-start-1 ${copied ? "invisible" : ""}`}>{label}</span>
          <span className={`col-start-1 row-start-1 ${copied ? "" : "invisible"}`}>Copied ✓</span>
        </span>
      </button>
      <span role="status" className="sr-only">
        {copied ? `Email address ${site.email} copied` : ""}
      </span>
    </>
  );
}
