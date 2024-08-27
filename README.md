# PokéQuiz(In Development) 🕹️

**PokéQuiz** is a trivia game that challenges your knowledge of Pokémon through fun facts and silhouette identification. Learn interesting details and test your recognition skills for various Pokémon! Are you a true PokéFan?

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Running with Docker](#running-with-docker)
- [Tech Stack](#tech-stack)
- [To-Do](#to-do)
- [Contributing](#contributing)
- [License](#license)

## Features

- Pokémon trivia based on fun facts and historical information 📝
- Silhouette identification to guess the Pokémon 🖼️
- **Not** your typical simple quiz game based on general facts :) Check out the site to see it yourself!
- Currently focused on selected Pokémon with plans to expand the pool

## Getting Started

### Prerequisites

- **Docker**: Used to run Apache, MySQL, and phpMyAdmin images for the backend and database management.
- **PHP**: Backend language for handling server-side logic and database interactions.
- **JavaScript**: Used to fetch and display data from PHP files.
- **HTML/CSS**: Frontend technologies for building and styling the quiz interface.

### Prerequisites

- **Docker**: Required to run the application and database containers.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/PokeQuiz.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd PokeQuiz
   ```

### Running with Docker

1. **Ensure Docker is installed and running** on your machine.

2. **Build and start the Docker containers:**

   ```bash
   docker-compose up -d
   ```

   This command will pull the necessary images, create the containers, and start them in detached mode.

3. **Access the application:**
   - Open your browser and go to `http://localhost` to view the PokeQuiz application.
   - Access phpMyAdmin at `http://localhost:8001` to manage your database.
   - Username and password is available in docker-compose.yml

## To-Do

- [ ] Add more trivia questions
- [ ] Expand silhouette options to include more Pokémon
- [ ] Implement different difficulty levels
- [ ] Expand trivia to include Pokémon from additional regions

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)
