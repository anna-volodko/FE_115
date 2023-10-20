const { src, dest } = require('gulp');
const browserSync = require('browser-sync').create();
// local server
function serve() {
browserSync.init({
    server: {
        baseDir:('./src/index.html')
    }
})
}
exports.serve = serve

function moveHtml() {
    return src('src/index.html')
    .pipe(dest('dist/'))
}

exports.moveHtml = moveHtml;