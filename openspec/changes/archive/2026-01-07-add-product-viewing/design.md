# Design for Product Viewing

## Architecture
- Use React hooks for state management (useState for products, filters)
- IntersectionObserver for infinite scroll detection
- AOS for animations, integrated via AnimationProvider
- Component hierarchy: App > ProductList > ProductCard

## Patterns
- Functional components with hooks
- Custom hooks for infinite scroll and filtering
- Separation of concerns: data fetching, UI rendering, animations

## Trade-offs
- Infinite scroll vs pagination: Infinite scroll for better UX, but may impact performance
- Client-side filtering: Simple, but for large datasets, server-side preferred
- AOS animations: Lightweight, but ensure no conflicts with Tailwind

## Data Flow
- Fetch data from `https://dummyjson.com/products`
- Use `limit` and `skip` for pagination (default limit 30)
- Use `/products/search?q={query}` for search
- Use `/products/category/{category}` for category filtering
- Filters update API query, reset list, and re-fetch
- Scroll triggers load more data (increment skip)