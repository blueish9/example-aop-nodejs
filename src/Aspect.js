import {afterMethod, beforeMethod} from 'aspect.js'


export class ValidateAspect {
  @beforeMethod({
    classNamePattern: /.*/,
    methodNamePattern: /^(get)/
  })
  validateId(meta) {
    //console.log(`validateId before ${meta.className}.${meta.method.name}`)
    if (!Number.isInteger(meta.method.args[0].id)) {
      meta.method.result = null
      meta.method.proceed = false
    }
  }
}

export class FormatAspect {
  @afterMethod({
    classNamePattern: /.*/,
    methodNamePattern: /^(get)/
  })
  toJsonString(meta) {
    //console.log(`toJsonString after ${meta.className}.${meta.method.name}`)
    meta.method.result = JSON.stringify(meta.method.result)
  }
}
