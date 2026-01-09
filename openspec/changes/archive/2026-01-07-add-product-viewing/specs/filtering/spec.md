# Filtering Spec

## ADDED Requirements

### Requirement: Category Filter
Users SHALL be able to filter products by category using the category list API.

#### Scenario: User selects category
- Given category list is fetched from `/products/category-list`
- When user selects a category
- Then fetch products from `/products/category/{category}`

### Requirement: Search Filter
Users SHALL be able to search products by name using the search API.

#### Scenario: User types in search
- Given search input is available
- When user types query
- Then fetch products from `/products/search?q={query}`