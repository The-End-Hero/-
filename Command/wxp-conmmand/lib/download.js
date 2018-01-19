const download = require('download-git-repo')
const ora = require('ora')
const path = require('path')

module.exports = function (target) {
    // console.log(target,'target  downloadjs')
    const target11 = path.join(target || '.', '.download-temp')
    // console.log(target11,'target11')
    return new Promise((resolve, reject)=>{
        // const url = 'The-End-Hero/Back-end-knowledge'
        const url = 'The-End-Hero/vue-cli-custom'
        // const url = 'https://github.com:The-End-Heroe/vue-cli-custo#master'
        const spinner = ora(`正在下载项目模板，源地址：${url}`)
        spinner.start()
        // 这里可以根据具体的模板地址设置下载的url，注意，如果是git，url后面的branch不能忽略
        download(url, target11, { clone: true }, (err) => {
                if (err) {
                    spinner.fail() // wrong :(
                    reject(err)
                } else {
                    spinner.succeed() // ok :)
                    // 下载的模板存放在一个临时路径中，下载完成后，可以向下通知这个临时路径，以便后续处理
                    resolve(target11)
                }
            })
    })
}