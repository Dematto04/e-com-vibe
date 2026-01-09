# Wishlist Management

The ability for users to save products for later consideration.

## ADDED Requirements

### Requirement: Wishlist State Management
Users MUST be able to add and remove items from a persistent list.

#### Scenario: Add to Wishlist
Given a product that is not in the wishlist
When the user clicks the "Add to Wishlist" button
Then the product is added to the local wishlist storage
And the button state changes to "Added"

#### Scenario: Remove from Wishlist
Given a product that is already in the wishlist
When the user clicks the "Remove from Wishlist" button
Then the product is removed from the local wishlist storage
And the button state changes to "Add"

#### Scenario: Persistence
Given the user has added items to the wishlist
When the user reloads the page
Then the items remain in the wishlist

### Requirement: Wishlist Viewing
Users MUST be able to see all their saved items in one place.

#### Scenario: View Wishlist Page
Given the user has items in the wishlist
When they navigate to the Wishlist page
Then they see a grid of the saved products
