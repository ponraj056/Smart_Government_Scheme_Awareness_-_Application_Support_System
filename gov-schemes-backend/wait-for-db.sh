#!/bin/sh
# wait-for-db.sh

set -e

host="gov-db"
port=5432

echo "⏳ Waiting for PostgreSQL to be ready at $host:$port..."

python3 <<END
import socket, time, sys
host = "$host"
port = $port
while True:
    try:
        with socket.create_connection((host, port), timeout=2):
            break
    except OSError:
        time.sleep(1)
print("✅ PostgreSQL is up — starting FastAPI...")
END

exec "$@"
