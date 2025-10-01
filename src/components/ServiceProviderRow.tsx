// src/components/ServiceProviderRow.tsx
"use client";

import React from "react";
import { ServiceProvider, Contract } from "../types/types";
import { TableCell } from "@/components/ui/table";

function ChevronDownIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ChevronUpIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M18 15l-6-6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* default three-dot icon (used only if no actionSlot provided) */
function DefaultMoreIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
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
  return (
    <>
      {/* Main row: native <tr> so we can put onClick on it */}
      <tr className="cursor-pointer hover:bg-gray-800" onClick={onToggle} role="button" aria-expanded={isOpen}>
        {/* Checkbox cell */}
        <TableCell className="px-4 py-3">
          <input
            type="checkbox"
            onClick={(e) => {
              // don't toggle the row when clicking checkbox
              e.stopPropagation();
            }}
            aria-label={`Select ${provider.name}`}
            className="form-checkbox"
          />
        </TableCell>

        {/* Data cells */}
        <TableCell className="px-4 py-3">{provider.name}</TableCell>
        <TableCell className="px-4 py-3">{provider.company}</TableCell>
        <TableCell className="px-4 py-3">{(provider as any).specialty ?? ""}</TableCell>
        <TableCell className="px-4 py-3">{provider.email}</TableCell>
        <TableCell className="px-4 py-3">{provider.phone}</TableCell>
        <TableCell className="px-4 py-3">{(provider as any).location ?? ""}</TableCell>

        {/* Actions: actionSlot (three dots) + chevron */}
        <TableCell className="px-4 py-3 text-right">
          <div className="flex items-center justify-end gap-3">
            <button
              onClick={(e) => {
                // stop row toggle when clicking the action menu
                e.stopPropagation();
                // action behaviour (open menu) should be implemented where actionSlot is provided
              }}
              aria-label={`Row options for ${provider.name}`}
              className="p-1"
            >
              {actionSlot ?? <DefaultMoreIcon />}
            </button>

            <span className="inline-flex items-center">
              {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </span>
          </div>
        </TableCell>
      </tr>

      {/* Expandable details row (native tr + td with colSpan to avoid TableCell prop issues) */}
      {isOpen && (
        <tr className="bg-gray-900">
          <td colSpan={8} className="p-4">
            <div className="space-y-4">
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

              <div>
                <h4 className="font-medium mb-2">Services & Pricing</h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  {provider.services.map((s, i) => (
                    <li key={i}>
                      {s.name}: <span className="font-medium">${s.price}</span>
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
