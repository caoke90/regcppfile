//
//
//  NYGame522Scene.cpp
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

var NYGame522Scene=cc.Layer.extend({
NYGame522Scene:function(){


    touChSptAry=null;
//    touChSptAry = null;
    chooseAry=null;
//    chooseAry = null;
    touChSptAry = null;
    chooseAry = null;
    cc.spriteFrameCache.removeSpriteFramesFromFile(M145PubImage);
    cc.spriteFrameCache.removeSpriteFramesFromFile(M145Image1_1);
//    cc.spriteFrameCache.removeSpriteFramesFromFile(M145Image1_2);
//    cc.spriteFrameCache.removeSpriteFramesFromFile(M145Image1_3);
    
//    //CCTextureCache.sharedTextureCache().removeUnusedTextures();
    CCTextureCache.sharedTextureCache().removeAllTextures();

},

init:function(){

    if (!NYPublicScene.init()) {
        return false;
    }
    this.setTouchEnabled(true);
    
    touChSptAry = [];
    chooseAry = [];
    
    touChClick = false;
    scenNum = 0;
    scenNum2 = 0;
    
//    layer = SKDrawShaps.create();
//    this.addChild(layer, 100, 999);
    
    
    cc.spriteFrameCache.addSpriteFrames(M145PubImage);
    cc.spriteFrameCache.addSpriteFrames(M145Image1_1);
//    cc.spriteFrameCache.addSpriteFrames(M145Image1_2);
//    cc.spriteFrameCache.addSpriteFrames(M145Image1_3);
    
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
        hui.setRotation(45+90*i);
        hui.setTag(-1*(i+10));
        hui.setScale(1.5);
        this.addChild(hui,1);
    }
    
    
    var  bg = cc.Sprite.create(m145_ctbj_0001);
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
    
    var  xiaoChong = cc.Sprite.create("#m145_xc_.png");
    xiaoChong.setPosition(cc.p(710.5,660.8));
    xiaoChong.setTag(9);
    this.addChild(xiaoChong);

    
    var  xiaoCao = cc.Sprite.create("#m145_0001.png");
    xiaoCao.setPosition(cc.p(708.7,592 ));
    this.addChild(xiaoCao);
    
    var  hudie = cc.Sprite.create("#m145_hd_0001.png");
    hudie.setPosition(cc.p(1908, 438));
    hudie.setRotation(90);
    hudie.setTag(7);
    this.addChild(hudie);
    var  hudiefAry = [];
    for (var i = 0; i < 2; i++) {
        var  frame = cc.spriteFrameCache.getSpriteFrame("m145_hd_000"+parseInt(i+1)+".png");
        hudiefAry.push(frame);
    }
    var  hation = cc.Animation.createWithSpriteFrames(hudiefAry,0.2);
    var  hanimate = CCAnimate.create(hation);
    hudie.runAction(cc.RepeatForever.create(hanimate));
    
    var  chuanghu = cc.Sprite.create("#m145_mc_0001.png");
    chuanghu.setPosition(cc.p(1465.2, 951.5));
    chuanghu.setTag(11);
    this.addChild(chuanghu);
    touChSptAry.push(chuanghu);
    
    var  menSpt = cc.Sprite.create("#m145_mc_0002.png");
    menSpt.setPosition(cc.p(1676.8, 901.0));
    menSpt.setTag(12);
    this.addChild(menSpt);
    touChSptAry.push(menSpt);
    
    var  qingwa = cc.Sprite.create("#m145_qw_0001.png");
    qingwa.setPosition(cc.p(1596.3, 267.2));
    qingwa.setTag(8);
    this.addChild(qingwa);

    
    var  fengzheng = cc.Sprite.create("#m145_sz_0001.png");
    fengzheng.setPosition(cc.p(1046.4, 992.3));
    fengzheng.setTag(14);
    this.addChild(fengzheng);
    touChSptAry.push(fengzheng);
    
    var  xiaochuan = cc.Sprite.create("#m145_xc_0001.png");
    xiaochuan.setPosition(cc.p(961.3,420 ));
    xiaochuan.setTag(13);
    this.addChild(xiaochuan);
    touChSptAry.push(xiaochuan);
    
    var  xxiaoniao = cc.Sprite.create("#m145_xxn_0001.png");
    xxiaoniao.setPosition(cc.p(744.7, 1373.9));
    this.addChild(xxiaoniao);
    var  xxiaofAry = [];
    for (var i = 0; i < 3; i++) {
        if (i == 0) {
            var  frame = cc.spriteFrameCache.getSpriteFrame("m145_xxn_000"+parseInt(i+1)+".png");
            xxiaofAry.push(frame);
        }else{
            var  frame = cc.spriteFrameCache.getSpriteFrame("m145_xxn_000"+parseInt(i+2)+".png");
            xxiaofAry.push(frame);
        }

    }
    var  xxation = cc.Animation.createWithSpriteFrames(xxiaofAry,0.2);
    var  xxmate = CCAnimate.create(xxation);
    xxiaoniao.runAction(cc.RepeatForever.create(cc.Sequence.create(cc.DelayTime.create(2),xxmate,xxmate,null)));
    
    var  xiaoniao = cc.Sprite.create("#m145_xn_0001.png");
    xiaoniao.setPosition(cc.p(882.5 + 1500,1340.5));
    this.addChild(xiaoniao);
    var  xiaonfAry = [];
    for (var i = 0; i < 4; i++) {
        var  frame = cc.spriteFrameCache.getSpriteFrame("m145_xn_000"+parseInt(i+1)+".png");
        xiaonfAry.push(frame);
    }
    var  xation = cc.Animation.createWithSpriteFrames(xiaonfAry,0.2);
    var  xmate = CCAnimate.create(xation);
    xiaoniao.runAction(cc.RepeatForever.create(xmate));
    xiaoniao.runAction(cc.RepeatForever.create(cc.Sequence.create(cc.MoveBy.create(3.5, cc.p(-1500, 0)),cc.CallFunc.create( this.bridSound,this),cc.DelayTime.create(2.0),cc.MoveBy.create(3.5, cc.p(-1500, 0)),cc.DelayTime.create(0.2),cc.MoveTo.create(0, cc.p(882.5 + 1500,1340.5)),null)));
    

    var  shudong = cc.Sprite.create("#m145_xd_0001.png");
    shudong.setPosition(cc.p(453.0,826.8 ));
    shudong.setTag(16);
    this.addChild(shudong);
    touChSptAry.push(shudong);
    
    var  shudong2 = cc.Sprite.create("#m145_xd_0002.png");
    shudong2.setPosition(cc.p(453.0,826.8 ));
    shudong2.setTag(26);
    this.addChild(shudong2);
    shudong2.setOpacity(0);
    
    var  zhizhu = cc.Sprite.create("#m145_wang_0002.png");
    zhizhu.setPosition(cc.p(200.8, 874.7));
    zhizhu.setTag(25);
    this.addChild(zhizhu);
    
    var  wang = cc.Sprite.create("#m145_wang_0001.png");
    wang.setPosition(cc.p(175.5,980.8 ));
    wang.setTag(15);
    this.addChild(wang);
    touChSptAry.push(wang);
    
//    BigbanSpt = cc.Sprite.create("#m145_muban_0001.png");
//    BigbanSpt.setPosition(cc.p(1024,768 + 1500));
//    this.addChild(BigbanSpt,1);
    
//    onbanTuXing = cc.Sprite.create("#m145_chun_0001.png");
//    onbanTuXing.setPosition(cc.p(1024, 768 + 1500));
//    this.addChild(onbanTuXing,1);
    
    xuXianSpt = cc.Sprite.create("#m145_xian3_0001.png");
    xuXianSpt.setPosition(cc.p(1024, 768 + 1500));
    this.addChild(xuXianSpt, 1);
    
    cc.audioEngine.playMusic(m145spring_music, true);
    
    return true;

},

bridSound:function(){

    cc.audioEngine.playEffect(m145bird_singing);

},

qingwaChange:function(){

    var  qingwa = this.getChildByTag(8);
    qingwa.setDisplayFrame(cc.spriteFrameCache.getSpriteFrame("m145_qw_0002.png"));

},

qingwaChangeBack:function(){

    var  qingwa = this.getChildByTag(8);
    qingwa.setDisplayFrame(cc.spriteFrameCache.getSpriteFrame("m145_qw_0001.png"));

},

BigbanDown:function(sender){

    if (scenNum2 == 0) {
        cc.audioEngine.playEffect(duobianxingjichu_duona2);
    }
    
    if (sender.getTag() == 111) {
        scenNum2 = 4;
    }else if (sender.getTag() == 112){
        scenNum2 = 5;
    }else if (sender.getTag() == 113){
        scenNum2 = 3;
    }else if (sender.getTag() == 114){
        scenNum2 = 1;
    }else if (sender.getTag() == 115){
        scenNum2 = 6;
    }else if (sender.getTag() == 116){
        scenNum2 = 2;
    }
    var  layer = SKDrawShaps.create();
    this.addChild(layer, 100, 999);
//    layer = this.getChildByTag(999);
    layer.initBySeason(SPRING_TAG);
    layer.callDraw(scenNum2);
    
//    this.BigbanUp();

},

BigbanUp:function(){

    

},

mubanUp:function(){

    if (this.getChildByTag(999) != null) {
        this.removeChildByTag(999, true);
    }
    for (var i = 0; i < 6; i++) {
        this.getChildByTag(i+1).runAction(cc.Sequence.create(cc.DelayTime.create(0.5),CCEaseBackOut.create(cc.MoveBy.create(0.5, cc.p(0, 500))),cc.DelayTime.create(1.0),cc.MoveBy.create(0.5, cc.p(0, -500)),null));
    }
    mubanSpt.runAction(cc.Sequence.create(cc.DelayTime.create(0.5),CCEaseBackOut.create(cc.MoveBy.create(0.5, cc.p(0, 500))),cc.DelayTime.create(1.0),cc.MoveBy.create(0.5, cc.p(0, -500)),cc.CallFunc.create( this.openTouchClick,this),null));

},

fengzhengAction:function(sender){

    cc.audioEngine.playEffect(m145click_on_the_kite);
    var  fengzfAry = [];
    for (var i = 0; i < 4; i++) {
       var num;
        if (i < 3) {
            num = i+1;
        }else{
            num = 1;
        }
        var  frame = cc.spriteFrameCache.getSpriteFrame("m145_sz_000"+parseInt(num)+".png");
        fengzfAry.push(frame);
    }
    var  ation = cc.Animation.createWithSpriteFrames(fengzfAry,0.1);
    var  animate = CCAnimate.create(ation);
    sender.runAction(cc.Repeat.create(animate, 2));

},

changeScene:function(){

    if (scenNum == -2) {
        cc.audioEngine.stopAllEffects();
        //CCDirector.sharedDirector().replaceScene(thisFour.scene());
    }else if (scenNum == -3){
        cc.audioEngine.stopAllEffects();
        //CCDirector.sharedDirector().replaceScene(thisThree.scene());
    }else if (scenNum == -4){
        cc.audioEngine.stopAllEffects();
        //CCDirector.sharedDirector().replaceScene(thisTwo.scene());
    }

},

openTouchClick:function(){

    touChClick = true;

},

boatSOund:function(){

    cc.audioEngine.playEffect(m145boat_swimming);

},

kiteSOund:function(){

    cc.audioEngine.playEffect(m145click_on_the_kite);

},

spiderSound:function(){

    cc.audioEngine.playEffect(m145spider_action);

},

ccTouchBegan:function(pTouch, pEvent){

   var location = this.convertTouchToNodeSpace(pTouch);
    for (var i = 0; i < chooseAry.length; i++) {
        var  choose = chooseAry[i];
        if (cc.rectContainsPoint(choose.getBoundingBox(),location) && scenNum == 0 && choose.getTag() != -1) {
            for (var j = 0; j < 3; j++) {
                this.getChildByTag(-1*(j +11)).runAction(cc.RotateTo.create(0.2, 45+(j+1)*90+i*90));
            }
            this.setTouchEnabled(false);
            scenNum = choose.getTag();
            this.runAction(cc.Sequence.create(cc.DelayTime.create(0.2),cc.CallFunc.create( this.changeScene,this),null));
//            return true;
        }
    }
    
    if (cc.rectContainsPoint(this.getChildByTag(9).getBoundingBox(),location) && this.getChildByTag(9).numberOfRunningActions() == 0 ) {
        this.getChildByTag(9).runAction(cc.RepeatForever.create(cc.Sequence.create(cc.DelayTime.create(2.0),cc.MoveBy.create(0.2, cc.p(0, -70)),cc.DelayTime.create(8),cc.MoveBy.create(0.2, cc.p(0, 70)),null)));
    }
    
    if (cc.rectContainsPoint(this.getChildByTag(7).getBoundingBox(),location) && this.getChildByTag(7).numberOfRunningActions() == 1 ) {
        cc.audioEngine.playEffect(m145butterfly_fly);
        ccBezierConfig tr0;
        tr0.endPosition=cc.p(1908, 438);
        tr0.controlPoint_1=cc.p(1758, 588);
        tr0.controlPoint_2=cc.p(1908, 438);
        ccBezierConfig tr1;
        tr1.endPosition=cc.p(1908, 738);
        tr1.controlPoint_1=cc.p(2058, 588);
        tr1.controlPoint_2=cc.p(1908, 738);
        
        this.getChildByTag(7).runAction(cc.RepeatForever.create(cc.Sequence.create(cc.Spawn.create(cc.BezierTo.create(1.0, tr1),cc.RotateBy.create(1.0, -180),null),cc.DelayTime.create(2.0),cc.Spawn.create(cc.BezierTo.create(1.0, tr0),cc.RotateBy.create(1.0, -180),null),null)));
    }
    
    if (cc.rectContainsPoint(this.getChildByTag(8).getBoundingBox(),location) && this.getChildByTag(8).numberOfRunningActions() == 0 ) {
        cc.audioEngine.playEffect(m14rog_jump);
        this.getChildByTag(8).runAction(cc.RepeatForever.create(cc.Sequence.create(CCFadeIn.create(0.2),cc.DelayTime.create(2),cc.CallFunc.create( this.qingwaChange,this),cc.MoveTo.create(0.2, cc.p(1713.5, 310.2)),cc.MoveTo.create(0.2, cc.p(1778.2,211.0 )),cc.CallFunc.create( this.qingwaChangeBack,this),cc.DelayTime.create(2.0),CCFadeOut.create(0.2),cc.MoveTo.create(0, cc.p(1596.3, 267.2)),cc.DelayTime.create(0.1),null)));
    }
    
    if (touChClick) {
        for (var i = 0; i < touChSptAry.length; i++) {
            var  touSpt = touChSptAry[i];
            if (cc.rectContainsPoint(touSpt.getBoundingBox(),location)) {
                touChClick = false;
                if (touSpt.getTag() < 100) {
                    this.getChildByTag(touSpt.getTag() - 10).setScale(1);
                    touSpt.setTag(touSpt.getTag()+100);
                    if (touSpt.getTag() == 111 || touSpt.getTag() == 112) {
                        touSpt.runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.CallFuncN.create(this, callfuncN_selector(this.BigbanDown)),null));
                    }
                    else if (touSpt.getTag() == 113) {
                        touSpt.runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.CallFunc.create( this.boatSOund,this),CCEaseBackOut.create(cc.MoveBy.create(1.0, cc.p(-500,0))),cc.DelayTime.create(0.3),cc.CallFunc.create( this.boatSOund,this),CCEaseBackOut.create(cc.MoveBy.create(1.0, cc.p(500,0))),cc.CallFuncN.create(this, callfuncN_selector(this.BigbanDown)),null));
                    }
                    else if (touSpt.getTag() == 114){
                        touSpt.runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.CallFuncN.create(this, callfuncN_selector(this.fengzhengAction)),cc.DelayTime.create(0.8),cc.CallFuncN.create(this, callfuncN_selector(this.BigbanDown)),null));
                    }
                    else if (touSpt.getTag() == 115){
                        this.getChildByTag(25).runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.MoveBy.create(0.2, cc.p(0, 100)),cc.MoveBy.create(0.2, cc.p(0, -100)),cc.MoveBy.create(0.2, cc.p(0, 100)),cc.MoveBy.create(0.2, cc.p(0, -100)),null));
                        touSpt.runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.DelayTime.create(0.8),cc.CallFuncN.create(this, callfuncN_selector(this.BigbanDown)),null));
                    }
                    else if (touSpt.getTag() == 116){
                        this.getChildByTag(26).runAction(cc.Sequence.create(cc.DelayTime.create(1.2),CCFadeIn.create(0.2),cc.DelayTime.create(0.4),CCFadeOut.create(0.2),CCFadeIn.create(0.2),cc.DelayTime.create(0.4),CCFadeOut.create(0.2),null));
                        touSpt.runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.DelayTime.create(1.6),cc.CallFuncN.create(this, callfuncN_selector(this.BigbanDown)),null));
                    }
                }else{
                    if (touSpt.getTag() == 111 || touSpt.getTag() == 112) {
                        touSpt.runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.CallFunc.create( this.mubanUp,this),null));
                    }
                    else if (touSpt.getTag() == 113) {
                        touSpt.runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.CallFunc.create( this.boatSOund,this),CCEaseBackOut.create(cc.MoveBy.create(0.5, cc.p(-500,0))),cc.DelayTime.create(0.3),cc.CallFunc.create( this.boatSOund,this),CCEaseBackOut.create(cc.MoveBy.create(0.5, cc.p(500,0))),cc.CallFunc.create( this.mubanUp,this),null));
                    }
                    else if (touSpt.getTag() == 114){
                        touSpt.runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.CallFuncN.create(this, callfuncN_selector(this.fengzhengAction)),cc.DelayTime.create(0.8),cc.CallFunc.create( this.mubanUp,this),null));
                    }
                    else if (touSpt.getTag() == 115){
                        this.getChildByTag(25).runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.CallFunc.create( this.spiderSound,this),cc.MoveBy.create(0.2, cc.p(0, 100)),cc.MoveBy.create(0.2, cc.p(0, -100)),cc.MoveBy.create(0.2, cc.p(0, 100)),cc.MoveBy.create(0.2, cc.p(0, -100)),null));
                        touSpt.runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.DelayTime.create(0.8),cc.CallFunc.create( this.mubanUp,this),null));
                    }
                    else if (touSpt.getTag() == 116){
                        this.getChildByTag(26).runAction(cc.Sequence.create(cc.DelayTime.create(1.2),CCFadeIn.create(0.2),cc.DelayTime.create(0.4),CCFadeOut.create(0.2),CCFadeIn.create(0.2),cc.DelayTime.create(0.4),CCFadeOut.create(0.2),null));
                        touSpt.runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.DelayTime.create(1.6),cc.CallFunc.create( this.mubanUp,this),null));
                    }
                }

                var  xuXian = cc.Sprite.create('#'+"m145_xian3_000"+parseInt(touSpt.getTag()-110)+".png");
                if (touSpt.getTag() == 111) {
                    xuXian.setPosition(touSpt.getPosition());
                    xuXian.setScale(2);
                }else if (touSpt.getTag() == 112){
                    xuXian.setPosition(touSpt.getPosition());
                    xuXian.setScale(2);
                }else if (touSpt.getTag() == 113){
                    xuXian.setPosition(cc.p(963.8, 293));
//                    xuXian.setScale(0.45);
                }else if (touSpt.getTag() == 114){
                    xuXian.setPosition(cc.p(1188.3, 1099.4));
//                    xuXian.setScale(0.45);
                }else if (touSpt.getTag() == 115){
                    xuXian.setPosition(cc.p(192.5, 1019.1));
//                    xuXian.setScale(0.45);
                }else if (touSpt.getTag() == 116){
                    xuXian.setPosition(touSpt.getPosition());
//                    xuXian.setScale(0.27);
                    cc.audioEngine.playEffect(m145bear_appear);
                }
                xuXian.setColor(ccc3(0, 0, 0));
                this.addChild(xuXian, 1);
                xuXian.runAction(cc.Sequence.create(cc.Repeat.create(cc.Sequence.create(CCShow.create(),cc.DelayTime.create(0.2),cc.Hide.create(),cc.DelayTime.create(0.2),null), 3),cc.CallFuncN.create(this, callfuncN_selector(this.removeFormP)),null));

            }
        }
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

}
})
NYGame522Scene.scene=function(){
    var  layer = newthis.NYGame522Scene();
    var  scene = cc.Scene.create();
    scene.addChild(layer);
    return scene;

}