;(function() {
	'use strict';

    let startGame = false;
    let isHandlerPlacement = false;
    let isHandlerController = false;
    let compShot = false;
    const getElement = id => document.getElementById(id);

    const getCoordinates = el => {
        const coords = el.getBoundingClientRect();
        return {
            left: coords.left + window.pageXOffset,
            right: coords.
        }
    }
})();