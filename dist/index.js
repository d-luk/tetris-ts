/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createMatrix */
/* unused harmony export copyMatrix */
/* harmony export (immutable) */ __webpack_exports__["d"] = mergeMatrixes;
/* harmony export (immutable) */ __webpack_exports__["a"] = addMatrix;
/* harmony export (immutable) */ __webpack_exports__["f"] = xyMatrix;
/* harmony export (immutable) */ __webpack_exports__["e"] = rotateMatrix;
/* harmony export (immutable) */ __webpack_exports__["b"] = matrixContains;
/* harmony export (immutable) */ __webpack_exports__["c"] = matrixesColliding;
function createMatrix(size) {
    var result = [];
    for (var col = 0; col < size.width; col++) {
        result[col] = new Array(size.height);
    }
    return result;
}
function copyMatrix(matrix) {
    return matrix.reduce(function (result, col, x) {
        result[x] = col.slice();
        return result;
    }, []);
}
function mergeMatrixes(m1, m2, position, target) {
    var result = target || copyMatrix(m1);
    for (var i = 0; i < m2.length; i++) {
        for (var j = 0; j < m2[0].length; j++) {
            var value = m2[i][j];
            if (typeof value === 'undefined')
                continue;
            var x = i + position.x;
            var y = j + position.y;
            if (x >= 0 && x < m1.length &&
                y >= 0 && y < m1[0].length &&
                (value || !result[x][y])) {
                result[x][y] = value;
            }
        }
    }
    return result;
}
function addMatrix(target, source, position) {
    mergeMatrixes(target, source, position, target);
}
function xyMatrix(matrix) {
    return rotateMatrix(matrix)
        .reduce(function (result, col, x) {
        result[x] = col.reverse();
        return result;
    }, []);
}
function rotateMatrix(matrix, reverse) {
    if (reverse === void 0) { reverse = false; }
    var l = matrix.length;
    var result = createMatrix({ width: l, height: l });
    for (var x = 0; x < l; x++) {
        for (var y = 0; y < l; y++) {
            result[x][y] = reverse
                ? matrix[l - y - 1][x]
                : matrix[y][l - x - 1];
        }
    }
    return result;
}
function matrixContains(parent, child, position) {
    for (var i = 0; i < child.length; i++) {
        var col = child[i];
        for (var j = 0; j < col.length; j++) {
            if (!col[j])
                continue;
            var x = i + position.x;
            var y = j + position.y;
            if (x < 0 || x >= parent.length ||
                y < 0 || y >= parent[0].length) {
                return false;
            }
        }
    }
    return true;
}
function matrixesColliding(m1, m2, position) {
    for (var x = 0; x < m2.length; x++) {
        for (var y = 0; y < m2[0].length; y++) {
            if (!m2[x][y])
                continue;
            if (m1[x + position.x][y + position.y]) {
                return true;
            }
        }
    }
    return false;
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Color; });
var Color;
(function (Color) {
    Color[Color["Yellow"] = 1] = "Yellow";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Red"] = 3] = "Red";
    Color[Color["Green"] = 4] = "Green";
    Color[Color["Orange"] = 5] = "Orange";
    Color[Color["Pink"] = 6] = "Pink";
    Color[Color["Purple"] = 7] = "Purple";
})(Color || (Color = {}));


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_matrix_calculations__ = __webpack_require__(0);

var Shape = (function () {
    function Shape(blocks) {
        this._blocks = blocks;
    }
    Object.defineProperty(Shape.prototype, "blocks", {
        get: function () {
            return this._blocks;
        },
        enumerable: true,
        configurable: true
    });
    Shape.prototype.rotate = function (reverse) {
        if (reverse === void 0) { reverse = false; }
        this._blocks = Object(__WEBPACK_IMPORTED_MODULE_0__services_matrix_calculations__["e" /* rotateMatrix */])(this._blocks, reverse);
    };
    return Shape;
}());
/* harmony default export */ __webpack_exports__["a"] = (Shape);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = clonePoint;
/* harmony export (immutable) */ __webpack_exports__["b"] = pointEquals;
function clonePoint(point) {
    return { x: point.x, y: point.y };
}
function pointEquals(a, b) {
    return a.x === b.x && a.y === b.y;
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_player_score__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_point__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_board__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_panel__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_player__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_clear_panel__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_draw_grid__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_draw_matrix__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_matrix_calculations__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_player_score__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__settings__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__vendor_modernizr_min_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__vendor_modernizr_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__vendor_modernizr_min_js__);












