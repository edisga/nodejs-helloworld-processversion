module.exports = {
  apps : [
      {
        name: "myapp1",
        script: "./server.js",
        watch: true,
        env: {
            "PORT": 3001
        }
      }
  ]
}
