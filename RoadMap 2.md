# ROADMAP

## define services:
all services should run  for security reasons through a proxy and also an api-gateway.

- userService 
    - registration
    - login
    - logout
    - delete account
- storeService
    - create
    - read
    - update
    - delete
- addressBookService
    - create
    - read
    - update
    - delete
- productService 
    - create
    - read
    - update
    - delete
- setService (a set contains at least a combination of two products or a combination of one product and one set)
    - create
    - read
    - update
    - delete
- catalogService (a catalog can have assigned products and / or sets)
    - create
    - read
    - update
    - delete
- categoryService (there are three levels of categories - category -> related subCategory -> related subSubCategory)
    - create
    - read
    - update
    - delete
- cartService
    - create
    - read
    - update
    - delete
- orderService
    - create
    - read
    - update
    - delete