var el = document.getElementById('game');
var ctxSize = {
    width: el.offsetWidth,
    height: el.offsetHeight
};
var attributeSize = {
    width: parseInt(el.getAttribute('width'), 10),
    height: parseInt(el.getAttribute('height'), 10)
};
if (attributeSize.width !== ctxSize.width) {
    el.setAttribute('width', "" + ctxSize.width);
}
if (attributeSize.height !== ctxSize.height) {
    el.setAttribute('height', "" + ctxSize.height);
}
var boardSize = {
    width: 16,
    height: 24
};
var panel = Object(__WEBPACK_IMPORTED_MODULE_3__models_panel__["a" /* getPanel */])('game', ctxSize);
var board = new __WEBPACK_IMPORTED_MODULE_2__models_board__["a" /* default */](boardSize);
var player = new __WEBPACK_IMPORTED_MODULE_4__models_player__["a" /* default */]({ x: 7, y: 0 });
var softDropPoints = 0;
function update() {
    var newPos = {
        x: player.position.x,
        y: player.position.y + 1
    };
    if (!board.collides(player.shape.blocks, newPos)) {
        player.position = newPos;
    }
    else {
        board.place(player.shape, player.position);
        var linesCleared = board.clearFullLines();
        if (linesCleared) {
            var scoring = __WEBPACK_IMPORTED_MODULE_10__settings__["a" /* default */].points.linesCleared;
            Object(__WEBPACK_IMPORTED_MODULE_9__services_player_score__["a" /* addScore */])(scoring[linesCleared]);
        }
        player.reset();
        softDropPoints = 0;
        if (board.collides(player.shape.blocks, player.position)) {
            gameOver();
        }
    }
    draw();
}
function draw() {
    var viewMatrix = Object(__WEBPACK_IMPORTED_MODULE_8__services_matrix_calculations__["d" /* mergeMatrixes */])(board.blocks, player.shape.blocks, player.position);
    Object(__WEBPACK_IMPORTED_MODULE_5__services_clear_panel__["a" /* default */])(panel);
    Object(__WEBPACK_IMPORTED_MODULE_6__services_draw_grid__["a" /* default */])(panel, boardSize);
    Object(__WEBPACK_IMPORTED_MODULE_7__services_draw_matrix__["a" /* default */])(panel, viewMatrix);
}
var interval;
var s = 0.5;
function initInterval() {
    window.clearInterval(interval);
    update();
    interval = window.setInterval(update, s * 1000);
}
initInterval();
function gameOver() {
    board.clear();
    player.reset();
    Object(__WEBPACK_IMPORTED_MODULE_9__services_player_score__["c" /* resetScore */])();
}
document.addEventListener('keydown', function (e) {
    var newPosition = {
        x: player.position.x,
        y: player.position.y
    };
    var triggered = true;
    switch (e.code) {
        case 'ArrowUp':
            if (e.repeat)
                return;
            player.shape.rotate();
            if (!board.contains(player.shape.blocks, newPosition)) {
                newPosition = player.getContainedPosition(board);
            }
            break;
        case 'ArrowRight':
            newPosition.x++;
            break;
        case 'ArrowDown':
            newPosition.y++;
            var sdPoints = __WEBPACK_IMPORTED_MODULE_10__settings__["a" /* default */].points.softDrop;
            softDropPoints += sdPoints;
            if (softDropPoints < __WEBPACK_IMPORTED_MODULE_10__settings__["a" /* default */].points.softDropMax) {
                Object(__WEBPACK_IMPORTED_MODULE_9__services_player_score__["a" /* addScore */])(sdPoints);
            }
            break;
        case 'ArrowLeft':
            newPosition.x--;
            break;
        case 'Space':
            var nextPos = newPosition;
            var hdPoints = 0;
            do {
                nextPos = { x: nextPos.x, y: nextPos.y + 1 };
                hdPoints += __WEBPACK_IMPORTED_MODULE_10__settings__["a" /* default */].points.hardDrop;
            } while (!board.collides(player.shape.blocks, nextPos));
            newPosition = { x: nextPos.x, y: nextPos.y - 1 };
            Object(__WEBPACK_IMPORTED_MODULE_9__services_player_score__["a" /* addScore */])(Math.min(hdPoints - __WEBPACK_IMPORTED_MODULE_10__settings__["a" /* default */].points.hardDrop, __WEBPACK_IMPORTED_MODULE_10__settings__["a" /* default */].points.hardDropMax));
            break;
        default:
            triggered = false;
            break;
    }
    var posChanged = !Object(__WEBPACK_IMPORTED_MODULE_1__interfaces_point__["b" /* pointEquals */])(player.position, newPosition);
    if (posChanged) {
        if (!board.collides(player.shape.blocks, newPosition)) {
            player.position = newPosition;
        }
        else
            initInterval();
    }
    if (triggered) {
        e.preventDefault();
        draw();
    }
});
Object(__WEBPACK_IMPORTED_MODULE_0__components_player_score__["a" /* default */])();


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = loadPlayerScore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_player_score__ = __webpack_require__(22);

