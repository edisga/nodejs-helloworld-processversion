module.exports = {
  apps : [
      {
        name: "myapp",
        script: "./server.js",
        watch: true,
        env: {
            "PORT": 3000,
            "NODE_ENV": "development"
        }
      }
  ]
}
