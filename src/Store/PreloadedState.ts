import { AppState } from './Types';

const other = (): AppState => ({
	fractalPoints: {
		globalCompositeOperation: 'source-over',
		iterationDelay: 0,
		maxId: 0,
		updateId: 0,
		points: []
	},
	sourcePoints: {
		maxId: 0,
		points: []
	},
	saves: {
		current: {
			name: 'default'
		},
		others:
			// prettier-ignore
			{
			default: {"fractalPoints":{"globalCompositeOperation":"source-over","iterationDelay":0,"maxId":3,"updateId":0,"points":[{"h":300,"id":0,"iters":4,"w":300,"x":250,"y":350},{"h":300,"id":1,"iters":1,"w":300,"x":350,"y":200},{"h":300,"id":2,"iters":4,"w":300,"x":450,"y":350},{"h":300,"id":3,"iters":4,"w":300,"x":350,"y":500}]},"sourcePoints":{"maxId":7,"points":[{"color":"#285288","h":210,"id":4,"type":"Circle","w":210,"x":350,"y":150},{"color":"#f4d297","h":150,"id":6,"type":"Circle","w":150,"x":350,"y":125},{"color":"#fffffe","h":60,"id":7,"type":"Circle","w":60,"x":350,"y":350}]}},
			thing: {"fractalPoints":{"globalCompositeOperation":"source-over","iterationDelay":0,"maxId":3,"updateId":86,"points":[{"h":300,"id":0,"iters":15,"w":300,"x":250,"y":350},{"h":300,"id":1,"iters":15,"w":300,"x":350,"y":200},{"h":300,"id":2,"iters":15,"w":300,"x":450,"y":350},{"h":300,"id":3,"iters":4,"w":300,"x":350,"y":500}]},"sourcePoints":{"maxId":7,"points":[{"color":"#f41602","h":150,"id":6,"type":"Circle","w":150,"x":350,"y":125},{"color":"#fffffe","h":200,"id":7,"type":"Circle","w":200,"x":350,"y":350}]}},
			other: {"fractalPoints":{"maxId":3,"updateId":0,"globalCompositeOperation":"destination-over","points":[{"x":350,"y":150,"w":300,"h":300,"iters":6,"id":0},{"x":550,"y":350,"w":300,"h":300,"iters":2,"id":1},{"x":350,"y":550,"w":300,"h":300,"iters":6,"id":2}],"iterationDelay":0},"sourcePoints":{"maxId":6,"points":[{"type":"Box","x":100,"y":350,"w":100,"h":100,"color":"#00ffff","id":1},{"type":"Box","x":200,"y":250,"w":100,"h":100,"color":"#ff0000","id":3},{"type":"Circle","x":200,"y":350,"w":100,"h":100,"color":"#0000ff","id":4},{"type":"Box","x":200,"y":450,"w":100,"h":100,"color":"#00ff00","id":5},{"type":"Box","x":275,"y":350,"w":50,"h":100,"color":"#ffffff","id":6}]}},
			carpet: {"fractalPoints":{"maxId":4,"updateId":0,"globalCompositeOperation":"destination-over","points":[{"x":250,"y":150,"w":300,"h":300,"iters":8,"id":0},{"x":450,"y":150,"w":300,"h":300,"iters":8,"id":1},{"x":250,"y":550,"w":300,"h":300,"iters":8,"id":2},{"x":450,"y":550,"w":300,"h":300,"id":4,"iters":8}],"iterationDelay":0},"sourcePoints":{"maxId":11,"points":[{"type":"Circle","x":200,"y":350,"w":100,"h":100,"color":"#ff00ff","id":4},{"type":"Box","x":275,"y":350,"w":50,"h":50,"color":"#ffffff","id":6},{"type":"Circle","color":"#0000ff","x":350,"y":350,"w":100,"h":100,"id":7},{"type":"Box","color":"#ffffff","x":425,"y":350,"w":50,"h":50,"id":8},{"type":"Circle","color":"#00ffff","x":500,"y":350,"w":100,"h":100,"id":9},{"type":"Box","color":"#ffffff","x":350,"y":550,"w":3,"h":300,"id":10},{"type":"Box","color":"#ffffff","x":350,"y":150,"w":3,"h":300,"id":11}]}},
			// square:{"fractalPoints":{"maxId":6,"updateId":0,"globalCompositeOperation":"destination-over","points":[{"x":300,"y":300,"w":600,"h":600,"iters":50,"id":0},{"x":400,"y":300,"w":600,"h":600,"id":4,"iters":50},{"x":300,"y":400,"w":600,"h":600,"id":5,"iters":50},{"x":400,"y":400,"w":600,"h":600,"id":6,"iters":50}],"iterationDelay":0},"sourcePoints":{"maxId":9,"points":[{"type":"Circle","x":148,"y":350,"w":100,"h":100,"color":"#00ffff","id":1},{"type":"Circle","x":219,"y":350,"w":100,"h":100,"color":"#0000ff","id":4},{"type":"Circle","x":275,"y":350,"w":50,"h":100,"color":"#ffffff","id":6},{"type":"Box","color":"#000000","x":300,"y":350,"w":100,"h":1,"id":7},{"type":"Box","color":"#ffffff","x":350,"y":350,"w":2,"h":13,"id":8},{"type":"Circle","color":"#ffffff","x":113,"y":350,"w":30,"h":30,"id":9}]}},
		}
	}
});

export default other;
