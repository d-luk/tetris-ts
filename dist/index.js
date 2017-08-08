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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./src/interfaces/point.ts
function clonePoint(point) {
    return { x: point.x, y: point.y };
}

// CONCATENATED MODULE: ./src/services/matrix-calculations.ts
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

// CONCATENATED MODULE: ./src/models/board.ts

var board_Board = (function () {
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
        addMatrix(this.blocks, shape.blocks, position);
    };
    Board.prototype.clear = function () {
        this._blocks = [];
        for (var x = 0; x < this.size.width; x++) {
            this._blocks[x] = new Array(this.size.height);
        }
    };
    Board.prototype.contains = function (matrix, position) {
        return matrixContains(this._blocks, matrix, position);
    };
    Board.prototype.collides = function (matrix, position) {
        return !this.contains(matrix, position)
            || matrixesColliding(this.blocks, matrix, position);
    };
    return Board;
}());
/* harmony default export */ var board_defaultExport = (board_Board);

// CONCATENATED MODULE: ./src/models/panel.ts
function getPanel(canvasID, size) {
    var canvas = document.getElementById(canvasID);
    if (!canvas)
        throw new Error('Canvas not found!');
    var ctx = canvas.getContext('2d');
    if (!ctx)
        throw new Error('Context not found!');
    return { ctx: ctx, size: size };
}

// CONCATENATED MODULE: ./src/services/arrays.ts
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

// CONCATENATED MODULE: ./src/models/player.ts


var player_Player = (function () {
    function Player(shape, position) {
        this.shape = shape;
        this.position = position;
    }
    Player.prototype.getContainedPosition = function (board) {
        var position = clonePoint(this.position);
        var xLow = findIndex(this.shape.blocks, function (col) {
            return findAny(col, function (value) { return !!value; });
        }) + position.x;
        if (xLow < 0) {
            position.x += 0 - xLow;
            return position;
        }
        var xHigh = this.shape.blocks.length -
            findIndex(this.shape.blocks.reverse(), function (col) {
                return findAny(col, function (value) { return !!value; });
            }) + position.x;
        if (xHigh > board.blocks.length) {
            position.x -= xHigh - board.blocks.length;
            return position;
        }
        return position;
    };
    return Player;
}());
/* harmony default export */ var player_defaultExport = (player_Player);

// CONCATENATED MODULE: ./src/services/clear-panel.ts
function clearPanel(panel) {
    panel.ctx.clearRect(0, 0, panel.size.width, panel.size.height);
}

// CONCATENATED MODULE: ./src/services/draw-grid.ts
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

// CONCATENATED MODULE: ./src/models/color.ts
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

// CONCATENATED MODULE: ./src/settings.ts
var settings = {
    drawEmptyTiles: false
};
/* harmony default export */ var settings_defaultExport = (settings);

// CONCATENATED MODULE: ./src/services/draw-matrix.ts


function drawMatrix(panel, matrix, tileSize) {
    var ctx = panel.ctx;
    matrix.forEach(function (col, x) { return col.forEach(function (item, y) {
        if (typeof item === 'undefined' ||
            !settings_defaultExport.drawEmptyTiles && !item)
            return;
        ctx.fillStyle = item ? getColorCode(item) : '#8ED6FF';
        ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
    }); });
}
function getColorCode(color) {
    switch (color) {
        case Color.Yellow:
            return '#ffeb3b';
        case Color.Blue:
            return '#03a9f4';
        case Color.Red:
            return '#f44336';
        case Color.Green:
            return '#4caf50';
        case Color.Orange:
            return '#ff9800';
        case Color.Pink:
            return '#fbafbc';
        case Color.Purple:
            return '#9c27b0';
        default:
            return '#000';
    }
}

// CONCATENATED MODULE: ./src/models/shape.ts

var shape_Shape = (function () {
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
        this._blocks = rotateMatrix(this._blocks, reverse);
    };
    return Shape;
}());
/* harmony default export */ var shape_defaultExport = (shape_Shape);

// CONCATENATED MODULE: ./src/models/shapes/i.ts
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



var c = Color.Blue;
var i_I = (function (_super) {
    __extends(I, _super);
    function I() {
        return _super.call(this, xyMatrix([
            [0, c, 0, 0],
            [0, c, 0, 0],
            [0, c, 0, 0],
            [0, c, 0, 0]
        ])) || this;
    }
    return I;
}(shape_defaultExport));
/* harmony default export */ var i_defaultExport = (i_I);

