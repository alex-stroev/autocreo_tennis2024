/* eslint-disable new-cap */
window.addEventListener("load", () => {
    document.querySelectorAll(".js-canvas").forEach((canvas) => {
        init(canvas);
    });
});

// window.addEventListener("DOMContentLoaded", function () {
//     document.querySelectorAll(".js-canvas").forEach((canvas) => {
//         init(canvas);
//     });
// });

let currentIndex = 1;
const bodyWrap = document.querySelector(".body-wrap");

function changeText() {
    const previousIndex = currentIndex;
    currentIndex = (currentIndex + 1) % 2;
    if (currentIndex === 0) {
        bodyWrap.classList.remove("body-wrap--first");
        bodyWrap.classList.add("body-wrap--second");
    } else {
        bodyWrap.classList.remove("body-wrap--second");
        bodyWrap.classList.add("body-wrap--first");
    }
}

setInterval(changeText, 5000);

bodyWrap.classList.add("body-wrap--first");

function init(canvas) {
    console.log(canvas);

    if (canvas && canvas?.dataset?.name) {
        // canvas.dataset.name = "cup";

        let comp;
        let lib;
        let loader = new createjs.LoadQueue(false);
        switch (canvas.dataset.name) {
            // case "bgtest":
            //     comp = AdobeAn.getComposition("F19D81A5E1682848BBFF60BA496992F4");
            //     break;
            case "cup":
                loader = new createjs.LoadQueue(false);
                comp = AdobeAn.getComposition("D439C5EC6376814D908B98970C1D7D66");
                lib = comp.getLibrary();
                loader.loadManifest(lib.properties.manifest);
                loader.addEventListener("fileload", function (evt) {
                    handleFileLoad(evt, comp);
                });
                loader.addEventListener("complete", function (evt) {
                    handleComplete(evt, comp, canvas);
                });
                return null;
            // case "cup2":
            //     loader = new createjs.LoadQueue(false);
            //     comp = AdobeAn.getComposition("2715B103A07F194DA5982C08FAC6EDC5");
            //     lib = comp.getLibrary();
            //     loader.loadManifest(lib.properties.manifest);
            //     loader.addEventListener("fileload", function (evt) {
            //         handleFileLoad(evt, comp);
            //     });
            //     loader.addEventListener("complete", function (evt) {
            //         handleComplete(evt, comp, canvas);
            //     });
            //     return null;
            // case "ball":
            //     loader = new createjs.LoadQueue(false);
            //     comp = AdobeAn.getComposition("D8FF10C2FD42BB4E9B3051DE5A1B78B8");
            //     lib = comp.getLibrary();
            //     loader.loadManifest(lib.properties.manifest);
            //     loader.addEventListener("fileload", function (evt) {
            //         handleFileLoad(evt, comp);
            //     });
            //     loader.addEventListener("complete", function (evt) {
            //         handleComplete(evt, comp, canvas);
            //     });
            //     return null;
        }

        // loader = new createjs.LoadQueue(false);
        // comp = AdobeAn.getComposition("D439C5EC6376814D908B98970C1D7D66");
        // lib = comp.getLibrary();
        // loader.loadManifest(lib.properties.manifest);
        // loader.addEventListener("fileload", function (evt) {
        //     handleFileLoad(evt, comp);
        // });
        // loader.addEventListener("complete", function (evt) {
        //     handleComplete(evt, comp, canvas);
        // });
        // return null;

        handleComplete({}, comp, canvas);
    }
}

function handleFileLoad(evt, comp) {
    let images = comp.getImages();
    if (evt && evt.item.type == "image") {
        images[evt.item.id] = evt.result;
    }
}

function handleComplete(evt, comp, canvas) {
    let lib = comp.getLibrary();
    if (lib.ssMetadata.length) {
        let ss = comp.getSpriteSheet();
        let queue = evt.target;
        let ssMetadata = lib.ssMetadata;
        for (let i = 0; i < ssMetadata.length; i++) {
            ss[ssMetadata[i].name] = new createjs.SpriteSheet({
                images: [queue.getResult(ssMetadata[i].name)],
                frames: ssMetadata[i].frames,
            });
        }
    }

    let exportRoot;

    switch (canvas.dataset.name) {
        case "lines":
            exportRoot = new lib.Lines();
            break;
        case "bgtest":
            exportRoot = new lib.bg();
            break;
        case "cup":
            exportRoot = new lib.cup();
            break;
        case "cup2":
            exportRoot = new lib.cup();
            break;
        case "ball":
            exportRoot = new lib.ball();
            break;
    }
    let stage;
    stage = new lib.Stage(canvas);

    const fnStartAnimation = function () {
        stage.addChild(exportRoot);
        createjs.Ticker.framerate = lib.properties.fps;
        createjs.Ticker.addEventListener("tick", stage);
    };
    AdobeAn.compositionLoaded(lib.properties.id);

    fnStartAnimation();
}
