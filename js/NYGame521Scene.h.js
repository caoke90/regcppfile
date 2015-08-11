//
//  NYGame521Scene.h
//  mathKgIII_a
//
//  Created by nieying on 14-4-28.
//
//

#ifndef __mathKgIII_a__NYGame521Scene__
#define __mathKgIII_a__NYGame521Scene__

//#include <iostream>
//#include "../../unit_111/gameI/NYResouce.h"
//#include "../../unit_111/NYPublicScene.h"
//#include "../../pubTools/PersonalApi.h"

/*
 flower 5,6,7,8,9,10
 害虫 20 -- 25
 */
//using namespace cocos2d;
//m130

var bangziTime=10
var ADDDISTANCE=1620
var MOVETIMERONE=3

class NYGame521Scene : public NYPublicScene {
public:
    
    ~NYGame521Scene();
    static cc.scene();
    CREATE_FUNC(NYGame521Scene);
    virtualvar init();
    
    //触屏事件的重写
    virtualvar ccTouchBegan(cocos2d.CCTouch *pTouch, cocos2d.CCEvent *pEvent);
    virtualvar ccTouchMoved(cocos2d.CCTouch *pTouch, cocos2d.CCEvent *pEvent);
    virtualvar ccTouchEnded(cocos2d.CCTouch *pTouch, cocos2d.CCEvent *pEvent);
    virtualvar registerWithTouchDispatcher();
    virtualvar onEnter();
    virtualvar onExit();
private:
    
   var jiluTimes;
   var totalTime;
   var firstTag;
   var secondTag;
   var showMany;
   var rightN;
   var timrEfc;
   var realRightN;

   var dontPlayDouble;
   var playSecBoo;//是否玩完第一个循环

    
    var  paopaoOneSpt;
    var  paopaoTwoSpt;
    var  progressTimer;
    
    var  flowerArray;
    var  haiChongSptArray;
    var  stringArray;
    var  fourStringArray;
    var  fiveStringArray;
    var  sixStringArray;
    var  otherStringArray;
    var  otherNumArray;

    var  haiChongPoiArray;


    var  runOAction(int start,int frameCount,const formort,float time,var repeat);

   var returLightPo(int num);
   var openClick();
   var moveToLeft();
   var addTimer();
   var addHaiChong();
   var initHaiPosition();
    
   var isEatFlowerOrNot(); //是否吃花
   var hideSome();
   var playEatAction();
   var preLoad();
   var unLoad();
   var delePlayTimeEfc();
   var playPestJianjiao();
    
};
#endif /* defined(__mathKgIII_a__NYGame521Scene__) */
