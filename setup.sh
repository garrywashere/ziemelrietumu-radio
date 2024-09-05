#!/bin/bash

echo "[*] Creating Virtual Environment..."
python3 -m venv .venv
echo "[+] Created"

echo "[*] Activating & Installing Dependencies..."
echo "=========="
source .venv/bin/activate && pip install -r Requirements.txt
echo "=========="
echo "[+] Activated & Installed"

echo "Setup Complete."