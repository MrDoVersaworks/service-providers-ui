"use client";

import React, { useEffect, useRef, useState } from "react";
import { ServiceProvider, Contract } from "../types/types";
import { TableCell } from "@/components/ui/table";

function ChevronDownIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronUpIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M18 15l-6-6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DefaultMoreIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <circle cx="12" cy="5" r="1.5" />
      <circle cx="12" cy="12" r="1.5" />
      <circle cx="12" cy="19" r="1.5" />
    </svg>
  );
}

interface Props {
  provider: ServiceProvider;
  isOpen: boolean;
  onToggle: () => void;
  onSelectContract: (c: Contract) => void;
  actionSlot?: React.ReactNode;
}

export default function ServiceProviderRow({
  provider,
  isOpen,
  onToggle,
  onSelectContract,
  actionSlot,
}: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close the menu if you click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Summary Row */}
      <tr
        className="cursor-pointer hover:bg-gray-800"
        onClick={onToggle}
        role="button"
        aria-expanded={isOpen}
      >
        {/* Checkbox */}
        <TableCell className="px-4 py-3">
          <input
            type="checkbox"
            onClick={(e) => e.stopPropagation()}
            aria-label={`Select ${provider.name}`}
            className="form-checkbox"
          />
        </TableCell>

        {/* Data cells */}
        <TableCell className="px-4 py-3">{provider.name}</TableCell>
        <TableCell className="px-4 py-3">{provider.company}</TableCell>
        <TableCell className="px-4 py-3">
          {(provider as any).specialty ?? ""}
        </TableCell>
        <TableCell className="px-4 py-3">{provider.email}</TableCell>
        <TableCell className="px-4 py-3">{provider.phone}</TableCell>
        <TableCell className="px-4 py-3">
          {(provider as any).location ?? ""}
        </TableCell>

        {/* Actions (3-dot menu + chevron) */}
        <TableCell className="px-4 py-3 text-right">
          <div className="relative flex items-center justify-end gap-3" ref={menuRef}>
            {/* Three-dot button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen((prev) => !prev);
              }}
              aria-label={`Row options for ${provider.name}`}
              className="p-1"
            >
              {actionSlot ?? <DefaultMoreIcon />}
            </button>

            {/* Dropdown menu */}
            {menuOpen && (
              <div className="absolute right-0 top-7 w-32 bg-gray-800 border border-gray-700 rounded shadow-lg z-50">
                <button
                  className="block w-full text-left px-3 py-2 hover:bg-gray-700 text-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    alert(`Edit ${provider.name}`);
                    setMenuOpen(false);
                  }}
                >
                  Edit
                </button>
                <button
                  className="block w-full text-left px-3 py-2 hover:bg-gray-700 text-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    alert(`Delete ${provider.name}`);
                    setMenuOpen(false);
                  }}
                >
                  Delete
                </button>
              </div>
            )}

            <span className="inline-flex items-center">
              {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </span>
          </div>
        </TableCell>
      </tr>

      {/* Expanded Details Row */}
      {isOpen && (
        <tr className="bg-gray-900">
          <td colSpan={8} className="p-4">
            <div className="space-y-4">
              {/* Contracts */}
              <div>
                <h4 className="font-medium mb-2">Clients & Contracts</h4>
                <ul className="list-disc list-inside text-sm space-y-2">
                  {provider.contracts.map((c) => (
                    <li key={c.id} className="flex items-center justify-between">
                      <span>{c.client}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectContract(c);
                        }}
                        className="text-sm underline text-blue-400"
                      >
                        View Contract
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-medium mb-2">Services & Pricing</h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  {provider.services.map((s, i) => (
                    <li key={i}>
                      {s.name}:{" "}
                      <span className="font-medium">${s.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}
