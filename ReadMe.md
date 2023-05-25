# DaVinci
Read to understand the flow of the workspace. 
All Services are running independent with their own databases and servers, coordinated by api-gateway.


## START THE FULL WORKSPACE
cd system && npm run start

## START REDIS SERVER
redis-server

## START SINGLE MICROSERVICE & API-GATEWAY
node services/<service>/server.js   node api-gateway/server.js   