// CONCATENATED MODULE: ./src/models/shapes/j.ts
var j___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var j_c = Color.Pink;
var j_J = (function (_super) {
    j___extends(J, _super);
    function J() {
        return _super.call(this, xyMatrix([
            [0, j_c, 0],
            [0, j_c, 0],
            [j_c, j_c, 0]
        ])) || this;
    }
    return J;
}(shape_defaultExport));
/* harmony default export */ var j_defaultExport = (j_J);

// CONCATENATED MODULE: ./src/models/shapes/l.ts
var l___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var l_c = Color.Orange;
var l_L = (function (_super) {
    l___extends(L, _super);
    function L() {
        return _super.call(this, xyMatrix([
            [0, l_c, 0],
            [0, l_c, 0],
            [0, l_c, l_c]
        ])) || this;
    }
    return L;
}(shape_defaultExport));
/* harmony default export */ var l_defaultExport = (l_L);

// CONCATENATED MODULE: ./src/models/shapes/o.ts
var o___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var o_c = Color.Yellow;
var o_O = (function (_super) {
    o___extends(O, _super);
    function O() {
        return _super.call(this, xyMatrix([
            [o_c, o_c],
            [o_c, o_c]
        ])) || this;
    }
    return O;
}(shape_defaultExport));
/* harmony default export */ var o_defaultExport = (o_O);

// CONCATENATED MODULE: ./src/models/shapes/s.ts
var s___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var s_c = Color.Red;
var s_S = (function (_super) {
    s___extends(S, _super);
    function S() {
        return _super.call(this, xyMatrix([
            [0, s_c, s_c],
            [s_c, s_c, 0],
            [0, 0, 0]
        ])) || this;
    }
    return S;
}(shape_defaultExport));
/* harmony default export */ var s_defaultExport = (s_S);

// CONCATENATED MODULE: ./src/models/shapes/t.ts
var t___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var t_c = Color.Purple;
var t_T = (function (_super) {
    t___extends(T, _super);
    function T() {
        return _super.call(this, xyMatrix([
            [t_c, t_c, t_c],
            [0, t_c, 0],
            [0, 0, 0]
        ])) || this;
    }
    return T;
}(shape_defaultExport));
/* harmony default export */ var t_defaultExport = (t_T);

// CONCATENATED MODULE: ./src/models/shapes/z.ts
var z___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var z_c = Color.Green;
var z_Z = (function (_super) {
    z___extends(Z, _super);
    function Z() {
        return _super.call(this, xyMatrix([
            [z_c, z_c, 0],
            [0, z_c, z_c],
            [0, 0, 0]
        ])) || this;
    }
    return Z;
}(shape_defaultExport));
/* harmony default export */ var z_defaultExport = (z_Z);

// CONCATENATED MODULE: ./src/services/random-shape.ts







var shapes = [i_defaultExport, j_defaultExport, l_defaultExport, o_defaultExport, s_defaultExport, t_defaultExport, z_defaultExport];
function getRandomShape() {
    var Shape = shapes[Math.floor(Math.random() * shapes.length)];
    return new Shape();
}

// CONCATENATED MODULE: ./src/index.ts









var ctxSize = { width: 400, height: 600 };
var src_tileSize = 20;
var boardSize = {
    width: ctxSize.width / src_tileSize,
    height: ctxSize.height / src_tileSize
};
var src_panel = getPanel('game', ctxSize);
var src_board = new board_defaultExport(boardSize);
var startingPoint = { x: 9, y: 0 };
var player = new player_defaultExport(getRandomShape(), clonePoint(startingPoint));
function update() {
    var newPos = {
        x: player.position.x,
        y: player.position.y + 1
    };
    if (src_board.collides(player.shape.blocks, newPos)) {
        src_board.place(player.shape, player.position);
        player.shape = getRandomShape();
        player.position = clonePoint(startingPoint);
    }
    else {
        player.position = newPos;
    }
    draw();
}
function draw() {
    var viewMatrix = mergeMatrixes(src_board.blocks, player.shape.blocks, player.position);
    clearPanel(src_panel);
    drawGrid(src_panel, boardSize);
    drawMatrix(src_panel, viewMatrix, src_tileSize);
}
update();
window.setInterval(update, 500);
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
            if (!src_board.contains(player.shape.blocks, newPosition)) {
                newPosition = player.getContainedPosition(src_board);
            }
            break;
        case 'ArrowRight':
            newPosition.x++;
            break;
        case 'ArrowDown':
            newPosition.y++;
            break;
        case 'ArrowLeft':
            newPosition.x--;
            break;
        default:
            triggered = false;
            break;
    }
    if (triggered) {
        if (!src_board.collides(player.shape.blocks, newPosition)) {
            player.position = newPosition;
        }
        draw();
    }
});


/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map