//
//  NYGame52Fighting.cpp
//  mathKgIII_a
//
//  Created by nieying on 14-4-28.
//
//

//#include "NYGame52Fighting.h"
//#include "SimpleAudioEngine.h"
//using namespace CocosDenshion;
var NYGame52Fighting=cc.Layer.extend({
NYGame52Fighting:function(){

    
    cc.spriteFrameCache.removeSpriteFramesFromFile(m162imageList);
    //CCTextureCache.sharedTextureCache().removeUnusedTextures();
    CCTextureCache.sharedTextureCache().removeAllTextures();
    
    haiChongArray=null;
    haiChongArray = null;
    answerStrArray=null;
    answerStrArray = null;
    
    rightStrArray=null;
    rightStrArray = null;
    wrongStrArray=null;
    wrongStrArray = null;
    
    rightSptArray=null;
    rightSptArray = null;
    leftSptArray=null;
    leftSptArray = null;
    
    leftRightPoiArray=null;
    leftRightPoiArray = null;
    this.unLoad();
    

},

init:function(){

    if (!SKFightBasic.init()) {
        return false;
    }
    return true;
    

},
initPosition:function(){

    
    for (var i = 0; i < 3; i++) {
        var  poop = new NYCCPoint();
        poop.initWithXandY(185+317*i,118.5);
        leftRightPoiArray.push(poop);
        poop=null;
       
    }
    for (var i = 0; i < 3; i++) {
        var  pop = new NYCCPoint();
        pop.initWithXandY(1250+317*i,118.5);
        leftRightPoiArray.push(pop);
        pop=null;
    }

},
initHaiPosi:function(){

   var add = 1210;
    haiChongPoiArray.push(cc.p(724.0+add, 1134.0));
    haiChongPoiArray.push(cc.p(1330.0+add, 1171));
    haiChongPoiArray.push(cc.p(1086.0+add, 935));
    haiChongPoiArray.push(cc.p(846.0+add, 700));
    haiChongPoiArray.push(cc.p(1394.0+add, 791));
    
    haiChongPoiArray.push(cc.p(586.0+add, 873));
    haiChongPoiArray.push(cc.p(1020.0+add, 1197));
    haiChongPoiArray.push(cc.p(1192.0+add, 650));
    haiChongPoiArray.push(cc.p(1530.0+add, 975));

},
preLoad:function(){

    cc.audioEngine.preloadMusic(m162BGEfc);
    cc.audioEngine.preloadEffect(m162duona1c);
    cc.audioEngine.preloadEffect(m162pestschuhauEfc);
    cc.audioEngine.preloadEffect(m162PestsRunInEfc);
    cc.audioEngine.preloadEffect(m162rightEfc);
    cc.audioEngine.preloadEffect(m162wrongEfc);


},
unLoad:function(){

    cc.audioEngine.unloadEffect(m162duona1c);
    cc.audioEngine.unloadEffect(m162pestschuhauEfc);
    cc.audioEngine.unloadEffect(m162PestsRunInEfc);
    cc.audioEngine.unloadEffect(m162rightEfc);
    cc.audioEngine.unloadEffect(m162wrongEfc);

},
goNextStep:function(){


    this.preLoad();
    cc.audioEngine.playMusic(m162BGEfc,true);
    cc.spriteFrameCache.addSpriteFrames(m162imageList);
    showRightN = 0;
    firstComeIn = true;
    
    haiChongArray = [];
    answerStrArray = [];
    rightStrArray = [];
    wrongStrArray = [];
    numberStrArray = [];
    leftSptArray = [];
    rightSptArray = [];
    leftRightPoiArray = [];
    
    haiChongPoiArray = [];
    haiChongPoiArray.retain();
    
    SKFightBasic.changeBgPic(res.m162_01_png);
    SKFightBasic.gameType5();
    
    var  banSpt = cc.Sprite.create("#m162_huangban.png");
    banSpt.setPosition(cc.p(1037.0,902));
    this.addChild(banSpt,-2); //板的z是-2，板上的害虫是-1，问题的小害虫z 是3；
    //加9个害虫
    for (var i = 0; i < 9; i++) {
        var  sprite = cc.Sprite.create("#m130_xhc_1.png");
        sprite.setPosition(cc.p(-500,-500));//1200-(240+arcY)*i
        this.addChild(sprite,-1);
        haiChongArray.push(sprite);
    }
    anwerChongSpt = cc.Sprite.create("#m130_xhc_1.png");
    anwerChongSpt.setPosition(cc.p(1035.0,1450)); //180
    this.addChild(anwerChongSpt,3);
    anwerChongSpt.setScale(0);
    
    for (var i =0; i < 12; i++) {
        var  string = ""+parseInt(i+1)+"";
        answerStrArray.push(string);
    }
    for (var i = 0; i < 3; i++) {
        var  leSprite = cc.Sprite.create("#m158num0001.png");
        leSprite.setPosition(cc.p(-500,-500));
        this.addChild(leSprite,99);
        leftSptArray.push(leSprite);
        leSprite.setScale(0);
        
        var  riSprite = cc.Sprite.create("#m158num0001.png");
        riSprite.setPosition(cc.p(-500,-500));
        this.addChild(riSprite,99);
        rightSptArray.push(riSprite);
        riSprite.setScale(0);
        
        if (i == 0) {
            leSprite.setTag(100);
            riSprite.setTag(101);
        }else
        {
            leSprite.setTag(200+i);
            riSprite.setTag(202+i);
        }
    }
    
    this.initHaiPosi();
    this.initPosition();
    this.runAction(cc.Sequence.create(cc.DelayTime.create(0),cc.CallFunc.create( this.huanGuan,this),null));
    this.runAction(cc.Sequence.create(cc.DelayTime.create(0.5),cc.CallFunc.create( this.delPlayDuona,this),null));
    

},
delPlayDuona:function(){

    cc.audioEngine.playEffect(m162duona1c);

},
openClick:function(){

    this.setTouchEnabled(true);

},
huanGuan:function(){

    rightStrArray=[];
    wrongStrArray=[];
    showRightN = 0|Math.random()*5+2;
    
    for (var i = 0; i < 100; i++) {
       var aaa = 0|Math.random()*3;
       var bbb = 0|Math.random()*3;
        leftRightPoiArray.exchangeObjectAtIndex(aaa, bbb);
       var ccc = 0|Math.random()*3+3;
       var ddd = 0|Math.random()*3+3;
        leftRightPoiArray.exchangeObjectAtIndex(ccc, ddd);
    }
    
//    cc.log("showRightN=%d",showRightN);
    for (var i =0; i < 6; i++) {
        var  string = ""+parseInt(i+1)+"";
        if (parseInt(string) != showRightN) {
            numberStrArray.push(string);
        }
    }
   var arc456 = 0|Math.random()*answerStrArray.length;
    var  anwser456 = answerStrArray[arc456];
    var  anwStr = "m130_xhc_"+parseInt(parseInt(anwser456)*2-1)+".png";
    anwerChongSpt.setDisplayFrame(cc.spriteFrameCache.getSpriteFrame(anwStr));
    var  anwerAction =this.runOneAction(parseInt(anwser456)*2-1, 2, "m130_xhc_", 0.45, 0);
    anwerChongSpt.runAction(anwerAction);
    anwerChongSpt.runAction(cc.Sequence.create(cc.ScaleTo.create(0, 1.3),cc.ScaleTo.create(0.1, 1),null));
    cc.audioEngine.playEffect(m162PestsRunInEfc);
    
    if (parseInt(anwser456) < 5) {
        for (var i =0; i < 4; i++) {
            var  string = ""+parseInt(i+1)+"";
            rightStrArray.push(string);
        }
        for (var i =0; i < 8; i++) {
            var  string = ""+parseInt(i+5)+"";
            wrongStrArray.push(string);
        }
       var riN;
        var  rightString = null;
        for (var i = 0; i < showRightN; i++) {
            riN = 0|Math.random()*rightStrArray.length;
            rightString = "m130_xhc_"+parseInt((rightStrArray[riN])*2-1)+".png";
            var  haichongSpt = haiChongArray[i];
            haichongSpt.setDisplayFrame(cc.spriteFrameCache.getSpriteFrame(rightString));
            haichongSpt.setPosition(haiChongPoiArray[i]);
           var arcTi = 0|Math.random()*20+40;
            var  rightAction =this.runOneAction(parseInt(rightStrArray[riN])*2-1, 2, "m130_xhc_", arcTi*0.01, 0);
            haichongSpt.runAction(rightAction);
            haichongSpt.runAction(cc.EaseSineOut.create(cc.MoveBy.create(MOVETIMER, cc.p(-1210,0))));
        }
       var wroN;
        var  wrongString = null;
        for (var i = 0; i < 3; i++) {
            wroN = 0|Math.random()*wrongStrArray.length;
            wrongString = "m130_xhc_"+parseInt((wrongStrArray[wroN])*2-1)+".png";
            var  haichongSpt = haiChongArray[showRightN+i];
            haichongSpt.setDisplayFrame(cc.spriteFrameCache.getSpriteFrame(wrongString));
            haichongSpt.setPosition(haiChongPoiArray[showRightN+i]);
           var arcTi = 0|Math.random()*20+40;
            var  wrAction =this.runOneAction(parseInt(wrongStrArray[wroN])*2-1, 2, "m130_xhc_", arcTi*0.01, 0);
            haichongSpt.runAction(wrAction);
            haichongSpt.runAction(cc.EaseSineOut.create(cc.MoveBy.create(MOVETIMER, cc.p(-1210,0))));
            wrongStrArray.removeObjectAtIndex(wroN);
        }
    }
    else if(parseInt(anwser456) < 9 && parseInt(anwser456) > 4 )
    {
        for (var i =0; i < 4; i++) {
            var  string = ""+parseInt(i+5)+"";
            rightStrArray.push(string);
        }
        for (var i =0; i < 8; i++) {
            var  string = null;
            
            if (i < 4) {
                string = ""+parseInt(i+1)+"";
            }else
            {
                string = ""+parseInt(i+5)+"";
            }
            wrongStrArray.push(string);
        }
       var riN;
        var  rightString = null;
        for (var i = 0; i < showRightN; i++) {
            riN = 0|Math.random()*rightStrArray.length;
            rightString = "m130_xhc_"+parseInt((rightStrArray[riN])*2-1)+".png";
            var  haichongSpt = haiChongArray[i];
            haichongSpt.setDisplayFrame(cc.spriteFrameCache.getSpriteFrame(rightString));
            haichongSpt.setPosition(haiChongPoiArray[i]);
           var arcTi = 0|Math.random()*20+40;
            var  rightAction =this.runOneAction(parseInt(rightStrArray[riN])*2-1, 2, "m130_xhc_", arcTi*0.01, 0);
            haichongSpt.runAction(rightAction);
            haichongSpt.runAction(cc.EaseSineOut.create(cc.MoveBy.create(MOVETIMER, cc.p(-1210,0))));
        }
       var wroN;
        var  wrongString = null;
        for (var i = 0; i < 3; i++) {
            wroN = 0|Math.random()*wrongStrArray.length;
            wrongString = "m130_xhc_"+parseInt((wrongStrArray[wroN])*2-1)+".png";
            var  haichongSpt = haiChongArray[showRightN+i];
            haichongSpt.setDisplayFrame(cc.spriteFrameCache.getSpriteFrame(wrongString));
            haichongSpt.setPosition(haiChongPoiArray[showRightN+i]);
           var arcTi = 0|Math.random()*20+40;
            var  wrAction =this.runOneAction(parseInt(wrongStrArray[wroN])*2-1, 2, "m130_xhc_", arcTi*0.01, 0);
            haichongSpt.runAction(wrAction);
            haichongSpt.runAction(cc.EaseSineOut.create(cc.MoveBy.create(MOVETIMER, cc.p(-1210,0))));
            wrongStrArray.removeObjectAtIndex(wroN);
        }
    }
    else if(parseInt(anwser456) < 13 && parseInt(anwser456) > 8 )
    {
        for (var i =0; i < 4; i++) {
            var  string = ""+parseInt(i+9)+"";
            rightStrArray.push(string);
        }
        for (var i =0; i < 8; i++) {
            var  string = ""+parseInt(i+1)+"";
            wrongStrArray.push(string);
        }
       var riN;
        var  rightString = null;
        for (var i = 0; i < showRightN; i++) {
            riN = 0|Math.random()*rightStrArray.length;
            rightString = "m130_xhc_"+parseInt((rightStrArray[riN])*2-1)+".png";
            var  haichongSpt = haiChongArray[i];
            haichongSpt.setDisplayFrame(cc.spriteFrameCache.getSpriteFrame(rightString));
            haichongSpt.setPosition(haiChongPoiArray[i]);
           var arcTi = 0|Math.random()*20+40;
            var  rightAction =this.runOneAction(parseInt(rightStrArray[riN])*2-1, 2, "m130_xhc_", arcTi*0.01, 0);
            haichongSpt.runAction(rightAction);
            haichongSpt.runAction(cc.EaseSineOut.create(cc.MoveBy.create(MOVETIMER, cc.p(-1210,0))));
        }
       var wroN;
        var  wrongString = null;
        for (var i = 0; i < 3; i++) {
            wroN = 0|Math.random()*wrongStrArray.length;
            wrongString = "m130_xhc_"+parseInt((wrongStrArray[wroN])*2-1)+".png";
            var  haichongSpt = haiChongArray[showRightN+i];
            haichongSpt.setDisplayFrame(cc.spriteFrameCache.getSpriteFrame(wrongString));
            haichongSpt.setPosition(haiChongPoiArray[showRightN+i]);
           var arcTi = 0|Math.random()*20+40;
            var  wrAction =this.runOneAction(parseInt(wrongStrArray[wroN])*2-1, 2, "m130_xhc_", arcTi*0.01, 0);
            haichongSpt.runAction(wrAction);
            haichongSpt.runAction(cc.EaseSineOut.create(cc.MoveBy.create(MOVETIMER, cc.p(-1210,0))));
            wrongStrArray.removeObjectAtIndex(wroN);
        }
    }
    
    var  rightN = null;
    var  wrongN = null;
    
    for (var i = 0; i < 2; i++) {
        rightN = "m158num%04d.png";
        (this.getChildByTag(100+i)).setDisplayFrame(cc.spriteFrameCache.getSpriteFrame(rightN));
       var x1 = (leftRightPoiArray[i*3]).x;
       var y1 = (leftRightPoiArray[i*3]).y;
        (this.getChildByTag(100+i)).setPosition(cc.p(x1, y1));
        
       var value = 0|Math.random()*numberStrArray.length;
       var woro = (numberStrArray[value]);
        wrongN = "m158num%04d.png";
        (this.getChildByTag(201+i)).setDisplayFrame(cc.spriteFrameCache.getSpriteFrame(wrongN));
       var x2 = (leftRightPoiArray[i+1]).x;
       var y2 = (leftRightPoiArray[i+1]).y;
        (this.getChildByTag(201+i)).setPosition(cc.p(x2, y2));
        
        (this.getChildByTag(203+i)).setDisplayFrame(cc.spriteFrameCache.getSpriteFrame(wrongN));
       var x3 = (leftRightPoiArray[i+4]).x;
       var y3 = (leftRightPoiArray[i+4]).y;
        (this.getChildByTag(203+i)).setPosition(cc.p(x3, y3));
        numberStrArray.removeObjectAtIndex(value);
    }
    for (var i = 0; i < leftSptArray.length; i++) {
        var  leftSprite = leftSptArray[i];
        var  riSprite = rightSptArray[i];
        leftSprite.runAction(cc.Sequence.create(cc.DelayTime.create(MOVETIMER-1),cc.EaseSineIn.create(cc.ScaleTo.create(0.35, 1.2)),cc.Repeat.create(cc.Sequence.create(cc.RotateBy.create(0.05, -15),cc.RotateBy.create(0.1, 30),cc.RotateBy.create(0.05, -15),null), 2),cc.DelayTime.create(0.1),cc.ScaleTo.create(0.15, 1),null));
        riSprite.runAction(cc.Sequence.create(cc.DelayTime.create(MOVETIMER-1),cc.EaseSineIn.create(cc.ScaleTo.create(0.35, 1.2)),cc.Repeat.create(cc.Sequence.create(cc.RotateBy.create(0.05, -15),cc.RotateBy.create(0.1, 30),cc.RotateBy.create(0.05, -15),null), 2),cc.DelayTime.create(0.1),cc.ScaleTo.create(0.15, 1),null));

    }
    numberStrArray=[];
    
    if (firstComeIn) {
        firstComeIn = false;
        this.runAction(cc.Sequence.create(cc.DelayTime.create(6),cc.CallFunc.create( this.openClick,this),null));
    }
    else
    {
        this.runAction(cc.Sequence.create(cc.DelayTime.create(MOVETIMER),cc.CallFunc.create( this.openClick,this),null));
    }

},
runOneAction:function(start,frameCount,formort,time,repeat){

    var  array = [];
    for (var i = start; i < frameCount+start; i++)
    {
        var   string = "%s"+parseInt(formort)+".png";
        var  frame = CCSpriteFrameCache.sharedSpriteFrameCache(). spriteFrameByName(string);
        array .push(frame);
    }
    var  animation = cc.Animation.createWithSpriteFrames(array,time);
    var  Animate = CCAnimate.create(animation);
    if (repeat == 0) {
        return (cc.RepeatForever.create(Animate));
    }else
    {
        return (cc.Repeat.create(Animate,repeat));
    }

},
ccTouchesBegan:function(pTouches, pEvent){

   var temp = 0;
    for (CCSetIterator it = pTouches.begin(); it != pTouches.end(); it++) {
        var  touch = *it;
       var location = touch.getLocation();
        for (var i = 0; i < leftSptArray.length; i++) {
            var  leftSpt = leftSptArray[i];
            if (cc.rectContainsPoint(leftSpt.getBoundingBox(),location))
            {
                leftSpt.runAction(cc.Sequence.create(cc.ScaleTo.create(0.1, 1.3),cc.ScaleTo.create(0.3,1),null));
                if (leftSpt.getTag() < 120) {
                    temp++;
                    this.setTouchEnabled(false);
                    SKFightBasic.leftWinOnce();
                    cc.audioEngine.playEffect(m162rightEfc);
                }
                else
                {
                    cc.audioEngine.playEffect(m162wrongEfc);
                }
            }
        }
        
        for (var i = 0; i < rightSptArray.length; i++) {
            var  rightSpt = rightSptArray[i];
            if (cc.rectContainsPoint(rightSpt.getBoundingBox(),location))
            {
                rightSpt.runAction(cc.Sequence.create(cc.ScaleTo.create(0.1, 1.3),cc.ScaleTo.create(0.3,1),null));
                if (rightSpt.getTag() < 120) {
                    temp++;
                    this.setTouchEnabled(false);
                    SKFightBasic.rightWinOnce();
                    cc.audioEngine.playEffect(m162rightEfc);
                }
                else
                {
                    cc.audioEngine.playEffect(m162wrongEfc);
                }
            }
        }
    }
    
    if (temp == 2) {
        temp--;
    }
    if (temp == 1) {
        this.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.CallFunc.create( this.hideSome,this),null));
    }
  

},
hideSome:function(){

    
    for (var i = 0; i <showRightN+3; i++) {
        var  haichong = haiChongArray[i];
        haichong.runAction(cc.EaseSineIn.create(cc.MoveBy.create(MOVETIMER, cc.p(-1310, 0))));
    }
    cc.audioEngine.playEffect(m162pestschuhauEfc);
    anwerChongSpt.stopAllActions();
    anwerChongSpt.runAction(cc.ScaleTo.create(0.25, 0));
    this.runAction(cc.Sequence.create(cc.DelayTime.create(MOVETIMER),cc.CallFunc.create( this.deleStopAction,this),null));
//    this.runAction(cc.Sequence.create(cc.DelayTime.create(MOVETIMER),cc.CallFunc.create( this.StopAction,this),null));
    
    for (var i = 0; i < leftSptArray.length; i++) {
        var  leftSprite = leftSptArray[i];
        var  riSprite = rightSptArray[i];
        leftSprite.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseSineIn.create(cc.ScaleTo.create(0.1, 1.2)),cc.ScaleTo.create(0.35, 0),null));
        riSprite.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseSineIn.create(cc.ScaleTo.create(0.1, 1.2)),cc.ScaleTo.create(0.35, 0),null));
    }

    this.runAction(cc.Sequence.create(cc.DelayTime.create(MOVETIMER+0.5),cc.CallFunc.create( this.huanGuan,this),null));


},
deleStopAction:function(){

    for (var i = 0; i <haiChongArray.length; i++) {
        var  haichong = haiChongArray[i];
        haichong.stopAllActions();
    }

},
StopAction:function(){

//    anwerChongSpt.stopAllActions();

},
ccTouchesMoved:function(pTouches, pEvent){

    

},
ccTouchesEnded:function(pTouches, pEvent){



},
ccTouchesCancelled:function(pTouches, pEvent){



},
registerWithTouchDispatcher:function(){

    //CCDirector.sharedDirector().getTouchDispatcher().addStandardDelegate(this, 0);

},
onEnter:function(){

    this.onEnter();

},
onExit:function(){

    this.onExit();

},