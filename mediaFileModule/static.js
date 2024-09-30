const fs = require('fs');

const extensions = {
    '/': {
        path: __dirname + '/views/profile.html',
        filename: 'profile.html',
        encoding: 'utf8',
        contentType: 'text/html'
    },
    html: {
        path: __dirname,
        filename: '',
        encoding: 'utf8',
        contentType: 'text/html'
    },
    css: {
        path: __dirname,
        filename: '',
        encoding: 'utf8',
        contentType: 'text/css'
    },
    jpg: {
        path: __dirname,
        filename: '',
        encoding: '',
        contentType: 'image/jpg'
    },
    ico: {
        path: __dirname,
        filename: '',
        encoding: '',
        contentType: 'image/vnd'
    }
};

const static_contents = (request, response) => {
    const url = request.url;
    const extension = url.split('.').pop();
    let newUrl = url.split('/');
    let goTo = (newUrl[newUrl.length-2] !== '') ? '/' + newUrl[newUrl.length-2] + '/' + newUrl[newUrl.length-1] : '/' + newUrl[newUrl.length-1];
    const filePath = extensions[extension].path + goTo;

    if(fs.existsSync(filePath)){
        fs.readFile(filePath, extensions[extension].encoding, (error, contents) => {
            response.writeHead(200, 'success', {'Content-Type': extensions[extension].contentType});
            response.write(contents);
            response.end();
        });
    }
    else{
        response.end('This is not a valid url!');
    }
}

module.exports = static_contents;