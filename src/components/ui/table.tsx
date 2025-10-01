"use client";

import * as React from "react";

export function Table({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={className ?? ""}>
      <table className="w-full min-w-full table-auto">{children}</table>
    </div>
  );
}

export function TableHeader({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  return <thead className={className ?? ""}>{children}</thead>;
}

export function TableBody({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  return <tbody className={className ?? ""}>{children}</tbody>;
}

export function TableRow({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  return <tr className={className ?? ""}>{children}</tr>;
}

export function TableHead({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <th scope="col" className={className ?? "text-left px-4 py-3 text-sm font-medium text-gray-400"}>
      {children}
    </th>
  );
}

export function TableCell({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  return <td className={className ?? "px-4 py-3 text-sm text-gray-200"}>{children}</td>;
}
