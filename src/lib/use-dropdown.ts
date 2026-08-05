"use client";

import { useCallback, useRef, useState } from "react";

// Shared open/close behaviour for the header's three dropdowns (MegaMenu,
// Clients, Contact - PLAN.md section 3A/3.8): hover opens after 150ms and
// closes after 300ms (avoids flicker on a fast mouse pass), keyboard focus
// opens immediately, and focus leaving the whole trigger+panel group (not
// just moving between them) closes it. Escape always closes.
export function useDropdown() {
  const [open, setOpen] = useState(false);
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimers = useCallback(() => {
    if (openTimer.current) clearTimeout(openTimer.current);
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const openNow = useCallback(() => {
    clearTimers();
    setOpen(true);
  }, [clearTimers]);

  const closeNow = useCallback(() => {
    clearTimers();
    setOpen(false);
  }, [clearTimers]);

  const openWithDelay = useCallback(() => {
    clearTimers();
    openTimer.current = setTimeout(() => setOpen(true), 150);
  }, [clearTimers]);

  const closeWithDelay = useCallback(() => {
    clearTimers();
    closeTimer.current = setTimeout(() => setOpen(false), 300);
  }, [clearTimers]);

  const rootProps = {
    onMouseEnter: openWithDelay,
    onMouseLeave: closeWithDelay,
    onBlur: (e: React.FocusEvent<HTMLElement>) => {
      if (!e.currentTarget.contains(e.relatedTarget as Node | null)) closeNow();
    },
    onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => {
      if (e.key === "Escape") closeNow();
    },
  };

  const triggerProps = {
    onFocus: openNow,
    onClick: () => (open ? closeNow() : openNow()),
    "aria-expanded": open,
    "aria-haspopup": true as const,
  };

  return { open, rootProps, triggerProps, openNow, closeNow };
}
