# Hello Docker
Project for deploying your first app with Docker.

## System Requirements
This project assumes that you have Docker installed on Ubuntu OS.

## Application Deployment
To deploy the application using Docker, follow these steps:

1. Clone this project: `git clone [REPOSITORY_URL]`
2. Change to the cloned directory with the command: `cd [DIRECTORY_NAME]`
3. Build the Docker image: `docker build -t hello:latest .`
4. Start the container using the created image:
    ```
    docker run -d \
    --name hello_docker \
    --publish 8080:8080 \
    hello:latest
    ```

## Verifying Deployment

We have configured the container to be deployed locally on port 8080, so by accessing http://localhost:8080, you should be able to see our "Hello Docker" application.

## IMPORTANT
Once the container is deployed and its correct operation verified, it is necessary to stop and remove the container to avoid leaving potential vulnerabilities in your system.
Use the following commands:

1. `docker ps` // Use this command to verify the ID of the container you have run.
2. `docker stop [ID]` // Use this command to stop the container. It's not necessary to type the full ID; if you are not running multiple containers, the first few digits are usually sufficient.
3. `docker rm [ID]` // Finally, remove the container.
