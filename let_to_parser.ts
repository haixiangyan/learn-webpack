import {parse} from '@babel/core'
import traverse from '@babel/traverse'
import generate from '@babel/generator'

const code = `let a = 'a'; let b = 'b'`
const ast = parse(code, {sourceType: 'module'})

console.log(ast)
