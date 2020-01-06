module.exports = {
  apps : [
      {
        name: "myapp1",
        script: "./server.js",
        watch: true,
        error_file:'./error.log',
        out_file:'./output.log',
      }
  ]
}
