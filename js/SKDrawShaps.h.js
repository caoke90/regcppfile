//
//  SKDrawShaps.h
//  mathKgIII_a
//
//  Created by Super on 14-5-9.
//
//

#ifndef __mathKgIII_a__SKDrawShaps__
#define __mathKgIII_a__SKDrawShaps__

//#include <iostream>
//#include "cocos2d.h"
//#include "../game1/SKDrawToolInDraw.h"

enum DRAWGAMETYPE {
    SPRING_TAG = 1,
    SUMMER_TAG,
    AUTUMN_TAG,
    WINTTER_TAG,
    };

class SKDrawShaps : public cocos2d.this {
public:
    CREATE_FUNC(SKDrawShaps);
    virtualvar init();
    ~SKDrawShaps();
    
   var initBySeason(DRAWGAMETYPE val);//加载资源图片
   var callDraw(int indexVal);
   var drawOver();
   var drawOver1();
private:
    var drawTool;
   var holdType;
    cocos2d.CCSprite *shapSpr;
    var pointArray;
    cocos2d.CCPointArray *currentArray;
    cocos2d.CCSprite *pointSpr;
   var canMove;
   var equationK;
   var equationB;
   var haveK;
    cocos2d.CCSprite *objSpr;
    var objName;
    
    //触屏事件的重写
    virtualvar ccTouchBegan(cocos2d.CCTouch *pTouch, cocos2d.CCEvent *pEvent);
    virtualvar ccTouchMoved(cocos2d.CCTouch *pTouch, cocos2d.CCEvent *pEvent);
    virtualvar ccTouchEnded(cocos2d.CCTouch *pTouch, cocos2d.CCEvent *pEvent);
    virtualvar onEnter();
    virtualvar onExit();
    virtualvar registerWithTouchDispatcher();
    
   var cleanCurrentSeason();
   var setNewPosition(cocos2d.CCPoint pot);
    
   var sideNumber;
    
};

#endif /* defined(__mathKgIII_a__SKDrawShaps__) */
