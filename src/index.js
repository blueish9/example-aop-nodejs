import {FormatAspect, ValidateAspect} from './Aspect'
import Service from './Service'

const service = new Service()
console.log(service.getArticle({id: '1'}))
console.log(service.getUser({id: 2, name: 'Hello Kitty'}))
