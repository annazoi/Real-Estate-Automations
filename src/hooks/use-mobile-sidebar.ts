"use client";

import { useState } from "react";

export function useMobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return {
    isOpen,
    toggle: () => setIsOpen((v) => !v),
    close: () => setIsOpen(false),
  };
}
