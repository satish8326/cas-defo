# Cascade Defo Auth & Dashboard

React 18 + TypeScript + Ant Design implementation of the Cascade Defo authentication flow and dashboard UI (Login, Signup, Forgot Password, Dashboard, Orders).

## Tech Stack

- React 18
- TypeScript
- Vite
- React Router v6
- Ant Design 5
- Axios

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+ (or pnpm / yarn if you prefer)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Then open the URL printed in the terminal (default: `http://localhost:5173`).

### Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```text
src/
  app/
    App.tsx
    routes.tsx
    providers.tsx

  assets/
    images/
      logo.png
      cascade-dafo-logo.png
    styles/
      global.css
      dashboard.css
      antd-theme.ts

  components/
    common/
      AppButton.tsx
      AppInput.tsx
      AppCard.tsx
      AppTable.tsx
      AppTag.tsx
    layout/
      AuthLayout.tsx
      DashboardLayout.tsx
      Sidebar.tsx
      Header.tsx
    filters/
      OrderStatusTabs.tsx

  constants/
    routes.ts
    orderStatus.ts

  features/
    auth/
      Login.tsx
      Signup.tsx
      ForgotPassword.tsx
      auth.api.ts
      auth.types.ts
      auth.routes.tsx

    dashboard/
      Dashboard.tsx
      Products.tsx
      SettingsPage.tsx
      TemplatesPage.tsx
      InvoicesPage.tsx
      QuickActionCard.tsx
      StatCard.tsx

    orders/
      OrdersPage.tsx
      OrdersTable.tsx
      orders.types.ts
      orders.mock.ts

  services/
    axios.ts

  index.tsx
```

## Environment Variables

The Axios instance reads the base API URL from:

- `VITE_API_BASE_URL`

Create a `.env` file in the project root:

```bash
VITE_API_BASE_URL=https://api.example.com
```

## Auth Flow

- Login, Signup, and Forgot Password screens are built with AntD `Form`, `Input`, and `Button`.
- API calls are mocked in `src/features/auth/auth.api.ts`.
- On successful login, the app navigates to the dashboard (`/dashboard`).

## Dashboard & Orders

- `DashboardLayout` provides the sidebar, header, and content shell.
- The Orders list screen (`/dashboard/orders`) uses AntD `Table`, `Tabs`, `Tag`, and `Dropdown` for:
  - Status filters with counts
  - Sortable date columns
  - Responsive table → cards on mobile

## Scripts

- `npm run dev` – start dev server
- `npm run build` – production build
- `npm run preview` – preview production build

## Notes

- All data is mocked; integrate real APIs by updating `auth.api.ts`, `orders.mock.ts`, and `services/axios.ts`.
- Styling is handled via `global.css` and `dashboard.css` plus AntD theme tokens (`antd-theme.ts`).


