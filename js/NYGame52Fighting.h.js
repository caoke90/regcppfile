//
//  NYGame52Fighting.h
//  mathKgIII_a
//
//  Created by nieying on 14-4-28.
//
//

#ifndef __mathKgIII_a__NYGame52Fighting__
#define __mathKgIII_a__NYGame52Fighting__

//#include <iostream>
//#include "../../fightingGame/SKFightBasic.h"
//#include "../../pubTools/PersonalApi.h"
//#include "../../unit_111/gameI/NYResouce.h"
//#include "../../unit_111/NYCCPoint.h"

var MOVETIMER=2
//using namespace cocos2d;
class  NYGame52Fighting : public SKFightBasic, public SKFightBasicDelegate
{
public:
    virtualvar init();
    virtualvar goNextStep();
    ~NYGame52Fighting();
    static cc.scene();
    CREATE_FUNC(NYGame52Fighting);
    
    //触屏事件的重写
    virtualvar ccTouchesBegan(CCSet *pTouches, CCEvent *pEvent);
    virtualvar ccTouchesMoved(CCSet *pTouches, CCEvent *pEvent);
    virtualvar ccTouchesEnded(CCSet *pTouches, CCEvent *pEvent);
    virtualvar ccTouchesCancelled(CCSet *pTouches, CCEvent *pEvent);
    virtualvar registerWithTouchDispatcher();
    virtualvar onEnter();
    virtualvar onExit();
    
private:
   
   var showRightN;
   var firstComeIn;
    
    var  haiChongArray;
    var  anwerChongSpt;
    
    var  answerStrArray;
    var  rightStrArray;
    var  wrongStrArray;
    var  numberStrArray; //1.....6
    var  leftSptArray;
    var  rightSptArray;
    var  leftRightPoiArray;
    
    var  haiChongPoiArray;

   var huanGuan();
    
    var  runOneAction(int start,int frameCount,const formort,float time,var repeat);
   var initHaiPosi();
   var hideSome();
   var initPosition();
   var openClick();
   var deleStopAction();
   var StopAction();
   var preLoad();
   var unLoad();
    
   var delPlayDuona();
    

};
#endif /* defined(__mathKgIII_a__NYGame52Fighting__) */
