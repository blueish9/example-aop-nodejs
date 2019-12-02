const DAO = {
  // database access: query and retrieve the results here
  fetch(model, ...params) {
    return new model(...params)
  }
}

export default DAO
