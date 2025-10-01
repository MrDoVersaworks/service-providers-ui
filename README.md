# Service Providers UI

A Next.js 15 + TypeScript + TailwindCSS project that implements a service providers management interface.  
This project follows the provided design and requirements to display, search, and manage a list of providers.

## Features

- **Responsive Table View** of 10 service providers
- Columns: `Select`, `Name`, `Company`, `Specialty`, `Email`, `Phone`, `Location`, `Actions`
- **Expandable rows** with:
  - Client contracts
  - Services & pricing
- **Contract Modal** to view SLA details
- **Search bar** (black background) with placeholder:  
  _“Search by name, phone, or specialty”_
- **Date pickers** using `DD-MM-YYYY` format
- **Action menu** (three-dot icon) in each row
- **Row selection** with checkboxes
- **Add Service Provider** button with plus icon
- **Bulk Upload** button
- **Header summary** showing provider count (`Service Providers (10)`)

## Project Structure

src/
 ├─ app/
 │   └─ page.tsx          # Main page with provider table
 ├─ components/
 │   ├─ ui/
 │   │   ├─ table.tsx     # Generic table components
 │   │   ├─ button.tsx    # Generic button
 │   │   └─ ...          
 │   ├─ ServiceProviderRow.tsx  # Row with expand/collapse + actions
 │   └─ ContractModal.tsx       # Modal to view contracts
 ├─ data/
 │   └─ mockProviders.ts  # Mock provider data (10 entries)
 └─ types/
     └─ types.ts          # Type definitions (ServiceProvider, Contract, etc.)

## Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/your-username/service-providers-ui.git
cd service-providers-ui
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## Tech Stack

- [Next.js 15](https://nextjs.org/)
- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Status

- Matches provided screenshot design
- All 10 service providers with full details
- No TypeScript errors

## Notes

- This project uses **mock data** only (`mockProviders.ts`).  
- Integration with a real backend/API can be added in the future.  
- Dropdown menu actions (three-dot icon) are placeholders and can be extended for **Edit/Delete/View** functionality.
