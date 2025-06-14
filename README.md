# Portfolio

This is a simple portfolio website showcasing my projects and contact information. It features a theme toggle that allows users to switch between light and dark modes.

## Table of Contents

*   [Description](#description)
*   [Features](#features)
*   [Technologies Used](#technologies-used)
*   [Setup](#setup)
*   [Usage](#usage)
*   [Customization](#customization)
*   [License](#license)
*   [Contact](#contact)

## Description

This portfolio website is designed to be a clean and professional way to present my skills, projects, and contact details. It is built using HTML, CSS, and JavaScript, with a focus on simplicity and responsiveness.

## Features

*   **Responsive Design:** The website is designed to work well on various screen sizes, from desktop to mobile.
*   **Theme Toggle:** Users can switch between light and dark themes using the theme toggle button. The selected theme is saved in local storage so it persists across page loads.
*   **Project Showcase:**  A section dedicated to displaying my projects with links to the code and live demos (where available).
*   **Contact Information:**  Clear and easy-to-find contact information, including email, LinkedIn, and GitHub links.

## Technologies Used

*   **HTML:**  For structuring the content of the website.
*   **CSS:**  For styling the website and implementing the theme toggle.
*   **JavaScript:**  For handling the theme toggle functionality and saving the user's preference.

## Setup

1.  **Clone the repository:**

    ```bash
    git clone [your-repository-url]
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd [your-project-directory]
    ```

3.  **Open `index.html` in your browser.**  No server is required, as this is a purely client-side website.

## Usage

*   Simply open the `index.html` file in your web browser.
*   Click the "Toggle Theme" button to switch between light and dark modes.
*   Browse the different sections to view my projects and contact information.

## Customization

*   **Content:**  Edit the `index.html` file to update the content of the website, including your name, description, project details, and contact information.
*   **Styling:**  Modify the `style.css` file to customize the appearance of the website, including colors, fonts, and layout. The CSS is well-commented to help you understand the different sections.
*   **Theme Colors:**  The `style.css` file uses CSS variables to define the theme colors.  You can easily change the color scheme by modifying the values of these variables in the `:root` and `.dark` sections.  For example:

    ```css
    /* style.css */

    :root {
        --bg-color: #ffffff; /* Light background */
        --text-color: #1a1a1a; /* Dark text */
        --primary-color: #0077cc; /* Header color */
    }

    html.dark {
        --bg-color: #121212; /* Dark background */
        --text-color: #f0f0f0; /* Light text */
        --primary-color: #4ea8de; /* Dark header color */
    }
    ```

## License

This project is open-source and available under the [Specify License - e.g., MIT License](LICENSE) (if you choose to include a license file).

## Contact

*   **Name:** Mufasa (Mufasa King)
*   **Email:** [mufasa@lion.king](mailto:mufasa@lion.king)
*   **LinkedIn:** [https://www.linkedin.com/](https://www.linkedin.com/)
*   **GitHub:** [https://github.com/(https://github.com/)
