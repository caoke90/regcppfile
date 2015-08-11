

//
//  NYGame522SceneThree.cpp
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

var NYGame522SceneThree=cc.Layer.extend({
NYGame522SceneThree:function(){


    chooseAry=null;
    touChSptAry=null;
    touChSptAry = null;
    chooseAry = null;
    cc.spriteFrameCache.removeSpriteFramesFromFile(M145PubImage);
    cc.spriteFrameCache.removeSpriteFramesFromFile(M145Image3_1);
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
    wangClick = true;
    shuClick = true;
    
    scenNum = 0;
    tuxingNum = 0;
    scne = 0;
    
    cc.spriteFrameCache.addSpriteFrames(M145PubImage);
    cc.spriteFrameCache.addSpriteFrames(M145Image3_1);
    
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
        hui.setRotation(45+90*(i-2));
        hui.setTag(-1*(i+10));
        hui.setScale(1.5);
        this.addChild(hui,1);
    }

    var  bg = cc.Sprite.create(m145_au_bg);
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
    
    var  tizhi = cc.Sprite.create("#m145_au_tizi.png");
    tizhi.setTag(13);
    tizhi.setPosition(cc.p(1088.0,848.0 ));
    tizhi.cocos2d.CCNode.setScale(3.713,3.651 );
    this.addChild(tizhi);
    touChSptAry.push(tizhi);
    
    var  xian = cc.Sprite.create("#m145_au_zhizhuxian.png");
    xian.setPosition(cc.p(288.0,796.0 ));
    xian.cocos2d.CCNode.setScale(0.765,0.552 );
    this.addChild(xian);
    
    var  zhizhu = cc.Sprite.create("#m145_au_zhizhu.png");
    zhizhu.setPosition(cc.p(284.1, 652.0));
    zhizhu.setTag(25);
    this.addChild(zhizhu);
    
    var  cheSpt = cc.Sprite.create("#m145_au_kache.png");
    cheSpt.setPosition(cc.p(1352.5,697.8 ));
    cheSpt.setTag(12);
    this.addChild(cheSpt);
    touChSptAry.push(cheSpt);
    
    var  mouse = cc.Sprite.create("#m145_au_kache01.png");
    mouse.setPosition(cc.p(1359.9,600.1 ));
    mouse.setTag(22);
    this.addChild(mouse);
    
    var  lan = cc.Sprite.create("#m145_au_ptk0001.png");
    lan.setPosition(cc.p(876.0,380.0 ));
    lan.setTag(51);
    lan.cocos2d.CCNode.setScale(2.863,2.599 );
    this.addChild(lan);
    touChSptAry.push(lan);
    
    var  lan2 = cc.Sprite.create("#m145_au_ptk0002.png");
    lan2.setPosition(cc.p(1072.0,324.0 ));
    lan2.setTag(52);
    lan2.cocos2d.CCNode.setScale(2.659,2.341 );
    this.addChild(lan2);
    touChSptAry.push(lan2);
    
    var  lan3 = cc.Sprite.create("#m145_au_ptk0003.png");
    lan3.setPosition(cc.p(1100.0,616.0 ));
    lan3.setTag(53);
    lan3.cocos2d.CCNode.setScale(2.937,2.561 );
    this.addChild(lan3);
    touChSptAry.push(lan3);
    
    for (var i = 0; i < 6; i++) {
        var  yezhi = cc.Sprite.create("#m145_au_shuye.png");
        if (i == 0) {
            yezhi.setPosition(cc.p(1630.0,1422.0 ));
            yezhi.setScale(3.75);
            yezhi.setRotation(-75);
        }
        else if (i == 1){
            yezhi.setPosition(cc.p(1726.0,1328.0 ));
            yezhi.cocos2d.CCNode.setScale(3.333, 2.52);
            yezhi.setRotation(-90.0);
        }
        else if (i == 2){
            yezhi.setPosition(cc.p(1812.0,1232.0 ));
            yezhi.cocos2d.CCNode.setScale(5.427, 3.879);
            yezhi.setRotation(-60.0);
        }
        else if (i == 3){
            yezhi.setPosition(cc.p(1654.0,1164.0 ));
            yezhi.cocos2d.CCNode.setScale(4.127, 3.231);
            yezhi.setRotation(0.0);
        }
        else if (i == 4){
            yezhi.setPosition(cc.p(1690.0,1056.0 ));
            yezhi.cocos2d.CCNode.setScale(2.902, 2.367);
            yezhi.setRotation(-45.0);
        }
        else if (i == 5){
            yezhi.setPosition(cc.p(1826.0,966.0 ));
            yezhi.cocos2d.CCNode.setScale(2.787, 3.645);
            yezhi.setRotation(-75.0);
        }
        yezhi.setTag(61+i);
        this.addChild(yezhi);
        touChSptAry.push(yezhi);
    }
    
    for (var i = 0; i < 10; i++) {
        var  guozi = cc.Sprite.create("#m145_au_guozi.png");
        if (i == 0) {
           guozi.setPosition(cc.p(324.0,1178.0 ));
        }else if (i == 1){
            guozi.setPosition(cc.p(376.0, 1108.0));
        }else if (i == 2){
            guozi.setPosition(cc.p(444.0, 1196.0));
        }else if (i == 3){
            guozi.setPosition(cc.p(474, 1298.0));
        }else if (i == 4){
            guozi.setPosition(cc.p(542.0, 1206.0));
        }else if (i == 5){
            guozi.setPosition(cc.p(588.0, 1254.0));
        }else if (i == 6){
            guozi.setPosition(cc.p(650.0, 1140.0));
        }else if (i == 7){
            guozi.setPosition(cc.p(706.0, 1184.0));
        }else if (i == 8){
            guozi.setPosition(cc.p(698.0, 1064.0));
        }else if (i == 9){
            guozi.setPosition(cc.p(630.0, 994.0));
        }
        guozi.setTag(71+i);
        this.addChild(guozi);
        
    }
    
    cc.audioEngine.playMusic(m145autumn_music, true);
    
    return true;

},

changeScene:function(){

    if (scenNum == -1) {
        cc.audioEngine.stopAllEffects();
        //CCDirector.sharedDirector().replaceScene(NYGame522Scene.scene());
    }else if (scenNum == -2){
        cc.audioEngine.stopAllEffects();
        //CCDirector.sharedDirector().replaceScene(NYGame522SceneFour.scene());
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
    
    if (tuxingNum == 1) {
        scne = 6;
    }else if (tuxingNum == 2){
        scne = 5;
    }else if (tuxingNum == 3){
        scne = 2;
    }else if (tuxingNum == 4){
        scne = 4;
    }else if (tuxingNum == 5){
        scne = 3;
    }else if (tuxingNum == 6){
        scne = 1;
    }
    var  layer = SKDrawShaps.create();
    this.addChild(layer, 100, 999);
//    layer = this.getChildByTag(999);
    layer.initBySeason(AUTUMN_TAG);
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

mouseAction:function(){

    cc.audioEngine.playEffect(m145mouse_say_hello);
    var  mfAry = [];
    for (var i = 0; i < 9; i++) {
        var  frame = cc.spriteFrameCache.getSpriteFrame("m145_au_kache0"+parseInt(i+1)+".png");
        mfAry.push(frame);
    }
    var  ation = cc.Animation.createWithSpriteFrames(mfAry,0.2);
    var  animate = CCAnimate.create(ation);
    this.getChildByTag(22).runAction(animate);

},

basketSound:function(){

    cc.audioEngine.playEffect(m145grape_basket_shaking);

},

spiderSOund:function(){

    cc.audioEngine.playEffect(m145spider_action);

},

ccTouchBegan:function(pTouch, pEvent){

   var location = this.convertTouchToNodeSpace(pTouch);
    for (var i = 0; i < chooseAry.length; i++) {
        var  choose = chooseAry[i];
        if (cc.rectContainsPoint(choose.getBoundingBox(),location) && scenNum == 0 && choose.getTag() != -3) {
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
            
            if ((cc.rectContainsPoint(touSpt.getBoundingBox(),location) && ((cc.rectContainsPoint(touSpt.getTag() == 12|| touSpt.getTag() == 112)&& location.x >= 1244 && location.y < 770)) || (touSpt.getBoundingBox(),location) && (touSpt.getTag() != 12 && touSpt.getTag() != 112))) {
                touChClick = false;
                
                if (touSpt.getTag() < 100) {
                    if (touSpt.getTag() < 50) {
                        tuxingNum = touSpt.getTag() - 10;
                        this.getChildByTag(touSpt.getTag() - 10).setScale(1);
                        if (touSpt.getTag() == 12) {
                            touSpt.runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.CallFunc.create( this.mouseAction,this),cc.DelayTime.create(2.0),cc.CallFuncN.create(this, callfuncN_selector(this.BigbanDown)),null));
                        }
                        if (touSpt.getTag() == 13) {
                            touSpt.runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.CallFuncN.create(this, callfuncN_selector(this.BigbanDown)),null));
                        }
                    }
                    else if (touSpt.getTag() > 50 && touSpt.getTag() < 60){
                        this.getChildByTag(1).setScale(1);
                        tuxingNum = 1;
                        if (touSpt.getTag() == 51) {
                            touSpt.setZOrder(1);
                            touSpt.runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.CallFunc.create( this.basketSound,this),CCEaseBackOut.create(cc.MoveTo.create(0.2, cc.p(994.2,589.4 ))),cc.DelayTime.create(0.5),CCFadeOut.create(0.2),cc.MoveTo.create(0, cc.p(876.0,380.0)),CCFadeIn.create(0.2),cc.DelayTime.create(0.1),cc.CallFuncN.create(this, callfuncN_selector(this.BigbanDown)),null));
                        }else if (touSpt.getTag() == 52){
                            touSpt.setZOrder(1);
                            touSpt.runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.CallFunc.create( this.basketSound,this),CCEaseBackOut.create(cc.MoveTo.create(0.2, cc.p(994.2,589.4 ))),cc.DelayTime.create(0.5),CCFadeOut.create(0.2),cc.MoveTo.create(0, cc.p(1072.0,324.0)),CCFadeIn.create(0.2),cc.DelayTime.create(0.1),cc.CallFuncN.create(this, callfuncN_selector(this.BigbanDown)),null));
                        }else if (touSpt.getTag() == 53){
                            
                            touSpt.runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.CallFunc.create( this.basketSound,this),cc.RotateTo.create(0.2, 5),cc.RotateTo.create(0.2, 0),cc.RotateTo.create(0.2, 5),cc.RotateTo.create(0.2, 0),cc.RotateTo.create(0.2, 5),cc.RotateTo.create(0.2, 0),cc.DelayTime.create(0.1),cc.CallFuncN.create(this, callfuncN_selector(this.BigbanDown)),null));
                        }
                        
                    }
                    else if (touSpt.getTag() > 60 && touSpt.getTag() < 70){
                        this.getChildByTag(4).setScale(1);
                        tuxingNum = 4;
                        touSpt.runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.RotateBy.create(0.2, 5),cc.RotateBy.create(0.2, -5),cc.MoveBy.create(0.5, cc.p(0,-500)),CCFadeOut.create(0.2),cc.CallFuncN.create(this, callfuncN_selector(this.BigbanDown)),cc.DelayTime.create(0.2),cc.MoveBy.create(0, cc.p(0, 500)),CCFadeIn.create(0.2),null));
                    }
                    touSpt.setTag(touSpt.getTag()+100);


                }else{
                    if (touSpt.getTag() == 151) {
                        touSpt.setZOrder(1);
                        touSpt.runAction(cc.Sequence.create(cc.DelayTime.create(1.2),CCEaseBackOut.create(cc.MoveTo.create(0.2, cc.p(994.2,589.4 ))),cc.DelayTime.create(0.5),CCFadeOut.create(0.2),cc.MoveTo.create(0, cc.p(876.0,380.0)),CCFadeIn.create(0.2),cc.DelayTime.create(0.1),cc.CallFunc.create( this.mubanUp,this),null));
                    }else if (touSpt.getTag() == 152){
                        touSpt.setZOrder(1);
                        touSpt.runAction(cc.Sequence.create(cc.DelayTime.create(1.2),CCEaseBackOut.create(cc.MoveTo.create(0.2, cc.p(994.2,589.4 ))),cc.DelayTime.create(0.5),CCFadeOut.create(0.2),cc.MoveTo.create(0, cc.p(1072.0,324.0)),CCFadeIn.create(0.2),cc.DelayTime.create(0.1),cc.CallFunc.create( this.mubanUp,this),null));
                    }else if (touSpt.getTag() == 153){
                        
                        touSpt.runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.RotateTo.create(0.2, 5),cc.RotateTo.create(0.2, 0),cc.RotateTo.create(0.2, 5),cc.RotateTo.create(0.2, 0),cc.RotateTo.create(0.2, 5),cc.RotateTo.create(0.2, 0),cc.DelayTime.create(0.1),cc.CallFunc.create( this.mubanUp,this),null));
                    }
                    if (touSpt.getTag() == 112) {
                        touSpt.runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.CallFunc.create( this.mouseAction,this),cc.DelayTime.create(2.0),cc.CallFunc.create( this.mubanUp,this),null));
                    }
                    if (touSpt.getTag() > 160 && touSpt.getTag() < 170){
                        touSpt.runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.RotateBy.create(0.2, 5),cc.RotateBy.create(0.2, -5),cc.MoveBy.create(0.5, cc.p(0,-500)),CCFadeOut.create(0.2),cc.CallFunc.create( this.mubanUp,this),cc.DelayTime.create(0.2),cc.MoveBy.create(0, cc.p(0, 500)),CCFadeIn.create(0.2),null));
                    }
                    
                    
                }
                
                if (touSpt.getTag() < 150) {
                    tuxingNum = touSpt.getTag() - 110;
                    
                }
                else if (touSpt.getTag() > 150 && touSpt.getTag() < 160){
                    
                    tuxingNum = 1;
                }
                else if (touSpt.getTag() > 160 && touSpt.getTag() < 170){
                    
                    tuxingNum = 4;
                    cc.audioEngine.playEffect(m145diamond_leaf_fluttering);
                }
                
                
                    var  xuXian = cc.Sprite.create('#'+"m145_au_bx000"+parseInt(tuxingNum)+".png");
                    if (tuxingNum == 1){
                        if (touSpt .getTag() == 151) {
                            xuXian.setPosition(cc.p(899.4, 318.2));
                            
                        }else if (touSpt .getTag() == 152){
                            xuXian.setPosition(cc.p(1098.5, 264.3));
                            xuXian.setScale(0.9);
                        }else if (touSpt .getTag() == 153){
                            xuXian.setPosition(cc.p(1088.0, 554.0));
                        }

                    }
                    else if (tuxingNum == 2){
                        xuXian.setPosition(cc.p(1389.9, 602.0));
                        
                    }else if (tuxingNum == 3){
                        xuXian.setPosition(cc.p(1092.1, 843.9));
                        
                    }else if (tuxingNum == 4){
                        if (touSpt .getTag() == 161) {
                            xuXian.setPosition(cc.p(1619.2, 1402.0));
                            xuXian.setRotation(-75.0);
//                            xuXian.setScale(0);
                        }else if (touSpt .getTag() == 162){
                            xuXian.setPosition(cc.p(1718.7, 1302.5));
                            xuXian.setRotation(-90);
                            xuXian.setScale(0.6);
                        }else if (touSpt .getTag() == 163){
                            xuXian.setPosition(cc.p(1783.0, 1209.2));
                            xuXian.setRotation(-60);
//                            xuXian.setScale(0);
                        }else if (touSpt .getTag() == 164){
                            xuXian.setPosition(cc.p(1627.4, 1178.1));
//                            xuXian.setRotation(0);
//                            xuXian.setScale(0);
                        }else if (touSpt .getTag() == 165){
                            xuXian.setPosition(cc.p(1668.9, 1047.4));
                            xuXian.setRotation(-45);
                            xuXian.setScale(0.6);
                        }else if (touSpt .getTag() == 166){
                            xuXian.setPosition(cc.p(1807.9, 952.1));
                            xuXian.setRotation(-62.8);
                            xuXian.setScale(0.8);
                        }
                        
                    }
                    xuXian.setColor(ccc3(0, 0, 0));
                    this.addChild(xuXian, 1);
                    xuXian.runAction(cc.Sequence.create(cc.Repeat.create(cc.Sequence.create(CCShow.create(),cc.DelayTime.create(0.2),cc.Hide.create(),cc.DelayTime.create(0.2),null), 3),cc.CallFuncN.create(this, callfuncN_selector(this.removeFormP)),null));
                
                
                return true;
            }
        }
        
        if (CCRect(143.1, 711.2, 250, 250).containsPoint(location)) {
            touChClick = false;
            
            if (wangClick) {
                wangClick = false;
                tuxingNum = 5;
                this.getChildByTag(5).setScale(1);
                this.getChildByTag(25).runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.CallFunc.create( this.spiderSOund,this),CCEaseBackOut.create(cc.MoveBy.create(0.2, cc.p(0, 50))),cc.DelayTime.create(0.1),CCEaseBackOut.create(cc.MoveBy.create(0.2, cc.p(0, -50))),cc.CallFuncN.create(this, callfuncN_selector(this.BigbanDown)),null));
            }else{
                this.getChildByTag(25).runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.CallFunc.create( this.spiderSOund,this),CCEaseBackOut.create(cc.MoveBy.create(0.2, cc.p(0, 50))),cc.DelayTime.create(0.1),CCEaseBackOut.create(cc.MoveBy.create(0.2, cc.p(0, -50))),cc.CallFunc.create( this.mubanUp,this),null));
            }
            
            tuxingNum = 5;
            var  xuXian = cc.Sprite.create('#'+"m145_au_bx000"+parseInt(tuxingNum)+".png");
            xuXian.setPosition(cc.p(278.0, 866));
            this.addChild(xuXian, 1);
            xuXian.setColor(ccc3(0, 0, 0));
            xuXian.runAction(cc.Sequence.create(cc.Repeat.create(cc.Sequence.create(CCShow.create(),cc.DelayTime.create(0.2),cc.Hide.create(),cc.DelayTime.create(0.2),null), 3),cc.CallFuncN.create(this, callfuncN_selector(this.removeFormP)),null));
           
            
        }
        if (CCRect(342.1, 966.3, 350, 350).containsPoint(location)) {
            touChClick = false;
            cc.audioEngine.playEffect(m145click_on_the_tree);
            if (shuClick) {
                 shuClick = false;
                tuxingNum = 6;
                this.getChildByTag(6).setScale(1);
                this.getChildByTag(71).runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.DelayTime.create(2.1),cc.CallFuncN.create(this, callfuncN_selector(this.BigbanDown)),null));
            }else{
                this.getChildByTag(71).runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.DelayTime.create(2.1),cc.CallFunc.create( this.mubanUp,this),null));
            }
            
            for (var i = 0; i < 10; i++) {
               var random = 0|Math.random()*10;
               var time = random/10;
                this.getChildByTag(71+i).runAction(cc.Sequence.create(cc.DelayTime.create(time),cc.MoveBy.create(0.5, cc.p(0, -500)),CCFadeOut.create(0.2),cc.DelayTime.create(0.2),cc.MoveBy.create(0, cc.p(0, 500)),CCFadeIn.create(0.2),null));
            }
            
            tuxingNum = 6;
            var  xuXian = cc.Sprite.create('#'+"m145_au_bx000"+parseInt(tuxingNum)+".png");
            xuXian.setPosition(cc.p(522.0, 1140.0));
            this.addChild(xuXian, 1);
            xuXian.setColor(ccc3(0, 0, 0));
            xuXian.runAction(cc.Sequence.create(cc.Repeat.create(cc.Sequence.create(CCShow.create(),cc.DelayTime.create(0.2),cc.Hide.create(),cc.DelayTime.create(0.2),null), 3),cc.CallFuncN.create(this, callfuncN_selector(this.removeFormP)),null));
            
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

//    tuxingNum = 0;

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