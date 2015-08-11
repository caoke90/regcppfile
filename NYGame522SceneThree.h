
//
//  NYGame522SceneThree.h
//  mathKgIII_a
//
//  Created by nieying on 14-4-28.
//
//

#ifndef __mathKgIII_a__NYGame522SceneThree__
#define __mathKgIII_a__NYGame522SceneThree__

#include <iostream>
#include "../../unit_111/gameI/NYResouce.h"
#include "../../unit_111/NYPublicScene.h"
#include "../game1/SKDrawToolInDraw.h"
#include "SKDrawShaps.h"
 //秋天
using namespace cocos2d;

class NYGame522SceneThree : public NYPublicScene {
public:
    
    ~NYGame522SceneThree();
    static CCScene* scene();
    CREATE_FUNC(NYGame522SceneThree);
    virtual bool init();
    void changeScene();
    void openTouchClick();
    void BigbanDown(CCNode* sender);
    void BigbanUp();
    void mubanUp();
    void mouseAction();
    void removeFormP(CCNode* sender);
    void basketSound();
    void spiderSOund();
    
    CCArray* chooseAry;
    CCArray* touChSptAry;
    
    CCSprite* mubanSpt;
    
    bool touChClick;
    bool wangClick;
    bool shuClick;
    
    int scenNum;
    int tuxingNum;
    int scne;
    
    
    
    //触屏事件的重写
    virtual bool ccTouchBegan(cocos2d::CCTouch *pTouch, cocos2d::CCEvent *pEvent);
    virtual void ccTouchMoved(cocos2d::CCTouch *pTouch, cocos2d::CCEvent *pEvent);
    virtual void ccTouchEnded(cocos2d::CCTouch *pTouch, cocos2d::CCEvent *pEvent);
    virtual void registerWithTouchDispatcher();
    virtual void onEnter();
    virtual void onExit();
private:
    
    
    
};
#endif /* defined(__mathKgIII_a__NYGame522SceneThree__) */
