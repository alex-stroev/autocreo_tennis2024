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



(lib.rack21 = function() {
	this.initialize(img.rack21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,424,372);// helper functions:

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


(lib.tennis_ball = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AjTDFIgJgPIgBgCIgGgLQgIgPgHgVQAIAVAJATQgGgQAEgUQAGgaAYgRQBDgwC2AoQBqAXArhDQAVgiABgqIAAAAQgEhKgzgrQgugnhJgHQhEgHhFAYQhHAZgrAwQANgRALgMIALgJQBBgyBPgKQBHgIBBAaQBAAaAkAyQAlA0gIA9QgHAogbAiQg4BFhrgYQisgmg7AuQgVARgDAZQgCAVAJAQIgIgLg");
	this.shape.setTransform(23.5961,3.1468);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDE61B").s().p("AgVBqIgsgIIgZgIQgSgGgKgFQgSgKgNgJQgUgOgOgOIgBAAQgXgXAAgaQABgbAcgYQAcgXAugNQA1gCBXATQAkAIATAAQAYAAAbgLQAgAOARAUQASAVgBAWQgBAXgXAWIgEAEQgSAQgQALQgTAMgMAFIgbAMIgYAHIgXAEIgWADg");
	this.shape_1.setTransform(24.4771,24.0407);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FDE61B").s().p("ADPC5QACgWgTgVQgRgUgfgOQB7hDgohyQgQgvgpgmQgpglgxgOQhBgThQAVQhHASgmAiIgJAIIAFgGQATgQAQgLQATgMALgFIAcgLIAYgIQAPgEAIAAIAqgEIAUABIAtAIIAYAIIAbAMIAgASQARAMASAQQAYAZAMATQAUAfALAhQAHAbACAOQADANABAbIAAAKQgBANgCAOIgCAOQgDAOgIAaIgNAeQgHAOgNASQgNASgNAOQARgTAAgVgAjODPQgLgRgDgLQgDgOAFgSQAXgvBagGQgtANgcAXQgcAYgBAbQAAAWAQAUgAj7B7QgIgbgCgOQgCgOgBgbIAAgKQACgbACgMQADgPAJgaQAOgiAQgYIAGgIQAug0BJgZQBFgXBFAJQBIAJAsAoQAyArACBGIAAAAQAABDg3ApQggAVgegBQgegBg5gMQg4gMgdgBQhWgEguAfQguAfAUAvQgKgVgHgTg");
	this.shape_2.setTransform(24.5,4.1375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FDE61B").s().p("Ai6C8QhOhNAAhvQAAhtBOhNQBNhOBtAAQBuAABNBOQBOBNAABtQAABvhOBNQhNBNhuAAQhtAAhNhNg");
	this.shape_3.setTransform(24.4,8.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tennis_ball, new cjs.Rectangle(-2.1,-18.4,53.1,53), null);


(lib.tennis = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.rack21();
	this.instance.setTransform(0,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tennis, new cjs.Rectangle(0,-54,424,372), null);


// stage content:
(lib.rack = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tennis_ball
	this.instance = new lib.tennis_ball();
	this.instance.setTransform(115.9,36.2,0.7066,0.7066,-26.2519,0,0,24.8,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:24.9,regY:9.4,rotation:-26.2502,x:87.45,y:103.55},8,cjs.Ease.cubicIn).to({regY:9.2,rotation:-7.2473,x:122.8,y:25.45},10,cjs.Ease.cubicOut).to({regY:9.5,rotation:-7.2473,x:82.3,y:94.5},8,cjs.Ease.cubicIn).to({regX:25.1,regY:9.7,rotation:-2.2501,x:115.1,y:37.35},9,cjs.Ease.cubicOut).to({regY:9.6,rotation:-2.2501,x:82.05,y:100.6},8,cjs.Ease.cubicIn).to({regX:25.2,regY:9.7,rotation:2.7393,x:122.1,y:28.1},9,cjs.Ease.cubicOut).to({regY:9.6,rotation:2.7393,x:82.15,y:100.6},9,cjs.Ease.cubicIn).to({regX:24.8,regY:9.5,rotation:-26.2519,x:115.9,y:36.2},11,cjs.Ease.cubicOut).wait(1));

	// tennis
	this.instance_1 = new lib.tennis();
	this.instance_1.setTransform(224.85,272,0.7066,0.7066,-1.7064,0,0,329.9,276.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:0.2598,x:224.95,y:271.95},8,cjs.Ease.cubicIn).to({rotation:-1.7064,x:224.85,y:272},10,cjs.Ease.cubicIn).to({rotation:0.2598,x:224.95,y:271.95},8,cjs.Ease.cubicIn).to({rotation:-1.7064,x:224.85,y:272},9,cjs.Ease.cubicIn).to({rotation:0.2598,x:224.95,y:271.95},8,cjs.Ease.cubicIn).to({rotation:-1.7064,x:224.85,y:272},9,cjs.Ease.cubicIn).to({rotation:0.2598,x:224.95,y:271.95},9,cjs.Ease.cubicIn).to({rotation:-1.7064,x:224.85,y:272},11,cjs.Ease.cubicIn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(118.9,137.7,173.79999999999998,170.3);
// library properties:
lib.properties = {
	id: '21A85AD148BC124485919C3A82E9DE7A',
	width: 268,
	height: 268,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/rack21.png", id:"rack21"}
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
an.compositions['21A85AD148BC124485919C3A82E9DE7A'] = {
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