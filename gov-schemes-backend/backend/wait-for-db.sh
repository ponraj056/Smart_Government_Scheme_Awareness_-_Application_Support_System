
#!/bin/bash
# wait-for-db.sh

set -e

host="gov-db"
port="5432"

echo "⏳ Waiting for PostgreSQL ($host:$port) to start..."

until pg_isready -h "$host" -p "$port" > /dev/null 2>&1; do
  sleep 1
done

echo "✅ PostgreSQL is up — starting FastAPI..."
exec "$@"
