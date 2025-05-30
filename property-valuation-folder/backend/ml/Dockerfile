FROM python:3.9-slim

WORKDIR /app

# Install system dependencies for scikit-learn, LightGBM and other libraries
RUN apt-get update && apt-get install -y \
    build-essential \
    cmake \
    libboost-dev \
    libboost-system-dev \
    libboost-filesystem-dev \
    python3-dev \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements first to leverage Docker cache
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Install LightGBM separately to ensure it builds correctly
RUN pip install --no-cache-dir lightgbm

# Install additional ML libraries if not already in requirements.txt
RUN pip install --no-cache-dir scikit-learn xgboost pandas numpy fastapi uvicorn

# Copy application code
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Command to run the application
CMD ["uvicorn", "api.simple_api:app", "--host", "0.0.0.0", "--port", "5000"]