var scoreEl;
function loadPlayerScore() {
    scoreEl = document.getElementById('player-score');
    Object(__WEBPACK_IMPORTED_MODULE_0__services_player_score__["b" /* onScoreChange */])(function (score) {
        scoreEl.textContent = score.toLocaleString();
    }, true);
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_matrix_calculations__ = __webpack_require__(0);

var Board = (function () {
    function Board(size) {
        this.size = size;
        this.clear();
    }
    Object.defineProperty(Board.prototype, "blocks", {
        get: function () { return this._blocks; },
        enumerable: true,
        configurable: true
    });
    Board.prototype.place = function (shape, position) {
        Object(__WEBPACK_IMPORTED_MODULE_0__services_matrix_calculations__["a" /* addMatrix */])(this.blocks, shape.blocks, position);
    };
    Board.prototype.clearFullLines = function () {
        var _this = this;
        var fullRows = this.getFullLines();
        fullRows.forEach(function (row) { return _this.deleteRow(row); });
        return fullRows.length;
    };
    Board.prototype.getFullLines = function () {
        var rowCount = this._blocks[0].length;
        var incompleteRows = new Array(rowCount - 1);
        rows: for (var y = 0; y < rowCount; y++) {
            for (var x = 0; x < this._blocks.length; x++) {
                if (!this._blocks[x][y]) {
                    incompleteRows[y] = true;
                    continue rows;
                }
            }
        }
        var result = [];
        for (var row = 0; row < rowCount; row++) {
            if (!incompleteRows[row])
                result.push(row);
        }
        return result;
    };
    Board.prototype.deleteRow = function (row) {
        this._blocks.forEach(function (col) {
            col.splice(row, 1);
            col.unshift(undefined);
        });
    };
    Board.prototype.clear = function () {
        this._blocks = [];
        for (var x = 0; x < this.size.width; x++) {
            this._blocks[x] = new Array(this.size.height);
        }
    };
    Board.prototype.contains = function (matrix, position) {
        return Object(__WEBPACK_IMPORTED_MODULE_0__services_matrix_calculations__["b" /* matrixContains */])(this._blocks, matrix, position);
    };
    Board.prototype.collides = function (matrix, position) {
        return !this.contains(matrix, position)
            || Object(__WEBPACK_IMPORTED_MODULE_0__services_matrix_calculations__["c" /* matrixesColliding */])(this.blocks, matrix, position);
    };
    return Board;
}());
/* harmony default export */ __webpack_exports__["a"] = (Board);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getPanel;
function getPanel(canvasID, size) {
    var canvas = document.getElementById(canvasID);
    if (!canvas)
        throw new Error('Canvas not found!');
    var ctx = canvas.getContext('2d');
    if (!ctx)
        throw new Error('Context not found!');
    return { ctx: ctx, size: size };
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_point__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_arrays__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_random_shape__ = __webpack_require__(10);



var Player = (function () {
    function Player(startingPosition) {
        this._startingPos = startingPosition;
        this.reset();
    }
    Object.defineProperty(Player.prototype, "shape", {
        get: function () {
            return this._shape;
        },
        enumerable: true,
        configurable: true
    });
    Player.prototype.reset = function () {
        this.position = Object(__WEBPACK_IMPORTED_MODULE_0__interfaces_point__["a" /* clonePoint */])(this._startingPos);
        this._shape = Object(__WEBPACK_IMPORTED_MODULE_2__services_random_shape__["a" /* default */])();
    };
    Player.prototype.getContainedPosition = function (board) {
        var position = Object(__WEBPACK_IMPORTED_MODULE_0__interfaces_point__["a" /* clonePoint */])(this.position);
        var xLow = Object(__WEBPACK_IMPORTED_MODULE_1__services_arrays__["b" /* findIndex */])(this._shape.blocks, function (col) {
            return Object(__WEBPACK_IMPORTED_MODULE_1__services_arrays__["a" /* findAny */])(col, function (value) { return !!value; });
        }) + position.x;
        if (xLow < 0) {
            position.x += 0 - xLow;
            return position;
        }
        var xHigh = this._shape.blocks.length -
            Object(__WEBPACK_IMPORTED_MODULE_1__services_arrays__["b" /* findIndex */])(this._shape.blocks.reverse(), function (col) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__services_arrays__["a" /* findAny */])(col, function (value) { return !!value; });
            }) + position.x;
        if (xHigh > board.blocks.length) {
            position.x -= xHigh - board.blocks.length;
            return position;
        }
        return position;
    };
    return Player;
}());
/* harmony default export */ __webpack_exports__["a"] = (Player);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = findIndex;
/* harmony export (immutable) */ __webpack_exports__["a"] = findAny;
function findIndex(array, predicate) {
    for (var i = 0; i < array.length; i++) {
        var value = array[i];
        if (predicate(value, i)) {
            return i;
        }
    }
}
function findAny(array, predicate) {
    return typeof findIndex(array, predicate) !== 'undefined';
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getRandomShape;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_shapes_i__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_shapes_j__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_shapes_l__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_shapes_o__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_shapes_s__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_shapes_t__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_shapes_z__ = __webpack_require__(17);







var shapes = [__WEBPACK_IMPORTED_MODULE_0__models_shapes_i__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__models_shapes_j__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__models_shapes_l__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__models_shapes_o__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__models_shapes_s__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__models_shapes_t__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__models_shapes_z__["a" /* default */]];
function getRandomShape() {
    var Shape = shapes[Math.floor(Math.random() * shapes.length)];
    return new Shape();
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_matrix_calculations__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shape__ = __webpack_require__(2);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var c = __WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */].Blue;
var I = (function (_super) {
    __extends(I, _super);
    function I() {
        return _super.call(this, Object(__WEBPACK_IMPORTED_MODULE_0__services_matrix_calculations__["f" /* xyMatrix */])([
            [0, c, 0, 0],
            [0, c, 0, 0],
            [0, c, 0, 0],
            [0, c, 0, 0]
        ])) || this;
    }
    return I;
}(__WEBPACK_IMPORTED_MODULE_2__shape__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (I);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_matrix_calculations__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shape__ = __webpack_require__(2);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var c = __WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */].Pink;
var J = (function (_super) {
    __extends(J, _super);
    function J() {
        return _super.call(this, Object(__WEBPACK_IMPORTED_MODULE_0__services_matrix_calculations__["f" /* xyMatrix */])([
            [0, c, 0],
            [0, c, 0],
            [c, c, 0]
        ])) || this;
    }
    return J;
}(__WEBPACK_IMPORTED_MODULE_2__shape__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (J);


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_matrix_calculations__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shape__ = __webpack_require__(2);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var c = __WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */].Orange;
var L = (function (_super) {
    __extends(L, _super);
    function L() {
        return _super.call(this, Object(__WEBPACK_IMPORTED_MODULE_0__services_matrix_calculations__["f" /* xyMatrix */])([
            [0, c, 0],
            [0, c, 0],
            [0, c, c]
        ])) || this;
    }
    return L;
}(__WEBPACK_IMPORTED_MODULE_2__shape__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (L);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_matrix_calculations__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shape__ = __webpack_require__(2);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var c = __WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */].Yellow;
var O = (function (_super) {
    __extends(O, _super);
    function O() {
        return _super.call(this, Object(__WEBPACK_IMPORTED_MODULE_0__services_matrix_calculations__["f" /* xyMatrix */])([
            [c, c],
            [c, c]
        ])) || this;
    }
    return O;
}(__WEBPACK_IMPORTED_MODULE_2__shape__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (O);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_matrix_calculations__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shape__ = __webpack_require__(2);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var c = __WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */].Red;
var S = (function (_super) {
    __extends(S, _super);
    function S() {
        return _super.call(this, Object(__WEBPACK_IMPORTED_MODULE_0__services_matrix_calculations__["f" /* xyMatrix */])([
            [0, c, c],
            [c, c, 0],
            [0, 0, 0]
        ])) || this;
    }
    return S;
}(__WEBPACK_IMPORTED_MODULE_2__shape__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (S);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_matrix_calculations__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shape__ = __webpack_require__(2);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var c = __WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */].Purple;
var T = (function (_super) {
    __extends(T, _super);
    function T() {
        return _super.call(this, Object(__WEBPACK_IMPORTED_MODULE_0__services_matrix_calculations__["f" /* xyMatrix */])([
            [c, c, c],
            [0, c, 0],
            [0, 0, 0]
        ])) || this;
    }
    return T;
}(__WEBPACK_IMPORTED_MODULE_2__shape__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (T);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_matrix_calculations__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shape__ = __webpack_require__(2);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var c = __WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */].Green;
var Z = (function (_super) {
    __extends(Z, _super);
    function Z() {
        return _super.call(this, Object(__WEBPACK_IMPORTED_MODULE_0__services_matrix_calculations__["f" /* xyMatrix */])([
            [c, c, 0],
            [0, c, c],
            [0, 0, 0]
        ])) || this;
    }
    return Z;
}(__WEBPACK_IMPORTED_MODULE_2__shape__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (Z);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = clearPanel;
function clearPanel(panel) {
    panel.ctx.clearRect(0, 0, panel.size.width, panel.size.height);
}


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = drawGrid;
function drawGrid(panel, gridSize) {
    var tileSize = {
        width: panel.size.width / gridSize.width,
        height: panel.size.height / gridSize.height
    };
    var ctx = panel.ctx;
    ctx.strokeStyle = '#efefef';
    for (var x = 0; x < panel.size.width; x += tileSize.width) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, panel.size.height);
        ctx.stroke();
    }
    for (var y = 0; y < panel.size.height; y += tileSize.height) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(panel.size.width, y);
        ctx.stroke();
    }
}


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = drawMatrix;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_color__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings__ = __webpack_require__(21);


function drawMatrix(panel, matrix) {
    var ctx = panel.ctx;
    var tileSize = {
        width: panel.size.width / matrix.length,
        height: panel.size.height / matrix[0].length
    };
    matrix.forEach(function (col, x) { return col.forEach(function (item, y) {
        if (typeof item === 'undefined' ||
            !__WEBPACK_IMPORTED_MODULE_1__settings__["a" /* default */].drawEmptyTiles && !item)
            return;
        ctx.fillStyle = item ? getColorCode(item) : '#8ED6FF';
        ctx.fillRect(x * tileSize.width, y * tileSize.height, tileSize.width, tileSize.height);
    }); });
}
function getColorCode(color) {
    switch (color) {
        case __WEBPACK_IMPORTED_MODULE_0__models_color__["a" /* Color */].Yellow:
            return '#ffeb3b';
        case __WEBPACK_IMPORTED_MODULE_0__models_color__["a" /* Color */].Blue:
            return '#03a9f4';
        case __WEBPACK_IMPORTED_MODULE_0__models_color__["a" /* Color */].Red:
            return '#f44336';
        case __WEBPACK_IMPORTED_MODULE_0__models_color__["a" /* Color */].Green:
            return '#4caf50';
        case __WEBPACK_IMPORTED_MODULE_0__models_color__["a" /* Color */].Orange:
            return '#ff9800';
        case __WEBPACK_IMPORTED_MODULE_0__models_color__["a" /* Color */].Pink:
            return '#fbafbc';
        case __WEBPACK_IMPORTED_MODULE_0__models_color__["a" /* Color */].Purple:
            return '#9c27b0';
        default:
            return '#000';
    }
}


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var settings = {
    drawEmptyTiles: false,
    points: {
        linesCleared: {
            1: 40,
            2: 100,
            3: 300,
            4: 1200
        },
        softDrop: 1,
        hardDrop: 2,
        softDropMax: 20,
        hardDropMax: 40
    }
};
/* harmony default export */ __webpack_exports__["a"] = (settings);


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addScore;
/* harmony export (immutable) */ __webpack_exports__["c"] = resetScore;
/* harmony export (immutable) */ __webpack_exports__["b"] = onScoreChange;
var currentScore = 0;
function addScore(points) {
    currentScore += points;
    triggerScoreChange();
}
function resetScore() {
    currentScore = 0;
    triggerScoreChange();
}
var subscribers = [];
function onScoreChange(handler, triggerOnInit) {
    if (triggerOnInit === void 0) { triggerOnInit = false; }
    subscribers.push(handler);
    if (triggerOnInit)
        handler(currentScore);
}
function triggerScoreChange() {
    subscribers.forEach(function (handler) { return handler(currentScore); });
}


/***/ }),
/* 23 */
/***/ (function(module, exports) {

/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-canvas-localstorage-serviceworker-sessionstorage-touchevents-webgl !*/
!function(e,t,n){function o(e,t){return typeof e===t}function r(){var e,t,n,r,s,a,i;for(var d in l)if(l.hasOwnProperty(d)){if(e=[],t=l[d],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=o(t.fn,"function")?t.fn():t.fn,s=0;s<e.length;s++)a=e[s],i=a.split("."),1===i.length?Modernizr[i[0]]=r:(!Modernizr[i[0]]||Modernizr[i[0]]instanceof Boolean||(Modernizr[i[0]]=new Boolean(Modernizr[i[0]])),Modernizr[i[0]][i[1]]=r),c.push((r?"":"no-")+i.join("-"))}}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):u?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(){var e=t.body;return e||(e=s(u?"svg":"body"),e.fake=!0),e}function i(e,n,o,r){var i,l,d,c,u="modernizr",p=s("div"),v=a();if(parseInt(o,10))for(;o--;)d=s("div"),d.id=r?r[o]:u+(o+1),p.appendChild(d);return i=s("style"),i.type="text/css",i.id="s"+u,(v.fake?v:p).appendChild(i),v.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),p.id=u,v.fake&&(v.style.background="",v.style.overflow="hidden",c=f.style.overflow,f.style.overflow="hidden",f.appendChild(v)),l=n(p,e),v.fake?(v.parentNode.removeChild(v),f.style.overflow=c,f.offsetHeight):p.parentNode.removeChild(p),!!l}var l=[],d={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){l.push({name:e,fn:t,options:n})},addAsyncTest:function(e){l.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=d,Modernizr=new Modernizr,Modernizr.addTest("serviceworker","serviceWorker"in navigator),Modernizr.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(t){return!1}}),Modernizr.addTest("sessionstorage",function(){var e="modernizr";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(t){return!1}});var c=[],f=t.documentElement,u="svg"===f.nodeName.toLowerCase();Modernizr.addTest("canvas",function(){var e=s("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("webgl",function(){var t=s("canvas"),n="probablySupportsContext"in t?"probablySupportsContext":"supportsContext";return n in t?t[n]("webgl")||t[n]("experimental-webgl"):"WebGLRenderingContext"in e});var p=d._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];d._prefixes=p;var v=d.testStyles=i;Modernizr.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var o=["@media (",p.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");v(o,function(e){n=9===e.offsetTop})}return n}),r(),delete d.addTest,delete d.addAsyncTest;for(var m=0;m<Modernizr._q.length;m++)Modernizr._q[m]();e.Modernizr=Modernizr}(window,document);

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map