
FROM alpine

# Set the working directory to /test
WORKDIR /test

# Copy the current directory contents into the container at /test
ADD . /test

RUN npm install -d -y

# Make port 80 available to the world outside this container
EXPOSE 8000

COPY . $PROJECT_ROOT
