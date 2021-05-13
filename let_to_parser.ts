import {parse} from '@babel/core'
import * as babel from '@babel/core'
import * as fs from 'fs'

const code = fs.readFileSync('./test.js').toString()
const ast = parse(code, {sourceType: 'module'})

const result = babel.transformFromAstSync(ast, code, {
  presets: ['@babel/preset-env']
})

fs.writeFileSync('./file_to_es5.ts', result.code)
