/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Webpack-TS/Aulas-Webpack/Video-Hud.ts":
/*!***************************************************!*\
  !*** ./src/Webpack-TS/Aulas-Webpack/Video-Hud.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class VideoPlayer {
    videoPlayer;
    playButton;
    stopButton;
    constructor(playerElements) {
        this.videoPlayer = playerElements.videoPlayer;
        this.stopButton = playerElements.stopButton;
        this.playButton = playerElements.playButton;
    }
    playToggle() {
        if (this.videoPlayer.paused) {
            this.videoPlayer.play();
            this.playButton.innerHTML = 'Pause';
        }
        else {
            this.videoPlayer.pause();
            this.playButton.innerHTML = 'Play';
        }
    }
    stopToggle() {
        this.videoPlayer.pause();
        this.videoPlayer.currentTime = 0;
        this.playButton.innerText = 'Play';
    }
    startEvent() {
        this.playButton.addEventListener('click', () => {
            this.playToggle();
        });
        this.stopButton.addEventListener('click', () => {
            this.stopToggle();
        });
    }
}
exports["default"] = VideoPlayer;
const videoPlayer = new VideoPlayer({
    videoPlayer: document.querySelector(".video"),
    playButton: document.querySelector(".play"),
    stopButton: document.querySelector(".stop")
});
videoPlayer.startEvent();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!*********************************!*\
  !*** ./src/Webpack-TS/index.ts ***!
  \*********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./Aulas-Webpack/Video-Hud */ "./src/Webpack-TS/Aulas-Webpack/Video-Hud.ts");

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map