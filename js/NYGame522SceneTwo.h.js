
//
//  NYGame522SceneTwo.h
//  mathKgIII_a
//
//  Created by nieying on 14-4-28.
//
//

#ifndef __mathKgIII_a__NYGame522SceneTwo__
#define __mathKgIII_a__NYGame522SceneTwo__

//#include <iostream>
//#include "../../unit_111/gameI/NYResouce.h"
//#include "../../unit_111/NYPublicScene.h"
//#include "../game1/SKDrawToolInDraw.h"
//#include "SKDrawShaps.h"
//夏天
//using namespace cocos2d;

class NYGame522SceneTwo : public NYPublicScene {
public:
    
    ~NYGame522SceneTwo();
    static cc.scene();
    CREATE_FUNC(NYGame522SceneTwo);
    virtualvar init();
   var changeScene();
   var openTouchClick();
   var removeFormP(sender);
   var BigbanDown(sender);
   var BigbanUp();
   var mubanUp();
   var dooroneAction();
   var doortwoAction();
   var lionChang1();
   var lionChang2();
   var lionChangBack();
   var shuihuAction();
   var pengquanSound();
   var dooroneSound();
   var doortwoSound();
    
    var  chooseAry;
    var  touChSptAry;
    
    var  mubanSpt;
    var  lionSpt;
    
   var touChClick;
   var shuichiClick;
    
   var scenNum;
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
#endif /* defined(__mathKgIII_a__NYGame522SceneTwo__) */
