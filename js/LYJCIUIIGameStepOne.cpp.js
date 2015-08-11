//
//  LYJCIUIIGameStepOne.cpp
//  math_kg
//
//  Created by lili on 13-6-6.
//
//

//#include "LYJCIUIIGameStepOne.h"
//#include "../../pubTools/PersonalApi.h"
//#include "CCBReader/CCBAnimationManager.h"
//#include "LYJCIUIIGame.h"
//#include "LYJCIUIIGameStepTwo.h"

//#include "SimpleAudioEngine.h"


var PTM_RATIO=32

var     BOX_UP_TAG = 2,
    BOX_OPEN_TAG,
    BOX_OPEN_BASHOU_TAG,
    BOX_TISHI,
    WEN_HAO


//using namespace cocos2d;
//using namespace cocos2d.extension;
//using namespace std;

var s_dic=[];

var s_pos=[];

var LYJCIUIIGameStepOne=cc.Layer.extend({
init:function(){

    if ( !SKGameBasicLayer.init() )
    {
        return false;
    }
    iCanSelectArray = [];
    iKnotedSocrsArray = [];
    iKnotedSocrsIndex = 0;
    isBoxOpen = false;
    boxDestion = 0;
    isTouchBashou = false;
    isFirstTeach = true;
    tagForTeach = 0;
    
    s_pos_inited = {};
    
    openbox_movetime = 0;
    playTishiNum = 0;
    isPlaying = 0;
    //打包的图片
    cc.spriteFrameCache.addSpriteFrames(res.choutitishi_plist);

//    SKGameBasicLayer.getLionSpr().setPositionX(1400);
    
    var bg = cc.Sprite.create(res.M36bg_png);
    bg.setPosition(cc.p(512*2, 768));
    this.addChild(bg,1,1);
    //关闭的抽屉
    var boxClosed = cc.Sprite.create(res.M36bg3_png);
    boxClosed.setPosition(cc.p(512*2, 1665.0));
    this.addChild(boxClosed,3,BOX_UP_TAG);
    //抽屉
    var boxOpened = cc.Sprite.create(res.M36bg5_png);
    boxOpened.setPosition(cc.p(512*2,2295.0));
    this.addChild(boxOpened,2,BOX_OPEN_TAG);
    //抽屉把手
    var boxOpenedbashou = cc.Sprite.create(res.dacoutibashou_png);
    boxOpenedbashou.setPosition(cc.p(532*2, 43*2));
    boxOpened.addChild(boxOpenedbashou,2,BOX_OPEN_BASHOU_TAG);
    boxOpenedbashou.setScale(2.5);
    boxOpenedbashou.setOpacity(0);
    
    //提示
    var tishi = cc.Sprite.create("#tishi1.png");
    tishi.setPosition(cc.p(537*2, -20));
    tishi.setOpacity(0);
    tishi.setScale(1.3);
    boxOpened.addChild(tishi,2,BOX_TISHI);
    
    //问号
//    CCMenuItemSprite *wenhao = CCMenuItemSprite.create(cc.Sprite.create("warning_tolearn.png"), cc.Sprite.create("warning_tolearn.png"), this, menu_selector(this.toStepOneTeach));
//    CCMenu *wenhaoMenu = CCMenu.createWithItem(wenhao);
//    wenhaoMenu.setPosition(cc.p(960, 713));
//    this.addChild(wenhaoMenu,500,WEN_HAO);
    
    //初始化所有的袜子
   this.initSocks();
    
    this.runAction(cc.Sequence.create(cc.DelayTime.create(0.3),cc.CallFunc.create( this.initAnimation,this),null));
    
    this.setTouchEnabled(true);
    
    cc.audioEngine.preloadMusic(AUDIO_SCOR_BG_MUSIC);
    return true;


},



exitAnimation:function(){


    //粒子效果
    var emitter = cc.ParticleSystem.create(res.stepover_plist);
    emitter.setAutoRemoveOnFinish(true);
    emitter.setPosition(cc.p(512*2, 384*2));
    this.addChild(emitter, 400);
    
    cc.audioEngine.playEffect(AUDIO_STEP2_CT_MOVEDOWN);
    
    this.runAction(cc.Sequence.create(cc.DelayTime.create(2.7),cc.CallFunc.create( this.boxExitAnimation,this),null));

},

boxExitAnimation:function(){


    this.getChildByTag(BOX_UP_TAG).runAction(cc.Sequence.create(cc.DelayTime.create(0.4),cc.MoveTo.create(1.0, cc.p(512*2,1665.0)),null));

    //关闭的抽屉
    this.getChildByTag(BOX_OPEN_TAG).runAction(cc.Sequence.create(cc.MoveTo.create(0.4, cc.p(512*2, 961*2)),cc.MoveTo.create(1.0, cc.p(512*2,1251*2)),null));

    this.runAction(cc.Sequence.create(cc.DelayTime.create(1.2),cc.CallFunc.create( this.nextStep,this),null));
    SKGameBasicLayer.animationRight();
    return ;


},

nextStep:function(){

//    cc.pScene = CCTransitionCrossFade.create(1.2,SKGameMenu.scene());
//    if (pScene)
//    {
//        //CCDirector.sharedDirector().replaceScene(pScene);
//    }
    //CCDirector.sharedDirector().popScene();

},



LYJCIUIIGameStepOne:function(){

    if(iCanSelectArray){
        iCanSelectArray=null;
    }
    
    if(iKnotedSocrsArray){
        iKnotedSocrsArray=null;
    }

//    if(LYJCIUIIGame.ReleaseMap(s_pos_inited))
//    {
        delete s_pos_inited;
//    }
    cc.spriteFrameCache.removeSpriteFramesFromFile(res.choutitishi_plist);

},

onEnter:function(){

    
   cc.audioEngine.playMusic(AUDIO_SCOR_BG_MUSIC, true);
   this.onEnter();

},

onExit:function(){


    //CCDirector.sharedDirector().getTouchDispatcher().removeDelegate(this);
    this.onExit();

},




//初始化袜子
initSocks:function(){

    //取坐标信息
    var _path = cc.loader.getRes(res.gamesteponeList_plist);
    var  spritesDic = (_path);
    var staidStrP= "pos"+parseInt((Math.random() * 2.0) + 1)+"";
    var staidSpAry = spritesDic[staidStrP];
//    cc.log("saaistrp:%s",staidStrP);
    
   var tag;//袜子tag
   var px;//袜子中心x坐标
   var py;//袜子中心y坐标
   var isFlipX;//是否左右翻转
    var imgStr; //图名字
    for (var i = 0; i < 24; i++) {
        tag =(parseInt(staidSpAry[i])["tag"]);
        px = (parseFloat(staidSpAry[i])["px"]);
        py = (parseFloat(staidSpAry[i])["py"]);
        isFlipX = ((staidSpAry[i])["flipx"]);
        if(tag - 300 < 0)
            imgStr = "m36socr"+parseInt(tag - 200 + 1)+".png";
        else
            imgStr = "m36socr"+parseInt(tag - 300 + 1)+".png";
//        cc.log("imgName:%s",imgStr);
        var imgSprite = cc.Sprite.create('#'+imgStr);
        imgSprite.setTag(tag);
        imgSprite.setPosition(cc.p(px, py+10*2));
        imgSprite.setFlippedX(isFlipX);
        this.getChildByTag(BOX_OPEN_TAG).addChild(imgSprite,100);
        iCanSelectArray.push(imgSprite);
        s_pos_inited[tag]=cc.p(px,py + 10*2);
        
    }
    
    
    

},

//开启5秒计时
showTishi:function(){

    this.schedule(this.execTishi, 10, -1, 1.5);
    

},

//计时器执行
scheduleTishi:function(dt){

   this.execTishi();

},

//箭头的动画
execTishi:function(dt){

    
    if(isBoxOpen){
        this.unschedule(this.execTishi);
        return ;  
    }
    
    var  tishi =  this.getChildByTag(BOX_OPEN_TAG).getChildByTag(BOX_TISHI);
    if (tishi) {
        tishi.setOpacity(254);
        tishi.stopAllActions();
        tishi.runAction(CCShow.create());
        //提示动画
        var tishiAction = PersonalApi.getActionByArray(4, "tishi", false, false, 0.25, 1.5, 2);
        tishi.runAction(cc.Sequence.create(tishiAction,cc.Hide.create(),null));
        
    }

},


firstTich:function(tag){

    
    if(tag - 300 < 0)
    {
        tagForTeach = tag + 100;
    }
    else
    {
        tagForTeach = tag - 100;
    }
    
    //cc.log("seletect tag:%d",tag);
    var  tagspri  =this.getChildByTag(BOX_OPEN_TAG).getChildByTag(tagForTeach);
    
    if(tagspri)
    {
        tagspri.stopAllActions();
        
        var   a1 = cc.RotateTo.create(0.2, 10);
        var   a2 = cc.RotateTo.create(0.2, -10);
        var   action2 = cc.Repeat.create(
                                                     (cc.Sequence.create((a1.copy()), (a2.copy()), null)),3
                                                     );
        tagspri.runAction(action2);
    }
    

},

playJiaoxueEffect:function(){

    cc.audioEngine.playEffect(res.step1_teach_mp3);


},

initAnimation:function(){


    this.getChildByTag(BOX_UP_TAG).runAction(cc.MoveTo.create(1.0, cc.p(512*2,1565)));
    
    this.getChildByTag(BOX_OPEN_TAG).runAction(cc.MoveTo.create(1.0, cc.p(512*2,946*2+120)));
    
    
    this.showTishi();


},

socrInitAnimation:function(){

    var object;
    iCanSelectArray.forEach(function( object){
        var sprite = object;
        
       var px = sprite.getPosition().x;
       var py = sprite.getPosition().y;
       var rotate = 0;
        if(sprite.isFlipX()){
            rotate = 10;
        }else{
            rotate = -10;
        }
        var   a1 = cc.RotateBy.create(0.5, rotate);
        var   a2 = cc.MoveTo.create(0.1, cc.p(px,py - 10));
        sprite.runAction( (cc.Sequence.create((a1.copy()),a2, a1.reverse(), null)));
        
    })
    
    this.runAction(cc.Sequence.create(cc.DelayTime.create(1.5),cc.CallFunc.create( this.playJiaoxueEffect,this),null));
    

},

removeCurrentSprite:function(sprite){

    sprite.removeFromParent(true);
    cc.arrayRemoveObject(iCanSelectArray,sprite);
    //cc.log("iCanSelectArray.count:%d", iCanSelectArray.length);
   this.checkEndGame();

},

checkEndGame:function(){

    if (iCanSelectArray.length <= 0) {
       this.exitAnimation();
        this.unschedule(this.execPlayTishi);
        isBoxOpen = false;
    }

},

addKnotedSocrs:function(sprite){

   var tag = sprite.getTag();
   var px = sprite.getPositionX();
   var py = sprite.getPositionY();
   this.removeCurrentSprite(sprite);
    
    tag = (tag % 100) + 1;
    //cc.log("addKotedSocr Tag:%d ",tag);
    var imgStr = "m36dajie"+parseInt(tag)+".png";
    var imgSprite = cc.Sprite.create('#'+imgStr);
    imgSprite.setTag(tag);
    imgSprite.setPosition(cc.p(px, py));
    this.getChildByTag(BOX_OPEN_TAG).addChild(imgSprite, 100);
    iKnotedSocrsArray.push(imgSprite);

    var  action1 = cc.EaseElasticOut.create((cc.ScaleBy.create(0.6, 0.8)));
    var   action2 = cc.JumpTo.create(0.8, cc.p(px, py), 15, 1);
    imgSprite.runAction(cc.Spawn.create(action1,action2));
    
    cc.audioEngine.playEffect(AUDIO_SCORING);
    
    //粒子效果
    var emitter = cc.ParticleSystem.create(res.complitesocrs_plist);
    emitter.setAutoRemoveOnFinish(true);
    emitter.setPosition(cc.p(px, py));
    this.addChild(emitter, 400);

},

isTouchedSocr:function(tag){


    var object;
    for (var i = 0; i < s_dic.length ; i++){
        object = s_dic[i];
        var spritefromdic = object;
        //如果点到的不是透明区域
        if(spritefromdic)
        {
            //cc.log("from dic tag = %d , spr tag = %d", spritefromdic.getTag(),tag);
            //相同的袜子被选中
            if((tag - spritefromdic.getTag() == 100) || ((tag - spritefromdic.getTag() == -100))  )
            {
                return true;
            }
            
        }
    }

    return false;

},

registerWithTouchDispatcher:function(){

  //CCDirector.sharedDirector().getTouchDispatcher().addStandardDelegate(this, 0);

},

ccTouchesBegan:function(pTouches, pEvent){

    //无操作提示 计数 回复
    playTishiNum  =  0;
    isPlaying = true;
    
   var iter = pTouches.begin();
    if (isBoxOpen) {
        for (; iter != pTouches.end(); iter++)
        {
            
            var  pTouch = iter;
            //cc.log("%d,%2    2",pTouch.getID(),pTouch.getLocation().x,pTouch.getLocation().y);
           var location = this.getChildByTag(BOX_OPEN_TAG).convertTouchToNodeSpace(pTouch);
            var object;
            
            //单击未选择的袜子
            iCanSelectArray.forEach(function( object){
                var sprite = object;
                //如果点到的不是透明区域
                if(cc.rectContainsPoint(sprite.getBoundingBox(),location))
                {
//                    if (LYJCIUIIGame.isHaveAlpha(location, sprite))
//                    {
                        ifthis.isTouchedSocr(sprite.getTag()))
                        {
                            continue;
                        }
                        else
                        {
                            s_dic[parseInt( pTouch.getID())]=sprite;
                            //s_pos[parseInt( pTouch.getID())]=new cc.p(sprite.getPositionX() , sprite.getPositionY());
                           var oldPos = s_pos_inited[sprite.getTag()];
                            s_pos[pTouch.getID()]= oldPos;
                            
                            this.getChildByTag(BOX_OPEN_TAG).reorderChild(sprite, 101);
                            sprite.setScale(1.2);
                            
                            //第一次教学
//                            if (isFirstTeach) {
                               this.firstTich(sprite.getTag());
//                            }
                            
                            break;
                        }
//                    }
                }
                
            })
            
            //单击打结的袜子
            iKnotedSocrsArray.forEach(function( object){
                var sprite = object;
                //如果点到的不是透明区域
                if(sprite){
                    if(cc.rectContainsPoint(sprite.getBoundingBox(),location))
                    {
                        if(LYJCIUIIGame.isHaveAlpha(location,sprite)){
                            sprite.stopAllActions();
                            var   a1 = cc.RotateTo.create(0.2, 10);
                            var   a2 = cc.RotateTo.create(0.2, -10);
                            var   action2 = cc.Repeat.create((cc.Sequence.create((a1.copy()), (a2.copy()), null)), 2);
                            sprite.runAction(action2);
                            break;
                        };
                    }
                }           
            })
            
            
        }
    }
    else
    {
         var  pTouch = iter;
         var  box = this.getChildByTag(BOX_OPEN_TAG);
        var location = box.convertTouchToNodeSpace(pTouch);
         var  bashou = box.getChildByTag(BOX_OPEN_BASHOU_TAG);
        if (bashou && cc.rectContainsPoint(bashou.getBoundingBox(),location)) {
            //cc.log("bashouo....");
           var touchpos = this.convertTouchToNodeSpace(pTouch);
           var boxposY = box.getPositionY();
            boxDestion = fabsf(touchpos.y - boxposY);
            var  sprite = box.getChildByTag(BOX_TISHI);
            if (sprite) {
                sprite.runAction(cc.Hide.create());
            }
            isTouchBashou = true;
            
            cc.audioEngine.playEffect(AUDIO_CT_HALF_MOVE);
        }
        
    }
    

    

},

ccTouchesMoved:function(pTouches, pEvent){

   var iter = pTouches.begin();
    if (isBoxOpen)
    {
        for (; iter != pTouches.end(); iter++)
        {
            var  pTouch = iter;
            var  sprite = s_dic[pTouch.getID()];
            if(pTouch && sprite)
                sprite.setPosition( this.getChildByTag(BOX_OPEN_TAG).convertTouchToNodeSpace(pTouch));
        }
    }
    else
    {
        var  pTouch = iter;
        var  box = this.getChildByTag(BOX_OPEN_TAG);
       var location = box.convertTouchToNodeSpace(pTouch);
        var  bashou = box.getChildByTag(BOX_OPEN_BASHOU_TAG);
        if (box && bashou && cc.rectContainsPoint(bashou.getBoundingBox(),location)) {
           var touchpos = this.convertTouchToNodeSpace(pTouch);
            
            if(boxDestion > 100){
                 box.setPositionY(touchpos.y + boxDestion);
            }
           
//            cc.log("boxDestion:%f", boxDestion);
            
            if (box.getPositionY() > 961*2) {
                box.setPositionY(961*2);
            }
            if (box.getPositionY() < 385*2) {
                box.setPositionY(385*2);
            }
            
            
            if(openbox_movetime > 50){
                openbox_movetime = 0;
                cc.audioEngine.playEffect(AUDIO_CT_HALF_MOVE);
            }
            openbox_movetime ++;

            //cc.log("box posy= %.2", box.getPositionY());
        }

    }
    
    

},

ccTouchesEnded:function(pTouches, pEvent){

    //是否在操作
    isPlaying = false;
    
   var iter = pTouches.begin();
    if (isBoxOpen)
    {
        
        for (; iter != pTouches.end(); iter++)
        {
           var isMatch = false;
           var isTouch = false;
            var  pTouch = iter;
            var  spritefromdic = s_dic[pTouch.getID()];
            var sprite;
            if (spritefromdic)
            {
                var object;
                iCanSelectArray.forEach(function( object){
                    sprite = object;
                    if((sprite.getTag() - spritefromdic.getTag() == 100) || ((sprite.getTag() - spritefromdic.getTag() == -100))  )
                    {
                        
                        if(cc.intersectsRect(sprite.getBoundingBox(),spritefromdic.getBoundingBox()))
                        {
                            //cc.log("choose some socr! moving sprite tag:%d    taget sprite tag:%d",spritefromdic.getTag(),sprite.getTag() );
                            
                            isMatch = true;
                            break;
                        }
                        
                    }
                })
                
                if(isMatch)
                {
                    
                    //移除移动的只袜子
                    spritefromdic.runAction(cc.Sequence.create(cc.Hide.create(), cc.CallFuncN.create(this, callfuncN_selector(this.removeCurrentSprite)),null));
                    
                    //添加打结袜子
                   this.addKnotedSocrs(sprite);
                    
                    //
                    //SKGameBasicLayer.animationRight();
                    
                    //教学
                    isFirstTeach = false;
                  
                }
                else
                {
                    //回到以前的位置
                    //CCPoint *oldPos = s_pos[pTouch.getID()];
                   var oldPos = s_pos[pTouch.getID()];
                    this.getChildByTag(BOX_OPEN_TAG).reorderChild(spritefromdic, 100);
                    spritefromdic.runAction(cc.Sequence.create(cc.MoveTo.create(0.2, cc.p(oldPos.x,oldPos.y)),cc.EaseElasticOut.create((cc.ScaleTo.create(0.4, 1.0))),cc.CallFunc.create( this.playWaziFanhuiEffect,this),null));
                    
                    
                    if (isTouch) {
                        SKGameBasicLayer.animationWrong();
                    }
                    
                }
                
                //第一次教学完成
                if (isFirstTeach) {
                    //cc.log("setletct tag:%d",tagForTeach);
                    var  tagspri  =this.getChildByTag(BOX_OPEN_TAG).getChildByTag(tagForTeach);
                    if (tagspri) {
                        tagspri.stopAllActions();
                    }
                }
                
            }
            s_dic[pTouch.getID()]=null;
            //s_pos[pTouch.getID()]=null;
            s_pos.erase(pTouch.getID());
        }
    }
    
    
    if (isTouchBashou) {
        //抽屉互动
        var  box = this.getChildByTag(BOX_OPEN_TAG);
        if(box && box.getPositionY() < 770*2+120)
        {
            isBoxOpen = true;
            box.runAction(cc.MoveTo.create(0.2, cc.p(512*2,395*2+120)));
            var  tishi =  box.getChildByTag(BOX_TISHI);
            if(tishi){
                tishi.removeFromParent(true);
                this.unschedule(this.execTishi);
            }
           this.socrInitAnimation();
            this.schedulePlayTishi();
            cc.audioEngine.playEffect(AUDIO_CT_YIXIALAKAI);
        }
        else
        {
            box.runAction(cc.MoveTo.create(0.2, cc.p(512*2,961*2+100)));
            cc.audioEngine.playEffect(AUDIO_CT_TANHUI);
            
        }
        isTouchBashou = false;
    }

},

ccTouchesCancelled:function(pTouches, pEvent){

   this.ccTouchesEnded(pTouches, pEvent);

},

playWaziFanhuiEffect:function(){

    cc.audioEngine.playEffect(AUDIO_SCOR_TANHUI);

},


schedulePlayTishi:function(){

    this.schedule(this.execPlayTishi, 1);

},
execPlayTishi:function(dt){

    playTishiNum ++;
    if(playTishiNum == 5 && !isPlaying){
        playTishiNum = 0;
        if(iCanSelectArray.length > 0){
           var count = iCanSelectArray.length;
           var index = (Math.random() * count);
            var s =  iCanSelectArray[index];
            if(s){
                s.stopAllActions();

               var i = (Math.random() * 3.0);
                if(i == 0){
                    var   a1 = cc.RotateTo.create(0.2, 10);
                    var   a2 = cc.RotateTo.create(0.2, -10);
                    var   action2 = cc.Repeat.create((cc.Sequence.create((a1.copy()), (a2.copy()), null)),2);
                    s.runAction(action2);
                }else if(i == 1){
                   var px = s.getPositionX();
                   var py = s.getPositionY();
                                   
                    s.runAction(cc.JumpTo.create(0.4, cc.p(px,py), 10, 2));
                }else if( i == 2){
                    var   a1 = cc.ScaleBy.create(0.2, 1.2, 1.0);
                    var   a2 = cc.ScaleBy.create(0.2, 0.8, 1.0);
                   var   action2 = cc.Repeat.create((cc.Sequence.create((a1.copy()), (a2.copy()), null)),2);
                    
                    s.runAction(action2);
                }

            }
        }
    }

}
})
LYJCIUIIGameStepOne.scene=function(){
    // 'scene' is an autorelease object
    var scene = cc.Scene.create();
    
    // 'layer' is an autorelease object
    var layer = newthis.LYJCIUIIGameStepOne();
    
    // add layer as a child to scene
    scene.addChild(layer);
    
    // return the scene
    return scene;

}