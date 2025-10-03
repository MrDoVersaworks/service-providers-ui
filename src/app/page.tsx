"use client";

import { useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { mockProviders } from "@/data/mockProviders";
import ServiceProviderRow from "@/components/ServiceProviderRow";
import ContractModal from "@/components/ContractModal";
import { Contract } from "@/types/types";

// Three-dot action icon
function MoreIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-gray-300"
    >
      <circle cx="12" cy="5" r="1.5" />
      <circle cx="12" cy="12" r="1.5" />
      <circle cx="12" cy="19" r="1.5" />
    </svg>
  );
}

// Plus icon for the Add button
function PlusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mr-2"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

export default function Page() {
  const [query, setQuery] = useState("");
  const [openRow, setOpenRow] = useState<number | null>(null);
  const [selectedContract, setSelectedContract] = useState<Contract | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const filteredProviders = mockProviders.filter((p) =>
    [
      p.name,
      p.company,
      p.specialty ?? "",
      p.location ?? "",
      p.email,
      p.phone,
      ...p.contracts.map((c) => c.client),
    ]
      .join(" ")
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  const handleBulkUpload = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".csv,.json";
    input.onchange = () => alert("Bulk upload placeholder triggered");
    input.click();
  };

  return (
    <main className="min-h-screen bg-gray-950 p-6 text-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">
            Service Providers ({mockProviders.length})
          </h1>
          <p className="text-gray-400 text-sm">{mockProviders.length} total</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
          >
            <PlusIcon /> Add Service Provider
          </button>
          <button
            onClick={handleBulkUpload}
            className="px-3 py-2 bg-gray-700 hover:bg-gray-800 rounded text-white"
          >
            Bulk Upload
          </button>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          placeholder="Search by name, phone, or specialty"
          className="w-1/3 p-2 rounded bg-black border border-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="flex gap-2">
          <input
            type="date"
            className="p-2 rounded bg-gray-800 border border-gray-700 text-gray-300"
          />
          <input
            type="date"
            className="p-2 rounded bg-gray-800 border border-gray-700 text-gray-300"
          />
        </div>
      </div>

      {/* Table */}
      <Table className="border border-gray-800 rounded-lg overflow-hidden">
        <TableHeader className="bg-gray-900">
          <TableRow>
            <TableHead className="w-12">
              <input type="checkbox" className="form-checkbox" />
            </TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Specialty</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Location</TableHead>
            <TableHead className="text-right pr-6">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredProviders.length > 0 ? (
            filteredProviders.map((provider) => (
              <ServiceProviderRow
                key={provider.id}
                provider={provider}
                isOpen={openRow === provider.id}
                onToggle={() =>
                  setOpenRow(openRow === provider.id ? null : provider.id)
                }
                onSelectContract={(c) => setSelectedContract(c)}
                actionSlot={<MoreIcon />} // pass the 3-dot menu
              />
            ))
          ) : (
            <TableRow>
              <td colSpan={8} className="text-center text-gray-400 py-6">
                No providers found
              </td>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Contract modal */}
      {selectedContract && (
        <ContractModal
          contract={selectedContract}
          onClose={() => setSelectedContract(null)}
        />
      )}

      {/* Add Service Provider Modal (Dummy) */}
      {showAddModal && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={() => setShowAddModal(false)}
        >
          <div
            className="bg-gray-900 p-6 rounded-lg w-96"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold mb-4">Add Service Provider</h2>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-gray-300"
              />
              <input
                type="text"
                placeholder="Company"
                className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-gray-300"
              />
              <input
                type="text"
                placeholder="Specialty"
                className="w-full p-2 rounded bg-gray-800 border border-gray-700 text-gray-300"
              />
            </div>
            <div className="flex justify-end mt-4 gap-2">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-3 py-1 bg-gray-700 rounded hover:bg-gray-800"
              >
                Close
              </button>
              <button
                onClick={() => {
                  alert("Provider added (placeholder)");
                  setShowAddModal(false);
                }}
                className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
