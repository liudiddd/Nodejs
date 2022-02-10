let fs = require('fs');

fs.open('d:/file.txt','r',function(err, fd){
    if(err){
        console.log(err);
        return;
    }
    console.log('d:/file.txt opened');

    let buf = Buffer.alloc(8,1,'utf-8');
    fs.readSync(fd, buf, 0, 8, function(err, bytesRead, buffer){
        if(err){
            console.log(err);
            return;
        }
        console.log('bytesRead: ', bytesRead);
        console.log(buffer);
    })
})