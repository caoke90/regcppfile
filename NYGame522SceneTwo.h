
//
//  NYGame522SceneTwo.h
//  mathKgIII_a
//
//  Created by nieying on 14-4-28.
//
//

#ifndef __mathKgIII_a__NYGame522SceneTwo__
#define __mathKgIII_a__NYGame522SceneTwo__

#include <iostream>
#include "../../unit_111/gameI/NYResouce.h"
#include "../../unit_111/NYPublicScene.h"
#include "../game1/SKDrawToolInDraw.h"
#include "SKDrawShaps.h"
//夏天
using namespace cocos2d;

class NYGame522SceneTwo : public NYPublicScene {
public:
    
    ~NYGame522SceneTwo();
    static CCScene* scene();
    CREATE_FUNC(NYGame522SceneTwo);
    virtual bool init();
    void changeScene();
    void openTouchClick();
    void removeFormP(CCNode* sender);
    void BigbanDown(CCNode* sender);
    void BigbanUp();
    void mubanUp();
    void dooroneAction();
    void doortwoAction();
    void lionChang1();
    void lionChang2();
    void lionChangBack();
    void shuihuAction();
    void pengquanSound();
    void dooroneSound();
    void doortwoSound();
    
    CCArray* chooseAry;
    CCArray* touChSptAry;
    
    CCSprite* mubanSpt;
    CCSprite* lionSpt;
    
    bool touChClick;
    bool shuichiClick;
    
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
#endif /* defined(__mathKgIII_a__NYGame522SceneTwo__) */
