import {parse} from '@babel/core'
import traverse from '@babel/traverse'
import generate from '@babel/generator'

const code = `let a = 'a'; let b = 'b'`
const ast = parse(code, {sourceType: 'module'})

traverse(ast, {
  enter: item => {
    if (item.node.type === 'VariableDeclaration') {
      if (item.node.kind === 'let') {
        item.node.kind = 'var'
      }
    }
  }
})

const result = generate(ast, {}, code)
console.log(result.code)
