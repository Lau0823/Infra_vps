#!/bin/bash

# Directorio de backups
BACKUP_DIR="/var/www/backups/db"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
DATABASE_NAME="milesvisual"
CONTAINER_NAME="milesvisual-db"

# Crear directorio si no existe
mkdir -p $BACKUP_DIR

# Ejecutar el volcado de la base de datos desde el contenedor Docker
echo "Iniciando backup de $DATABASE_NAME..."
docker exec $CONTAINER_NAME pg_dump -U postgres $DATABASE_NAME > $BACKUP_DIR/${DATABASE_NAME}_$TIMESTAMP.sql

# Opcional: Comprimir el backup
gzip $BACKUP_DIR/${DATABASE_NAME}_$TIMESTAMP.sql

# Eliminar backups más viejos de 7 días para no llenar el disco
find $BACKUP_DIR -type f -name "*.sql.gz" -mtime +7 -delete

echo "Backup completado: $BACKUP_DIR/${DATABASE_NAME}_$TIMESTAMP.sql.gz"
