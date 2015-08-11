
//
//  NYGame522SceneFour.h
//  mathKgIII_a
//
//  Created by nieying on 14-4-28.
//
//

#ifndef __mathKgIII_a__NYGame522SceneFour__
#define __mathKgIII_a__NYGame522SceneFour__

#include <iostream>
#include "../../unit_111/gameI/NYResouce.h"
#include "../../unit_111/NYPublicScene.h"
#include "../game1/SKDrawToolInDraw.h"
#include "SKDrawShaps.h"
//冬天
using namespace cocos2d;

class NYGame522SceneFour : public NYPublicScene {
public:
    
    ~NYGame522SceneFour();
    static CCScene* scene();
    CREATE_FUNC(NYGame522SceneFour);
    virtual bool init();
    void changeScene();
    void openTouchClick();
    void BigbanDown(CCNode* sender);
    void BigbanUp();
    void mubanUp();
    void removeFormP(CCNode* sender);
    void daxiangAction();
    void treeSound();
    
    CCArray* chooseAry;
    CCArray* touChSptAry;
    
    CCSprite* mubanSpt;
    
    bool touChClick ;
    
    int scenNum;
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
#endif /* defined(__mathKgIII_a__NYGame522SceneFour__) */
