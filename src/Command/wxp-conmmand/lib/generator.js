// touch ./lib/generator.js
// npm i handlebars metalsmith -D
const Metalsmith = require('metalsmith')
const Handlebars = require('handlebars')
const rm = require('rimraf').sync
const path = require('path')
const fs = require('fs')

module.exports = function (metadata = {}, src, dest = './',context) {
    // console.log('generator')
    // console.log(metadata,'metadata')
    // console.log(src,'src')
    if (!src) {
        return Promise.reject(new Error(`无效的source：${src}`))
    }

    return new Promise((resolve, reject) => {
        console.log('generator1')
        Metalsmith(process.cwd())
            .metadata(metadata)
            .clean(false)
            .source(src)
            .destination(src+'/')
            .use((files, metalsmith, done) => {

                // const fileName = path.resolve(process.cwd(), path.join('.', name))
                // const isDir =
                // console.log(done.toString(),'done')
                // console.log(files,'files')
                // console.log(metalsmith,'metalsmith')
                const meta = metalsmith.metadata()
                // console.log(meta,'meta')
                Object.keys(files).forEach(fileName => {
                    const fileNameall = path.resolve(process.cwd(), path.join(src,'.', fileName))
                    // console.log(fileNameall,'fileNamefileName')
                    if(fs.statSync(fileNameall).isDirectory()||fileNameall.indexOf('.json')==-1){
                        return
                    }
                    const t = files[fileName].contents.toString()
                    files[fileName].contents = Buffer.from(Handlebars.compile(t)(meta))
                })
                done()
            }).build((err,files) => {
            // rm(src) //如果失败，删除文件夹
            err ? reject(err) : resolve(context)
        })
    })
}