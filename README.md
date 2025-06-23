# Distance Technical Assessment - Task 2: Search Suggestion Autocomplete

## Project Overview

This submission demonstrates a fully functional Lead Search Suggestion feature simulating a realistic CRM use case. The solution focuses on real-world search behavior with dynamic filtering, reusable component architecture, smooth UI interaction, and a polished SaaS-level interface using Material UI.

## Problem Statement

Real-time search suggestion systems require:

- Fast filtering as users type
- Scalable handling of larger datasets
- Smooth user experience with zero input lag
- Clean reusable frontend architecture for long-term maintainability

The goal is to simulate these challenges in a client-side frontend-only solution.

## Solution Approach

Dynamic Dataset:

- On initial load, 50 random leads are generated using faker-js, each with:
  - Full Name
  - Company Name
  - Department (Sales, Marketing, Support, Engineering, Finance, HR, Operations)

Debounced Search Input:

- Input is debounced using lodash.debounce to avoid expensive filtering on every keystroke.

Department Filtering:

- Users can filter leads by department dynamically through dropdown selection.

Reusable Components:

- All UI elements are fully decoupled into reusable components:
  - SearchInput
  - DepartmentFilter
  - SuggestionList
  - SearchSuggestions (business logic container)

Consistent UI Behavior:

- Fixed result container height with internal scrolling for stable UI.
- Consistent polished layout using Material UI components.
- SaaS-like clean design suitable for production systems.

## Technologies Used

- Next.js (App Router with TypeScript)
- React Hooks (useState, useEffect, useMemo)
- Material UI (Professional SaaS UI Design System)
- faker-js (Dynamic fake data generation)
- lodash.debounce (Optimized input throttling)

## Performance Optimization Applied

- Debounced input to prevent excessive filtering computations.
- useMemo to cache filtered dataset efficiently.
- Scrollable fixed-height list to maintain stable layout and avoid layout shift.
- Component-level separation for scalable rendering.

## Getting Started

Step 1 - Install dependencies:
npm install

Step 2 - Start development server:
npm run dev

Step 3 - Open your browser and navigate to:
http://localhost:3000/search-suggestions

## Folder Structure

/src  
  /app/search-suggestions/page.tsx - Main page entry  
  /components  
    SearchSuggestions.tsx - Business logic container  
    SearchInput.tsx - Reusable search input  
    DepartmentFilter.tsx - Reusable department dropdown  
    SuggestionList.tsx - Reusable suggestion list  
  /utils  
    generateLeads.ts - Fake lead data generator

## Task 2 Completed

This solution demonstrates:

- Real-world CRM-like search suggestion experience
- Dynamic client-side search and filtering
- Fully reusable, scalable frontend architecture
- Professional SaaS UI design using Material UI
- Production-quality code structure ready for real business applications

## Potential Future Improvements

- Integrate backend API for live data retrieval
- Implement virtualization for larger datasets
- Add infinite scroll or pagination
- Accessibility improvements
