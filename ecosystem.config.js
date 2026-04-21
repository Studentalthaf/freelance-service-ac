module.exports = {
  apps: [
    {
      name: "service-ac-web",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      cwd: "./",
      instances: 1, // Atur 'max' jika ingin menggunakan semua core CPU
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
