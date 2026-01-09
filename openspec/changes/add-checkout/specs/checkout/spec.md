# Checkout Flow

The process of entering shipping information and finalizing an order.

## ADDED Requirements

### Requirement: Checkout Form Validation
-The system MUST validate user inputs before allowing order submission.
-Input field should optimize UX. For example: Expiry Date automatic add '/' between MM and YY

#### Scenario: Missing required fields
Given the user is on the checkout page
When they submit the form with empty fields
Then error messages are displayed for each missing required field
And the order is not submitted

#### Scenario: Invalid email format
Given the user enters an invalid email address
When they try to submit
Then an error message regarding email format is displayed

#### Scenario: Strict format validation
Given the user enters data with incorrect formats
When they submit the form (e.g. Expiry Date without '/', invalid Zip length, invalid Card length)
Then specific error messages are displayed for each invalid format
And the order is not submitted

### Requirement: Order Placement
The system MUST clear the cart and redirect the user upon successful order placement.

#### Scenario: Successful Order
Given the user has filled out the form correctly
When they click "Place Order"
Then the cart is emptied
And the user is redirected to the success page
