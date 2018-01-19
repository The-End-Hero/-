#!/usr/bin/env node

const program = require('commander')
const path = require('path')
const fs = require('fs')
const glob = require('glob') // npm i glob -D
const download = require('../lib/download.js')

program.usage('<project-name>')
    .parse(process.argv)

// 根据输入，获取项目名称
// console.log(program,'program')
// console.log(program.args,'program.args')
let projectName = program.args[0]

if (!projectName) {  // project-name 必填
    // 相当于执行命令的--help选项，显示help信息，这是commander内置的一个命令选项
    program.help()
    return
}

const list = glob.sync('*')  // 遍历当前目录
let rootName = path.basename(process.cwd())
// console.log(rootName,'rootName')
// if (list.length) {  // 如果当前目录不为空
//     if (list.filter(name => {
//             const fileName = path.resolve(process.cwd(), path.join('.', name))
//             console.log(fileName,'fileName')
//             console.log(fs.statSync(fileName),'fs.stat(fileName)')
//             const isDir = fs.statSync(fileName).isDirectory()
//             return name.indexOf(projectName) !== -1 && isDir
//         }).length !== 0) {
//         console.log(`项目${projectName}已经存在`)
//         return
//     }
//     rootName = projectName
// } else if (rootName === projectName) {
//     rootName = '.'
// } else {
//     rootName = projectName
// }


const inquirer = require('inquirer')
// const list = glob.sync('*')

let next = undefined
if (list.length) {
    if (list.filter(name => {
            const fileName = path.resolve(process.cwd(), path.join('.', name))
            const isDir = fs.statSync(fileName).isDirectory()
            return name.indexOf(projectName) !== -1 && isDir
        }).length !== 0) {
        console.log(`项目${projectName}已经存在`)
        return
    }
    next = Promise.resolve(projectName)
} else if (rootName === projectName) {
    next = inquirer.prompt([
        {
            name: 'buildInCurrent',
            message: '当前目录为空，且目录名称和项目名称相同，是否直接在当前目录下创建新项目？',
            type: 'confirm',
            default: true
        }
    ]).then(answer => {
        return Promise.resolve(answer.buildInCurrent ? '.' : projectName)
    })
} else {
    next = Promise.resolve(projectName)
}
next &&go()

// 这个模块可以获取node包的最新版本
const latestVersion = require('latest-version')  // npm i latest-version -D
const chalk = require('chalk')
const logSymbols = require('log-symbols')
const generator = require('../lib/generator')

function go () {
    // 预留，处理子命令
    // console.log(path.resolve(process.cwd(), path.join('.', rootName)))
    // console.log(12312)
    // download(rootName)
    //     .then(target => console.log(target))
    //     .catch(err => console.log(err))

    next.then(projectRoot => {
        // console.log(111)
        // console.log(projectRoot,'projectRoot')
        if (projectRoot !== '.') {
            fs.mkdirSync(projectRoot)
        }
        // console.log(222)
        return download(projectRoot).then(target => {
            // console.log(target,'target')
            return {
                // projectRoot,
                downloadTemp: target,
                name: projectRoot,
                root: projectRoot,
            }
        })
    }).then(context => {
        console.log(context,'项目的名称')
        return inquirer.prompt([
            {
                name: 'projectName',
                message: '项目的名称',
                default: context.name
            }, {
                name: 'projectVersion',
                message: '项目的版本号',
                default: '1.0.0'
            }, {
                name: 'projectDescription',
                message: '项目的简介',
                default: `A project named ${context.name}`
            }
        ])
            .then(answers => {
            // return latestVersion('macaw-ui').then(version => {
            //     answers.supportUiVersion = version
                return {
                    ...context,
                    metadata: {
                        ...answers
                    }
                }
            // })
        })
    }).then(context => {
        // console.log(context,'generator-之前')
        // 添加生成的逻辑
        return generator(context.metadata, context.root,undefined,context)
    }).then(context => {
        // console.log(context,'context111')
        // 成功用绿色显示，给出积极的反馈
        console.log(logSymbols.success, chalk.green('创建成功:)'))
        console.log()
        console.log(chalk.green('cd ' + context.root + '\nnpm install\nnpm run dev'))
    }).catch(error => {
        // 失败了用红色，增强提示
        console.error(logSymbols.error, chalk.red(`创建失败：${error.message}`))
    })
}