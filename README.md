# Singapore Property Value Prediction and Evaluation System

This project aims to design a web-based system for prediction and evaluation of Singapore property values by using machine learning and historical property transaction data.

## Data Sources
- HDB resale transactions
- URA private property transactions
- OneMap

## Project Structure
- `data/`: Contains raw and processed datasets
- `notebooks/`: Jupyter notebooks for exploration and analysis
- `src/`: Source code for data processing and modeling
- `property-valuation-folder/`: Application folder for backend, frontend, ML, Valuation model
## Overview
Web-based ML system predicting Singapore property values from HDB, URA, and OneMap data.

## Architecture
Ingest → Feature engineering → Train (tracked in MLflow) → Model registry/artifacts → FastAPI /predict → Streamlit UI.

## Data sources and constraints
HDB resale: quarter-by-quarter extraction approach to ensure reliability 
.
URA private: API exposes ~5 years; explain evaluation split and any coverage caveats 
.
OneMap: free/tokenless endpoints for specific services at time of report; note any tokens used 
.
## Quickstart
Prereqs: Docker/Compose
cp .env.example .env; docker compose up -d —build
Train (optional): make train
Test: curl /health and POST /predict
UI: open http://localhost:8501

## Results
Baseline vs XGBoost/LightGBM; MAE/RMSE; temporal CV; error analysis by district/type

## Limitations and ethics
URA 5-year cap, residential scope, potential sampling bias, data freshness; list known failure modes 

## Operations
Backups (DB/artifacts), logs, minimal runbook (deploy, rollback, rotate secrets)
Security notes: don’t expose admin endpoints; use TLS and strong secrets
