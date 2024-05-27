(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.sm = function() {
	this.initialize(img.sm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,579,462);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("Запись5");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AGBAAQAACghxBwQhwBxigAAQieAAhyhxQhwhwAAigQAAieBwhyQByhwCeAAQCgAABwBwQBxByAACeg");
	this.shape.setTransform(-23.4,-13.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCCCC").s().p("AkPEQQhxhxAAifQAAifBxhwQBxhxCeAAQCfAABxBxQBxBwAACfQAACfhxBxQhxBxifAAQieAAhxhxg");
	this.shape_1.setTransform(-23.4,-13.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("Запись4");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AGVAAQAACoh2B3Qh3B2ioAAQinAAh3h2Qh2h3AAioQAAinB2h3QB3h2CnAAQCoAAB3B2QB2B3AACng");
	this.shape.setTransform(-2.4,3.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCCCC").s().p("AkeEfQh2h3AAioQAAinB2h3QB3h2CnAAQCoAAB2B2QB3B3AACnQAACoh3B3Qh2B2ioAAQinAAh3h2g");
	this.shape_1.setTransform(-2.4,3.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("Запись3");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AH8AAQAADTiVCUQiUCVjTAAQjRAAiViVQiViUAAjTQAAjRCViWQCViUDRAAQDTAACUCUQCVCWAADRg");
	this.shape.setTransform(-33.6,-3.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCCCC").s().p("AlnFnQiUiVAAjSQAAjSCUiVQCViUDSAAQDSAACVCUQCVCVAADSQAADSiVCVQiVCVjSAAQjSAAiViVg");
	this.shape_1.setTransform(-33.6,-3.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.Putevod_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ3();
	this.instance.parent = this;
	this.instance.setTransform(280.1,183.3,0.133,0.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ3(), 3);

	this.instance_1 = new lib.Символ2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.9,208.9,0.164,0.126);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Символ2(), 3);

	this.instance_2 = new lib.Символ1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(254.7,210.7,0.134,0.081);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.Символ1(), 3);

	this.instance_3 = new lib.sm();
	this.instance_3.parent = this;
	this.instance_3.setTransform(3,2,0.945,0.861);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(278,202,547.1,397.7);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/sm.jpg?1708729950271", id:"sm"},
		{src:"sounds/Запись3.mp3?1708729950271", id:"Запись3"},
		{src:"sounds/Запись4.mp3?1708729950271", id:"Запись4"},
		{src:"sounds/Запись5.mp3?1708729950271", id:"Запись5"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;