//
//  NYGame521Scene.cpp
//  mathKgIII_a
//
//  Created by nieying on 14-4-28.
//
//

//#include "NYGame521Scene.h"
//#include "SimpleAudioEngine.h"
//using namespace cocos2d;
//using namespace CocosDenshion;

var NYGame521Scene=cc.Layer.extend({
NYGame521Scene:function(){

 
    cc.spriteFrameCache.removeSpriteFramesFromFile(m130imageList);
    //CCTextureCache.sharedTextureCache().removeUnusedTextures();
    CCTextureCache.sharedTextureCache().removeAllTextures();
    
    flowerArray=null;
    flowerArray = null;
    haiChongSptArray=null;
    haiChongSptArray = null;
    stringArray=null;
    stringArray = null;
    fourStringArray=null;
    fourStringArray = null;
    
    fiveStringArray=null;
    fiveStringArray = null;
    
    sixStringArray=null;
    sixStringArray = null;
    otherStringArray=null;
    otherStringArray = null;
    
    haiChongPoiArray=null;
    haiChongPoiArray = null;
    
    otherNumArray=null;
    otherNumArray = null;
    this.unLoad();
    

},

preLoad:function(){

    cc.audioEngine.preloadMusic(m130BGEfc);
    cc.audioEngine.preloadEffect(m130pestRuninEfc);
    cc.audioEngine.preloadEffect(m130DuoNa1c);
    cc.audioEngine.preloadEffect(m130DuoNa2c);
    cc.audioEngine.preloadEffect(m130DuoNa3c);
    cc.audioEngine.preloadEffect(m130eatFlowersEfc);
    cc.audioEngine.preloadEffect(m13aitureEfc);
    cc.audioEngine.preloadEffect(m130TimrEfc);
    cc.audioEngine.preloadEffect(m130xiaochuEfc);
    cc.audioEngine.preloadEffect(m130victoryEfc);
    cc.audioEngine.preloadEffect(m130wrongEfc);
    cc.audioEngine.preloadEffect(m130pestsWhiningEfc);


},
unLoad:function(){

    cc.audioEngine.unloadEffect(m130pestRuninEfc);
    cc.audioEngine.unloadEffect(m130DuoNa1c);
    cc.audioEngine.unloadEffect(m130DuoNa2c);
    cc.audioEngine.unloadEffect(m130DuoNa3c);
    cc.audioEngine.unloadEffect(m130eatFlowersEfc);
    cc.audioEngine.unloadEffect(m13aitureEfc);
    cc.audioEngine.unloadEffect(m130TimrEfc);
    cc.audioEngine.unloadEffect(m130xiaochuEfc);
    cc.audioEngine.unloadEffect(m130victoryEfc);
    cc.audioEngine.unloadEffect(m130wrongEfc);
    cc.audioEngine.unloadEffect(m130pestsWhiningEfc);

},
init:function(){

    if (!NYPublicScene.init()) {
        return false;
    }

    this.preLoad();
    flowerArray = [];
    haiChongSptArray = [];
    stringArray = [];
    fourStringArray = [];
    fiveStringArray = [];
    sixStringArray = [];
    otherStringArray = [];
    otherNumArray = [];
    cc.audioEngine.playMusic(m130BGEfc, true);
    
    haiChongPoiArray = [];
    haiChongPoiArray.retain();
    
    jiluTimes = 0;
    totalTime = 35;
    firstTag = -1;
    secondTag = -1;
    showMany = 0;
    rightN = 0;
    realRightN = -1;
    
    dontPlayDouble = false;
    playSecBoo = false;
    
    cc.spriteFrameCache.addSpriteFrames(m130imageList);
    var  bg = cc.Sprite.create(m130BG);
    bg.setPosition(cc.p(1024, 768));
    this.addChild(bg,-1);

    for (var i = 0; i < 4; i++) {
        var  string4 = ""+parseInt(i*3+1)+"";
        fourStringArray.push(string4);

        var  string5 = ""+parseInt(i*3+13)+"";
        fiveStringArray.push(string5);
        
        var  string6 = ""+parseInt(i*3+25)+"";
        sixStringArray.push(string6);
    }
    
    this.addTimer();
    this.initHaiPosition();

    for (var i = 0; i < 5; ++i) {
        var  sprite = cc.Sprite.create("#m130_hua1.png");
        sprite.setTag(5+i);
        if (i ==0) {
            sprite.setPosition(cc.p(172.0,1163));
        }else if (i ==1) {
            sprite.setPosition(cc.p(161.0,935.0));
        }
        else if (i ==2) {
            sprite.setPosition(cc.p(187.0,692));
        }
        else if (i ==3) {
            sprite.setPosition(cc.p(172.0,454));
        }
        else if (i ==4) {
            sprite.setPosition(cc.p(172.0,232.0));
        }
        this.addChild(sprite,2);
        flowerArray.push(sprite);
       var timr = 0|Math.random()*5+3;
        sprite.runAction(cc.Repeat.create(cc.Sequence.create(cc.DelayTime.create(timr),cc.ScaleTo.create(0.15, 1.15),cc.ScaleTo.create(0.35, 1.0),null), -1));

    }
    paopaoOneSpt = cc.Sprite.create("#m130_paopao1.png");
    paopaoOneSpt.setPosition(cc.p(-500,-500));
    this.addChild(paopaoOneSpt,100);
    
    paopaoTwoSpt = cc.Sprite.create("#m130_paopao1.png");
    paopaoTwoSpt.setPosition(cc.p(-500,-500));
    this.addChild(paopaoTwoSpt,100);
    //加26 个害虫
    for (var i = 0; i < 26; i++) {
        var  sprite = cc.Sprite.create("#m130_xhc_1.png");
        sprite.setPosition(cc.p(-500,-500));//1200-(240+arcY)*i
        this.addChild(sprite,20);
        haiChongSptArray.push(sprite);
        //加光晕
        var  light = cc.Sprite.create("#m155light.png");
//       var lightPo =this.returLightPo(i);
        light.setPosition(cc.p(85, 80));
        sprite.addChild(light,-1,1);
        light.setScale(0.8);
        light.setOpacity(180);
        light.setVisible(false);
    }
    this.runAction(cc.Sequence.create(cc.DelayTime.create(0),cc.CallFunc.create( this.addHaiChong,this),null));
    
    return true;
    

},
addHaiChong:function(){

    
    rightN = 0;
    this.setTouchEnabled(true);
    var  duonaStr = "res/unit_5/game2/audio/m130duona"+parseInt(showMany+1)+".mp3";
    cc.audioEngine.playEffect(duonaStr);
    for (var i = 0; i < haiChongSptArray.length; i++) {
        var  Sprite = haiChongSptArray[i];
        Sprite.stopAllActions();
        Sprite.setScale(1);
    }
    for (var i = 0; i < flowerArray.length; i++) {
        var  Sprite = flowerArray[i];
        Sprite.setOpacity(255);
    }
    if (otherNumArray.length !=0 ) {
        otherNumArray=[];
    }
    if (showMany == 0) {
        //干扰选项ccstring
        var  haiSstring = null;
        for (var i = 0; i < 8; i++) {
            var  string = ""+parseInt(i*3+13)+"";
            otherStringArray.push(string);
        }
        //加正确的精灵
        for (var i = 0; i < 8; i++) {
            var  fourstr = null;
            if (i < 4) {
                fourstr =fourStringArray[i];
            }else
            {
                fourstr =fourStringArray[i-4];
            }
            haiSstring = "m130_xhc_"+parseInt(parseInt(fourstr))+".png";
            for (var j = 0; j < 2; j++) {
                var  sprite = haiChongSptArray[i*2+j];
                sprite.setDisplayFrame(cc.spriteFrameCache.getSpriteFrame(haiSstring));
                if (i < 4) {
                    sprite.setTag(20+i*2);
                }else
                {
                    sprite.setTag(20+(i-4)*2);
                }
               var time = 0|Math.random()*20+35;
                var  action =this.runOAction(parseInt(fourstr)+1, 2, "m130_xhc_", time*0.01, 0);
                sprite.runAction(action);
            }
        }
        
        //加干扰的精灵
        for (var i = 0; i < 5; i++) {
           var orN = 0|Math.random()*otherStringArray.length;
            var  otherStr =otherStringArray[orN];
            otherNumArray.push(otherStr);
            haiSstring = "m130_xhc_"+parseInt(parseInt(otherStr))+".png";
            for (var j = 0; j < 2; j++) {
                var  sprite = haiChongSptArray[16+i*2+j];
                sprite.setDisplayFrame(cc.spriteFrameCache.getSpriteFrame(haiSstring));
                sprite.setTag(60+i*2+j);//60+i*2
               var time = 0|Math.random()*20+35;
                var  action =this.runOAction(parseInt(otherStr)+1, 2, "m130_xhc_", time*0.01, 0);
                sprite.runAction(action);
            }
            otherStringArray.removeObjectAtIndex(orN);
        }
        
    }
    else if (showMany == 1)
    {
        //干扰选项ccstring
        var  haiSstring = null;
        for (var i = 0; i < 8; i++) {
            var  string = null;
            if (i < 4) {
                string = ""+parseInt(i*3+1)+"";
            }
            else
            {
                string = ""+parseInt((i-4)*3+25)+"";
            }
            otherStringArray.push(string);
        }
        //加正确的精灵
        for (var i = 0; i < 8; i++) {
            var  fivestr = null;
            if (i < 4) {
                fivestr =fiveStringArray[i];
            }else
            {
                fivestr =fiveStringArray[i-4];
            }
            haiSstring = "m130_xhc_"+parseInt(parseInt(fivestr))+".png";
            for (var j = 0; j < 2; j++) {
                var  sprite = haiChongSptArray[i*2+j];
                sprite.setDisplayFrame(cc.spriteFrameCache.getSpriteFrame(haiSstring));
                if (i < 4) {
                    sprite.setTag(20+i*2);
                }else
                {
                    sprite.setTag(20+(i-4)*2);
                }
               var time = 0|Math.random()*20+35;
                var  action =this.runOAction(parseInt(fivestr)+1, 2, "m130_xhc_", time*0.01, 0);
                sprite.runAction(action);
            }
        }
        //加干扰的精灵
        for (var i = 0; i < 5; i++) {
           var orN = 0|Math.random()*otherStringArray.length;
            var  otherStr =otherStringArray[orN];
            otherNumArray.push(otherStr);
            haiSstring = "m130_xhc_"+parseInt(parseInt(otherStr))+".png";
            for (var j = 0; j < 2; j++) {
                var  sprite = haiChongSptArray[16+i*2+j];
                sprite.setDisplayFrame(cc.spriteFrameCache.getSpriteFrame(haiSstring));
                sprite.setTag(60+i*2+j);//60+i*2
               var time = 0|Math.random()*20+35;
                var  action =this.runOAction(parseInt(otherStr)+1, 2, "m130_xhc_", time*0.01, 0);
                sprite.runAction(action);
            }
            otherStringArray.removeObjectAtIndex(orN);
        }
    }
    
    else if (showMany == 2)
    {
        //干扰选项ccstring
        var  haiSstring = null;
        for (var i = 0; i < 8; i++) {
            var  string = null;
            string = ""+parseInt(i*3+1)+"";
            otherStringArray.push(string);
        }
        //加正确的精灵
        for (var i = 0; i < 8; i++) {
            var  sixstr = null;
            if (i < 4) {
                sixstr =sixStringArray[i];
            }else
            {
                sixstr =sixStringArray[i-4];
            }
            haiSstring = "m130_xhc_"+parseInt(parseInt(sixstr))+".png";
            for (var j = 0; j < 2; j++) {
                var  sprite = haiChongSptArray[i*2+j];
                sprite.setDisplayFrame(cc.spriteFrameCache.getSpriteFrame(haiSstring));
                if (i < 4) {
                    sprite.setTag(20+i*2);
                }else
                {
                    sprite.setTag(20+(i-4)*2);
                }
               var time = 0|Math.random()*20+35;
                var  action =this.runOAction(parseInt(sixstr)+1, 2, "m130_xhc_", time*0.01, 0);
                sprite.runAction(action);
            }
        }
        //加干扰的精灵
        for (var i = 0; i < 5; i++) {
           var orN = 0|Math.random()*otherStringArray.length;
            var  otherStr =otherStringArray[orN];
            otherNumArray.push(otherStr);
            haiSstring = "m130_xhc_"+parseInt(parseInt(otherStr))+".png";
            for (var j = 0; j < 2; j++) {
                var  sprite = haiChongSptArray[16+i*2+j];
                sprite.setDisplayFrame(cc.spriteFrameCache.getSpriteFrame(haiSstring));
                sprite.setTag(60+i*2+j);//60+i*2
               var time = 0|Math.random()*20+35;
                var  action =this.runOAction(parseInt(otherStr)+1, 2, "m130_xhc_", time*0.01, 0);
                sprite.runAction(action);
            }
            otherStringArray.removeObjectAtIndex(orN);
        }
    }
    otherStringArray=[];
    
    for (var i = 0; i < 100; i++) {
       var aaa = 0|Math.random()*haiChongSptArray.length;
       var bbb = 0|Math.random()*haiChongSptArray.length;
        haiChongSptArray.exchangeObjectAtIndex(aaa, bbb);
    }
    for (var i = 0; i < haiChongSptArray.length; i++) {
        var  sprite = haiChongSptArray[i];
        sprite.setPosition(haiChongPoiArray[i]);
        sprite.setScale(1);
        sprite.getChildByTag(1).runAction(cc.Hide.create());
    }
    this.moveToLeft();

},
addTimer:function(){

    var timerBg = cc.Sprite.create("#m160_tiao0001.png");
    timerBg.setPosition(cc.p(1024, 1437.0));
    this.addChild(timerBg,2);
    timerBg.setScaleX(0.95);
    
    var timBg = cc.Sprite.create("#m160_tiao0003.png");
    timBg.setPosition(cc.p(1038.0, 1438.5));
    this.addChild(timBg,4);
    
    progressTimer = CCProgressTimer.create(cc.Sprite.create("#m160_tiao0002.png"));
    progressTimer.setPosition(cc.p(1035.5, 1437.3));
    this.addChild(progressTimer,6);
    progressTimer.setType(kCCProgressTimerTypeBar);
    progressTimer.setMidpoint(cc.p(1, 1));
    progressTimer.setBarChangeRate(cc.p(1, 0));
    

},
moveToLeft:function(){

   var timerT;
    
    if (playSecBoo) {
        for (var i = 0; i < haiChongSptArray.length; i++) {
            var  sprite = haiChongSptArray[i];
            sprite.runAction(cc.EaseSineInOut.create(cc.MoveBy.create(MOVETIMERONE, cc.p(-ADDDISTANCE, 0))));
        }
        timerT = 18;
        realRightN = 8;
    }
    else
    {
       var wNum;
       var ershinum = 0;
       var erernum = 0;
       var ersinum = 0;
       var erliunum = 0;
       var objNum1;
       var objNum2;
       var objNum3;
       var objNum4;

        if (showMany == 0) {
            timerT = 14;
            realRightN = 4;
            wNum = 64;
            objNum1 = 2;
            objNum2 = 2;
            objNum3 = 2;
            objNum4 = 2;
        }
        else if (showMany == 1) {
            timerT = 18;
            realRightN = 6;
            wNum = 66;
            objNum1 = 0;
            objNum2 = 0;
            objNum3 = 2;
            objNum4 = 2;
        }
        else if (showMany == 2) {
            timerT = 20;
            realRightN = 8;
            wNum = 5;
            objNum1 = 0;
            objNum2 = 0;
            objNum3 = 0;
            objNum4 = 0;
            wNum = 70;
        }

        var  newArray = [];
        for (var j = 0; j < haiChongSptArray.length; j++) {
            var  chong = haiChongSptArray[j];
            chong.runAction(cc.EaseSineInOut.create(cc.MoveBy.create(MOVETIMERONE, cc.p(-ADDDISTANCE, 0))));
            if (chong.getTag() == 20 && ershinum < objNum1) {
                newArray.push(chong);
                ershinum++;
            }
            if (chong.getTag() == 22 && erernum < objNum2) {
                newArray.push(chong);
                erernum++;
            }
            if (chong.getTag() == 24 && ersinum < objNum3) {
                newArray.push(chong);
                ersinum++;
            }
            if (chong.getTag() == 26 && erliunum < objNum4) {
                newArray.push(chong);
                erliunum++;
            }
            if (chong.getTag() >= wNum) {
                
                newArray.push(chong);
            }
        }
        for (var i = 0; i < newArray.length; i++) {
            var  chong = newArray[i];
            chong.setScale(0);
        }
    }

    cc.audioEngine.playEffect(m130pestRuninEfc);
    this.runAction(cc.Sequence.create(cc.DelayTime.create(MOVETIMERONE),cc.CallFunc.create( this.delePlayTimeEfc,this),null));
    progressTimer.runAction(cc.Sequence.create(cc.DelayTime.create(MOVETIMERONE),CCProgressTo.create(timerT, 100),cc.CallFunc.create( this.isEatFlowerOrNot,this),null));
    

},
delePlayTimeEfc:function(){

    timrEfc = 1;
    timrEfc = cc.audioEngine.playEffect(m130TimrEfc,true);

},
isEatFlowerOrNot:function(){

    if (dontPlayDouble == false) {
        if (rightN == realRightN) {
            
            this.setTouchEnabled(false);
            cc.audioEngine.playEffect(m130victoryEfc);
            var  particle =  PersonalApi.getRandomParticle();
            this.addChild(particle,100);
            this.runAction(cc.Sequence.create(cc.DelayTime.create(0.5),cc.CallFunc.create( this.hideSome,this),null));
        }
    }
  
    if (rightN < realRightN)
    {
        this.setTouchEnabled(false);
        cc.audioEngine.stopEffect(timrEfc);
        cc.audioEngine.playEffect(m13aitureEfc);
        this.runAction(cc.Sequence.create(cc.DelayTime.create(0.5),cc.CallFunc.create( this.playPestJianjiao,this),null));
        if (jiluTimes != 0) {
            jiluTimes = 0;
            this.getChildByTag(firstTag).setTag(firstTag-100);
            this.getChildByTag(firstTag-100).getChildByTag(1).runAction(cc.Hide.create());
            firstTag = -1;
        }
        for (var i = 0; i < haiChongSptArray.length; i++) {
            var  sprite = haiChongSptArray[i];
            if (sprite.getTag() < 59 && sprite.getScale() != 0 ) {
                sprite.runAction(cc.Sequence.create(cc.ScaleTo.create(0.15,1.2),cc.ScaleTo.create(0.5,0),null));
            }else if (sprite.getTag() > 110)
            {
                sprite.runAction(cc.Sequence.create(cc.ScaleTo.create(0.15,1.2),cc.ScaleTo.create(0.5,0),null));
                sprite.getChildByTag(1).runAction(cc.Hide.create());
            }
        }
        for (var i = 0; i < 5; i++) {
            var  flower = flowerArray[i];
            this.getChildByTag(60+i*2).runAction(cc.EaseSineIn.create(cc.MoveTo.create(1.5, cc.p(flower.getPositionX()+180, flower.getPositionY()+40))));
            this.getChildByTag(61+i*2).stopAllActions();
            this.getChildByTag(61+i*2).runAction(cc.Sequence.create(cc.ScaleTo.create(0.15,1.2),cc.ScaleTo.create(0.5,0),null));

        }
        this.runAction(cc.Sequence.create(cc.DelayTime.create(1.5),cc.CallFunc.create( this.playEatAction,this),null));
    }
 

},
playPestJianjiao:function(){

    cc.audioEngine.playEffect(m130pestsWhiningEfc);

},
playEatAction:function(){

    
    if (jiluTimes != 0) {
        jiluTimes = 0;
        this.getChildByTag(firstTag).setTag(firstTag-100);
        this.getChildByTag(firstTag-100).getChildByTag(1).runAction(cc.Hide.create());
        firstTag = -1;
    }
    cc.audioEngine.playEffect(m130eatFlowersEfc);
    for (var i = 0; i < 5; i++) {
        this.getChildByTag(60+i*2).stopAllActions();
        var  nnn = otherNumArray[i];
        var  oneAction =this.runOAction(parseInt(nnn), 2, "m130_xhc_", 0.3, 4);
        this.getChildByTag(60+i*2).runAction(cc.Sequence.create(cc.DelayTime.create(0.1),oneAction,cc.DelayTime.create(0.5),cc.ScaleTo.create(0.3, 0),null));
    }
    for (var i = 0; i < flowerArray.length; i++) {
        var  flower = flowerArray[i];
        flower.runAction(CCFadeOut.create(0.6*4));
    }
    progressTimer.stopAllActions();
    progressTimer.setPercentage(0);
    if (showMany == 2) {
        showMany = -1;
    }
    showMany++;
  
    this.runAction(cc.Sequence.create(cc.DelayTime.create(0.6*4+2),cc.CallFunc.create( this.addHaiChong,this),null));


},
hideSome:function(){

    
    cc.audioEngine.stopEffect(timrEfc);
    cc.audioEngine.playEffect(m130victoryEfc);
    if (dontPlayDouble) {
        dontPlayDouble = false;
    }
    progressTimer.stopAllActions();
    progressTimer.setPercentage(0);
    if (showMany == 2) {
        showMany = -1;
        playSecBoo = true;
    }
    showMany++;
    for (var i = 0; i < haiChongSptArray.length; i++) {
        var  Sprite = haiChongSptArray[i];
        if (Sprite.getScale() != 0) {
            Sprite.runAction(cc.Sequence.create(cc.ScaleTo.create(0.15,1.2),cc.ScaleTo.create(0.5,0),null));
        }
    }
    this.runAction(cc.Sequence.create(cc.DelayTime.create(3),cc.CallFunc.create( this.addHaiChong,this),null));
    

},
ccTouchBegan:function(pTouch, pEvent){


   var location = this.convertTouchToNodeSpace(pTouch);
    for (var i = 0; i < haiChongSptArray.length; i++) {
        var  Sprite = haiChongSptArray[i];
        if (cc.rectContainsPoint(Sprite.getBoundingBox(),location) && Sprite.getTag() < 85) {
            jiluTimes++;
            if (jiluTimes == 1) {
                firstTag = Sprite.getTag();
                Sprite.setTag(firstTag+100);
                firstTag = firstTag+100;
                Sprite.getChildByTag(1).runAction(CCShow.create());
                
            }else if (jiluTimes == 2)
            {
                this.setTouchEnabled(false);
                secondTag = Sprite.getTag();
                Sprite.getChildByTag(1).runAction(cc.Sequence.create(CCShow.create(),cc.DelayTime.create(0.3),cc.Hide.create(),null));
                this.getChildByTag(firstTag).getChildByTag(1).runAction(cc.Sequence.create(CCShow.create(),cc.DelayTime.create(0.3),cc.Hide.create(),null));

                if (firstTag == secondTag+100) {
                    
                    rightN++;
                    cc.audioEngine.playEffect(m130xiaochuEfc);
                    if (rightN == realRightN) {
                        this.setTouchEnabled(false);
                        dontPlayDouble = true;
                        var  particle =  PersonalApi.getRandomParticle();
                        this.addChild(particle,100);
                        this.runAction(cc.Sequence.create(cc.DelayTime.create(1),cc.CallFunc.create( this.hideSome,this),null));
                    }
                    paopaoOneSpt.setPosition(cc.p(this.getChildByTag(firstTag).getPosition().x, this.getChildByTag(firstTag).getPosition().y-50));
                    var  oneAction =this.runOAction(1, 3, "m130_paopao", 0.15, 1);
                    paopaoOneSpt.runAction(cc.Sequence.create(CCShow.create(),oneAction,cc.Hide.create(),null));
                    
                    paopaoTwoSpt.setPosition(cc.p(Sprite.getPosition().x, Sprite.getPosition().y-50));
                    var  twoAction =this.runOAction(1, 3, "m130_paopao", 0.15, 1);
                    paopaoTwoSpt.runAction(cc.Sequence.create(CCShow.create(),twoAction,cc.Hide.create(),null));
                    this.getChildByTag(firstTag).runAction(cc.ScaleTo.create(0.1, 0));
                    Sprite.runAction(cc.ScaleTo.create(0.1, 0));
                    this.getChildByTag(firstTag).setTag(500);
                    Sprite.setTag(500);
                }
                else
                {
                    cc.audioEngine.playEffect(m130wrongEfc);
                    this.getChildByTag(firstTag).setTag(firstTag-100);
                }
                if (rightN < realRightN) {
                    this.runAction(cc.Sequence.create(cc.DelayTime.create(0.5),cc.CallFunc.create( this.openClick,this),null));
  
                }
                
                firstTag = -1;
                secondTag = -1;
                jiluTimes = 0;
            }
        }
    }
    return true;


},

openClick:function(){

    this.setTouchEnabled(true);

},
runOAction:function(start,frameCount,formort,time,repeat){

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

returLightPo:function(num){

   var po;
    if (num == 0) {
        po = cc.p(85.0,80);
    }else if (num == 1)
    {
        po = cc.p(80,55);
    }
    else if (num == 2)
    {
        po = cc.p(85.0,65);
    }
    else if (num == 3)
    {
        po = cc.p(80.0,80);
    }
    else if (num ==4)
    {
        po = cc.p(80.0,80);
    }
    else if (num == 5)
    {
        po = cc.p(85.0,80);
    }
    return po;

},
initHaiPosition:function(){


    haiChongPoiArray.push(cc.p(822.0+ADDDISTANCE, 1206));
    haiChongPoiArray.push(cc.p(1395.0+ADDDISTANCE, 1265));
    haiChongPoiArray.push(cc.p(1671.0+ADDDISTANCE, 1248));
    haiChongPoiArray.push(cc.p(561.0+ADDDISTANCE, 1069));
    haiChongPoiArray.push(cc.p(1000.0+ADDDISTANCE, 1062.0));
    
    haiChongPoiArray.push(cc.p(1240.0+ADDDISTANCE, 1114));
    haiChongPoiArray.push(cc.p(1550.0+ADDDISTANCE, 1047));
    haiChongPoiArray.push(cc.p(1788+ADDDISTANCE, 992));
    haiChongPoiArray.push(cc.p(501.0+ADDDISTANCE, 785));
    haiChongPoiArray.push(cc.p(743.0+ADDDISTANCE, 852));
    
    haiChongPoiArray.push(cc.p(1076.0+ADDDISTANCE, 862.5));
    haiChongPoiArray.push(cc.p(1370.0+ADDDISTANCE, 897));
    haiChongPoiArray.push(cc.p(1718+ADDDISTANCE, 800));
    haiChongPoiArray.push(cc.p(658+ADDDISTANCE, 596));
    haiChongPoiArray.push(cc.p(870.0+ADDDISTANCE, 646));
    
    haiChongPoiArray.push(cc.p(1253+ADDDISTANCE, 695));
    haiChongPoiArray.push(cc.p(1534+ADDDISTANCE, 698));
    haiChongPoiArray.push(cc.p(1049.0+ADDDISTANCE, 504));
    haiChongPoiArray.push(cc.p(1365.0+ADDDISTANCE, 506));
    haiChongPoiArray.push(cc.p(1686.0+ADDDISTANCE, 526));
    
    haiChongPoiArray.push(cc.p(526.5+ADDDISTANCE, 290));
    haiChongPoiArray.push(cc.p(755.0+ADDDISTANCE, 350));
    haiChongPoiArray.push(cc.p(995.0+ADDDISTANCE, 275));
    haiChongPoiArray.push(cc.p(1255.0+ADDDISTANCE, 253));
    haiChongPoiArray.push(cc.p(1484.5+ADDDISTANCE, 330));
    
    haiChongPoiArray.push(cc.p(1763+ADDDISTANCE, 300));


},
ccTouchMoved:function(pTouch, pEvent){


},
ccTouchEnded:function(pTouch, pEvent){


},
registerWithTouchDispatcher:function(){

    //CCDirector.sharedDirector().getTouchDispatcher().addTargetedDelegate(this, 0, false);

},
onEnter:function(){

    this.onEnter();

},
onExit:function(){

    this.onExit();

}
})
NYGame521Scene.scene=function(){
    var  layer = newthis.NYGame521Scene();
    var  scene = cc.Scene.create();
    scene.addChild(layer);
    return scene;

}