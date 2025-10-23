# Use official Python slim image
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Install PostgreSQL client (required for pg_isready)
RUN apt-get update && \
    apt-get install -y postgresql-client && \
    rm -rf /var/lib/apt/lists/*

# Copy dependencies first
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the backend folder
COPY ./backend ./backend

# Set PYTHONPATH so backend module can be imported
ENV PYTHONPATH=/app

# Expose the port FastAPI will run on
EXPOSE 8000

# Start the app using wait-for-db.sh
CMD ["bash", "-c", "chmod +x /app/backend/wait-for-db.sh && /app/backend/wait-for-db.sh uvicorn backend.main:app --host 0.0.0.0 --port 8000 --reload"]
