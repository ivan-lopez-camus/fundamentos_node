const { exec } = require('child_process')
exec('dir', (e, stdout) => {
    (e) ?
    console.log(e) :
    console.log(stdout)
})

let processes = [
    'dir',
    'node consola.js'
]

exec(processes[1], (err, stdout, sterr) => {
    if (err) {
        console.error(err)
        return false
    }
    console.log(stdout)
})