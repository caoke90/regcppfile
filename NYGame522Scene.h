

//
//  NYGame522Scene.h
//  mathKgIII_a
//
//  Created by nieying on 14-4-28.
//
//

#ifndef __mathKgIII_a__NYGame522Scene__
#define __mathKgIII_a__NYGame522Scene__

#include <iostream>
#include "../../unit_111/gameI/NYResouce.h"
#include "../../unit_111/NYPublicScene.h"
#include "../game1/SKDrawToolInDraw.h"
#include "SKDrawShaps.h"

using namespace cocos2d;

class NYGame522Scene : public NYPublicScene {
public:
    
    ~NYGame522Scene();
    static CCScene* scene();
    CREATE_FUNC(NYGame522Scene);
    virtual bool init();
    void qingwaChange();
    void qingwaChangeBack();
    void openTouchClick();
    void removeFormP(CCNode* sender);
    
    void fengzhengAction(CCNode* sender);
    void BigbanDown(CCNode* sender);
    void BigbanUp();
    void mubanUp();
    void changeScene();
    void bridSound();
    void boatSOund();
    void kiteSOund();
    void spiderSound();
    
    CCArray* chooseAry;
    CCArray* touChSptAry;
    
    CCSprite* mubanSpt;
//    CCSprite* BigbanSpt;
    CCSprite* onbanTuXing;
    CCSprite* xuXianSpt;
    
    bool touChClick;
    
    int scenNum;
    int scenNum2;
    
    virtual bool ccTouchBegan(CCTouch *pTouch, CCEvent *pEvent);
    virtual void ccTouchMoved(CCTouch *pTouch, CCEvent *pEvent);
    virtual void ccTouchEnded(CCTouch *pTouch, CCEvent *pEvent);
    virtual void registerWithTouchDispatcher();
    virtual void onEnter();
    virtual void onExit();
private:
    
    
    
};
#endif /* defined(__mathKgIII_a__NYGame522Scene__) */

