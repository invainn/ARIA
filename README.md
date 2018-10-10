# ARIA

[![CircleCI](https://circleci.com/gh/invainn/ARIA/tree/master.svg?style=svg)](https://circleci.com/gh/invainn/ARIA/tree/master)

## Project Description
---
ARIA (Administration, Registration, and Information Assistant) is a web application solution for the Northern Nevada Music Teachers Association (NNMTA). Previous versions of ARIA were hosted on WordPress and contained performance issues as well as functional problems with certain features for both customers and adminstrators.

This version of ARIA (version 3.0) attempts to solve problems with previous iterations of ARIA by creating a full-stack web application built in React.js, Node.js, and PostgreSQL, along with many other tools. Building the web application from the ground up allows our team to have more control over development and addressing the needs of the customer.


This project is being developed to satisfy the CS 425 - Software Engineering course requirements at the University of Nevada Reno (UNR). Our sponsoring faculty member from the Computer Science and Engineering Department is Dr. Frederick Harris, and our Ph.D. advisor/mentor is Jalal Kiswani.

## Team Members
---
* Anthony Bennett
* Nikkolas Irwin
* Kevin Carlos

## Running the application
---
To run ARIA you will need to do the following:

1. Install Docker from Docker's website: https://www.docker.com/
	-Installing Docker will install Docker-Engine (a client-server application with contains a server, a REST API, and a CLI-client)
	-Installing Docker will also provide Docker-Compose (a tool for defining and running multi-container Docker applications)

2. Clone the repository (or if you did that already, pull the most recent changes from GitHub just to be safe).

3. From the project directory, start up the application by running the two following commands:

	a) docker-compose build <br />
	b) docker-compose up <br />

The first Docker command, 'docker-compose build' (without the single quotes) will build the image with the services contained in ARIA's docker-compose.yml file. <br />
The second Docker command, 'docker-compose up' (without the single quotes) builds, (re)creates, starts, and attaches to containers for a service. <br />

4. If the package.json file is updated, the image will need to be rebuilt. In this case the container will need to be stopped, rebuilt, and restarted using 
the following sequence of commands:

	a) docker-compose down (to stop the running container)
	b) docker-compose build (to rebuild the image)
	c) docker-compose up (to start the container again after updating the package.json file)

Commands (b) and (c) have been explained previously in section 3. The new command 'docker-compose down' (without the single quotes) will stop any running containers, remove the containers, networks, volumes, and images created by 'docker-compose up'. <br />

## Development Workflow (How development of ARIA works)
---
ARIA is built with two powerful concepts in mind, microservices and containerization. ARIA uses a microservice architecture to provide modularity to the development process. Using microservices allows our project to be broken down into small, composable modules which can be developed separately, continuously, and independently. Another benefit of this approach are maintainability, testing, scalability, and lifecycle automation. ARIA also uses Docker, a lightweight OS container which provides a VM-like execution environment allowing every aspect of ARIA to be packaged into the container. This approach allows our team to collaborate more easily on project requirements since the Docker image can be pushed to our repository and pulled by any team member allowing each of us to run containers locally for development. Finally, microservices in ARIA are orchestrated through Kubernetes, an open-source tool which allows ARIA to have automated deployment, management, scaling, networking, and availability.

## Libraries/Tools
---
Docker <br />
Kubernetes <br />>
React.js <br />
Node.js <br />
Redux <br />
Redux Thunk <br />
Material UI <br />
Express <br />
Axios <br />
Jest <br />
ESLint <br />
PostgreSQL <br />
