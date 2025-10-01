// src/components/ContractModal.tsx
"use client";

import React, { useEffect } from "react";
import { Contract } from "../types/types";

interface Props {
  contract: Contract | null;
  onClose: () => void;
}

export default function ContractModal({ contract, onClose }: Props) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!contract) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-white text-black rounded-lg shadow-xl w-full max-w-2xl p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
          onClick={onClose}
          aria-label="Close dialog"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-3">Contract with {contract.client}</h2>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Services</h3>
          <ul className="space-y-2">
            {contract.services.map((s, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <input type="checkbox" defaultChecked aria-checked="true" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">SLAs</h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            {contract.slas.map((sla, idx) => (
              <li key={idx}>{sla}</li>
            ))}
          </ul>
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
          >
            Close
          </button>
          <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
