#!/bin/bash

# Couleurs pour les messages
RED='\033[0;31m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
MAGENTA='\033[0;35m'
CYAN='\033[0;36m'
WHITE='\033[1;37m'
NC='\033[0m' # Pas de couleur

# Émojis pour les messages
ERROR_EMOJI="❌"
WARNING_EMOJI="⚠️"
SUCCESS_EMOJI="✅"
INFO_EMOJI="ℹ️"
HTTP_REQUEST_EMOJI="🌐"
STARTUP_EMOJI="🚀"

# Démarrer le serveur et rediriger la sortie vers une boucle while
nodemon --watch src --ext ts,tsx --exec 'ts-node' ./server/server.tsx 2>&1 | while IFS= read -r line; do
  line=$(echo "$line" | sed -E 's/^\[[0-9]+\]//')
  
  if [[ $line == *"Error"* ]]; then
    echo -e "${RED}${ERROR_EMOJI} $line${NC}"
  elif [[ $line == *"Warning"* ]]; then
    echo -e "${YELLOW}${WARNING_EMOJI} $line${NC}"
  elif [[ $line == *"Server is listening on port"* ]]; then
    # Extraire le numéro de port avec sed
    PORT=$(echo $line | sed -n 's/.*port \([0-9]*\).*/\1/p')
  elif [[ $line == *"[nodemon]"* ]]; then
    echo -e "${BLUE}${INFO_EMOJI} $line${NC}"
  elif [[ $line == *"[webpack]"* ]]; then
    echo -e "${MAGENTA}${INFO_EMOJI} $line${NC}"
  elif [[ $line == *"[HTTP Request]"* ]]; then
    echo -e "${CYAN}${HTTP_REQUEST_EMOJI} $line${NC}"
  elif [[ $line == *"[Starting]"* ]]; then
    echo -e "${WHITE}${STARTUP_EMOJI} $line${NC}"
  else
    echo -e "${GREEN}${SUCCESS_EMOJI} $line${NC}"
  fi
done
