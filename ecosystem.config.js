module.exports = {
  apps: [
    {
      name: 'miles-back',
      cwd: '../backend',
      script: 'dist/main.js',
      env: {
        NODE_ENV: 'production',
        PORT: 3002
      }
    },
    {
      name: 'miles-front',
      cwd: '../frontend',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    }
  ]
};
