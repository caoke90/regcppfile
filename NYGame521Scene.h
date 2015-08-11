//
//  NYGame521Scene.h
//  mathKgIII_a
//
//  Created by nieying on 14-4-28.
//
//

#ifndef __mathKgIII_a__NYGame521Scene__
#define __mathKgIII_a__NYGame521Scene__

#include <iostream>
#include "../../unit_111/gameI/NYResouce.h"
#include "../../unit_111/NYPublicScene.h"
#include "../../pubTools/PersonalApi.h"

/*
 flower 5,6,7,8,9,10
 害虫 20 -- 25
 */
using namespace cocos2d;
//m130

#define bangziTime 10
#define ADDDISTANCE 1620
#define MOVETIMERONE 3

class NYGame521Scene : public NYPublicScene {
public:
    
    ~NYGame521Scene();
    static CCScene* scene();
    CREATE_FUNC(NYGame521Scene);
    virtual bool init();
    
    //触屏事件的重写
    virtual bool ccTouchBegan(cocos2d::CCTouch *pTouch, cocos2d::CCEvent *pEvent);
    virtual void ccTouchMoved(cocos2d::CCTouch *pTouch, cocos2d::CCEvent *pEvent);
    virtual void ccTouchEnded(cocos2d::CCTouch *pTouch, cocos2d::CCEvent *pEvent);
    virtual void registerWithTouchDispatcher();
    virtual void onEnter();
    virtual void onExit();
private:
    
    int jiluTimes;
    int totalTime;
    int firstTag;
    int secondTag;
    int showMany;
    int rightN;
    int timrEfc;
    int realRightN;

    bool dontPlayDouble;
    bool playSecBoo;//是否玩完第一个循环

    
    CCSprite* paopaoOneSpt;
    CCSprite* paopaoTwoSpt;
    CCProgressTimer* progressTimer;
    
    CCArray* flowerArray;
    CCArray* haiChongSptArray;
    CCArray* stringArray;
    CCArray* fourStringArray;
    CCArray* fiveStringArray;
    CCArray* sixStringArray;
    CCArray* otherStringArray;
    CCArray* otherNumArray;

    CCPointArray* haiChongPoiArray;


    CCAction* runOAction(int start,int frameCount,const char* formort,float time,int repeat);

    CCPoint returLightPo(int num);
    void openClick();
    void moveToLeft();
    void addTimer();
    void addHaiChong();
    void initHaiPosition();
    
    void isEatFlowerOrNot(); //是否吃花
    void hideSome();
    void playEatAction();
    void preLoad();
    void unLoad();
    void delePlayTimeEfc();
    void playPestJianjiao();
    
};
#endif /* defined(__mathKgIII_a__NYGame521Scene__) */
