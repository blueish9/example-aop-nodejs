const Database = {
  // database access: query and retrieve the results here
  executeTransaction(model, ...params) {
    return new model(...params)
  }
}

export default Database
