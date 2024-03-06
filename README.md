
# Todo List App

This is a simple Todo application built with Node.js, Express, and MongoDB, following the MVC (Model-View-Controller) architecture.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create, read, update, and delete Todos.
- Store Todos in a MongoDB database.
- Follows the MVC architecture for a modular and organized codebase.

## File Structure

- `connection.js`: Connects the application to the MongoDB database.
- `models/todoModel.js`: Defines the data structure for Todos.
- `controllers/todoController.js`: Handles different actions on Todos.
- `routes/todoRoutes.js`: Sets up routes for handling Todo-related operations.
- `app.js`: Entry point of the application, sets up the Express server and connects routes.
