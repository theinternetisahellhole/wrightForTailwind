// WRIGHT FOR TAILWIND POWERD BY THEINTERNETISAHELLHOLE
const https = require('https');
const fs = require('fs');
const path = require('path');

const WRIGHT = path.join(__dirname, 'WRIGHT');

const indexFile = path.join(WRIGHT, 'index.html');
const indexFileContent = `<!DOCTYPE html>
<html lang="en">
    <head>
        <title>WRIGHT POWERD BY THEINTERNETISAHELLHOLE</title>
        
        <meta charset="UTF-8">
        <meta name="description" content="">
        <meta name="keyword" content="">
        <meta name="author" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <script src="https://cdn.tailwindcss.com"></script>

        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
        <link rel="apple-touch-icon" href="favicon.ico" type="image/x-icon">
    </head>
    <body class="bg-gray-100">

        <h1 class="text-4xl font-bold text-center mt-10">Hello World</h1>

        <header></header>
        <main>
            <article></article>
            <aside></aside>
        </main>
        <footer></footer>

        <script src="dashboard/assets/js/app.js" type="text/javascript"></script>
    </body>
</html>`;

const READMEFile = path.join(WRIGHT, 'README.txt');
const READMEFileContent = `## Description

WRIGHT
This platform is a folder structure created for web designers and developers who work with languages like HTML, CSS, JS, PHP, and their libraries and frameworks in the field of development and programming. And it’s designed so that there’s no need to spend time on naming and creating a structure for folders, preventing developers and programmers from getting confused during the naming and folder organization process.
First point: An index file with an html extension is included in the project so that there are no issues in the front-end coding.
Second point: If you want to use libraries and frameworks, I suggest creating a folder within each language’s folder according to your needs and placing the related files there.

## License

(https://github.com/theinternetisahellhole)`;

const faviconURL = 'https://hellstate.web.app/favicon.ico';
const favicon = path.join(WRIGHT, 'favicon.ico');

const dashboardFolder = path.join(WRIGHT, 'dashboard');

const assetsFolder = path.join(dashboardFolder, 'assets');

const cssFolder = path.join(assetsFolder, 'css');
const jsFolder = path.join(assetsFolder, 'js');
const imagesFolder = path.join(assetsFolder, 'images');
const fontsFolder = path.join(assetsFolder, 'fonts');

const stylesheetFile = path.join(cssFolder, 'stylesheet.css');
const stylesheetFileContent = `@charset "UTF-8";

/* :root {} */

* {
    margin: 0;
    border: 0;
    padding: 0;
    box-sizing: border-box;
}`;
const appFile = path.join(jsFolder, 'app.js');
const appFileContent = ``;

if(!fs.existsSync(WRIGHT)){
    fs.mkdirSync(WRIGHT);
    console.log('WRIGHT created successfully.');

    if(!fs.existsSync(dashboardFolder)){
        fs.mkdirSync(dashboardFolder);
        console.log('Dashboard folder created successfully.');

        if(!fs.existsSync(assetsFolder)){
            fs.mkdirSync(assetsFolder);
            console.log('Assets folder created successfully.');
            if(!fs.existsSync(cssFolder)){
                fs.mkdirSync(cssFolder);
                console.log('CSS folder created successfully.');

                fs.writeFile(stylesheetFile, stylesheetFileContent, (err) =>{
                    if(err){
                        console.log('An error has occurred: ', err);
                    } else{
                        console.log('Stylesheet.css file created successfully.');
                    }
                });

            } else{
                console.log('A folder(WRIGHT/dashboard/assets/css) with the same name exists, try again.');
            }
            if(!fs.existsSync(jsFolder)){
                fs.mkdirSync(jsFolder);
                console.log('JS folder created successfully.');

                fs.writeFile(appFile, appFileContent, (err) =>{
                    if(err){
                        console.log('An error has occurred: ', err);
                    } else{
                        console.log('App.js file created successfully.');
                    }
                });
            } else{
                console.log('A folder(WRIGHT/dashboard/assets/js) with the same name exists, try again.');
            }
            if(!fs.existsSync(imagesFolder)){
                fs.mkdirSync(imagesFolder);
                console.log('Images folder created successfully.');
            } else{
                console.log('A folder(WRIGHT/dashboard/assets/images) with the same name exists, try again.');
            }
            if(!fs.existsSync(fontsFolder)){
                fs.mkdirSync(fontsFolder);
                console.log('Fonts folder created successfully.');
            } else{
                console.log('A folder(WRIGHT/dashboard/assets/fonts) with the same name exists, try again.');
            }
        } else{
            console.log('A folder(WRIGHT/dashboard/assets) with the same name exists, try again.');
        }

    } else{
        console.log('A folder(WRIGHT/dashboard/dashboard) with the same name exists, try again.');
    }

    fs.writeFile(indexFile, indexFileContent, (err) =>{
        if(err){
            console.log('An error has occurred: ', err);
        } else{
            console.log('Index.html file created successfully.');
        }
    });

    https.get(faviconURL, (Response) => {
        const faviconStream = fs.createWriteStream(favicon);
        Response.pipe(faviconStream);
        faviconStream.on('finish', () => {
            faviconStream.close();
            console.log('The favicon was successfully downloaded and added to the project.');
        });
    }).on('error', (err) => {
        console.log('Error downloading favicon: ', err.message);
    });

    fs.writeFile(READMEFile, READMEFileContent, (err) =>{
        if(err){
            console.log('An error has occurred: ', err);
        } else{
            console.log('README.txt file created successfully.');
        }
    });

} else{

    console.log('A folder(WRIGHT) with the same name exists, try again.');

  }
