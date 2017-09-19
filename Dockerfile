# Use an official Python runtime as a parent image
FROM python:2.7-slim

# Set the working directory to /test
WORKDIR /test

# Copy the current directory contents into the container at /test
ADD . /test

# Install any needed packages specified in requirements.txt
# RUN npm install -r requirements.txt
RUN npm install -d -y

# Make port 80 available to the world outside this container
EXPOSE 8000

# COPY . $PROJECT_ROOT


# Define environment variable
# ENV NAME World

# Run app.py when the container launches
# CMD [python, app.py]
