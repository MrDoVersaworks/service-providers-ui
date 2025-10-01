"use client";

import React, { createContext, useContext, useState } from "react";
import clsx from "clsx";

type MenuContextType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuContext = createContext<MenuContextType | null>(null);

export function DropdownMenu({ children }: React.PropsWithChildren) {
  const [open, setOpen] = useState(false);
  return <MenuContext.Provider value={{ open, setOpen }}>{children}</MenuContext.Provider>;
}

export function DropdownMenuTrigger({
  children,
  asChild = false,
}: React.PropsWithChildren<{ asChild?: boolean }>) {
  const ctx = useContext(MenuContext);
  if (!ctx) throw new Error("DropdownMenuTrigger must be used inside DropdownMenu");
  const { setOpen } = ctx;

  if (asChild && React.isValidElement(children)) {
    // clone element and safely attach onClick
    return React.cloneElement(children as React.ReactElement<any>, {
      onClick: (e: React.MouseEvent) => {
        e.stopPropagation();
        setOpen((prev: boolean) => !prev);
        if ((children as any).props.onClick) {
          (children as any).props.onClick(e);
        }
      },
    });
  }

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        setOpen((prev) => !prev);
      }}
      className="inline-flex items-center"
    >
      {children}
    </button>
  );
}

export function DropdownMenuContent({
  children,
  align = "start",
  className,
}: React.PropsWithChildren<{ align?: "start" | "end"; className?: string }>) {
  const ctx = useContext(MenuContext);
  if (!ctx) throw new Error("DropdownMenuContent must be used inside DropdownMenu");
  const { open, setOpen } = ctx;

  if (!open) return null;

  const alignClass = align === "end" ? "origin-top-right right-0" : "origin-top-left left-0";

  return (
    <div
      className={clsx(
        "absolute mt-2 z-50 min-w-[150px] rounded-md bg-neutral-900 border border-gray-800 shadow-lg py-1",
        alignClass,
        className
      )}
      role="menu"
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<any>, {
              onClick: (e: React.MouseEvent) => {
                setOpen(false);
                if ((child as any).props.onClick) {
                  (child as any).props.onClick(e);
                }
              },
            })
          : child
      )}
    </div>
  );
}

export function DropdownMenuItem({
  children,
  className,
  onClick,
}: React.PropsWithChildren<{ className?: string; onClick?: (e: React.MouseEvent) => void }>) {
  return (
    <div
      className={clsx(
        "px-3 py-2 text-sm hover:bg-neutral-800 cursor-pointer text-gray-200",
        className
      )}
      onClick={onClick}
      role="menuitem"
    >
      {children}
    </div>
  );
}
