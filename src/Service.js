import {Article, User} from './Model'
import {Advised} from 'aspect.js'
import Database from './Database'

/*export default class Service {
  getUser({id, name}) {
    if (!Number.isInteger(id))
      return null

    const user = Database.executeTransaction(User, id, name)

    return JSON.stringify(user)
  }

  getArticle({id}) {
    if (!Number.isInteger(id))
      return null

    const article = Database.executeTransaction(Article, id)

    return JSON.stringify(article)
  }

  // getXyz ...
}*/

@Advised()
export default class Service {
  getUser({id, name}) {
    return Database.executeTransaction(User, id, name)
  }

  getArticle({id}) {
    return Database.executeTransaction(Article, id)
  }
}
