class Video{
    constructor(){
        title = String
        uploader = String
        time = Number
    }
    watch(){
        return `${uploader} parameter watched all ${time} parameter of ${title} parameter!`
    }
}

const video1 = new Video['Bob l éponge', 'harry', 12000]
console.log(watch(video1))