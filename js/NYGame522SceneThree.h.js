
//
//  NYGame522SceneThree.h
//  mathKgIII_a
//
//  Created by nieying on 14-4-28.
//
//

#ifndef __mathKgIII_a__NYGame522SceneThree__
#define __mathKgIII_a__NYGame522SceneThree__

//#include <iostream>
//#include "../../unit_111/gameI/NYResouce.h"
//#include "../../unit_111/NYPublicScene.h"
//#include "../game1/SKDrawToolInDraw.h"
//#include "SKDrawShaps.h"
 //秋天
//using namespace cocos2d;

class NYGame522SceneThree : public NYPublicScene {
public:
    
    ~NYGame522SceneThree();
    static cc.scene();
    CREATE_FUNC(NYGame522SceneThree);
    virtualvar init();
   var changeScene();
   var openTouchClick();
   var BigbanDown(sender);
   var BigbanUp();
   var mubanUp();
   var mouseAction();
   var removeFormP(sender);
   var basketSound();
   var spiderSOund();
    
    var  chooseAry;
    var  touChSptAry;
    
    var  mubanSpt;
    
   var touChClick;
   var wangClick;
   var shuClick;
    
   var scenNum;
   var tuxingNum;
   var scne;
    
    
    
    //触屏事件的重写
    virtualvar ccTouchBegan(cocos2d.CCTouch *pTouch, cocos2d.CCEvent *pEvent);
    virtualvar ccTouchMoved(cocos2d.CCTouch *pTouch, cocos2d.CCEvent *pEvent);
    virtualvar ccTouchEnded(cocos2d.CCTouch *pTouch, cocos2d.CCEvent *pEvent);
    virtualvar registerWithTouchDispatcher();
    virtualvar onEnter();
    virtualvar onExit();
private:
    
    
    
};
#endif /* defined(__mathKgIII_a__NYGame522SceneThree__) */
