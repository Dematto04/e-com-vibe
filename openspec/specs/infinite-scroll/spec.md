# infinite-scroll Specification

## Purpose
TBD - created by archiving change add-product-viewing. Update Purpose after archive.
## Requirements
### Requirement: Load More on Scroll
Products SHALL load automatically using pagination parameters when user scrolls near bottom.

#### Scenario: User scrolls to bottom
- Given more products are available (total > loaded)
- When user reaches scroll threshold
- Then fetch next batch using `skip` and `limit` parameters

### Requirement: Loading Indicator
The system SHALL show a loading state during fetch.

#### Scenario: Fetching products
- Given infinite scroll triggered
- When loading
- Then show spinner or loading text

