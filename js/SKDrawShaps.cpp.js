//
//  SKDrawShaps.cpp
//  mathKgIII_a
//
//  Created by Super on 14-5-9.
//
//

//#include "SKDrawShaps.h"
//#include "../../pubTools/PersonalApi.h"
//#include "NYGame522Scene.h"
//#include "NYGame522SceneTwo.h"
//#include "NYGame522SceneThree.h"
//#include "NYGame522SceneFour.h"
//#include "SimpleAudioEngine.h"

USING_NS_CC;

var SKDrawShaps=cc.Layer.extend({
init:function(){

    if ( !this.init() ) {
        return false;
    }
    
    this.setPosition(cc.p(0, 1536));
    
    var bg = cc.Sprite.create(res.m145_muban_0001_png);
    bg.setPosition(cc.p(1024, 768));
    this.addChild(bg);
    
    drawTool = new SKDrawToolInDraw;
    drawTool.initWithSize(CCSizeMake(2048, 1536));
    drawTool.setPosition(cc.p(0, 0));
    drawTool.creatOneBrushWithRGB(CCSizeMake(20, 20), ccc4f(255, 255, 255, 255), "one");
    drawTool.setBrush("one");
    this.addChild(drawTool,50);
    
    pointSpr = cc.Sprite.create(res.drawGamePoint_png);
    pointSpr.setPosition(cc.p(0, 1536));
    this.addChild(pointSpr,51);
    
    pointArray = [];
    CC_SAFE_RETAIN(pointArray);
    currentArray = null;
    
    shapSpr = null;
    objSpr = null;
    holdType = 0;
    
    return true;

},

initBySeason:function(val){

   this.cleanCurrentSeason();
    holdType = val;
    
    var str = "res/unit_5/game2/image/drawGameShap"+parseInt(holdType)+"";
    PersonalApi.addPlist(str);
    
    var str1 = "res/unit_5/game2/image/drawGameObj"+parseInt(holdType)+"";
    PersonalApi.addPlist(str1);
    
    pointArray=[];
    switch (val) {
        case SPRING_TAG:
        {
            var arr1 = [];
            arr1.push(cc.p(729, 777));
            arr1.push(cc.p(1017, 342));
            arr1.push(cc.p(1316, 788));
            arr1.push(cc.p(1017, 1190));
            pointArray.push(arr1);
            
            var arr2 = [];
            arr2.push(cc.p(656, 980));
            arr2.push(cc.p(656, 555));
            arr2.push(cc.p(1025, 338));
            arr2.push(cc.p(1394, 555));
            arr2.push(cc.p(1394, 980));
            arr2.push(cc.p(1025, 1195));
            pointArray.push(arr2);
            
            var arr3 = [];
            arr3.push(cc.p(780, 634));
            arr3.push(cc.p(1265, 634));
            arr3.push(cc.p(1515, 897));
            arr3.push(cc.p(533, 897));
            pointArray.push(arr3);
            
            var arr4 = [];
            arr4.push(cc.p(648, 394));
            arr4.push(cc.p(1398, 394));
            arr4.push(cc.p(1398, 1144));
            arr4.push(cc.p(648, 1144));
            pointArray.push(arr4);
            
            var arr5 = [];
            arr5.push(cc.p(730, 350));
            arr5.push(cc.p(1318, 350));
            arr5.push(cc.p(1318, 1184));
            arr5.push(cc.p(730, 1184));
            pointArray.push(arr5);
            
            var arr6 = [];
            arr6.push(cc.p(674, 847));
            arr6.push(cc.p(810, 434));
            arr6.push(cc.p(1242, 434));
            arr6.push(cc.p(1380, 847));
            arr6.push(cc.p(1030, 1100));
            pointArray.push(arr6);
        }
            break;
        case SUMMER_TAG:
        {
            
            var arr1 = [];
            arr1.push(cc.p(690, 434));
            arr1.push(cc.p(1360, 434));
            arr1.push(cc.p(1360, 1102));
            arr1.push(cc.p(690, 1102));
            pointArray.push(arr1);
            
            var arr2 = [];
            arr2.push(cc.p(672, 335));
            arr2.push(cc.p(1360, 335));
            arr2.push(cc.p(1360, 1178));
            arr2.push(cc.p(672, 1178));
            pointArray.push(arr2);
            
            var arr3 = [];
            arr3.push(cc.p(662, 352));
            arr3.push(cc.p(1365, 352));
            arr3.push(cc.p(1240, 1173));
            arr3.push(cc.p(783, 1173));
            pointArray.push(arr3);
            
            var arr4 = [];
            arr4.push(cc.p(465, 789));
            arr4.push(cc.p(665, 464));
            arr4.push(cc.p(1370, 464));
            arr4.push(cc.p(1573, 783));
            arr4.push(cc.p(1360, 1071));
            arr4.push(cc.p(712, 1071));
            pointArray.push(arr4);
            
            var arr5 = [];
            arr5.push(cc.p(804, 810));
            arr5.push(cc.p(876, 337));
            arr5.push(cc.p(1202, 716));
            arr5.push(cc.p(1106, 1197));
            pointArray.push(arr5);
            
            var arr6 = [];
            arr6.push(cc.p(904, 796));
            arr6.push(cc.p(949, 654));
            arr6.push(cc.p(1096, 654));
            arr6.push(cc.p(1142, 794));
            arr6.push(cc.p(1026, 879));
            pointArray.push(arr6);
        }
            break;
        case AUTUMN_TAG:
        {
            
            var arr1 = [];
            arr1.push(cc.p(672, 757));
            arr1.push(cc.p(872, 470));
            arr1.push(cc.p(1185, 470));
            arr1.push(cc.p(1381, 755));
            arr1.push(cc.p(1187, 1059));
            arr1.push(cc.p(871, 1060));
            pointArray.push(arr1);
            
            var arr2 = [];
            arr2.push(cc.p(696, 480));
            arr2.push(cc.p(1352, 480));
            arr2.push(cc.p(1247, 1053));
            arr2.push(cc.p(860, 1053));
            pointArray.push(arr2);
            
            var arr3 = [];
            arr3.push(cc.p(675, 846));
            arr3.push(cc.p(809, 435));
            arr3.push(cc.p(1244, 435));
            arr3.push(cc.p(1380, 845));
            arr3.push(cc.p(1030, 1100));
            pointArray.push(arr3);
            
            var arr4 = [];
            arr4.push(cc.p(606, 765));
            arr4.push(cc.p(1024, 551));
            arr4.push(cc.p(1440, 764));
            arr4.push(cc.p(1022, 978));
            pointArray.push(arr4);
            
            var arr5 = [];
            arr5.push(cc.p(830, 355));
            arr5.push(cc.p(1213, 355));
            arr5.push(cc.p(1214, 1180));
            arr5.push(cc.p(853, 1183));
            pointArray.push(arr5);
            
            var arr6 = [];
            arr6.push(cc.p(734, 478));
            arr6.push(cc.p(1313, 478));
            arr6.push(cc.p(1313, 1057));
            arr6.push(cc.p(734, 1057));
            pointArray.push(arr6);
        }
            break;
        case WINTTER_TAG:
        {
            var arr1 = [];
            arr1.push(cc.p(423, 487));
            arr1.push(cc.p(1625, 487));
            arr1.push(cc.p(983, 1038));
            arr1.push(cc.p(639, 1038));
            pointArray.push(arr1);
            
            var arr2 = [];
            arr2.push(cc.p(622, 767));
            arr2.push(cc.p(1026, 564));
            arr2.push(cc.p(1424, 766));
            arr2.push(cc.p(1023, 966));
            pointArray.push(arr2);
            
            var arr3 = [];
            arr3.push(cc.p(652, 387));
            arr3.push(cc.p(1400, 396));
            arr3.push(cc.p(1396, 1140));
            arr3.push(cc.p(643, 1135));
            pointArray.push(arr3);
            
            var arr4 = [];
            arr4.push(cc.p(652, 972));
            arr4.push(cc.p(652, 550));
            arr4.push(cc.p(1024, 343));
            arr4.push(cc.p(1392, 547));
            arr4.push(cc.p(1392, 972));
            arr4.push(cc.p(1024, 1180));
            pointArray.push(arr4);
            
            var arr5 = [];
            arr5.push(cc.p(721, 837));
            arr5.push(cc.p(838, 484));
            arr5.push(cc.p(1209, 484));
            arr5.push(cc.p(1327, 837));
            arr5.push(cc.p(1025, 1050));
            pointArray.push(arr5);
            
            var arr6 = [];
            arr6.push(cc.p(730, 350));
            arr6.push(cc.p(1318, 350));
            arr6.push(cc.p(1318, 1184));
            arr6.push(cc.p(730, 1184));
            pointArray.push(arr6);
        }
            break;
        default:
            break;
    }

},

cleanCurrentSeason:function(){

    if (holdType!=0) {
        var str = "res/unit_5/game2/image/drawGameShap"+parseInt(holdType)+".plist";
        var str1 = "res/unit_5/game2/image/drawGameShap"+parseInt(holdType)+".png";
        var str2 = "res/unit_5/game2/image/drawGameObj"+parseInt(holdType)+".plist";
        var str3 = "res/unit_5/game2/image/drawGameObj"+parseInt(holdType)+".png";
        cc.spriteFrameCache.removeSpriteFramesFromFile(str);
        CCTextureCache.sharedTextureCache().removeTextureForKey(str1);
        cc.spriteFrameCache.removeSpriteFramesFromFile(str2);
        CCTextureCache.sharedTextureCache().removeTextureForKey(str3);
        holdType = 0;
    }

},

callDraw:function(indexVal){

    cc.log("%d",indexVal);
    switch (holdType) {
        case SPRING_TAG:
            switch (indexVal) {
                case 1:
                    sideNumber = 4;
                    break;
                case 2:
                    sideNumber = 6;
                    break;
                case 3:
                    sideNumber = 4;
                    break;
                case 4:
                    sideNumber = 4;
                    break;
                case 5:
                    sideNumber = 4;
                    break;
                case 6:
                    sideNumber = 5;
                    break;
                default:
                    break;
            }
            break;
        case SUMMER_TAG:
            switch (indexVal) {
                case 1:
                    sideNumber = 4;
                    break;
                case 2:
                    sideNumber = 4;
                    break;
                case 3:
                    sideNumber = 4;
                    break;
                case 4:
                    sideNumber = 6;
                    break;
                case 5:
                    sideNumber = 4;
                    break;
                case 6:
                    sideNumber = 5;
                    break;
                default:
                    break;
            }
            break;
        case AUTUMN_TAG:
            switch (indexVal) {
                case 1:
                    sideNumber = 6;
                    break;
                case 2:
                    sideNumber = 4;
                    break;
                case 3:
                    sideNumber = 5;
                    break;
                case 4:
                    sideNumber = 4;
                    break;
                case 5:
                    sideNumber = 4;
                    break;
                case 6:
                    sideNumber = 4;
                    break;
                default:
                    break;
            }
            break;
        case WINTTER_TAG:
            switch (indexVal) {
                case 1:
                    sideNumber = 4;
                    break;
                case 2:
                    sideNumber = 4;
                    break;
                case 3:
                    sideNumber = 4;
                    break;
                case 4:
                    sideNumber = 6;
                    break;
                case 5:
                    sideNumber = 5;
                    break;
                case 6:
                    sideNumber = 4;
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
    var str = "shap"+parseInt(indexVal)+".png";
    objName = "obj"+parseInt(indexVal)+".png";
    if (shapSpr==null) {
        shapSpr = cc.Sprite.create('#'+str);
        shapSpr.setPosition(cc.p(1024, 768));
        this.addChild(shapSpr);
    }
    else {
        shapSpr.setDisplayFrame(cc.spriteFrameCache.getSpriteFrame(str));
    }
    
    this.runAction(cc.Sequence.create(CCEaseIn.create(cc.MoveBy.create(0.5, cc.p(0, -1536)), 4),cc.MoveBy.create(0.1, cc.p(0, 20)),cc.MoveBy.create(0.1, cc.p(0, -20)),null));
    
    currentArray = pointArray[indexVal-1];
    drawTool.allClear();
    
    pointSpr.setPosition(currentArray[currentArray.length-1]);
    
    //计算equationK equationB
   var temp = currentArray[0];
    if (temp.x-pointSpr.getPositionX()==0) {
        haveK = false;
    }
    else {
        haveK = true;
        equationK = (temp.y-pointSpr.getPositionY())/(temp.x-pointSpr.getPositionX());
        equationB = temp.y-equationK*temp.x;
    }
    
    canMove = false;
    if (objSpr!=null) {
        objSpr.setOpacity(0);
    }
    
    shapSpr.setVisible(true);
    pointSpr.setVisible(true);
    
    this.setTouchEnabled(true);

},

drawOver:function(){

    currentArray = null;
    this.runAction(cc.Sequence.create(cc.MoveBy.create(0.1, cc.p(0, -20)), CCEaseIn.create(cc.MoveBy.create(0.3, cc.p(0, 1536)), 3),cc.CallFunc.create( this.drawOver1,this),null));
    this.setTouchEnabled(false);
    

},

drawOver1:function(){

    if (holdType == SPRING_TAG) {
        var  scene = this.getParent();
        scene.mubanUp();
    }else if (holdType == SUMMER_TAG){
        var  scene = this.getParent();
        scene.mubanUp();
    }else if (holdType == AUTUMN_TAG){
        var  scene = this.getParent();
        scene.mubanUp();
    }else if (holdType == WINTTER_TAG){
        var  scene = this.getParent();
        scene.mubanUp();
    }

},


SKDrawShaps:function(){

    currentArray = null;
    CC_SAFE_RELEASE(pointArray);
   this.cleanCurrentSeason();
    //CCTextureCache.sharedTextureCache().removeUnusedTextures();

},

onEnter:function(){

    this.onEnter();

},

onExit:function(){

    //CCDirector.sharedDirector().getTouchDispatcher().removeDelegate(this);
    this.onExit();

},

registerWithTouchDispatcher:function(){

    //CCDirector.sharedDirector().getTouchDispatcher().addTargetedDelegate(this,0, true);

},

ccTouchBegan:function(touches, event){

    //return false;
    //CCPoint touchLocation = touch.getLocationInView();
    //touchLocation = //CCDirector.sharedDirector()>convertToGL(touchLocation);
    //CCPoint touchLocation = this.convertTouchToNodeSpace(touch);
   var location = this.convertTouchToNodeSpace(touches);
    if (cc.rectContainsPoint(pointSpr.getBoundingBox(),location)) {
        canMove = true;
        drawTool.setStorePointValue(pointSpr.getPosition());
    }
    
    return true;

},

setNewPosition:function(pot){

    if (currentArray.length==0) {
        return false;
    }
   var tarPot = currentArray[0];
    
   var recount = false;
    if (haveK==false) {//无斜率
        if (pointSpr.getPositionY()-tarPot.y>=0.0) {//向下拖动
            if (pot.y-tarPot.y<=0.0) {
                pointSpr.setPositionY(tarPot.y);
                recount = true;
            }
            else if(pot.y-pointSpr.getPositionY()<0.0) {
                pointSpr.setPositionY(pot.y);
            }
        }
        else {//向上拖动
            if (pot.y-tarPot.y>=0.0) {
                pointSpr.setPositionY(tarPot.y);
                recount = true;
            }
            else if(pot.y-pointSpr.getPositionY()>0.0) {
                pointSpr.setPositionY(pot.y);
            }
        }
    }
    else {
        if (fabsf(equationK)>=1) {//y主导
            if (pointSpr.getPositionY()-tarPot.y>=0.0) {//向下拖动
                if (pot.y-tarPot.y<=0.0) {
                    //pointSpr.setPositionY(tarPot.y);
                    pointSpr.setPosition(tarPot);
                    recount = true;
                    //pointSpr.setPositionX((pot.y-equationB)/equationK);
 
                }
                else if(pot.y-pointSpr.getPositionY()<0.0) {
                    pointSpr.setPositionY(pot.y);
                    pointSpr.setPositionX((pot.y-equationB)/equationK);
                }
            }
            else {//向上
                if (pot.y-tarPot.y>=0.0) {
                    //pointSpr.setPositionY(tarPot.y);
                    recount = true;
                    //pointSpr.setPositionX((pot.y-equationB)/equationK);
                    pointSpr.setPosition(tarPot);
                }
                else if(pot.y-pointSpr.getPositionY()>0.0) {
                    pointSpr.setPositionY(pot.y);
                    pointSpr.setPositionX((pot.y-equationB)/equationK);
                }
            }
            
        }
        else {//x主导
            if (pointSpr.getPositionX()-tarPot.x>=0.0) {//向左拖动
                if (pot.x-tarPot.x<=0.0) {
                    //pointSpr.setPositionX(tarPot.x);
                    pointSpr.setPosition(tarPot);
                    recount = true;
                    //pointSpr.setPositionY(equationK*pot.x+equationB);
                }
                else if(pot.x-pointSpr.getPositionX()<0.0) {
                    pointSpr.setPositionX(pot.x);
                    pointSpr.setPositionY(equationK*pot.x+equationB);
                }
            }
            else {//向右拖动
                if (pot.x-tarPot.x>=0.0) {
                    //pointSpr.setPositionX(tarPot.x);
                    recount = true;
                    pointSpr.setPosition(tarPot);
                    //pointSpr.setPositionY(equationK*pot.x+equationB);
                }
                else if(pot.x-pointSpr.getPositionX()>0.0) {
                    pointSpr.setPositionX(pot.x);
                    pointSpr.setPositionY(equationK*pot.x+equationB);
                }
            }
            
        }
    }
    
    if (recount==true) {
        currentArray.removeControlPointAtIndex(0);
        if (currentArray.length==0) {
            //draw over
            if (objSpr==null) {
                objSpr = cc.Sprite.create('#'+objName);
                objSpr.setPosition(cc.p(1024, 768));
                this.addChild(objSpr,52);
                objSpr.setOpacity(0);
            }
            else {
                objSpr.setDisplayFrame(cc.spriteFrameCache.getSpriteFrame(objName));
            }
            //objSpr.runAction(cc.Sequence.createWithTwoActions(cc.DelayTime.create(0.5), CCFadeIn.create(0.5)));
            objSpr.runAction(CCFadeIn.create(0.5));
            var str = "res/unit_5/game2/audio/m145duobianxing"+parseInt(sideNumber)+".mp3";
            cc.audioEngine.playEffect(str);
            
            drawTool.allClear();
            shapSpr.setVisible(false);
            pointSpr.setVisible(false);
            
            this.runAction(cc.Sequence.createWithTwoActions(cc.DelayTime.create(2.5), cc.CallFunc.create( this.drawOver,this)));
            
            return false;
        }
        else {
           var temp = currentArray[0];
            if (temp.x-pointSpr.getPositionX()==0) {
                haveK = false;
            }
            else {
                haveK = true;
                equationK = (temp.y-pointSpr.getPositionY())/(temp.x-pointSpr.getPositionX());
                equationB = temp.y-equationK*temp.x;
            }
        }
    }
    
    return true;

},

ccTouchMoved:function(pTouch, pEvent){

   var location = this.convertTouchToNodeSpace(pTouch);
    
    if (!cc.rectContainsPoint(pointSpr.getBoundingBox(),location)) {
        canMove = false;
    }
    
    if (canMove &&this.setNewPosition(location)==true) {
        drawTool.beganDraw(pointSpr.getPosition());
        drawTool.setStorePointValue(pointSpr.getPosition());
    }
    

},
ccTouchEnded:function(pTouch, pEvent){

    //CCPoint location = this.convertTouchToNodeSpace(pTouch);
    canMove = false;

},