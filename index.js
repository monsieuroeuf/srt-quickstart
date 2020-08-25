const { SubtitleTime } = require('subtitle-time')

// let t = new SubtitleTime(61, 'second')
// console.log(t.to('srt')) // '00:01:01,000'

let counter = 1
let incrementSeconds = 5
let secondsCounter = 0

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function (data) {
    data.split("\n").forEach(line => {
        process.stdout.write(`${counter}\n`)

        let startTime = new SubtitleTime(secondsCounter, 'second')
        process.stdout.write(`${startTime.to('srt')} --> `)
        
        secondsCounter += incrementSeconds 
        let endTime = new SubtitleTime(secondsCounter, 'second')
       
        process.stdout.write(`${endTime.to('srt')}\n`)
        
        process.stdout.write(`${line}\n\n`)
        counter++
    });
    // process.stdout.write(data);
});
