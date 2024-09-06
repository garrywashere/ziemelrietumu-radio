# 📻 ZiemeļRietumu Radio Station Landing Page

![Logo](/static/images/logo.png)

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/garrywashere/ziemelrietumu-radio)

## 👀 Overview

This is a simple, fast, and lightweight landing page for the ZiemeļRietumu radio station, built on Docker, HTML, JavaScript and Python. The goal is to provide a streamlined and efficient user experience, focusing on usability, maintainability and deployability.

## 💡 Features

-   **Stream Functionality:** Basic audio stream feature for Icecast live radio.
-   **Lightweight Design:** Doesn't rely on any JavaScript frameworks.
-   **Ease of Use:** From being deployable as a Docker stack, to having a simple user interface. This project is as easy to use as it gets.

## ⚙️ Requirements

-   Docker
-   Domain
-   Existing Icecast stream
-   Internet connection

## 🐳 Installation - Docker

1. Clone the repository:

    ```bash
    git clone https://github.com.garrywashere/ziemelrietumu-radio
    ```

2. Navigate to the project directory:

    ```bash
    cd ziemelrietumu-radio
    ```

3. Build the Docker image:

    ```bash
    docker build -t radio:latest .
    ```

4. Run the stack:

    ```bash
    docker compose up -d
    ```

### 🛜 Setup the Proxy

5. Navigate to `localhost:81`

6. Setup an Admin account, the default credentials are:

    - Username: `admin@example.com`
    - Password: `changeme`

    You will then be prompted to enter your own credentials.

7. Click `Add Proxy Host`, then fill out `Details` tab:

    - Domain Names: {Your chosen FQDN}
    - Scheme: `http`
    - Forward Hostname / IP: `radio-app-1`
    - Forward Port: `8080`

8. Navigate to the `Custom locations` tab and click `Add Location`:

    - Define location: `/steam`
    - Scheme: `http`
    - Forward Hostname / IP: {IP of your Icecast stream}
    - Forward Port: `8000`

    Click `Add Location` again:

    - Define location: `/status-json.xsl`
    - Scheme: `http`
    - Forward Hostname / IP: {IP of your Icecast stream}
    - Forward Port: `8000`

9. Navigate to the FQDN supplied in the `Details` tab

10. Profit
