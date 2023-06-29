
# ChatBit - A Realtime ChatApp

A web application built using Next.js that provides users with a seamless and real-time chat experience. It allows users to communicate with their friends in real-time, manage friend lists, send friend requests, and view chat history.

## Purpose
The purpose of ChatBit is to enable users to connect and chat with their friends in real-time. It provides a user-friendly interface and leverages modern web technologies to deliver a seamless chat experience.

## Features

- User Registration and Authentication: Users can create an account and log in to the application using their email and password or through their Google accounts.
- Friend Management: Users can manage their friend lists, send friend requests, and accept or decline incoming friend requests.
- Real-time Chat: Users can initiate real-time chat conversations with their friends, sending and receiving messages instantly.
- Unseen Chat Notifications: Users receive toast notifications for unseen chat messages when they are not actively viewing the chat interface.
- Chat History: Users can view their chat history, allowing them to scroll through previous messages exchanged with their friends.
- Account Management: Users can update their profile information, including name, email, and profile picture.

## Getting Started

To run this project on your local system, follow the instructions below:

### Prerequisites

* Node.js installed on your machine
* Redis server or access to a Redis instance
* Google API credentials for authentication

### Setup

1. Download or clone the repository:

```bash
  git clone https://github.com/Pranav-Programmer/ChatBit
```

2. Navigate to the project directory:

```bash
  cd ChatBit
```

3. Install the dependencies:

```bash
  npm install
```

4. Set up environment variables:

- Create a .env.local file in the root directory of the project.
- Add the following environment variables:
    - UPSTASH_REDIS_REST_URL: The URL of the Upstash Redis instance or your Redis server.
    - UPSTASH_REDIS_REST_TOKEN: The authentication token for the Upstash Redis instance.
    - cluster: change upstash cluster in "ChatBit\src\lib\pusher" file.
    - GOOGLE_CLIENT_ID: The client ID of your Google API credentials.
    - GOOGLE_CLIENT_SECRET: The client secret of your Google API credentials.

ChatBit uses Upstash as the Redis database for storing user information, chat messages, and friend relationships. To set up the Upstash database, you need to sign up for an Upstash account and obtain the Redis REST URL and token.

upsatsh - https://console.upstash.com/

ChatBit integrates with the Google API to provide users with the option to sign up and log in using their Google accounts. To use this feature, you need to set up Google API credentials by creating a project in the Google Developers Console.

Google Cloud - https://console.cloud.google.com/apis

5. Start the development server:

```bash
  npm run dev
```
## Running the App

1. Sign up for an account using your email and password or by using your Google account credentials.
2. Log in to the application using your registered credentials.
3. Manage your friend list by sending friend requests and accepting or declining incoming friend requests.
4. Initiate chat conversations with your friends and enjoy real-time messaging.
5. View your chat history and scroll through previous messages exchanged with your friends.
6. Update your profile information, including name, email, and profile picture.


https://github.com/Pranav-Programmer/ChatBit/assets/79044490/f4240e10-4098-4428-bcdb-10d472b28d51


## Feedback and Support

For any feedback or support related inquiries, please contact me at https://pranav-programmer.github.io/Contact-Form/


## 

This project was developed as part of an exercise and does not guarantee production-grade quality or ongoing maintenance. Feel free to use it as a starting point for your own chat application.
