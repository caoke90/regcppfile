

//
//  NYGame522Scene.h
//  mathKgIII_a
//
//  Created by nieying on 14-4-28.
//
//

#ifndef __mathKgIII_a__NYGame522Scene__
#define __mathKgIII_a__NYGame522Scene__

//#include <iostream>
//#include "../../unit_111/gameI/NYResouce.h"
//#include "../../unit_111/NYPublicScene.h"
//#include "../game1/SKDrawToolInDraw.h"
//#include "SKDrawShaps.h"

//using namespace cocos2d;

class NYGame522Scene : public NYPublicScene {
public:
    
    ~NYGame522Scene();
    static cc.scene();
    CREATE_FUNC(NYGame522Scene);
    virtualvar init();
   var qingwaChange();
   var qingwaChangeBack();
   var openTouchClick();
   var removeFormP(sender);
    
   var fengzhengAction(sender);
   var BigbanDown(sender);
   var BigbanUp();
   var mubanUp();
   var changeScene();
   var bridSound();
   var boatSOund();
   var kiteSOund();
   var spiderSound();
    
    var  chooseAry;
    var  touChSptAry;
    
    var  mubanSpt;
//    BigbanSpt;
    var  onbanTuXing;
    var  xuXianSpt;
    
   var touChClick;
    
   var scenNum;
   var scenNum2;
    
    virtualvar ccTouchBegan(CCTouch *pTouch, CCEvent *pEvent);
    virtualvar ccTouchMoved(CCTouch *pTouch, CCEvent *pEvent);
    virtualvar ccTouchEnded(CCTouch *pTouch, CCEvent *pEvent);
    virtualvar registerWithTouchDispatcher();
    virtualvar onEnter();
    virtualvar onExit();
private:
    
    
    
};
#endif /* defined(__mathKgIII_a__NYGame522Scene__) */

