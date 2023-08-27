/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

    let arrayNames = [];

    const fileIput = document.getElementById('formFile');
    console.log(fileIput);
    fileIput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        readXlsxFile(file);
    });
    function readXlsxFile(file) {
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = (event) => {
            let data = event.target.result;
            console.log('event',event);
            const arrayData = data.split('\n');
            const arrayMapped = arrayData.map(elem => {
                const data = elem.split('\r');
                return data[0];
            })
            const arrayCleaned = arrayMapped.map(elem => {
                const data = elem.split(';');
                return data[1];
            })
            arrayNames = arrayCleaned.slice(1, arrayCleaned.length - 1);
            console.log(arrayNames);
            sessionStorage.setItem('arrayNames', JSON.stringify(arrayNames));
        }
    }


