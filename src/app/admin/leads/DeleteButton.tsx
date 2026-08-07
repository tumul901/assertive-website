"use client";

import { Trash2 } from "lucide-react";

export function DeleteButton() {
  return (
    <button
      type="submit"
      onClick={(e) => {
        if (!window.confirm("Are you sure you want to delete this lead? This action cannot be undone.")) {
          e.preventDefault();
        }
      }}
      className="text-ink-body hover:text-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 transition-colors p-1"
      aria-label="Delete lead"
    >
      <Trash2 size={16} aria-hidden="true" />
    </button>
  );
}
