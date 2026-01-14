(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.BG01 = function() {
	this.initialize(img.BG01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2515,2507);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,686,684);


(lib.circle = function() {
	this.initialize(img.circle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,77);


(lib.curious = function() {
	this.initialize(img.curious);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,20);


(lib.GWH = function() {
	this.initialize(img.GWH);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,324,459);


(lib.header = function() {
	this.initialize(img.header);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,70);


(lib.iqos = function() {
	this.initialize(img.iqos);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,80);


(lib._new = function() {
	this.initialize(img._new);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,89);


(lib.note = function() {
	this.initialize(img.note);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,245,5);


(lib.pearl = function() {
	this.initialize(img.pearl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,96);


(lib.press = function() {
	this.initialize(img.press);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,520,114);


(lib.stick = function() {
	this.initialize(img.stick);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,133,109);


(lib.stick02 = function() {
	this.initialize(img.stick02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,497,2311);


(lib.subtitle = function() {
	this.initialize(img.subtitle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,208,60);


(lib.tap = function() {
	this.initialize(img.tap);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,91);


(lib.web = function() {
	this.initialize(img.web);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,47);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.txt01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.press();
	this.instance.setTransform(-131.8,-57.8,0.507,0.507);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt01, new cjs.Rectangle(-131.8,-57.8,263.70000000000005,57.8), null);


(lib.tap_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.tap();
	this.instance.setTransform(-35.4,-70.1,0.7703,0.7703);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tap_1, new cjs.Rectangle(-35.4,-70.1,70.9,70.1), null);


(lib.sub = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.subtitle();
	this.instance.setTransform(-104,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sub, new cjs.Rectangle(-104,-60,208,60), null);


(lib.stick01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.stick02();
	this.instance.setTransform(-16.05,-416.35,0.1767,0.1767,7.7192);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stick01, new cjs.Rectangle(-70.9,-416.3,141.9,416.3), null);


(lib.stick_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.stick();
	this.instance.setTransform(-66.5,-109);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stick_1, new cjs.Rectangle(-66.5,-109,133,109), null);


(lib.stageBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.149)").s().p("A6KNcIAA63MA0VAAAIAAa3g");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stageBtn, new cjs.Rectangle(-167.5,-85.9,335,171.9), null);


(lib._new_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._new();
	this.instance.setTransform(-72,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._new_1, new cjs.Rectangle(-72,-89,144,89), null);


(lib.mc_web = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.web();
	this.instance.setTransform(-47,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_web, new cjs.Rectangle(-47,-47,94,47), null);


(lib.mc_pearl = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.pearl();
	this.instance.setTransform(-48.5,-96);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_pearl, new cjs.Rectangle(-48.5,-96,97,96), null);


(lib.mc_bulet = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.circle();
	this.instance.setTransform(-30.65,-61.3,0.7961,0.7961);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_bulet, new cjs.Rectangle(-30.6,-61.3,61.3,61.3), null);


(lib.mc_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bg();
	this.instance.setTransform(-343,-684);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_bg, new cjs.Rectangle(-343,-684,686,684), null);


(lib.logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.iqos();
	this.instance.setTransform(-38,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-38,-80,76,80), null);


(lib.headline = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.header();
	this.instance.setTransform(-120,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.headline, new cjs.Rectangle(-120,-70,240,70), null);


(lib.curious_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.curious();
	this.instance.setTransform(-31,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.curious_1, new cjs.Rectangle(-31,-20,62,20), null);


(lib.btn_bulet = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("AjaDaQhahaAAiAQAAh/BahaQBbhbB/AAQCAAABbBbQBaBaAAB/QAACAhaBaQhbBbiAAAQh/AAhbhbg");
	this.shape.setTransform(0,-30.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_bulet, new cjs.Rectangle(-30.9,-61.8,61.8,61.8), null);


(lib.bg01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BG01();
	this.instance.setTransform(-964.85,-1923.55,0.7673,0.7673);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg01, new cjs.Rectangle(-964.8,-1923.5,1929.6999999999998,1923.5), null);


(lib.web_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.mc_web();
	this.instance.setTransform(0,-23.5,1,1,0,0,0,0,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-23.4,scaleX:1.1106,scaleY:1.1106,y:-23.4},47).to({regY:-23.5,scaleX:1,scaleY:1,y:-23.5},47).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.2,-49.6,104.4,52.2);


(lib.pearl_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.mc_pearl();
	this.instance.setTransform(0,-48,1,1,0,0,0,0,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-5.9998,x:-0.05,y:-44.8},71).to({rotation:0,x:0,y:-48},72).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.3,-97.6,106.5,105.6);


(lib.circle_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.mc_bulet();
	this.instance.setTransform(0,-30.7,1,1,0,0,0,0,-30.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-90,x:-0.05,y:-30.65},94).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.3,-74,86.69999999999999,86.7);


(lib.BG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.mc_bg();
	this.instance.setTransform(0,-342,1,1,0,0,0,0,-342);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-341.9,scaleX:1.0495,scaleY:1.0495,y:-341.75},59).to({regY:-342,scaleX:1,scaleY:1,y:-342},60).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-360,-700.8,720,717.9);


// stage content:
(lib.Terea_Riviera_Click = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {Scene01:75};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [24,74,75,175];
	// timeline functions:
	this.frame_24 = function() {
		this.btn_bulet.addEventListener("click", function() {
		    this.gotoAndPlay("Scene01");
		}.bind(this));
		
		this.btn_bulet.alpha = 0.05;
	}
	this.frame_74 = function() {
		this.stop();
	}
	this.frame_75 = function() {
		this.lp_end.addEventListener("click", function() {
		    setTimeout(function() {  //Bypass popup blockers
		        window.open("https://ad.doubleclick.net/ddm/trackclk/N571601.3217568HYBRID.AI/B34978803.437491706;dc_trk_aid=630702390;dc_trk_cid=247694389;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=${GDPR};gdpr_consent=${GDPR_CONSENT_755};ltd=;dc_tdv=1", "_blank");
		    }, 100);
		}.bind(this));
		
		this.lp_end.alpha = 0.05;
	}
	this.frame_175 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(50).call(this.frame_74).wait(1).call(this.frame_75).wait(100).call(this.frame_175).wait(1));

	// Layer_19
	this.lp_end = new lib.stageBtn();
	this.lp_end.name = "lp_end";
	this.lp_end.setTransform(160.4,239.4,1.0031,2.8614,0,0,0,0.2,0.1);
	this.lp_end._off = true;

	this.timeline.addTween(cjs.Tween.get(this.lp_end).wait(75).to({_off:false},0).wait(101));

	// Layer_2
	this.instance = new lib.GWH();
	this.instance.setTransform(0,21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(176));

	// Layer_15
	this.instance_1 = new lib.logo();
	this.instance_1.setTransform(287.1,376,1.1763,1.1763,0,0,0,0.1,-40);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,x:287,alpha:1},10).wait(157));

	// Layer_8
	this.instance_2 = new lib._new_1();
	this.instance_2.setTransform(-97.1,44.5,1,1,0,0,0,0,-44.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({x:6},5).to({x:28},10).wait(152));

	// Layer_18
	this.instance_3 = new lib.curious_1();
	this.instance_3.setTransform(119,374.95,1.385,1.385,0,0,0,0,-10);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(127).to({_off:false},0).to({scaleX:1,scaleY:1,y:375,alpha:1},10).wait(39));

	// Layer_17
	this.instance_4 = new lib.web_1();
	this.instance_4.setTransform(191,375.6,1.1638,1.1638,0,0,0,0,-23.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(137).to({_off:false},0).to({regY:-23.5,scaleX:1,scaleY:1,y:375.5,alpha:1},5).wait(34));

	// Layer_16
	this.instance_5 = new lib.note();
	this.instance_5.setTransform(10,395);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(107).to({_off:false},0).wait(69));

	// Layer_14
	this.instance_6 = new lib.sub();
	this.instance_6.setTransform(160,348.2,1,1,0,0,0,0,-30);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(117).to({_off:false},0).to({y:336,alpha:1},10).wait(49));

	// Layer_13
	this.instance_7 = new lib.headline();
	this.instance_7.setTransform(160,91.6,1,1,0,0,0,0,-35);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(107).to({_off:false},0).to({y:85.65,alpha:1},10).wait(59));

	// Layer_10
	this.instance_8 = new lib.pearl_1();
	this.instance_8.setTransform(157.8,252.75,0.4737,0.4737,0,0,0,0,-47.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(75).to({_off:false},0).to({scaleX:1,scaleY:1,x:157.25,alpha:1},9).to({scaleX:0.5911,scaleY:0.5911,x:114.95,y:256.65},5).to({regX:-2.6,regY:-50.1,scaleX:1,scaleY:1,x:97.2,y:155.05},5).to({x:158.55,y:125.35},5).to({regX:0,regY:-47.5,x:225.6,y:177.75},8).wait(69));

	// Layer_12
	this.instance_9 = new lib.stick_1();
	this.instance_9.setTransform(-56.5,367,1,1,0,0,0,0,-54.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(94).to({_off:false},0).to({regX:0.1,scaleX:1.3413,scaleY:1.3413,x:37.7,y:306.05},14).to({regX:0,scaleX:1,scaleY:1,x:98.5,y:269.5},14).wait(54));

	// Layer_7
	this.btn_bulet = new lib.btn_bulet();
	this.btn_bulet.name = "btn_bulet";
	this.btn_bulet.setTransform(159.4,250.7,1,1,0,0,0,0,-30.9);
	this.btn_bulet._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn_bulet).wait(24).to({_off:false},0).to({_off:true},51).wait(101));

	// Layer_6
	this.instance_10 = new lib.tap_1();
	this.instance_10.setTransform(220.9,312.65,1,1,0,0,0,0,-35.1);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(20).to({_off:false},0).to({x:177.75,y:269.5},9).to({scaleX:0.8559,scaleY:0.8559,x:174.85,y:266.6},5).to({scaleX:1,scaleY:1,x:177.75,y:269.5},4).wait(6).to({x:197.45,y:289.2,alpha:0},5).to({_off:true},1).wait(126));

	// Layer_5
	this.instance_11 = new lib.circle_1();
	this.instance_11.setTransform(159.8,250.6,1.3279,1.3279,0,0,0,0.1,-30.7);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(19).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,x:159.65,alpha:1},5).wait(51).to({regX:0.1,scaleX:1.3018,scaleY:1.3018,x:159.8,y:250.55,alpha:0},9).to({_off:true},1).wait(91));

	// Layer_4
	this.instance_12 = new lib.txt01();
	this.instance_12.setTransform(159.8,136.6,1,1,0,0,0,0,-28.9);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(9).to({_off:false},0).to({y:120.9,alpha:1},10).wait(56).to({alpha:0},4).to({_off:true},1).wait(96));

	// Layer_3
	this.instance_13 = new lib.stick01();
	this.instance_13.setTransform(104.55,617.6,1,1,0,0,0,0,-208.2);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(4).to({_off:false},0).to({x:137.3,y:401.8},10).wait(70).to({x:98.9,y:690.95},5).to({_off:true},1).wait(86));

	// Layer_11
	this.instance_14 = new lib.BG();
	this.instance_14.setTransform(172.05,224,2.8124,2.8124,0,0,0,0,-341.9);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(89).to({_off:false},0).to({regX:0.1,scaleX:1.0001,scaleY:1.0001,x:172,y:223.8,alpha:1},10).wait(77));

	// Layer_1
	this.instance_15 = new lib.bg01();
	this.instance_15.setTransform(171.85,223.75,1,1,0,0,0,0,-961.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(89).to({regX:0.1,scaleX:0.3556,scaleY:0.3556,x:171.9,y:223.7},10).to({_off:true},1).wait(76));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-633,-498.1,1769.7,1683.6999999999998);
// library properties:
lib.properties = {
	id: 'E4DB6775DBD86343857110323EB00391',
	width: 320,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/BG01.jpg", id:"BG01"},
		{src:"images/bg.png", id:"bg"},
		{src:"images/circle.png", id:"circle"},
		{src:"images/curious.png", id:"curious"},
		{src:"images/GWH.png", id:"GWH"},
		{src:"images/header.png", id:"header"},
		{src:"images/iqos.png", id:"iqos"},
		{src:"images/_new.png", id:"_new"},
		{src:"images/note.png", id:"note"},
		{src:"images/pearl.png", id:"pearl"},
		{src:"images/press.png", id:"press"},
		{src:"images/stick.png", id:"stick"},
		{src:"images/stick02.png", id:"stick02"},
		{src:"images/subtitle.png", id:"subtitle"},
		{src:"images/tap.png", id:"tap"},
		{src:"images/web.png", id:"web"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E4DB6775DBD86343857110323EB00391'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;