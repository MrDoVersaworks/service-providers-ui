Service Providers UI

A Next.js 15 + TypeScript + Tailwind CSS project that implements a service providers management interface.
This project follows the provided design and requirements to display, search, and manage a list of service providers.

Features

Responsive table view of 10 service providers

Columns: Select, Name, Company, Specialty, Email, Phone, Location, Actions

Expandable rows with:

Client contracts

Services and pricing

Contract modal to view SLA details

Search bar (black background) with placeholder text:
"Search by name, phone, or specialty"

Date pickers using MM-DD-YYYY format

Action menu (three-dot icon) in each row with dropdown

Row selection with checkboxes

Add Service Provider button with plus icon

Bulk Upload button

Header summary showing total provider count (Service Providers (10))

Project Structure
src/
├─ app/
│  └─ page.tsx               # Main page with provider table
├─ components/
│  ├─ ui/
│  │  ├─ table.tsx          # Generic table components
│  │  ├─ button.tsx         # Generic button component
│  │  └─ ...
│  ├─ ServiceProviderRow.tsx # Row with expand/collapse + action menu
│  └─ ContractModal.tsx      # Modal to view contracts
├─ data/
│  └─ mockProviders.ts      # Mock provider data (10 entries)
└─ types/
   └─ types.ts              # Type definitions (ServiceProvider, Contract, etc.)

Getting Started

Clone the repository

git clone https://github.com/your-username/service-providers-ui.git
cd service-providers-ui


Install dependencies

npm install


Run the development server

npm run dev


Visit http://localhost:3000
 in your browser.

Tech Stack

Next.js 15

React 18

TypeScript

Tailwind CSS

Status

Matches the provided screenshot design layout

Displays all 10 service providers with full details

No TypeScript errors

Fully functional search, filter, add, bulk upload, and action menu features

Notes

The project uses mock data only (mockProviders.ts).

Integration with a real backend/API can be added in the future.

Dropdown menu actions (three-dot icon) currently use placeholder logic and can be extended for real Edit/Delete/View functionality.
