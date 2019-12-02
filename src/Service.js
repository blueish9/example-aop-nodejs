import {Article, User} from './Model'
import {Advised} from 'aspect.js'
import DAO from './DAO'

/*export default class Service {
  getUser({id, name}) {
    if (!Number.isInteger(id))
      return null

    const user = DAO.fetch(User, id, name)

    return JSON.stringify(user)
  }

  getArticle({id}) {
    if (!Number.isInteger(id))
      return null

    const article = DAO.fetch(Article, id)

    return JSON.stringify(article)
  }

  // getXyz ...
}*/

@Advised()
export default class Service {
  getUser({id, name}) {
    //console.log('getUser')
    return DAO.fetch(User, id, name)
  }

  getArticle({id}) {
    //console.log('getArticle')
    return DAO.fetch(Article, id)
  }
}
