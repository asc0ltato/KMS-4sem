(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.button1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AijijIFHAAIAAFHIlHAAg");
	this.shape.setTransform(16.4,16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCCCC").s().p("AijCkIAAlHIFHAAIAAFHg");
	this.shape_1.setTransform(16.4,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCFF33").s().p("AijCkIAAlHIFHAAIAAFHg");
	this.shape_2.setTransform(16.4,16.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AhjhtIDHAAIAADbIjHAAg");
	this.shape_3.setTransform(16.4,16.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCFF33").s().p("AhjBuIAAjbIDHAAIAADbg");
	this.shape_4.setTransform(16.4,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4,p:{scaleX:1,scaleY:1,x:16.4}},{t:this.shape_3,p:{scaleX:1,scaleY:1,x:16.4}}]},1).to({state:[{t:this.shape_4,p:{scaleX:2.171,scaleY:1.891,x:16.5}},{t:this.shape_3,p:{scaleX:2.171,scaleY:1.891,x:16.5}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,34.9,34.9);


(lib.Тело = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABPmXQAEAEAFAEQAjAjAAAyQAAAxgjAjQgFAFgFAEQggAbgrAAQgDAAgEAAIAABIQAAgRALgMQANgNASAAQASAAAMANQANAMAAASQAAASgNANQgMAMgSAAQgSAAgNgMQgLgMAAgSIAAHQQAfCBBwggQg7BbhQAAQhNAAg7hXQgIgNgIgOQg/hyAAihQAAihA/hyQAjg/ArgcQgDgDgEgEQgjgjAAgxQAAgyAjgjQAHgHAHgGQAfgWAnAAQArAAAhAbQBfADgZh/AhrgdQAAAQgMAKQgKAKgQAAQgPAAgLgKQgKgKAAgQQAAgPAKgLQALgLAPAAQAQAAAKALQAMALAAAPgAgEh6IAAACABOjdQApAdAiA8QA/ByAAChQAAChg/ByQgHAMgHALAgEjCQgogDgegaAhDmcQhlATATiDAC8BEQAAANgKAJQgJAKgNAAQgNAAgJgKQgJgJAAgNQAAgNAJgJQAJgJANAAQANAAAJAJQAKAJAAANgAgeCHQAAAKgHAHQgIAHgKAAQgKAAgHgHQgHgHAAgKQAAgKAHgIQAHgHAKAAQAKAAAIAHQAHAIAAAKgABlD/QAAANgJAJQgJAJgNAAQgNAAgJgJQgJgJAAgNQAAgNAJgJQAJgJANAAQANAAAJAJQAJAJAAANgAhhFPQAAAJgIAHQgHAHgJAAQgKAAgGgHQgIgHAAgJQAAgKAIgHQAGgHAKAAQAJAAAHAHQAIAHAAAKgAgEFYQgOBvh2gK");
	this.shape.setTransform(-15.3,-4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiMGGQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHgAAtE8QgJgJAAgNQAAgNAJgJQAJgJANAAQANAAAJAJQAJAJAAANQAAANgJAJQgJAJgNAAQgNAAgJgJgAhKC+QgIgHAAgKQAAgKAIgHQAHgHAKAAQAKAAAHAHQAIAHAAAKQAAAKgIAHQgHAIgKAAQgKAAgHgIgACDCBQgJgJAAgNQAAgNAJgKQAJgJANAAQANAAAKAJQAJAKAAANQAAANgJAJQgKAJgNAAQgNAAgJgJgAitAjQgLgLAAgPQAAgPALgLQALgKAPAAQAPAAALAKQALALAAAPQAAAPgLALQgLALgPAAQgPAAgLgLgAAFg0QgMgMAAgRIAAgCQAAgSAMgMQAMgMASAAQASAAANAMQAMANAAASQAAASgMAMQgNANgSAAQgSAAgMgNgAgHicQgngDgegZIgHgHQgkgjAAgyQAAgxAkgkIAOgMQAfgXAmAAQAsAAAgAbIAJAIQAkAkAAAxQAAAygkAjIgKAJQggAagrAAIgHAAg");
	this.shape_1.setTransform(-15,-8.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AiIEjIAEAAIAAAAIAQAAIAAAAIAAAAQBiAAANhhIABgEIgBAEQgNBhhiAAIAAAAIAAAAIgQAAIAAAAIgEAAIgPgbQg/hyAAigQAAiiA/hyQAig/ArgcQAeAaAoACIAABJIAAACQAAASALAMQAMAMATAAQASAAAMgMQAMgNAAgSQAAgSgMgMQgMgNgSAAQgTAAgMANQgLAMAAARIAAhJIAHABQArAAAggbQApAcAhA9QA/ByAACiQAACgg/ByIgNAWIgBABIgBAAIAAAAQgVAGgSAAIgBAAIAAAAQhMAAgZhnIAAAAIAAnQIAAHQIAAAAQAZBnBMAAIAAAAIABAAQASAAAVgGIAAAAIABAAIABgBQg7BchQAAQhNAAg7hXgAiKCkQgGAHgBAKQABAJAGAHQAIAHAJAAQAJAAAIgHQAGgHABgJQgBgKgGgHQgIgHgJAAQgJAAgIAHgAAwBPQgKAJABANQgBANAKAJQAIAJANAAQANAAAKgJQAIgJABgNQgBgNgIgJQgKgJgNAAQgNAAgIAJgAhIgkQgHAIAAAKQAAAKAHAHQAIAGAJAAQALAAAGgGQAIgHAAgKQAAgKgIgIQgGgHgLAAQgJAAgIAHgACFhrQgIAJgBANQABANAIAJQAKAKANAAQANAAAJgKQAJgJAAgNQAAgNgJgJQgJgJgNAAQgNAAgKAJgAirjRQgLALAAAPQAAAQALAKQALALAPAAQAQAAAKgLQALgKAAgQQAAgPgLgLQgKgLgQAAQgPAAgLALgAiIEjIAAAAgAgEldIAAAAg");
	this.shape_2.setTransform(-15.3,10.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.8,-58.7,45.1,108.5);


(lib.Нога = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AiwA/QCkgTAQhqICtAA");
	this.shape.setTransform(-23.2,-9.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AilBIQCcgnADhoICsAA");
	this.shape_1.setTransform(-22.2,-8.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AiaBRQCUg6gLhnICsAA");
	this.shape_2.setTransform(-21.1,-7.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AiQBaQCNhOgZhlICtAA");
	this.shape_3.setTransform(-20,-6.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AiFBjQCFhignhjICtAA");
	this.shape_4.setTransform(-18.9,-5.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AiMBeQCLhWgfhlICtAA");
	this.shape_5.setTransform(-19.6,-6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AiTBZQCQhKgVhnICsAA");
	this.shape_6.setTransform(-20.4,-6.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("AibBTQCXg+gNhnICsAA");
	this.shape_7.setTransform(-21.1,-7.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AiiBOQCcgygEhpICtAA");
	this.shape_8.setTransform(-21.8,-7.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AipBJQCigmAEhrICtAA");
	this.shape_9.setTransform(-22.5,-8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.9,-16.4,37.4,14.5);


(lib.Жукперевертыш = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AglpcQgQgOgQgPQieiWAAjTQAAjUCeiWQAoglArgdIkRlcAl9icQAxhtBDhiQBpiYB7hZAJ818QAeAWAcAaQCfCWAADUQAADTifCWQgDADgEAEQicCPjbAAQjJAAiUh5AJ818IDhluAAO2OQCDhTCnAAQC5AACLBlAKvpyQCNBbB3CsQBEBjAxBuIGRAAQAYCaBWBdQAJAKAKAKQBuBnDHASASdEFQARB9AACHQAABLgFBJQgQDXhAC7QgzCXhTCFQgPAZgRAZQgVAegWAcQjuE0lFAAQlDAAjskvQgYgegXghQhliTg8isQhEjDgRjiImdAAQAsERmLBcASuKdIGRAAQA2FiGAAiAQoiaQBWC+AfDhAPTVLIGSAAQA1FiGBAiAmHiGIAKAAAmHiGQAFgLAFgLQLDD5Lij3AnyKZIgNAAQgFhHAAhJQAAiJASh9QAdjUBOi1ImgAAQAtERmLBbQgGACgHACAkuVLImqAAQAtERmLBcA/PDpQgSAEgTAEAn/KZQNjFQNFlMAnyEDQNHE8NIk6AjaW8QJQEVISkaAmqQ+QMRFVLylk");
	this.shape.setTransform(317.7,27.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AovOBIADABIAEACIAHADIAAAAQEeCDEPAAIAAAAIAAAAQEZAAEIiLIABgBIABAAIAEgDQjuE0lFAAQlCAAjtkugAAMQKQkPAAkeiDIAAAAIgHgDIgEgCIgDgBQgYgfgXghQhkiTg9isIAGADQF9CkF2AAIAAAAIABAAQGFAAF/izIAGgDQg0CXhSCFIghAyQgVAegWAcIgEADIgBAAIgBABQkICLkZAAIAAAAIAAAAgAovOBIAAAAgAgGKpQl2AAl9ikIgGgDQhEjDgRjiIAOAFIAHADQGqChGiAAIAAAAIABAAQGdAAGXidIAMgFIAGgDQgQDXg/C7IgGADQl/CzmFAAIgBAAIAAAAgAANEGQmiAAmqihIgHgDIgOgFIANAAIgNAAQgEhHAAhIQgBiIASh+QAdjTBOi2IALAAIgLAAIAKgXQAxhsBDhiQBqiZB7hZQCUB5DKAAQDZAACciPQCOBbB2CtQBEBjAxBuQBXC/AeDgQARB9AACHQAABLgFBIIgGADIgMAFQmXCdmdAAIgBAAIAAAAgAADiZQGcAAGciYIANgFIgNAFQmcCYmcAAIAAAAIgBAAQmgAAmiicIgHgDIAHADQGiCcGgAAIABAAIAAAAgAgCpaQFcAAFkh0IACgBIAOgEIAAAAIAFgCIgFACIAAAAIgOAEIgCABQlkB0lcAAIgBAAIAAAAQlrAAlkh+QFkB+FrAAIAAAAIABAAgANUBhIAAAAgAtUBdIAAAAg");
	this.shape_1.setTransform(351.8,84.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AldGGIgggdQifiVAAjUQAAjSCfiWQAogmAsgdQCDhTCmAAQC4AACMBlQAeAWAcAbQCfCWgBDSQABDUifCVIgHAHQicCPjbAAQjIAAiVh5g");
	this.shape_2.setTransform(348.9,-72.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Жукперевертыш, new cjs.Rectangle(113,-150.8,409.5,356.1), null);


(lib.Жук = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Нога("synched",7);
	this.instance.parent = this;
	this.instance.setTransform(-6.6,2.8,0.74,1,0,0,180,-23.3,-15);

	this.instance_1 = new lib.Нога("synched",1);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3.2,-17.5,0.848,1,0,0,180,-23.2,-15.4);

	this.instance_2 = new lib.Нога("synched",3);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-8.9,-37.3,0.758,1,0,0,180,-23.2,-15.4);

	this.instance_3 = new lib.Нога("synched",4);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-72.8,2.4,0.743,1,0,0,0,-23.3,-15.4);

	this.instance_4 = new lib.Нога("synched",6);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-75.3,-17.5,0.792,1,0,0,0,-23.3,-15.4);

	this.instance_5 = new lib.Нога("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-70.5,-37.3,0.791,1,0,0,0,-23.4,-15.4);

	this.instance_6 = new lib.Тело("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-39.7,-27.4,1,1,0,0,0,-15.3,-4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.4,-81.6,95.9,108.5);


// stage content:
(lib.Lab33Жук_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.button1.addEventListener('click', f1.bind(this));
		function f1(args)
		{this.stop();}
		
		this.button2.addEventListener('click', f2.bind(this));
		function f2(args)
		{this.play();}
		
		this.button3.addEventListener('click', f3.bind(this));
		function f3(args)
		{this.gotoAndStop(0);}
		playSound("jukletit28685");
	}
	this.frame_9 = function() {
		playSound("Запись");
	}
	this.frame_10 = function() {
		playSound("Запись2");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1).call(this.frame_10).wait(50));

	// Слой 4
	this.button3 = new lib.button1();
	this.button3.parent = this;
	this.button3.setTransform(185,15.7);
	new cjs.ButtonHelper(this.button3, 0, 1, 2, false, new lib.button1(), 3);

	this.button2 = new lib.button1();
	this.button2.parent = this;
	this.button2.setTransform(140,15.2);
	new cjs.ButtonHelper(this.button2, 0, 1, 2, false, new lib.button1(), 3);

	this.button1 = new lib.button1();
	this.button1.parent = this;
	this.button1.setTransform(97,15.2);
	new cjs.ButtonHelper(this.button1, 0, 1, 2, false, new lib.button1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button1},{t:this.button2},{t:this.button3,p:{regX:0,regY:0,x:185,y:15.7}}]}).to({state:[{t:this.button3,p:{regX:16.4,regY:16.4,x:113.4,y:31.6}}]},59).wait(1));

	// Слой 3
	this.instance = new lib.Жук();
	this.instance.parent = this;
	this.instance.setTransform(479,195.1,0.751,0.53,-165,0,0,-38.2,-27.4);

	this.instance_1 = new lib.Жукперевертыш();
	this.instance_1.parent = this;
	this.instance_1.setTransform(316.7,211.6,0.199,0.187,-60,0,0,351.1,80.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},19).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},30).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,regX:351.1,regY:80.8,scaleX:0.2,scaleY:0.19,rotation:-60,guide:{path:[479,195.1,476,216.1,473,237.1,459.5,246.7,442.8,244.8,400.9,240.1,362.7,230.9,338.3,222.9,316.6,211.5], orient:'auto'}},19).wait(5).to({_off:false,regX:-38.3,regY:-27.4,scaleX:0.75,scaleY:0.53,rotation:-67.7,x:321.2,y:213.8},0).wait(5).to({regX:-38.1,regY:-27.3,rotation:-62.2,x:319,y:212.7},0).to({regX:-38.2,regY:-27.4,scaleX:0.75,scaleY:0.53,rotation:-180,guide:{path:[319,212.8,271.1,188,236.5,146.6,223,130.4,207.3,115.8,192.2,106.9,180.4,101.8,169.7,97.7,158.1,97.1,131.3,95.7,113.1,114.2,102.1,123.7,91.1,133.2,91.1,136.2,91.1,139.2,88.1,139.2,85.1,139.2,70.1,234.6,55.1,330.1], orient:'auto'}},30).wait(1));

	// Слой 2
	this.instance_2 = new lib.Жук();
	this.instance_2.parent = this;
	this.instance_2.setTransform(502.2,183.1,0.751,0.399,-15,0,0,-38.1,-27.5);

	this.instance_3 = new lib.Жук();
	this.instance_3.parent = this;
	this.instance_3.setTransform(492.3,280,1,0.531,-30,0,0,-38.1,-27.4);

	this.instance_4 = new lib.Жук();
	this.instance_4.parent = this;
	this.instance_4.setTransform(377.2,337.9,0.668,0.578,30,0,0,-38.1,-27.4);

	this.instance_5 = new lib.Жук();
	this.instance_5.parent = this;
	this.instance_5.setTransform(42.2,37.1,0.42,0.399,105,0,0,-38.1,-27.5);

	this.instance_6 = new lib.Жук();
	this.instance_6.parent = this;
	this.instance_6.setTransform(513.3,372.9,0.606,0.38,-60,0,0,-38.1,-27.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(60));

	// Слой 1
	this.instance_7 = new lib.Жук();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-92.2,481.3,1,1,45,0,0,-38.2,-27.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:-38.1,guide:{path:[-92.1,481.2,-28.7,454,34.7,426.7,125.3,364.3,196.8,282.2,231.7,242.2,262.2,197.1,286.8,160.8,286.9,118.2,240.4,107.2,193.9,96.2,164.6,108.5,135.2,120.7,135.2,161.1,135.2,201.4,155.5,265.8,196.8,282.2,235.2,297.5,291.5,271.4,362.8,238.5,419.5,184.5,498.5,109.3,551.4,20.2,551.4,1.9,551.4,-16.5,582,-66.7,612.6,-116.9], orient:'auto'}},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(117.9,214.2,699.1,529.7);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"sounds/Запись2.mp3?1709372280963", id:"Запись2"},
		{src:"sounds/Запись_.mp3?1709372280963", id:"Запись"},
		{src:"sounds/jukletit28685.mp3?1709372280963", id:"jukletit28685"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;