
//
//  NYGame522SceneTwo.cpp
//  mathKgIII_a
//
//  Created by nieying on 14-4-28.
//
//

//#include "NYGame522Scene.h"
//#include "NYGame522SceneTwo.h"
//#include "NYGame522SceneThree.h"
//#include "NYGame522SceneFour.h"
//#include "SimpleAudioEngine.h"

//using namespace CocosDenshion;

var NYGame522SceneTwo=cc.Layer.extend({
NYGame522SceneTwo:function(){


    chooseAry=null;
//    chooseAry = null;
    touChSptAry=null;
//    touChSptAry = null;
    touChSptAry = null;
    chooseAry = null;
    cc.spriteFrameCache.removeSpriteFramesFromFile(M145PubImage);
    cc.spriteFrameCache.removeSpriteFramesFromFile(M145Image2_1);
    cc.spriteFrameCache.removeSpriteFramesFromFile(M145Image2_2);
//    cc.spriteFrameCache.removeSpriteFramesFromFile(M145Image2_3);
//    cc.spriteFrameCache.removeSpriteFramesFromFile(M145Image2_4);
//    //CCTextureCache.sharedTextureCache().removeUnusedTextures();
    CCTextureCache.sharedTextureCache().removeAllTextures();

},

init:function(){

    if (!NYPublicScene.init()) {
        return false;
    }
    this.setTouchEnabled(true);
  
//    layer = SKDrawShaps.create();
//    this.addChild(layer, 100, 999);
    
    chooseAry = [];
    touChSptAry = [];
    
    touChClick = false;
    shuichiClick = true;
    
    scenNum = 0;
    scne = 0 ;
    
    cc.spriteFrameCache.addSpriteFrames(M145PubImage);
    cc.spriteFrameCache.addSpriteFrames(M145Image2_1);
    cc.spriteFrameCache.addSpriteFrames(M145Image2_2);
//    cc.spriteFrameCache.addSpriteFrames(M145Image2_3);
//    cc.spriteFrameCache.addSpriteFrames(M145Image2_4);
    
    
    for (var i = 0; i < 4; i ++) {
        var  hui = cc.Sprite.create("#m145_yuanjiao.png");
        hui.setAnchorPoint(cc.p(1.0, 0));
        if (i == 0) {
            hui.setPosition(cc.p(1907.4,1426.6));
        }else if (i == 1){
            hui.setPosition(cc.p(1926.1,1403.0));
        }else if (i == 2){
            hui.setPosition(cc.p(1909.5,1380.1));
        }else if (i == 3){
            hui.setPosition(cc.p(1892.8,1402.3));
        }
        hui.setRotation(45+90*i);
        hui.setScale(1.0);
        hui.setTag(-1*(i+1));
        this.addChild(hui);
        chooseAry.push(hui);
    }
    var  chooseSpt = cc.Sprite.create("#m145_yuan.png");
    chooseSpt.setPosition(cc.p(1906,1403));
    chooseSpt.setScale(1.5);
    this.addChild(chooseSpt,1);
    for (var i = 1; i < 4; i ++) {
        var  hui = cc.Sprite.create("#m145_yuanjiao.png");
        hui.setAnchorPoint(cc.p(1.0, 0));
        hui.setPosition(cc.p(1906,1403));
        hui.setRotation(45+90*(i-1));
        hui.setTag(-1*(i+10));
        hui.setScale(1.5);
        this.addChild(hui,1);
    }
    
    var  bg = cc.Sprite.create(m154SUbg);
    bg.setPosition(cc.p(1024, 768));
    this.addChild(bg);
    
    mubanSpt = cc.Sprite.create("#m145_au_banzi.png");
    mubanSpt.setPosition(cc.p(1024,88 - 500));
    this.addChild(mubanSpt, 1);
    
    for (var i = 0; i < 6; i++) {
        var  duobian = cc.Sprite.create('#'+"m145_au_tuxing_"+parseInt(i+1)+".png");
       var Px;
        if (i == 0) {
            Px = 420;
        }else if (i == 1){
            Px = 648;
        }else if (i == 2){
            Px = 900;
        }else if (i == 3){
            Px = 1176;
        }else if (i == 4){
            Px = 1428;
        }else if (i == 5){
            Px = 1644;
        }
        duobian.setTag(i+1);
        duobian.setScale(0);
        duobian.setPosition(cc.p(Px, 96 - 500));
        this.addChild(duobian, 1);
    }
    
    mubanSpt.runAction(cc.Sequence.create(cc.DelayTime.create(0.5),CCEaseBackOut.create(cc.MoveBy.create(0.5, cc.p(0, 500))),cc.DelayTime.create(1.0),cc.MoveBy.create(0.5, cc.p(0, -500)),cc.CallFunc.create( this.openTouchClick,this),null));
    
    var  shuihua = cc.Sprite.create("#m154SUshui0001.png");
    shuihua.setPosition(cc.p(883.6,830.2 ));
    shuihua.setTag(26);
    shuihua.setVisible(false);
    this.addChild(shuihua,1);
    
    var  boliang1 = cc.Sprite.create("#m154SUbolangA0001.png");
    boliang1.setPosition(cc.p(1102.5,399.4 ));
    this.addChild(boliang1);
    var  bolf1Ary = [];
    for (var i = 0; i < 8; i++) {
        var  frame = cc.spriteFrameCache.getSpriteFrame("m154SUbolangA000"+parseInt(i+1)+".png");
        bolf1Ary.push(frame);
    }
    var  bol1ation = cc.Animation.createWithSpriteFrames(bolf1Ary,0.1);
    var  bl1Animate = CCAnimate.create(bol1ation);
    boliang1.runAction(cc.RepeatForever.create(bl1Animate));
    
    var  boliang2 = cc.Sprite.create("#m154SUbolangB0001.png");
    boliang2.setPosition(cc.p(1076.9,547.1 ));
    this.addChild(boliang2);
    var  bolf2Ary = [];
    for (var i = 0; i < 8; i++) {
        var  frame = cc.spriteFrameCache.getSpriteFrame("m154SUbolangB000"+parseInt(i+1)+".png");
        bolf2Ary.push(frame);
    }
    var  bol2ation = cc.Animation.createWithSpriteFrames(bolf2Ary,0.1);
    var  bl2Animate = CCAnimate.create(bol2ation);
    boliang2.runAction(cc.RepeatForever.create(bl2Animate));
    
    var  boliang3 = cc.Sprite.create("#m154SUbolangB0001.png");
    boliang3.setPosition(cc.p(830.5,321.6 ));
    this.addChild(boliang3);
    boliang3.runAction(cc.RepeatForever.create(bl2Animate));
    
    var  boliang4 = cc.Sprite.create("#m154SUbolangA0001.png");
    boliang4.setPosition(cc.p(1067.5,492.1 ));
    this.addChild(boliang4);
    boliang4.runAction(cc.RepeatForever.create(bl1Animate));
    
    lionSpt = cc.Sprite.create("#m154SUlion0001.png");
    lionSpt.setPosition(cc.p(1538.9,1275.1 ));
//    lionSpt.setTag(16);
    this.addChild(lionSpt,2);
    
    var  zhuoZi = cc.Sprite.create("#m154SUzhuozi.png");
    zhuoZi.setPosition(cc.p(416.4,1001.8 ));
    zhuoZi.setTag(11);
    this.addChild(zhuoZi);
    touChSptAry.push(zhuoZi);
    
    var  qiushdow = cc.Sprite.create("#m154SUzuqiuying.png");
    qiushdow.setPosition(cc.p(150.8,359.9 ));
    qiushdow.setTag(25);
    this.addChild(qiushdow);
    
    var  qiuSpt = cc.Sprite.create("#m154SUzuqiu.png");
    qiuSpt.setPosition(cc.p(154.2,425.7 ));
    qiuSpt.setTag(15);
    this.addChild(qiuSpt);
    touChSptAry.push(qiuSpt);
    
    var  xiaochuan = cc.Sprite.create("#m154SUchuan.png");
    xiaochuan.setPosition(cc.p(671.1,471.8 ));
    xiaochuan.setTag(7);
    this.addChild(xiaochuan);
//    xiaochuan.runAction(cc.RepeatForever.create(cc.Sequence.create(cc.DelayTime.create(1.0),cc.MoveBy.create(0.5, cc.p(100,-100 )),cc.DelayTime.create(1.0),cc.MoveBy.create(0.5, cc.p(-100, 100)),cc.DelayTime.create(5.0),null)));
    
    var  huaban = cc.Sprite.create("#m154SUfanchuan.png");
    huaban.setPosition(cc.p(1878.1,641.6 ));
    huaban.setTag(14);
    this.addChild(huaban);
    touChSptAry.push(huaban);
    
    var  pengquan = cc.Sprite.create("#m154SUpenquan0001.png");
    pengquan.setPosition(cc.p(1222.1,1132.5 ));
    pengquan.setVisible(false);
    pengquan.setTag(9);
    this.addChild(pengquan,1);
    
    
    var  huangya = cc.Sprite.create("#m154SUyazi.png");
    huangya.setPosition(cc.p(1229.5,459.7 ));
    huangya.setTag(8);
    this.addChild(huangya);
//    huangya.runAction(cc.RepeatForever.create(cc.Sequence.create(cc.RotateTo.create(0.1, 10),cc.RotateTo.create(0.1, 0),cc.RotateTo.create(0.1, -10),cc.RotateTo.create(0.1, 0),cc.RotateTo.create(0.1, 10),cc.RotateTo.create(0.1, 0),cc.RotateTo.create(0.1, -10),cc.RotateTo.create(0.1, 0),cc.DelayTime.create(1.0),CCEaseBackOut.create(cc.MoveBy.create(0.5, cc.p(0, -50))),CCEaseBackOut.create(cc.MoveBy.create(0.5, cc.p(0, 50))),cc.DelayTime.create(1.0),null)));
    
    var  lanseshui = cc.Sprite.create("#m154SUzhe.png");
    lanseshui.setPosition(cc.p(877.2,397.4 ));
    this.addChild(lanseshui);
    
    var  door1 = cc.Sprite.create("#m154SUdoorA0001.png");
    door1.setPosition(cc.p(635.1,1305.9 ));
    door1.setTag(12);
    this.addChild(door1);
    touChSptAry.push(door1);
    
    var  door2back = cc.Sprite.create("#m154SUdoorBK1.png");
    door2back.setPosition(cc.p(992.4, 1303.8));
    this.addChild(door2back);
    var  dbfAry = [];
    for (var i = 0; i < 2; i++) {
        var  frame = cc.spriteFrameCache.getSpriteFrame("m154SUdoorBK"+parseInt(i+1)+".png");
        dbfAry.push(frame);
    }
    var  dbation = cc.Animation.createWithSpriteFrames(dbfAry,0.1);
    var  dbanimate = CCAnimate.create(dbation);
    door2back.runAction(cc.RepeatForever.create(cc.Sequence.create(dbanimate,dbanimate,cc.DelayTime.create(1.0),null)));
    
    var  door2 = cc.Sprite.create("#m154SUdoorB0001.png");
    door2.setPosition(cc.p(992.4,1303.8 ));
    door2.setTag(13);
    this.addChild(door2);
    touChSptAry.push(door2);
    
    cc.audioEngine.playMusic(s185bgmusic, true);
    
    return true;
    

},

pengquanSound:function(){

    cc.audioEngine.playEffect(s18ountain);

},

openTouchClick:function(){

    touChClick = true;

},

changeScene:function(){

    if (scenNum == -1) {
        cc.audioEngine.stopAllEffects();
        //CCDirector.sharedDirector().replaceScene(NYGame522Scene.scene());
    }else if (scenNum == -3){
        cc.audioEngine.stopAllEffects();
        //CCDirector.sharedDirector().replaceScene(NYGame522SceneThree.scene());
    }else if (scenNum == -2){
        cc.audioEngine.stopAllEffects();
        //CCDirector.sharedDirector().replaceScene(NYGame522SceneFour.scene());
    }

},

BigbanDown:function(sender){

    if (scne == 0) {
        cc.audioEngine.playEffect(duobianxingjichu_duona2);
    }
    
   var tuxingNum;
    if (sender.getTag() != 8) {
        tuxingNum = sender.getTag() - 104;
    }else{
        tuxingNum = 12;
    }
    
    if (tuxingNum == 7) {
        scne = 1;
    }else if (tuxingNum == 8){
        scne = 2;
    }else if (tuxingNum == 9){
        scne = 3;
    }else if (tuxingNum == 10){
        scne = 5;
    }else if (tuxingNum == 11){
        scne = 6;
    }else if (tuxingNum == 12){
        scne = 4;
    }
    var  layer = SKDrawShaps.create();
    this.addChild(layer, 100, 999);
//    layer = this.getChildByTag(999);
    layer.initBySeason(SUMMER_TAG);
    layer.callDraw(scne);

},

BigbanUp:function(){

//    this.mubanUp();

},

mubanUp:function(){

    if (this.getChildByTag(999) != null) {
        this.removeChildByTag(999, true);
    }
    if (this.getChildByTag(112) != null) {
        var  door1 = this.getChildByTag(112);
        door1.setDisplayFrame(cc.spriteFrameCache.getSpriteFrame("m154SUdoorA0001.png"));
    }
    if (this.getChildByTag(113) != null) {
        var  door2 = this.getChildByTag(113);
        door2.setDisplayFrame(cc.spriteFrameCache.getSpriteFrame("m154SUdoorB0001.png"));

    }
    for (var i = 0; i < 6; i++) {
        this.getChildByTag(i+1).runAction(cc.Sequence.create(cc.DelayTime.create(0.5),CCEaseBackOut.create(cc.MoveBy.create(0.5, cc.p(0, 500))),cc.DelayTime.create(1.0),cc.MoveBy.create(0.5, cc.p(0, -500)),null));
    }
    mubanSpt.runAction(cc.Sequence.create(cc.DelayTime.create(0.5),CCEaseBackOut.create(cc.MoveBy.create(0.5, cc.p(0, 500))),cc.DelayTime.create(1.0),cc.MoveBy.create(0.5, cc.p(0, -500)),cc.CallFunc.create( this.openTouchClick,this),null));

},

dooroneAction:function(){

    var  door1fary = [];
    for (var i = 0; i < 8; i++) {
        var  frame = cc.spriteFrameCache.getSpriteFrame("m154SUdoorA000"+parseInt(i+1)+".png");
        door1fary.push(frame);
    }
    var  ation = cc.Animation.createWithSpriteFrames(door1ary,0.2);
    var  animate = CCAnimate.create(ation);
    this.getChildByTag(112).runAction(animate);
    cc.audioEngine.playEffect(s185toilet);

},

dooroneSound:function(){

    cc.audioEngine.playEffect(s185toilet);

},

doortwoAction:function(){

    var  door1fary = [];
    for (var i = 0; i < 8; i++) {
        var  frame = cc.spriteFrameCache.getSpriteFrame("m154SUdoorB000"+parseInt(i+1)+".png");
        door1fary.push(frame);
    }
    var  ation = cc.Animation.createWithSpriteFrames(door1ary,0.2);
    var  animate = CCAnimate.create(ation);
    this.getChildByTag(113).runAction(animate);
    cc.audioEngine.playEffect(s18unny2);

},

doortwoSound:function(){

    cc.audioEngine.playEffect(s18unny2);

},

lionChang1:function(){

    lionSpt.setDisplayFrame(cc.spriteFrameCache.getSpriteFrame("m154SUlion0013.png"));

},
lionChang2:function(){

    lionSpt.setDisplayFrame(cc.spriteFrameCache.getSpriteFrame("m154SUlion0014.png"));

},
lionChangBack:function(){

    lionSpt.setDisplayFrame(cc.spriteFrameCache.getSpriteFrame("m154SUlion0001.png"));

},

shuihuAction:function(){

    var  frameAry = [];
    for (var i = 0; i < 8; i++) {
        var  frame = cc.spriteFrameCache.getSpriteFrame("m154SUshui000"+parseInt(i+1)+".png");
        frameAry.push(frame);
    }
    var  ation = cc.Animation.createWithSpriteFrames(frameAry,0.2);
    var  animate = CCAnimate.create(ation);
    this.getChildByTag(26).runAction(cc.Sequence.create(CCShow.create(),CCFadeIn.create(0.1),animate,CCFadeOut.create(0.2),cc.Hide.create(),null));
    

},

ccTouchBegan:function(pTouch, pEvent){

   var location = this.convertTouchToNodeSpace(pTouch);
    for (var i = 0; i < chooseAry.length; i++) {
        var  choose = chooseAry[i];
        if (cc.rectContainsPoint(choose.getBoundingBox(),location) && scenNum == 0 && choose.getTag() != -4) {
            for (var j = 0; j < 3; j++) {
                this.getChildByTag(-1*(j +11)).runAction(cc.RotateTo.create(0.2, 45+(j+1)*90+i*90));
            }
            this.setTouchEnabled(false);
            scenNum = choose.getTag();
            this.runAction(cc.Sequence.create(cc.DelayTime.create(0.2),cc.CallFunc.create( this.changeScene,this),null));
            //            return true;
        }
    }
    
    if (CCRect(985, 910, 550, 170).containsPoint(location) && this.getChildByTag(9).numberOfRunningActions() == 0) {
        var  pengfAry = [];
        for (var i = 0; i < 3; i++) {
            var  frame = cc.spriteFrameCache.getSpriteFrame("m154SUpenquan000"+parseInt(i+1)+".png");
            pengfAry.push(frame);
        }
        var  pation = cc.Animation.createWithSpriteFrames(pengfAry,0.2);
        var  panimate = CCAnimate.create(pation);
        this.getChildByTag(9).runAction(cc.Sequence.create(cc.DelayTime.create(1.0),cc.CallFunc.create( this.pengquanSound,this),CCShow.create(),panimate,panimate,panimate,panimate,panimate,panimate,panimate,cc.Hide.create(),null));
    }
    
    if (touChClick) {
        for (var i = 0; i < touChSptAry.length; i++) {
            var  touSpt = touChSptAry[i];
            if (cc.rectContainsPoint(touSpt.getBoundingBox(),location)) {
                touChClick = false;
                if (touSpt.getTag() < 100) {
                    this.getChildByTag(touSpt.getTag() - 10).setScale(1);
                    touSpt.setTag(touSpt.getTag()+100);
                    if (touSpt.getTag() == 111) {
                        touSpt.runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.CallFuncN.create(this, callfuncN_selector(this.BigbanDown)),null));
                    }else if (touSpt.getTag() == 112){
                        cc.audioEngine.playEffect(s185door);
                        touSpt.runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.CallFunc.create( this.dooroneAction,this),cc.DelayTime.create(1.6),cc.CallFuncN.create(this, callfuncN_selector(this.BigbanDown)),null));
                    }else if (touSpt.getTag() == 113){
                        cc.audioEngine.playEffect(s185door);
                        touSpt.runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.CallFunc.create( this.doortwoAction,this),cc.DelayTime.create(1.6),cc.CallFuncN.create(this, callfuncN_selector(this.BigbanDown)),null));
                    }else if (touSpt.getTag() == 114){
                        
                        touSpt.runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.RotateTo.create(0.2, 10),cc.RotateTo.create(0.2, 0),cc.RotateTo.create(0.2, -10),cc.RotateTo.create(0.2, 0),cc.RotateTo.create(0.2, 10),cc.RotateTo.create(0.2, 0),cc.RotateTo.create(0.2, -10),cc.RotateTo.create(0.2, 0),cc.CallFuncN.create(this, callfuncN_selector(this.BigbanDown)),null));
                    }else if (touSpt.getTag() == 115){
                        touSpt.runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.MoveBy.create(0.2, cc.p(0, 70)),cc.MoveBy.create(0.2, cc.p(0, -70)),cc.MoveBy.create(0.2, cc.p(0, 50)),cc.MoveBy.create(0.2, cc.p(0,- 50)),cc.CallFuncN.create(this, callfuncN_selector(this.BigbanDown)),null));
                    }
                }else{
                    if (touSpt.getTag() == 111) {
                        touSpt.runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.CallFunc.create( this.mubanUp,this),null));
                    }else if (touSpt.getTag() == 112){
                        touSpt.runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.CallFunc.create( this.dooroneAction,this),cc.DelayTime.create(1.6),cc.CallFunc.create( this.mubanUp,this),null));
                    }else if (touSpt.getTag() == 113){
                        touSpt.runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.CallFunc.create( this.doortwoAction,this),cc.DelayTime.create(1.6),cc.CallFunc.create( this.mubanUp,this),null));
                    }else if (touSpt.getTag() == 114){
                        touSpt.runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.RotateTo.create(0.2, 10),cc.RotateTo.create(0.2, 0),cc.RotateTo.create(0.2, -10),cc.RotateTo.create(0.2, 0),cc.RotateTo.create(0.2, 10),cc.RotateTo.create(0.2, 0),cc.RotateTo.create(0.2, -10),cc.RotateTo.create(0.2, 0),cc.CallFunc.create( this.mubanUp,this),null));
                    }else if (touSpt.getTag() == 115){
                        touSpt.runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.MoveBy.create(0.2, cc.p(0, 70)),cc.MoveBy.create(0.2, cc.p(0, -70)),cc.MoveBy.create(0.2, cc.p(0, 50)),cc.MoveBy.create(0.2, cc.p(0,- 50)),cc.CallFunc.create( this.mubanUp,this),null));
                    }
                }
                if (touSpt.getTag() < 116) {
                    var  xuXian = cc.Sprite.create('#'+"m145_xian2_000"+parseInt(touSpt.getTag()-110)+".png");
                    if (touSpt.getTag() == 111) {
                        xuXian.setPosition(cc.p(414.2, 1016.5));
//                        xuXian.cocos2d.CCNode.setScale(0.38, 0.35);
                        xuXian.setColor(ccc3(0, 0, 0));
                    }else if (touSpt.getTag() == 112){
                        xuXian.setPosition(cc.p(714.0, 1325.1));
//                        xuXian.setScale(0.4);
                        xuXian.setColor(ccc3(0, 0, 0));
                    }else if (touSpt.getTag() == 113){
                        xuXian.setPosition(cc.p(1055.6, 1329.5));
//                        xuXian.setScale(0.45);
                        xuXian.setColor(ccc3(0, 0, 0));
                    }else if (touSpt.getTag() == 114){
                        xuXian.setPosition(cc.p(1886.2, 653.0));
//                        xuXian.setScale(0.40);
                        xuXian.setRotation(-5);
                        xuXian.setColor(ccc3(0, 0, 0));
                    }else if (touSpt.getTag() == 115){
                        xuXian.setPosition(cc.p(148.4, 395.2 ));
//                        xuXian.setScale(0.23);
//                        xuXian.setRotation(133.7);
                        xuXian.setColor(ccc3(0, 0, 0));
                    }
                    this.addChild(xuXian, 1);
                    xuXian.runAction(cc.Sequence.create(cc.Repeat.create(cc.Sequence.create(CCShow.create(),cc.DelayTime.create(0.2),cc.Hide.create(),cc.DelayTime.create(0.2),null), 3),cc.CallFuncN.create(this, callfuncN_selector(this.removeFormP)),null));
                }
                return true;
            }
        }
        if (CCRect(569.8, 199.1, 900, 700).containsPoint(location)) {
            touChClick = false;
            this.getChildByTag(6).setScale(1);
            if (shuichiClick) {
                this.getChildByTag(7).runAction(cc.RepeatForever.create(cc.Sequence.create(cc.DelayTime.create(1.0),cc.MoveBy.create(0.5, cc.p(100,-100 )),cc.DelayTime.create(1.0),cc.MoveBy.create(0.5, cc.p(-100, 100)),cc.DelayTime.create(5.0),null)));
                this.getChildByTag(8).runAction(cc.RepeatForever.create(cc.Sequence.create(cc.RotateTo.create(0.1, 10),cc.RotateTo.create(0.1, 0),cc.RotateTo.create(0.1, -10),cc.RotateTo.create(0.1, 0),cc.RotateTo.create(0.1, 10),cc.RotateTo.create(0.1, 0),cc.RotateTo.create(0.1, -10),cc.RotateTo.create(0.1, 0),cc.DelayTime.create(1.0),CCEaseBackOut.create(cc.MoveBy.create(0.5, cc.p(0, -50))),CCEaseBackOut.create(cc.MoveBy.create(0.5, cc.p(0, 50))),cc.DelayTime.create(1.0),null)));
                this.getChildByTag(8).runAction(cc.Sequence.create(cc.DelayTime.create(2.0),cc.CallFuncN.create(this, callfuncN_selector(this.BigbanDown)),null));
            }else{
                this.runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.CallFunc.create( this.mubanUp,this),null));
            }
            shuichiClick = false;
            
            
             var  xuXian = cc.Sprite.create('#'+"m145_xian2_000"+parseInt(6)+".png");
            xuXian.setPosition(cc.p(1014.0, 547.7));
            xuXian.setScale(1.1);
            this.addChild(xuXian, 1);
            xuXian.setColor(ccc3(0, 0, 0));
            xuXian.runAction(cc.Sequence.create(cc.Repeat.create(cc.Sequence.create(CCShow.create(),cc.DelayTime.create(0.2),cc.Hide.create(),cc.DelayTime.create(0.2),null), 3),cc.CallFuncN.create(this, callfuncN_selector(this.removeFormP)),null));
            
        }
    }
    
    if (cc.rectContainsPoint(lionSpt.getBoundingBox(),location) && lionSpt.numberOfRunningActions() == 0) {
        var  lionqary = [];
        for (var i = 0; i < 4; i++) {
            var  frame = cc.spriteFrameCache.getSpriteFrame("m154SUlion000"+parseInt(i+1)+".png");
            lionqary.push(frame);
        }
        var  qation = cc.Animation.createWithSpriteFrames(lionqary,0.1);
        var  qmate = CCAnimate.create(qation);
        var  lionpary = [];
        for (var i = 5; i <= 12; i++) {
            var  frame = cc.spriteFrameCache.getSpriteFrame("m154SUlion%04d.png");
            lionpary.push(frame);
        }
        var  pation = cc.Animation.createWithSpriteFrames(lionpary,0.1);
        var  pmate = CCAnimate.create(pation);
        cc.audioEngine.playEffect(s185lion1);
        lionSpt.runAction(cc.Sequence.create(qmate,cc.Spawn.create(cc.MoveTo.create(0.4,cc.p(1388.3, 1282.3)),pmate,null),cc.CallFunc.create( this.lionChang1,this),cc.MoveTo.create(0.2, cc.p(1214.0,1357.7 )),cc.CallFunc.create( this.lionChang2,this),cc.MoveTo.create(0.2, cc.p(1117.4, 1248.4)),cc.MoveTo.create(0.2, cc.p(1018.0, 708.9)),cc.CallFunc.create( this.shuihuAction,this),CCFadeOut.create(0.2),cc.DelayTime.create(0.5),cc.CallFunc.create( this.lionChangBack,this),cc.MoveTo.create(0, cc.p(1549.4,1282.3 )),CCFadeIn.create(0.2),null));
    }
    
    if (touChClick) {
        if (location.y < 200) {
            touChClick = false;
            this.mubanUp();
        }
    }
    
    

    return true;

},
ccTouchMoved:function(pTouch, pEvent){

    

},
ccTouchEnded:function(pTouch, pEvent){

    

},

removeFormP:function(sender){

    sender.removeFromParent(true);

},

registerWithTouchDispatcher:function(){

    //CCDirector.sharedDirector().getTouchDispatcher().addTargetedDelegate(this, 0, false);

},
onEnter:function(){

    cc.audioEngine.playEffect(duobianxingjichu_duona1);
    this.onEnter();

},
onExit:function(){

    this.onExit();

},