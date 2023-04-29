#!/bin/bash

# Define color codes
RED="\033[0;31m"
GREEN="\033[0;32m"
YELLOW="\033[1;33m"
BLUE="\033[0;34m"
NC="\033[0m" # No Color

# Define emojis
INFO_EMOJI="ℹ️"
CHECK_MARK_EMOJI="✅"
WARNING_EMOJI="⚠️"
QUESTION_EMOJI="❓"

install_dependencies() {
  # Check if Homebrew is installed
  if ! command -v brew >/dev/null 2>&1; then
    echo -e "${YELLOW}${QUESTION_EMOJI}${NC} Homebrew is not installed. Would you like to install it now? (y/n)"
    read -r answer
    if [ "$answer" = "y" ] || [ "$answer" = "Y" ]; then
      echo -e "${BLUE}${INFO_EMOJI}${NC} Installing Homebrew..."
      /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    else
      echo -e "${WARNING_EMOJI} Skipping Homebrew installation"
    fi
  else
    echo -e "${GREEN}${CHECK_MARK_EMOJI}${NC} Homebrew is already installed"
  fi

  # Check if MySQL is installed
  if ! command -v mysql >/dev/null 2>&1; then
    echo -e "${YELLOW}${QUESTION_EMOJI}${NC} MySQL is not installed. Would you like to install it now? (y/n)"
    read -r answer
    if [ "$answer" = "y" ] || [ "$answer" = "Y" ]; then
      echo -e "${BLUE}${INFO_EMOJI}${NC} Installing MySQL..."
      brew install mysql
    else
      echo -e "${WARNING_EMOJI} Skipping MySQL installation"
    fi
  else
    echo -e "${GREEN}${CHECK_MARK_EMOJI}${NC} MySQL is already installed"
  fi
}
(install_dependencies)
wait

# Check if MySQL is running
MYSQL_PROCESS_COUNT=$(pgrep mysqld | wc -l)

# Start MySQL server if it's not running
if [ $MYSQL_PROCESS_COUNT -eq 0 ]; then
  echo -e "${INFO_EMOJI} Starting MySQL server..."
  mysql.server start
  while true; do
    MYSQL_PROCESS_COUNT=$(pgrep mysqld | wc -l)
    if [ $MYSQL_PROCESS_COUNT -eq 1 ]; then
      echo -e "${CHECK_MARK_EMOJI} MySQL server is now running"
      break
    else
      echo -e "${INFO_EMOJI} Waiting for MySQL server to start..."
      sleep 1
    fi
  done
else
  echo -e "${GREEN}${CHECK_MARK_EMOJI}${NC} MySQL server is already running"
fi

concurrently "yarn dev:client" "yarn dev:server"
