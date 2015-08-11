//
//  NYGame52Fighting.h
//  mathKgIII_a
//
//  Created by nieying on 14-4-28.
//
//

#ifndef __mathKgIII_a__NYGame52Fighting__
#define __mathKgIII_a__NYGame52Fighting__

#include <iostream>
#include "../../fightingGame/SKFightBasic.h"
#include "../../pubTools/PersonalApi.h"
#include "../../unit_111/gameI/NYResouce.h"
#include "../../unit_111/NYCCPoint.h"

#define MOVETIMER 2
using namespace cocos2d;
class  NYGame52Fighting : public SKFightBasic, public SKFightBasicDelegate
{
public:
    virtual bool init();
    virtual void goNextStep();
    ~NYGame52Fighting();
    static CCScene* scene();
    CREATE_FUNC(NYGame52Fighting);
    
    //触屏事件的重写
    virtual void ccTouchesBegan(CCSet *pTouches, CCEvent *pEvent);
    virtual void ccTouchesMoved(CCSet *pTouches, CCEvent *pEvent);
    virtual void ccTouchesEnded(CCSet *pTouches, CCEvent *pEvent);
    virtual void ccTouchesCancelled(CCSet *pTouches, CCEvent *pEvent);
    virtual void registerWithTouchDispatcher();
    virtual void onEnter();
    virtual void onExit();
    
private:
   
    int showRightN;
    bool firstComeIn;
    
    CCArray* haiChongArray;
    CCSprite* anwerChongSpt;
    
    CCArray* answerStrArray;
    CCArray* rightStrArray;
    CCArray* wrongStrArray;
    CCArray* numberStrArray; //1.....6
    CCArray* leftSptArray;
    CCArray* rightSptArray;
    CCArray* leftRightPoiArray;
    
    CCPointArray* haiChongPoiArray;

    void huanGuan();
    
    CCAction* runOneAction(int start,int frameCount,const char* formort,float time,int repeat);
    void initHaiPosi();
    void hideSome();
    void initPosition();
    void openClick();
    void deleStopAction();
    void StopAction();
    void preLoad();
    void unLoad();
    
    void delPlayDuona();
    

};
#endif /* defined(__mathKgIII_a__NYGame52Fighting__) */
