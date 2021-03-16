module.exports = {
  "development": {
  "dialect": "sqlite",
      "storage": "./off-home.sqlite3"
  },
  "test": {
  "dialect": "sqlite",
      "storage": ":memory"
  },
  "production": {
  "dialect": "sqlite",
      "storage": "./off-home.sqlite3"
  }
}
