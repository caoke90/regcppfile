//
//  LYJCIUIIGameStepOne.h
//  math_kg
//
//  Created by lili on 13-6-6.
//
//

#ifndef math_kg_LYJCIUIIGameStepOne_h
#define math_kg_LYJCIUIIGameStepOne_h

//#include "cocos2d.h"
//#include "cocos-ext.h"
//#include "../../pubTools/SKGameBasicLayer.h"
// 131icon game
//using namespace cocos2d;
//using namespace cocos2d.extension;


class LYJCIUIIGameStepOne
{
public:
    CREATE_FUNC(LYJCIUIIGameStepOne);
    virtualvar init();
    ~LYJCIUIIGameStepOne();
    static cocos2d.cc.scene();
   var initSocks();//初始化袜子 有两种位子
   var initAnimation();//开场动画
   var exitAnimation();//离场动画
   var boxExitAnimation();//盒子退出动画
   var checkEndGame();//检查游戏是否结束
   var nextStep();//进入下一步
   var firstTich(int tag);//教学提示
    //触屏事件的重写
    virtualvar registerWithTouchDispatcher();
    virtualvar ccTouchesBegan(cocos2d.CCSet *pTouches, cocos2d.CCEvent *pEvent);
    virtualvar ccTouchesMoved(cocos2d.CCSet *pTouches, cocos2d.CCEvent *pEvent);
    virtualvar ccTouchesEnded(cocos2d.CCSet *pTouches, cocos2d.CCEvent *pEvent);
    virtualvar ccTouchesCancelled(cocos2d.CCSet *pTouches, cocos2d.CCEvent *pEvent);

    virtualvar onEnter();
    virtualvar onExit();
   var removeCurrentSprite(CCNode *sprite);//移除移动的单子袜子
   var addKnotedSocrs(CCSprite *sprite);//添加打结的袜子
   var isTouchedSocr(int tag);//检查是否触摸到袜子
   var socrInitAnimation();//大箱子到位的盒子内袜子动画
    
   var playJiaoxueEffect();//教学音效
   var playWaziFanhuiEffect();//袜子返回的音效

    
   var showTishi();//开启5秒计时
   var this.scheduleTishi(float dt = 0.0);//计算器执行
   var execTishi(float dt = 0.0);   //箭头的动画
    
   var this.schedulePlayTishi();//开启5秒计时
   var execPlayTishi(float dt = 0.0);//玩耍提示

private:

    var iCanSelectArray;//单子袜子的数组
    var iKnotedSocrsArray;//打结袜子数组

   var iKnotedSocrsIndex;//动画指数
   var isBoxOpen;//抽屉是否打开
   var boxDestion;//触摸点到抽屉位置的距离
   var isTouchBashou;//是否触摸到把手
   var isFirstTeach;//教学提示
   var tagForTeach;
    
    std.map<int, CCPoint> *s_pos_inited;

   var openbox_movetime;//移动的声音判断
   var playTishiNum;//没有操作计时
   var isPlaying; //是否在进行操作
};

#endif
