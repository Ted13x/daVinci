# DaVinci
Here a description of the projects flow. 
All Services are running independent with their own databases and servers, coordinated by api-gateway. 

## Node
using node v18.16.0 <- pls keep that version to avoid issues! 
!! Please check the version (node -v) before you start the servers !!

## START THE FULL WORKSPACE
cd system && npm run start
starts all services, the api-gateway plus the frontend

## START REDIS SERVER
redis-server

## START SINGLE MICROSERVICE & API-GATEWAY
node services/<service>/server.js   node api-gateway/server.js   
!be aware that's it's usually not necessary to start the single services.