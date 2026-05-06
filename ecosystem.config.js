module.exports = {
  apps: [
    {
      name: 'miles-back',
      cwd: '/var/www/backend',
      script: 'dist/main.js',
      instances: 'max', // Usa todos los núcleos de CPU disponibles
      exec_mode: 'cluster', // Habilita el modo Cluster para Zero Downtime real
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      env_production: {
        NODE_ENV: 'production',
        PORT: 3002
      }
    },
    {
      name: 'miles-front',
      cwd: '/var/www/frontend',
      script: 'npm',
      args: 'start',
      instances: 1, // Next.js suele ir mejor en modo fork o con pocas instancias en VPS pequeños
      autorestart: true,
      watch: false,
      max_memory_restart: '800M',
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    }
  ]
};
