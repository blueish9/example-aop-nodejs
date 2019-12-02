import {afterMethod, beforeMethod} from 'aspect.js'


export class ValidateAspect {
  @beforeMethod({
    classNamePattern: /.*/,
    methodNamePattern: /^(get)/
  })
  validateId(meta) {
    console.log('validateId')
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
    console.log('toJsonString')
    meta.method.result = JSON.stringify(meta.method.result)
  }
}
