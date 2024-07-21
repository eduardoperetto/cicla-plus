# CICLA+

## Index
1. [Introduction](#introduction)
2. [Objective](#objective)
2. [Technologies](#technologies)
3. [Setup and Installation](#setup-and-installation)
4. [Environment Configuration](#environment-configuration)
5. [Running the Application](#running-the-application)
6. [Docker and Docker-compose Documentation](#docker-and-docker-compose-documentation)
7. [Contributors](#contributors)
8. [Screenshots](#screenshots)

## Introduction
CICLA Plus is a full stack web application project developed as part of the Software Engineering course in the Computer Science program at UFRGS. The project aims to provide a comprehensive application leveraging modern web technologies and system architecture.

## Objective
The project aims to create a platform that facilitates the exchange of recyclable materials for benefits. The concept involves companies posting advertisements requesting the raw materials they need and offering incentives in return, such as products or discount coupons. On the other side of the transaction are the suppliers, who are individuals or small businesses responding to the posted ads, donating their materials in exchange for the offered benefits.

## Technologies
- **Backend**: 
	- Django
	- Django REST framework
- **Frontend**: 
	- React
	- Tailwind CSS
- **Database**: 
	- PostgreSQL
- **Containerization**:
	- Docker
	- Docker-compose

## Setup and Installation
To get started with CICLA Plus, you need to have Docker and Docker-compose installed on your system. These tools will handle the installation of all other dependencies.

### Prerequisites
- Docker
	- [Docs](https://docs.docker.com/)
- Docker-compose
	- [Docs](https://docs.docker.com/compose/)

### Installation
1. Clone this repository:
    ```sh
    git clone https://github.com/eduardoperetto/cicla-plus.git
    cd cicla-plus
    ```
2. Make sure you have Docker and Docker-compose installed.

## Environment Configuration
We use an environment configuration file to manage secrets and other settings. An `example.env` file is provided in the repository. You need to create a `.env` file in the `env` folder based on this example for the application to run correctly.

## Running the Application
Once you have Docker and Docker-compose installed, and your `.env` file set up, you can run the application with the following command:
```sh
docker-compose up
```

## Contributors
- Eduardo Peretto
- Bernardo Beneduzi
- Lucca Kroeff
- Sofia Braga

## Screenshots
![App Screenshot](https://github.com/user-attachments/assets/55f1354d-a2a0-4458-9d0e-9e45c43239de)

