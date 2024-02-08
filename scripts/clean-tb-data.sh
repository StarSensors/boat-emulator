#!/bin/bash
sudo rm -rf ./.data/mytb-data
sudo rm -rf ./.data/mytb-logs
mkdir -p ./.data/mytb-data && sudo chown -R 799:799 ./.data/mytb-data
mkdir -p ./.data/mytb-logs && sudo chown -R 799:799 ./.data/mytb-logs
