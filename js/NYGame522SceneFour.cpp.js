
//
//  NYGame522SceneFour.cpp
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

var NYGame522SceneFour=cc.Layer.extend({
NYGame522SceneFour:function(){


    chooseAry=null;
    touChSptAry=null;
    touChSptAry = null;
    chooseAry = null;
    cc.spriteFrameCache.removeSpriteFramesFromFile(M145PubImage);
    cc.spriteFrameCache.removeSpriteFramesFromFile(M145Image4_1);
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
    
    scenNum = 0;
    scne = 0;
    
    cc.spriteFrameCache.addSpriteFrames(M145PubImage);
    cc.spriteFrameCache.addSpriteFrames(M145Image4_1);
    
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
        hui.setRotation(45+90*(i+1));
        hui.setTag(-1*(i+10));
        hui.setScale(1.5);
        this.addChild(hui,1);
    }

    var  bg = cc.Sprite.create(m145_bj_0001);
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
    
    var  door = cc.Sprite.create("#m145_cx_0001.png");
    door.setPosition(cc.p(1063.4,705.8 ));
    door.setTag(12);
    this.addChild(door);
    touChSptAry.push(door);
    
    var  tixing = cc.Sprite.create("#m145_tixing_0001.png");
    tixing.setPosition(cc.p(312.0,727.0 ));
    tixing.setTag(13);
    this.addChild(tixing);
    touChSptAry.push(tixing);
    
    var  daxiang = cc.Sprite.create("#m145_dx_0001.png");
    daxiang.setPosition(cc.p(214.8,922.7 ));
    daxiang.setTag(23);
    this.addChild(daxiang);
    
    var  xuhua = cc.Sprite.create("#m145_lbx_0001.png");
    xuhua.setPosition(cc.p(1025.7,1306.3 ));
    xuhua.setTag(16);
    this.addChild(xuhua);
    touChSptAry.push(xuhua);
    
    var  huaban = cc.Sprite.create("#m145_lingxing_0001.png");
    huaban.setPosition(cc.p(919.9,302.3 ));
    huaban.setTag(14);
    this.addChild(huaban);
    touChSptAry.push(huaban);
    
    for (var i = 0; i < 5; i++) {
        var  tangguo = cc.Sprite.create('#'+"m145_tg_0001000"+parseInt(i+1)+".png");
        if ( i == 0) {
            tangguo.setPosition(cc.p(1970.2,540.8 ));
        }else if (i == 1){
            tangguo.setPosition(cc.p(1592.0,584.0 ));
        }else if (i == 2){
            tangguo.setPosition(cc.p(1884.0,673.0 ));
        }else if (i == 3){
            tangguo.setPosition(cc.p(1662.4,509.8 ));
        }else if (i == 4){
            tangguo.setPosition(cc.p(1824.4,528.0 ));
        }
        tangguo.setTag(51+i);
        tangguo.setOpacity(0);
        this.addChild(tangguo);
    }
    
    var  shugan = cc.Sprite.create("#m145_wbx_0002.png");
    shugan.setPosition(cc.p(1771.8,685.1 ));
    this.addChild(shugan);
    
    var  shuzhi = cc.Sprite.create("#m145_wbx_0001.png");
    shuzhi.setPosition(cc.p(1773.6,976.9 ));
    shuzhi.setTag(15);
    this.addChild(shuzhi);
    touChSptAry.push(shuzhi);
    
    var  yan = cc.Sprite.create("#m145_yan_0001.png");
    yan.setPosition(cc.p(960.7,1205.0 ));
    this.addChild(yan);
    var  yanfAry = [];
    for (var i = 0; i < 6; i++) {
        var  frame = cc.spriteFrameCache.getSpriteFrame("m145_yan_000"+parseInt(i+1)+".png");
        yanfAry.push(frame);
    }
    var  yation = cc.Animation.createWithSpriteFrames(yanfAry,0.2);
    var  ymate = CCAnimate.create(yation);
    yan.runAction(cc.RepeatForever.create(ymate));
    
    var  chuanghu = cc.Sprite.create("#m145_zfx_0001.png");
    chuanghu.setPosition(cc.p(1222.6,737.1 ));
    chuanghu.setTag(11);
    this.addChild(chuanghu);
    touChSptAry.push(chuanghu);
    
    cc.audioEngine.playMusic(s74backgroundmusic, true);
    
    return true;

},

changeScene:function(){

    if (scenNum == -1) {
        cc.audioEngine.stopAllEffects();
        //CCDirector.sharedDirector().replaceScene(NYGame522Scene.scene());
    }else if (scenNum == -3){
        cc.audioEngine.stopAllEffects();
        //CCDirector.sharedDirector().replaceScene(NYGame522SceneThree.scene());
    }else if (scenNum == -4){
        cc.audioEngine.stopAllEffects();
        //CCDirector.sharedDirector().replaceScene(NYGame522SceneTwo.scene());
    }

},

openTouchClick:function(){

    touChClick = true;

},

BigbanDown:function(sender){

//    this.BigbanUp();
    if (scne == 0) {
        cc.audioEngine.playEffect(duobianxingjichu_duona2);
    }
    if (sender.getTag() == 111) {
        scne = 3;
    }else if (sender.getTag() == 112){
        scne = 6;
    }else if (sender.getTag() == 113){
        scne = 1;
    }else if (sender.getTag() == 114){
        scne = 2;
    }else if (sender.getTag() == 115){
        scne = 5;
    }else if (sender.getTag() == 116){
        scne = 4;
    }
    
    var  layer = SKDrawShaps.create();
    this.addChild(layer, 100, 999);
//    layer = this.getChildByTag(999);
    layer.initBySeason(WINTTER_TAG);
    layer.callDraw(scne);

},

BigbanUp:function(){

    this.mubanUp();

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

daxiangAction:function(){

    var  dafAry = [];
    for (var i = 0; i < 4; i++) {
        var  frame = cc.spriteFrameCache.getSpriteFrame("m145_dx_000"+parseInt(i+1)+".png");
        dafAry.push(frame);
    }
    var  ation = cc.Animation.createWithSpriteFrames(dafAry,0.2);
    var  amate = CCAnimate.create(ation);
    this.getChildByTag(23).runAction(cc.Sequence.create(cc.Spawn.create(cc.Sequence.create(cc.MoveTo.create(0.2, cc.p(301.9, 891.6)),cc.RotateTo.create(0.2, 45),cc.MoveTo.create(0.4, cc.p(627.4,586.8)),null),amate,null),cc.Spawn.create(cc.Sequence.create(cc.Spawn.create(cc.MoveTo.create(0.2, cc.p(745.6, 557.8)),cc.RotateTo.create(0.2, 0),null),cc.MoveTo.create(0.2, cc.p(880.4,564.0)),CCFadeOut.create(0.2),null),amate,null),cc.DelayTime.create(0.5),cc.MoveTo.create(0, cc.p(214.8,922.7)),CCFadeIn.create(0.2),null));

},

treeSound:function(){

    cc.audioEngine.playEffect(m145click_on_the_tree);

},

ccTouchBegan:function(pTouch, pEvent){

   var location = this.convertTouchToNodeSpace(pTouch);
    for (var i = 0; i < chooseAry.length; i++) {
        var  choose = chooseAry[i];
        if (cc.rectContainsPoint(choose.getBoundingBox(),location) && scenNum == 0 && choose.getTag() != -2) {
            for (var j = 0; j < 3; j++) {
                this.getChildByTag(-1*(j +11)).runAction(cc.RotateTo.create(0.2, 45+(j+1)*90+i*90));
            }
            this.setTouchEnabled(false);
            scenNum = choose.getTag();
            this.runAction(cc.Sequence.create(cc.DelayTime.create(0.2),cc.CallFunc.create( this.changeScene,this),null));
            //            return true;
        }
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
                    else if (touSpt.getTag() == 113){
                        touSpt.runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.CallFunc.create( this.daxiangAction,this),cc.DelayTime.create(2.1),cc.CallFuncN.create(this, callfuncN_selector(this.BigbanDown)),null));
                    }
                    else if (touSpt.getTag() == 114){
                        touSpt.runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.MoveTo.create(0.5, cc.p(401.5,341.7 )),cc.DelayTime.create(0.5),cc.MoveTo.create(0.5, cc.p(919.9,302.3 )),cc.CallFuncN.create(this, callfuncN_selector(this.BigbanDown)),null));
                    }
                    else if (touSpt.getTag() == 115){
                        for (var i = 0; i < 5; i++) {
                            this.getChildByTag(51+i).runAction(cc.Sequence.create(cc.DelayTime.create(3.0),CCFadeIn.create(0.2),cc.RotateTo.create(0.2, 5),cc.RotateTo.create(0.2, 0),cc.RotateTo.create(0.2, -5),cc.RotateTo.create(0.2, 0),CCFadeOut.create(0.2),null));
                        }
                        touSpt.runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.CallFunc.create( this.treeSound,this),cc.RotateTo.create(0.2, 5),cc.RotateTo.create(0.2, 0),cc.RotateTo.create(0.2, -5),cc.RotateTo.create(0.2, 0),cc.RotateTo.create(0.2, 5),cc.RotateTo.create(0.2, 0),cc.RotateTo.create(0.2, -5),cc.RotateTo.create(0.2, 0),cc.DelayTime.create(1.0),cc.CallFuncN.create(this, callfuncN_selector(this.BigbanDown)),null));
                    }
                    else if (touSpt.getTag() == 116){
                        touSpt.runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.ScaleTo.create(0.2, 1.2),cc.ScaleTo.create(0.1, 1.0),cc.ScaleTo.create(0.2, 1.2),cc.ScaleTo.create(0.1, 1.0),cc.CallFuncN.create(this, callfuncN_selector(this.BigbanDown)),null));
                    }
                }else{
                    if (touSpt.getTag() == 111 || touSpt.getTag() == 112) {
                        touSpt.runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.CallFunc.create( this.mubanUp,this),null));
                    }
                    else if (touSpt.getTag() == 113){
                        touSpt.runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.CallFunc.create( this.daxiangAction,this),cc.DelayTime.create(2.1),cc.CallFunc.create( this.mubanUp,this),null));
                    }
                    else if (touSpt.getTag() == 114){
                        touSpt.runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.MoveTo.create(0.5, cc.p(401.5,341.7 )),cc.DelayTime.create(0.5),cc.MoveTo.create(0.5, cc.p(919.9,302.3 )),cc.CallFunc.create( this.mubanUp,this),null));
                    }
                    else if (touSpt.getTag() == 115){
                        for (var i = 0; i < 5; i++) {
                            this.getChildByTag(51+i).runAction(cc.Sequence.create(cc.DelayTime.create(3.0),CCFadeIn.create(0.2),cc.RotateTo.create(0.2, 5),cc.RotateTo.create(0.2, 0),cc.RotateTo.create(0.2, -5),cc.RotateTo.create(0.2, 0),CCFadeOut.create(0.2),null));
                        }
                        touSpt.runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.RotateTo.create(0.2, 5),cc.RotateTo.create(0.2, 0),cc.RotateTo.create(0.2, -5),cc.RotateTo.create(0.2, 0),cc.RotateTo.create(0.2, 5),cc.RotateTo.create(0.2, 0),cc.RotateTo.create(0.2, -5),cc.RotateTo.create(0.2, 0),cc.CallFunc.create( this.mubanUp,this),null));
                    }
                    else if (touSpt.getTag() == 116){
                        touSpt.runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.ScaleTo.create(0.2, 1.2),cc.ScaleTo.create(0.1, 1.0),cc.ScaleTo.create(0.2, 1.2),cc.ScaleTo.create(0.1, 1.0),cc.CallFunc.create( this.mubanUp,this),null));
                    }
                }
                
                var  xuXian = cc.Sprite.create('#'+"m145_xian4_000"+parseInt(touSpt.getTag()-110)+".png");
                if (touSpt.getTag() == 111) {
                    xuXian.setPosition(touSpt.getPosition());
//                    xuXian.setScale(0.15);
                }else if (touSpt.getTag() == 112){
                    xuXian.setPosition(touSpt.getPosition());
//                    xuXian.setScale(0.2);
                }else if (touSpt.getTag() == 113){
                    xuXian.setPosition(cc.p(309.9, 729.4));
//                    xuXian.setScale(0.46);
                }else if (touSpt.getTag() == 114){
                    xuXian.setPosition(cc.p(922.7, 355.6));
//                    xuXian.setScale(0.3);
                }else if (touSpt.getTag() == 115){
                    xuXian.setPosition(cc.p(1774.6, 977.9));
//                    xuXian.setScale(0.74);
                }else if (touSpt.getTag() == 116){
                    xuXian.setPosition(touSpt.getPosition());
//                    xuXian.setScale(0.17);
                }
                xuXian.setColor(ccc3(0, 0, 0));
                this.addChild(xuXian, 1);
                xuXian.runAction(cc.Sequence.create(cc.Repeat.create(cc.Sequence.create(CCShow.create(),cc.DelayTime.create(0.2),cc.Hide.create(),cc.DelayTime.create(0.2),null), 3),cc.CallFuncN.create(this, callfuncN_selector(this.removeFormP)),null));

                
                return true;
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
registerWithTouchDispatcher:function(){

    //CCDirector.sharedDirector().getTouchDispatcher().addTargetedDelegate(this, 0, false);

},

removeFormP:function(sender){

    sender.removeFromParent(true);

},

onEnter:function(){

    cc.audioEngine.playEffect(duobianxingjichu_duona1); 
    this.onEnter();

},
onExit:function(){

    this.onExit();

},