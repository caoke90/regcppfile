//
//  NYGame52Fighting.cpp
//  mathKgIII_a
//
//  Created by nieying on 14-4-28.
//
//

#include "NYGame52Fighting.h"
#include "SimpleAudioEngine.h"
using namespace CocosDenshion;
NYGame52Fighting::~NYGame52Fighting()
{
    
    CCSpriteFrameCache::sharedSpriteFrameCache()->removeSpriteFramesFromFile(m162imageList);
    CCTextureCache::sharedTextureCache()->removeUnusedTextures();
    CCTextureCache::sharedTextureCache()->removeAllTextures();
    
    haiChongArray->release();
    haiChongArray = NULL;
    answerStrArray->release();
    answerStrArray = NULL;
    
    rightStrArray->release();
    rightStrArray = NULL;
    wrongStrArray->release();
    wrongStrArray = NULL;
    
    rightSptArray->release();
    rightSptArray = NULL;
    leftSptArray->release();
    leftSptArray = NULL;
    
    leftRightPoiArray->release();
    leftRightPoiArray = NULL;
    this->unLoad();
    
}
CCScene* NYGame52Fighting::scene()
{
    NYGame52Fighting* layer = NYGame52Fighting::create();
    layer->setDelegate(layer);
    CCScene* scene = CCScene::create();
    scene->addChild(layer);
    return scene;
}
bool NYGame52Fighting::init()
{
    if (!SKFightBasic::init()) {
        return false;
    }
    return true;
    
}
void NYGame52Fighting::initPosition()
{
    
    for (int i = 0; i < 3; i++) {
        NYCCPoint* poop = new NYCCPoint();
        poop->initWithXandY(185+317*i,118.5);
        leftRightPoiArray->addObject(poop);
        poop->release();
       
    }
    for (int i = 0; i < 3; i++) {
        NYCCPoint* pop = new NYCCPoint();
        pop->initWithXandY(1250+317*i,118.5);
        leftRightPoiArray->addObject(pop);
        pop->release();
    }
}
void NYGame52Fighting::initHaiPosi()
{
    float add = 1210;
    haiChongPoiArray->addControlPoint(ccp(724.0+add, 1134.0));
    haiChongPoiArray->addControlPoint(ccp(1330.0+add, 1171));
    haiChongPoiArray->addControlPoint(ccp(1086.0+add, 935));
    haiChongPoiArray->addControlPoint(ccp(846.0+add, 700));
    haiChongPoiArray->addControlPoint(ccp(1394.0+add, 791));
    
    haiChongPoiArray->addControlPoint(ccp(586.0+add, 873));
    haiChongPoiArray->addControlPoint(ccp(1020.0+add, 1197));
    haiChongPoiArray->addControlPoint(ccp(1192.0+add, 650));
    haiChongPoiArray->addControlPoint(ccp(1530.0+add, 975));
}
void NYGame52Fighting::preLoad()
{
    SimpleAudioEngine::sharedEngine()->preloadBackgroundMusic(m162BGEfc);
    SimpleAudioEngine::sharedEngine()->preloadEffect(m162duona1Efc);
    SimpleAudioEngine::sharedEngine()->preloadEffect(m162pestschuhauEfc);
    SimpleAudioEngine::sharedEngine()->preloadEffect(m162PestsRunInEfc);
    SimpleAudioEngine::sharedEngine()->preloadEffect(m162rightEfc);
    SimpleAudioEngine::sharedEngine()->preloadEffect(m162wrongEfc);

}
void NYGame52Fighting::unLoad()
{
    SimpleAudioEngine::sharedEngine()->unloadEffect(m162duona1Efc);
    SimpleAudioEngine::sharedEngine()->unloadEffect(m162pestschuhauEfc);
    SimpleAudioEngine::sharedEngine()->unloadEffect(m162PestsRunInEfc);
    SimpleAudioEngine::sharedEngine()->unloadEffect(m162rightEfc);
    SimpleAudioEngine::sharedEngine()->unloadEffect(m162wrongEfc);
}
void NYGame52Fighting::goNextStep()
{

    this->preLoad();
    SimpleAudioEngine::sharedEngine()->playBackgroundMusic(m162BGEfc,true);
    CCSpriteFrameCache::sharedSpriteFrameCache()->addSpriteFramesWithFile(m162imageList);
    showRightN = 0;
    firstComeIn = true;
    
    haiChongArray = new CCArray();
    answerStrArray = new CCArray();
    rightStrArray = new CCArray();
    wrongStrArray = new CCArray();
    numberStrArray = new CCArray();
    leftSptArray = new CCArray();
    rightSptArray = new CCArray();
    leftRightPoiArray = new CCArray();
    
    haiChongPoiArray = CCPointArray::create(9);
    haiChongPoiArray->retain();
    
    SKFightBasic::changeBgPic("res/unit_5/game2/image/m162_01.png");
    SKFightBasic::gameType5();
    
    CCSprite* banSpt = CCSprite::createWithSpriteFrameName("m162_huangban.png");
    banSpt->setPosition(ccp(1037.0,902));
    this->addChild(banSpt,-2); //板的z是-2，板上的害虫是-1，问题的小害虫z 是3；
    //加9个害虫
    for (int i = 0; i < 9; i++) {
        CCSprite* sprite = CCSprite::createWithSpriteFrameName("m130_xhc_1.png");
        sprite->setPosition(ccp(-500,-500));//1200-(240+arcY)*i
        this->addChild(sprite,-1);
        haiChongArray->addObject(sprite);
    }
    anwerChongSpt = CCSprite::createWithSpriteFrameName("m130_xhc_1.png");
    anwerChongSpt->setPosition(ccp(1035.0,1450)); //180
    this->addChild(anwerChongSpt,3);
    anwerChongSpt->setScale(0);
    
    for (int i =0; i < 12; i++) {
        CCString* string = CCString::createWithFormat("%d",i+1);
        answerStrArray->addObject(string);
    }
    for (int i = 0; i < 3; i++) {
        CCSprite* leSprite = CCSprite::createWithSpriteFrameName("m158num0001.png");
        leSprite->setPosition(ccp(-500,-500));
        this->addChild(leSprite,99);
        leftSptArray->addObject(leSprite);
        leSprite->setScale(0);
        
        CCSprite* riSprite = CCSprite::createWithSpriteFrameName("m158num0001.png");
        riSprite->setPosition(ccp(-500,-500));
        this->addChild(riSprite,99);
        rightSptArray->addObject(riSprite);
        riSprite->setScale(0);
        
        if (i == 0) {
            leSprite->setTag(100);
            riSprite->setTag(101);
        }else
        {
            leSprite->setTag(200+i);
            riSprite->setTag(202+i);
        }
    }
    
    this->initHaiPosi();
    this->initPosition();
    this->runAction(CCSequence::create(CCDelayTime::create(0),CCCallFunc::create(this, callfunc_selector(NYGame52Fighting::huanGuan)),NULL));
    this->runAction(CCSequence::create(CCDelayTime::create(0.5),CCCallFunc::create(this, callfunc_selector(NYGame52Fighting::delPlayDuona)),NULL));
    
}
void NYGame52Fighting::delPlayDuona()
{
    SimpleAudioEngine::sharedEngine()->playEffect(m162duona1Efc);
}
void NYGame52Fighting::openClick()
{
    this->setTouchEnabled(true);
}
void NYGame52Fighting::huanGuan()
{
    rightStrArray->removeAllObjects();
    wrongStrArray->removeAllObjects();
    showRightN = arc4random()%5+2;
    
    for (int i = 0; i < 100; i++) {
        int aaa = arc4random()%3;
        int bbb = arc4random()%3;
        leftRightPoiArray->exchangeObjectAtIndex(aaa, bbb);
        int ccc = arc4random()%3+3;
        int ddd = arc4random()%3+3;
        leftRightPoiArray->exchangeObjectAtIndex(ccc, ddd);
    }
    
//    CCLog("showRightN=%d",showRightN);
    for (int i =0; i < 6; i++) {
        CCString* string = CCString::createWithFormat("%d",i+1);
        if (string->intValue() != showRightN) {
            numberStrArray->addObject(string);
        }
    }
    int arc456 = arc4random()%answerStrArray->count();
    CCString* anwser456 = (CCString*)answerStrArray->objectAtIndex(arc456);
    CCString* anwStr = CCString::createWithFormat("m130_xhc_%d.png",anwser456->intValue()*2-1);
    anwerChongSpt->setDisplayFrame(CCSpriteFrameCache::sharedSpriteFrameCache()->spriteFrameByName(anwStr->getCString()));
    CCAction* anwerAction = runOneAction(anwser456->intValue()*2-1, 2, "m130_xhc_", 0.45, 0);
    anwerChongSpt->runAction(anwerAction);
    anwerChongSpt->runAction(CCSequence::create(CCScaleTo::create(0, 1.3),CCScaleTo::create(0.1, 1),NULL));
    SimpleAudioEngine::sharedEngine()->playEffect(m162PestsRunInEfc);
    
    if (anwser456->intValue() < 5) {
        for (int i =0; i < 4; i++) {
            CCString* string = CCString::createWithFormat("%d",i+1);
            rightStrArray->addObject(string);
        }
        for (int i =0; i < 8; i++) {
            CCString* string = CCString::createWithFormat("%d",i+5);
            wrongStrArray->addObject(string);
        }
        int riN;
        CCString* rightString = NULL;
        for (int i = 0; i < showRightN; i++) {
            riN = arc4random()%rightStrArray->count();
            rightString = CCString::createWithFormat("m130_xhc_%d.png",((CCString*)rightStrArray->objectAtIndex(riN))->intValue()*2-1);
            CCSprite* haichongSpt = (CCSprite*)haiChongArray->objectAtIndex(i);
            haichongSpt->setDisplayFrame(CCSpriteFrameCache::sharedSpriteFrameCache()->spriteFrameByName(rightString->getCString()));
            haichongSpt->setPosition(haiChongPoiArray->getControlPointAtIndex(i));
            int arcTi = arc4random()%20+40;
            CCAction* rightAction = runOneAction(((CCString*)rightStrArray->objectAtIndex(riN))->intValue()*2-1, 2, "m130_xhc_", (float)arcTi*0.01, 0);
            haichongSpt->runAction(rightAction);
            haichongSpt->runAction(CCEaseSineOut::create(CCMoveBy::create(MOVETIMER, ccp(-1210,0))));
        }
        int wroN;
        CCString* wrongString = NULL;
        for (int i = 0; i < 3; i++) {
            wroN = arc4random()%wrongStrArray->count();
            wrongString = CCString::createWithFormat("m130_xhc_%d.png",((CCString*)wrongStrArray->objectAtIndex(wroN))->intValue()*2-1);
            CCSprite* haichongSpt = (CCSprite*)haiChongArray->objectAtIndex(showRightN+i);
            haichongSpt->setDisplayFrame(CCSpriteFrameCache::sharedSpriteFrameCache()->spriteFrameByName(wrongString->getCString()));
            haichongSpt->setPosition(haiChongPoiArray->getControlPointAtIndex(showRightN+i));
            int arcTi = arc4random()%20+40;
            CCAction* wrAction = runOneAction(((CCString*)wrongStrArray->objectAtIndex(wroN))->intValue()*2-1, 2, "m130_xhc_", (float)arcTi*0.01, 0);
            haichongSpt->runAction(wrAction);
            haichongSpt->runAction(CCEaseSineOut::create(CCMoveBy::create(MOVETIMER, ccp(-1210,0))));
            wrongStrArray->removeObjectAtIndex(wroN);
        }
    }
    else if(anwser456->intValue() < 9 && anwser456->intValue() > 4 )
    {
        for (int i =0; i < 4; i++) {
            CCString* string = CCString::createWithFormat("%d",i+5);
            rightStrArray->addObject(string);
        }
        for (int i =0; i < 8; i++) {
            CCString* string = NULL;
            
            if (i < 4) {
                string = CCString::createWithFormat("%d",i+1);
            }else
            {
                string = CCString::createWithFormat("%d",i+5);
            }
            wrongStrArray->addObject(string);
        }
        int riN;
        CCString* rightString = NULL;
        for (int i = 0; i < showRightN; i++) {
            riN = arc4random()%rightStrArray->count();
            rightString = CCString::createWithFormat("m130_xhc_%d.png",((CCString*)rightStrArray->objectAtIndex(riN))->intValue()*2-1);
            CCSprite* haichongSpt = (CCSprite*)haiChongArray->objectAtIndex(i);
            haichongSpt->setDisplayFrame(CCSpriteFrameCache::sharedSpriteFrameCache()->spriteFrameByName(rightString->getCString()));
            haichongSpt->setPosition(haiChongPoiArray->getControlPointAtIndex(i));
            int arcTi = arc4random()%20+40;
            CCAction* rightAction = runOneAction(((CCString*)rightStrArray->objectAtIndex(riN))->intValue()*2-1, 2, "m130_xhc_", (float)arcTi*0.01, 0);
            haichongSpt->runAction(rightAction);
            haichongSpt->runAction(CCEaseSineOut::create(CCMoveBy::create(MOVETIMER, ccp(-1210,0))));
        }
        int wroN;
        CCString* wrongString = NULL;
        for (int i = 0; i < 3; i++) {
            wroN = arc4random()%wrongStrArray->count();
            wrongString = CCString::createWithFormat("m130_xhc_%d.png",((CCString*)wrongStrArray->objectAtIndex(wroN))->intValue()*2-1);
            CCSprite* haichongSpt = (CCSprite*)haiChongArray->objectAtIndex(showRightN+i);
            haichongSpt->setDisplayFrame(CCSpriteFrameCache::sharedSpriteFrameCache()->spriteFrameByName(wrongString->getCString()));
            haichongSpt->setPosition(haiChongPoiArray->getControlPointAtIndex(showRightN+i));
            int arcTi = arc4random()%20+40;
            CCAction* wrAction = runOneAction(((CCString*)wrongStrArray->objectAtIndex(wroN))->intValue()*2-1, 2, "m130_xhc_", (float)arcTi*0.01, 0);
            haichongSpt->runAction(wrAction);
            haichongSpt->runAction(CCEaseSineOut::create(CCMoveBy::create(MOVETIMER, ccp(-1210,0))));
            wrongStrArray->removeObjectAtIndex(wroN);
        }
    }
    else if(anwser456->intValue() < 13 && anwser456->intValue() > 8 )
    {
        for (int i =0; i < 4; i++) {
            CCString* string = CCString::createWithFormat("%d",i+9);
            rightStrArray->addObject(string);
        }
        for (int i =0; i < 8; i++) {
            CCString* string = CCString::createWithFormat("%d",i+1);
            wrongStrArray->addObject(string);
        }
        int riN;
        CCString* rightString = NULL;
        for (int i = 0; i < showRightN; i++) {
            riN = arc4random()%rightStrArray->count();
            rightString = CCString::createWithFormat("m130_xhc_%d.png",((CCString*)rightStrArray->objectAtIndex(riN))->intValue()*2-1);
            CCSprite* haichongSpt = (CCSprite*)haiChongArray->objectAtIndex(i);
            haichongSpt->setDisplayFrame(CCSpriteFrameCache::sharedSpriteFrameCache()->spriteFrameByName(rightString->getCString()));
            haichongSpt->setPosition(haiChongPoiArray->getControlPointAtIndex(i));
            int arcTi = arc4random()%20+40;
            CCAction* rightAction = runOneAction(((CCString*)rightStrArray->objectAtIndex(riN))->intValue()*2-1, 2, "m130_xhc_", (float)arcTi*0.01, 0);
            haichongSpt->runAction(rightAction);
            haichongSpt->runAction(CCEaseSineOut::create(CCMoveBy::create(MOVETIMER, ccp(-1210,0))));
        }
        int wroN;
        CCString* wrongString = NULL;
        for (int i = 0; i < 3; i++) {
            wroN = arc4random()%wrongStrArray->count();
            wrongString = CCString::createWithFormat("m130_xhc_%d.png",((CCString*)wrongStrArray->objectAtIndex(wroN))->intValue()*2-1);
            CCSprite* haichongSpt = (CCSprite*)haiChongArray->objectAtIndex(showRightN+i);
            haichongSpt->setDisplayFrame(CCSpriteFrameCache::sharedSpriteFrameCache()->spriteFrameByName(wrongString->getCString()));
            haichongSpt->setPosition(haiChongPoiArray->getControlPointAtIndex(showRightN+i));
            int arcTi = arc4random()%20+40;
            CCAction* wrAction = runOneAction(((CCString*)wrongStrArray->objectAtIndex(wroN))->intValue()*2-1, 2, "m130_xhc_", (float)arcTi*0.01, 0);
            haichongSpt->runAction(wrAction);
            haichongSpt->runAction(CCEaseSineOut::create(CCMoveBy::create(MOVETIMER, ccp(-1210,0))));
            wrongStrArray->removeObjectAtIndex(wroN);
        }
    }
    
    CCString* rightN = NULL;
    CCString* wrongN = NULL;
    
    for (int i = 0; i < 2; i++) {
        rightN = CCString::createWithFormat("m158num%04d.png",showRightN);
        ((CCSprite*)this->getChildByTag(100+i))->setDisplayFrame(CCSpriteFrameCache::sharedSpriteFrameCache()->spriteFrameByName(rightN->getCString()));
        float x1 = ((NYCCPoint*)leftRightPoiArray->objectAtIndex(i*3))->x;
        float y1 = ((NYCCPoint*)leftRightPoiArray->objectAtIndex(i*3))->y;
        ((CCSprite*)this->getChildByTag(100+i))->setPosition(ccp(x1, y1));
        
        int value = arc4random()%numberStrArray->count();
        int woro = ((CCString*)numberStrArray->objectAtIndex(value))->intValue();
        wrongN = CCString::createWithFormat("m158num%04d.png",woro);
        ((CCSprite*)this->getChildByTag(201+i))->setDisplayFrame(CCSpriteFrameCache::sharedSpriteFrameCache()->spriteFrameByName(wrongN->getCString()));
        float x2 = ((NYCCPoint*)leftRightPoiArray->objectAtIndex(i+1))->x;
        float y2 = ((NYCCPoint*)leftRightPoiArray->objectAtIndex(i+1))->y;
        ((CCSprite*)this->getChildByTag(201+i))->setPosition(ccp(x2, y2));
        
        ((CCSprite*)this->getChildByTag(203+i))->setDisplayFrame(CCSpriteFrameCache::sharedSpriteFrameCache()->spriteFrameByName(wrongN->getCString()));
        float x3 = ((NYCCPoint*)leftRightPoiArray->objectAtIndex(i+4))->x;
        float y3 = ((NYCCPoint*)leftRightPoiArray->objectAtIndex(i+4))->y;
        ((CCSprite*)this->getChildByTag(203+i))->setPosition(ccp(x3, y3));
        numberStrArray->removeObjectAtIndex(value);
    }
    for (int i = 0; i < leftSptArray->count(); i++) {
        CCSprite* leftSprite = (CCSprite*)leftSptArray->objectAtIndex(i);
        CCSprite* riSprite = (CCSprite*)rightSptArray->objectAtIndex(i);
        leftSprite->runAction(CCSequence::create(CCDelayTime::create(MOVETIMER-1),CCEaseSineIn::create(CCScaleTo::create(0.35, 1.2)),CCRepeat::create(CCSequence::create(CCRotateBy::create(0.05, -15),CCRotateBy::create(0.1, 30),CCRotateBy::create(0.05, -15),NULL), 2),CCDelayTime::create(0.1),CCScaleTo::create(0.15, 1),NULL));
        riSprite->runAction(CCSequence::create(CCDelayTime::create(MOVETIMER-1),CCEaseSineIn::create(CCScaleTo::create(0.35, 1.2)),CCRepeat::create(CCSequence::create(CCRotateBy::create(0.05, -15),CCRotateBy::create(0.1, 30),CCRotateBy::create(0.05, -15),NULL), 2),CCDelayTime::create(0.1),CCScaleTo::create(0.15, 1),NULL));

    }
    numberStrArray->removeAllObjects();
    
    if (firstComeIn) {
        firstComeIn = false;
        this->runAction(CCSequence::create(CCDelayTime::create(6),CCCallFunc::create(this, callfunc_selector(NYGame52Fighting::openClick)),NULL));
    }
    else
    {
        this->runAction(CCSequence::create(CCDelayTime::create(MOVETIMER),CCCallFunc::create(this, callfunc_selector(NYGame52Fighting::openClick)),NULL));
    }
}
CCAction* NYGame52Fighting::runOneAction(int start,int frameCount,const char* formort,float time,int repeat)
{
    CCArray* array = CCArray::create();
    for (int i = start; i < frameCount+start; i++)
    {
        CCString*  string = CCString::createWithFormat("%s%d.png",formort,i);
        CCSpriteFrame* frame = CCSpriteFrameCache::sharedSpriteFrameCache()-> spriteFrameByName(string->getCString());
        array ->addObject(frame);
    }
    CCAnimation* animation = CCAnimation::createWithSpriteFrames(array,time);
    CCAnimate* Animate = CCAnimate::create(animation);
    if (repeat == 0) {
        return (CCRepeatForever::create(Animate));
    }else
    {
        return (CCRepeat::create(Animate,repeat));
    }
}
void NYGame52Fighting::ccTouchesBegan(CCSet *pTouches, CCEvent *pEvent)
{
    int temp = 0;
    for (CCSetIterator it = pTouches->begin(); it != pTouches->end(); it++) {
        CCTouch* touch = (CCTouch*)*it;
        CCPoint location = touch->getLocation();
        for (int i = 0; i < leftSptArray->count(); i++) {
            CCSprite* leftSpt = (CCSprite*)leftSptArray->objectAtIndex(i);
            if (leftSpt->boundingBox().containsPoint(location))
            {
                leftSpt->runAction(CCSequence::create(CCScaleTo::create(0.1f, 1.3),CCScaleTo::create(0.35f,1),NULL));
                if (leftSpt->getTag() < 120) {
                    temp++;
                    this->setTouchEnabled(false);
                    SKFightBasic::leftWinOnce();
                    SimpleAudioEngine::sharedEngine()->playEffect(m162rightEfc);
                }
                else
                {
                    SimpleAudioEngine::sharedEngine()->playEffect(m162wrongEfc);
                }
            }
        }
        
        for (int i = 0; i < rightSptArray->count(); i++) {
            CCSprite* rightSpt = (CCSprite*)rightSptArray->objectAtIndex(i);
            if (rightSpt->boundingBox().containsPoint(location))
            {
                rightSpt->runAction(CCSequence::create(CCScaleTo::create(0.1f, 1.3),CCScaleTo::create(0.35f,1),NULL));
                if (rightSpt->getTag() < 120) {
                    temp++;
                    this->setTouchEnabled(false);
                    SKFightBasic::rightWinOnce();
                    SimpleAudioEngine::sharedEngine()->playEffect(m162rightEfc);
                }
                else
                {
                    SimpleAudioEngine::sharedEngine()->playEffect(m162wrongEfc);
                }
            }
        }
    }
    
    if (temp == 2) {
        temp--;
    }
    if (temp == 1) {
        this->runAction(CCSequence::create(CCDelayTime::create(0.25),CCCallFunc::create(this, callfunc_selector(NYGame52Fighting::hideSome)),NULL));
    }
  
}
void NYGame52Fighting::hideSome()
{
    
    for (int i = 0; i <showRightN+3; i++) {
        CCSprite* haichong = (CCSprite*)haiChongArray->objectAtIndex(i);
        haichong->runAction(CCEaseSineIn::create(CCMoveBy::create(MOVETIMER, ccp(-1310, 0))));
    }
    SimpleAudioEngine::sharedEngine()->playEffect(m162pestschuhauEfc);
    anwerChongSpt->stopAllActions();
    anwerChongSpt->runAction(CCScaleTo::create(0.25, 0));
    this->runAction(CCSequence::create(CCDelayTime::create(MOVETIMER),CCCallFunc::create(this, callfunc_selector(NYGame52Fighting::deleStopAction)),NULL));
//    this->runAction(CCSequence::create(CCDelayTime::create(MOVETIMER),CCCallFunc::create(this, callfunc_selector(NYGame52Fighting::StopAction)),NULL));
    
    for (int i = 0; i < leftSptArray->count(); i++) {
        CCSprite* leftSprite = (CCSprite*)leftSptArray->objectAtIndex(i);
        CCSprite* riSprite = (CCSprite*)rightSptArray->objectAtIndex(i);
        leftSprite->runAction(CCSequence::create(CCDelayTime::create(0.25),CCEaseSineIn::create(CCScaleTo::create(0.1, 1.2)),CCScaleTo::create(0.35, 0),NULL));
        riSprite->runAction(CCSequence::create(CCDelayTime::create(0.25),CCEaseSineIn::create(CCScaleTo::create(0.1, 1.2)),CCScaleTo::create(0.35, 0),NULL));
    }

    this->runAction(CCSequence::create(CCDelayTime::create(MOVETIMER+0.5),CCCallFunc::create(this, callfunc_selector(NYGame52Fighting::huanGuan)),NULL));

}
void NYGame52Fighting::deleStopAction()
{
    for (int i = 0; i <haiChongArray->count(); i++) {
        CCSprite* haichong = (CCSprite*)haiChongArray->objectAtIndex(i);
        haichong->stopAllActions();
    }
}
void NYGame52Fighting::StopAction()
{
//    anwerChongSpt->stopAllActions();
}
void NYGame52Fighting::ccTouchesMoved(CCSet *pTouches, CCEvent *pEvent)
{
    
}
void NYGame52Fighting::ccTouchesEnded(CCSet *pTouches, CCEvent *pEvent)
{

}
void NYGame52Fighting::ccTouchesCancelled(CCSet *pTouches, CCEvent *pEvent)
{

}
void NYGame52Fighting::registerWithTouchDispatcher()
{
    CCDirector::sharedDirector()->getTouchDispatcher()->addStandardDelegate(this, 0);
}
void NYGame52Fighting::onEnter()
{
    CCLayer::onEnter();
}
void NYGame52Fighting::onExit()
{
    CCLayer::onExit();
}