Feature: Automation practice on web store
Scenario: User should be able to login to the application
Given user should be able to access the url of the application and click on signin
When user should be able to create an account by giving valid emailId
Then user should be able to register by filling personal information
    | FirstElement | LastElement |
    |       Renuka |         B   |
    |       Re7845 |         6   |
    |         5    |        2000 |
And user should be able to register by giving address
    |   Address1 |          Address2 |
    | 36/2       |       game street |
    | vizag      |                 1 |
    | 53004      |                21 |
    | 9999988888 | 78/2, dane street |
And user should be able to add the product to the cart
Then user should be able to proceed to checkout
