//
//  SKDrawShaps.h
//  mathKgIII_a
//
//  Created by Super on 14-5-9.
//
//

#ifndef __mathKgIII_a__SKDrawShaps__
#define __mathKgIII_a__SKDrawShaps__

#include <iostream>
#include "cocos2d.h"
#include "../game1/SKDrawToolInDraw.h"

enum DRAWGAMETYPE {
    SPRING_TAG = 1,
    SUMMER_TAG,
    AUTUMN_TAG,
    WINTTER_TAG,
    };

class SKDrawShaps : public cocos2d::CCLayer {
public:
    CREATE_FUNC(SKDrawShaps);
    virtual bool init();
    ~SKDrawShaps();
    
    void initBySeason(DRAWGAMETYPE val);//加载资源图片
    void callDraw(int indexVal);
    void drawOver();
    void drawOver1();
private:
    SKDrawToolInDraw *drawTool;
    int holdType;
    cocos2d::CCSprite *shapSpr;
    cocos2d::CCArray *pointArray;
    cocos2d::CCPointArray *currentArray;
    cocos2d::CCSprite *pointSpr;
    bool canMove;
    float equationK;
    float equationB;
    bool haveK;
    cocos2d::CCSprite *objSpr;
    std::string objName;
    
    //触屏事件的重写
    virtual bool ccTouchBegan(cocos2d::CCTouch *pTouch, cocos2d::CCEvent *pEvent);
    virtual void ccTouchMoved(cocos2d::CCTouch *pTouch, cocos2d::CCEvent *pEvent);
    virtual void ccTouchEnded(cocos2d::CCTouch *pTouch, cocos2d::CCEvent *pEvent);
    virtual void onEnter();
    virtual void onExit();
    virtual void registerWithTouchDispatcher();
    
    void cleanCurrentSeason();
    bool setNewPosition(cocos2d::CCPoint pot);
    
    int sideNumber;
    
};

#endif /* defined(__mathKgIII_a__SKDrawShaps__) */
