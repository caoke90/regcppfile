//
//  NYGame521Scene.cpp
//  mathKgIII_a
//
//  Created by nieying on 14-4-28.
//
//

#include "NYGame521Scene.h"
#include "SimpleAudioEngine.h"
using namespace cocos2d;
using namespace CocosDenshion;

NYGame521Scene::~NYGame521Scene()
{
 
    CCSpriteFrameCache::sharedSpriteFrameCache()->removeSpriteFramesFromFile(m130imageList);
    CCTextureCache::sharedTextureCache()->removeUnusedTextures();
    CCTextureCache::sharedTextureCache()->removeAllTextures();
    
    flowerArray->release();
    flowerArray = NULL;
    haiChongSptArray->release();
    haiChongSptArray = NULL;
    stringArray->release();
    stringArray = NULL;
    fourStringArray->release();
    fourStringArray = NULL;
    
    fiveStringArray->release();
    fiveStringArray = NULL;
    
    sixStringArray->release();
    sixStringArray = NULL;
    otherStringArray->release();
    otherStringArray = NULL;
    
    haiChongPoiArray->release();
    haiChongPoiArray = NULL;
    
    otherNumArray->release();
    otherNumArray = NULL;
    this->unLoad();
    
}
CCScene* NYGame521Scene::scene()
{
    NYGame521Scene* layer = NYGame521Scene::create();
    CCScene* scene = CCScene::create();
    scene->addChild(layer);
    return scene;
}
void NYGame521Scene::preLoad()
{
    SimpleAudioEngine::sharedEngine()->preloadBackgroundMusic(m130BGEfc);
    SimpleAudioEngine::sharedEngine()->preloadEffect(m130pestRuninEfc);
    SimpleAudioEngine::sharedEngine()->preloadEffect(m130DuoNa1Efc);
    SimpleAudioEngine::sharedEngine()->preloadEffect(m130DuoNa2Efc);
    SimpleAudioEngine::sharedEngine()->preloadEffect(m130DuoNa3Efc);
    SimpleAudioEngine::sharedEngine()->preloadEffect(m130eatFlowersEfc);
    SimpleAudioEngine::sharedEngine()->preloadEffect(m130faitureEfc);
    SimpleAudioEngine::sharedEngine()->preloadEffect(m130TimrEfc);
    SimpleAudioEngine::sharedEngine()->preloadEffect(m130xiaochuEfc);
    SimpleAudioEngine::sharedEngine()->preloadEffect(m130victoryEfc);
    SimpleAudioEngine::sharedEngine()->preloadEffect(m130wrongEfc);
    SimpleAudioEngine::sharedEngine()->preloadEffect(m130pestsWhiningEfc);

}
void NYGame521Scene::unLoad()
{
    SimpleAudioEngine::sharedEngine()->unloadEffect(m130pestRuninEfc);
    SimpleAudioEngine::sharedEngine()->unloadEffect(m130DuoNa1Efc);
    SimpleAudioEngine::sharedEngine()->unloadEffect(m130DuoNa2Efc);
    SimpleAudioEngine::sharedEngine()->unloadEffect(m130DuoNa3Efc);
    SimpleAudioEngine::sharedEngine()->unloadEffect(m130eatFlowersEfc);
    SimpleAudioEngine::sharedEngine()->unloadEffect(m130faitureEfc);
    SimpleAudioEngine::sharedEngine()->unloadEffect(m130TimrEfc);
    SimpleAudioEngine::sharedEngine()->unloadEffect(m130xiaochuEfc);
    SimpleAudioEngine::sharedEngine()->unloadEffect(m130victoryEfc);
    SimpleAudioEngine::sharedEngine()->unloadEffect(m130wrongEfc);
    SimpleAudioEngine::sharedEngine()->unloadEffect(m130pestsWhiningEfc);
}
bool NYGame521Scene::init()
{
    if (!NYPublicScene::init()) {
        return false;
    }

    this->preLoad();
    flowerArray = new CCArray();
    haiChongSptArray = new CCArray();
    stringArray = new CCArray();
    fourStringArray = new CCArray();
    fiveStringArray = new CCArray();
    sixStringArray = new CCArray();
    otherStringArray = new CCArray();
    otherNumArray = new CCArray();
    SimpleAudioEngine::sharedEngine()->playBackgroundMusic(m130BGEfc, true);
    
    haiChongPoiArray = CCPointArray::create(26);
    haiChongPoiArray->retain();
    
    jiluTimes = 0;
    totalTime = 35;
    firstTag = -1;
    secondTag = -1;
    showMany = 0;
    rightN = 0;
    realRightN = -1;
    
    dontPlayDouble = false;
    playSecBoo = false;
    
    CCSpriteFrameCache::sharedSpriteFrameCache()->addSpriteFramesWithFile(m130imageList);
    CCSprite* bg = CCSprite::create(m130BG);
    bg->setPosition(ccp(1024, 768));
    this->addChild(bg,-1);

    for (int i = 0; i < 4; i++) {
        CCString* string4 = CCString::createWithFormat("%d",i*3+1);
        fourStringArray->addObject(string4);

        CCString* string5 = CCString::createWithFormat("%d",i*3+13);
        fiveStringArray->addObject(string5);
        
        CCString* string6 = CCString::createWithFormat("%d",i*3+25);
        sixStringArray->addObject(string6);
    }
    
    this->addTimer();
    this->initHaiPosition();

    for (int i = 0; i < 5; ++i) {
        CCSprite* sprite = CCSprite::createWithSpriteFrameName("m130_hua1.png");
        sprite->setTag(5+i);
        if (i ==0) {
            sprite->setPosition(ccp(172.0,1163));
        }else if (i ==1) {
            sprite->setPosition(ccp(161.0,935.0));
        }
        else if (i ==2) {
            sprite->setPosition(ccp(187.0,692));
        }
        else if (i ==3) {
            sprite->setPosition(ccp(172.0,454));
        }
        else if (i ==4) {
            sprite->setPosition(ccp(172.0,232.0));
        }
        this->addChild(sprite,2);
        flowerArray->addObject(sprite);
        int timr = arc4random()%5+3;
        sprite->runAction(CCRepeat::create(CCSequence::create(CCDelayTime::create(timr),CCScaleTo::create(0.15, 1.15),CCScaleTo::create(0.35, 1.0),NULL), -1));

    }
    paopaoOneSpt = CCSprite::createWithSpriteFrameName("m130_paopao1.png");
    paopaoOneSpt->setPosition(ccp(-500,-500));
    this->addChild(paopaoOneSpt,100);
    
    paopaoTwoSpt = CCSprite::createWithSpriteFrameName("m130_paopao1.png");
    paopaoTwoSpt->setPosition(ccp(-500,-500));
    this->addChild(paopaoTwoSpt,100);
    //加26 个害虫
    for (int i = 0; i < 26; i++) {
        CCSprite* sprite = CCSprite::createWithSpriteFrameName("m130_xhc_1.png");
        sprite->setPosition(ccp(-500,-500));//1200-(240+arcY)*i
        this->addChild(sprite,20);
        haiChongSptArray->addObject(sprite);
        //加光晕
        CCSprite* light = CCSprite::createWithSpriteFrameName("m155light.png");
//        CCPoint lightPo = returLightPo(i);
        light->setPosition(ccp(85, 80));
        sprite->addChild(light,-1,1);
        light->setScale(0.8);
        light->setOpacity(180);
        light->setVisible(false);
    }
    this->runAction(CCSequence::create(CCDelayTime::create(0),CCCallFunc::create(this, callfunc_selector(NYGame521Scene::addHaiChong)),NULL));
    
    return true;
    
}
void NYGame521Scene::addHaiChong()
{
    
    rightN = 0;
    this->setTouchEnabled(true);
    CCString* duonaStr = CCString::createWithFormat("res/unit_5/game2/audio/m130duona%d.mp3",showMany+1);
    SimpleAudioEngine::sharedEngine()->playEffect(duonaStr->getCString());
    for (int i = 0; i < haiChongSptArray->count(); i++) {
        CCSprite* Sprite = (CCSprite*)haiChongSptArray->objectAtIndex(i);
        Sprite->stopAllActions();
        Sprite->setScale(1);
    }
    for (int i = 0; i < flowerArray->count(); i++) {
        CCSprite* Sprite = (CCSprite*)flowerArray->objectAtIndex(i);
        Sprite->setOpacity(255);
    }
    if (otherNumArray->count() !=0 ) {
        otherNumArray->removeAllObjects();
    }
    if (showMany == 0) {
        //干扰选项ccstring
        CCString* haiSstring = NULL;
        for (int i = 0; i < 8; i++) {
            CCString* string = CCString::createWithFormat("%d",i*3+13);
            otherStringArray->addObject(string);
        }
        //加正确的精灵
        for (int i = 0; i < 8; i++) {
            CCString* fourstr = NULL;
            if (i < 4) {
                fourstr =(CCString*)fourStringArray->objectAtIndex(i);
            }else
            {
                fourstr =(CCString*)fourStringArray->objectAtIndex(i-4);
            }
            haiSstring = CCString::createWithFormat("m130_xhc_%d.png",fourstr->intValue());
            for (int j = 0; j < 2; j++) {
                CCSprite* sprite = (CCSprite*)haiChongSptArray->objectAtIndex(i*2+j);
                sprite->setDisplayFrame(CCSpriteFrameCache::sharedSpriteFrameCache()->spriteFrameByName(haiSstring->getCString()));
                if (i < 4) {
                    sprite->setTag(20+i*2);
                }else
                {
                    sprite->setTag(20+(i-4)*2);
                }
                int time = arc4random()%20+35;
                CCAction* action = runOAction(fourstr->intValue()+1, 2, "m130_xhc_", (float)time*0.01, 0);
                sprite->runAction(action);
            }
        }
        
        //加干扰的精灵
        for (int i = 0; i < 5; i++) {
            int orN = arc4random()%otherStringArray->count();
            CCString* otherStr =(CCString*)otherStringArray->objectAtIndex(orN);
            otherNumArray->addObject(otherStr);
            haiSstring = CCString::createWithFormat("m130_xhc_%d.png",otherStr->intValue());
            for (int j = 0; j < 2; j++) {
                CCSprite* sprite = (CCSprite*)haiChongSptArray->objectAtIndex(16+i*2+j);
                sprite->setDisplayFrame(CCSpriteFrameCache::sharedSpriteFrameCache()->spriteFrameByName(haiSstring->getCString()));
                sprite->setTag(60+i*2+j);//60+i*2
                int time = arc4random()%20+35;
                CCAction* action = runOAction(otherStr->intValue()+1, 2, "m130_xhc_", (float)time*0.01, 0);
                sprite->runAction(action);
            }
            otherStringArray->removeObjectAtIndex(orN);
        }
        
    }
    else if (showMany == 1)
    {
        //干扰选项ccstring
        CCString* haiSstring = NULL;
        for (int i = 0; i < 8; i++) {
            CCString* string = NULL;
            if (i < 4) {
                string = CCString::createWithFormat("%d",i*3+1);
            }
            else
            {
                string = CCString::createWithFormat("%d",(i-4)*3+25);
            }
            otherStringArray->addObject(string);
        }
        //加正确的精灵
        for (int i = 0; i < 8; i++) {
            CCString* fivestr = NULL;
            if (i < 4) {
                fivestr =(CCString*)fiveStringArray->objectAtIndex(i);
            }else
            {
                fivestr =(CCString*)fiveStringArray->objectAtIndex(i-4);
            }
            haiSstring = CCString::createWithFormat("m130_xhc_%d.png",fivestr->intValue());
            for (int j = 0; j < 2; j++) {
                CCSprite* sprite = (CCSprite*)haiChongSptArray->objectAtIndex(i*2+j);
                sprite->setDisplayFrame(CCSpriteFrameCache::sharedSpriteFrameCache()->spriteFrameByName(haiSstring->getCString()));
                if (i < 4) {
                    sprite->setTag(20+i*2);
                }else
                {
                    sprite->setTag(20+(i-4)*2);
                }
                int time = arc4random()%20+35;
                CCAction* action = runOAction(fivestr->intValue()+1, 2, "m130_xhc_", (float)time*0.01, 0);
                sprite->runAction(action);
            }
        }
        //加干扰的精灵
        for (int i = 0; i < 5; i++) {
            int orN = arc4random()%otherStringArray->count();
            CCString* otherStr =(CCString*)otherStringArray->objectAtIndex(orN);
            otherNumArray->addObject(otherStr);
            haiSstring = CCString::createWithFormat("m130_xhc_%d.png",otherStr->intValue());
            for (int j = 0; j < 2; j++) {
                CCSprite* sprite = (CCSprite*)haiChongSptArray->objectAtIndex(16+i*2+j);
                sprite->setDisplayFrame(CCSpriteFrameCache::sharedSpriteFrameCache()->spriteFrameByName(haiSstring->getCString()));
                sprite->setTag(60+i*2+j);//60+i*2
                int time = arc4random()%20+35;
                CCAction* action = runOAction(otherStr->intValue()+1, 2, "m130_xhc_", (float)time*0.01, 0);
                sprite->runAction(action);
            }
            otherStringArray->removeObjectAtIndex(orN);
        }
    }
    
    else if (showMany == 2)
    {
        //干扰选项ccstring
        CCString* haiSstring = NULL;
        for (int i = 0; i < 8; i++) {
            CCString* string = NULL;
            string = CCString::createWithFormat("%d",i*3+1);
            otherStringArray->addObject(string);
        }
        //加正确的精灵
        for (int i = 0; i < 8; i++) {
            CCString* sixstr = NULL;
            if (i < 4) {
                sixstr =(CCString*)sixStringArray->objectAtIndex(i);
            }else
            {
                sixstr =(CCString*)sixStringArray->objectAtIndex(i-4);
            }
            haiSstring = CCString::createWithFormat("m130_xhc_%d.png",sixstr->intValue());
            for (int j = 0; j < 2; j++) {
                CCSprite* sprite = (CCSprite*)haiChongSptArray->objectAtIndex(i*2+j);
                sprite->setDisplayFrame(CCSpriteFrameCache::sharedSpriteFrameCache()->spriteFrameByName(haiSstring->getCString()));
                if (i < 4) {
                    sprite->setTag(20+i*2);
                }else
                {
                    sprite->setTag(20+(i-4)*2);
                }
                int time = arc4random()%20+35;
                CCAction* action = runOAction(sixstr->intValue()+1, 2, "m130_xhc_", (float)time*0.01, 0);
                sprite->runAction(action);
            }
        }
        //加干扰的精灵
        for (int i = 0; i < 5; i++) {
            int orN = arc4random()%otherStringArray->count();
            CCString* otherStr =(CCString*)otherStringArray->objectAtIndex(orN);
            otherNumArray->addObject(otherStr);
            haiSstring = CCString::createWithFormat("m130_xhc_%d.png",otherStr->intValue());
            for (int j = 0; j < 2; j++) {
                CCSprite* sprite = (CCSprite*)haiChongSptArray->objectAtIndex(16+i*2+j);
                sprite->setDisplayFrame(CCSpriteFrameCache::sharedSpriteFrameCache()->spriteFrameByName(haiSstring->getCString()));
                sprite->setTag(60+i*2+j);//60+i*2
                int time = arc4random()%20+35;
                CCAction* action = runOAction(otherStr->intValue()+1, 2, "m130_xhc_", (float)time*0.01, 0);
                sprite->runAction(action);
            }
            otherStringArray->removeObjectAtIndex(orN);
        }
    }
    otherStringArray->removeAllObjects();
    
    for (int i = 0; i < 100; i++) {
        int aaa = arc4random()%haiChongSptArray->count();
        int bbb = arc4random()%haiChongSptArray->count();
        haiChongSptArray->exchangeObjectAtIndex(aaa, bbb);
    }
    for (int i = 0; i < haiChongSptArray->count(); i++) {
        CCSprite* sprite = (CCSprite*)haiChongSptArray->objectAtIndex(i);
        sprite->setPosition(haiChongPoiArray->getControlPointAtIndex(i));
        sprite->setScale(1);
        sprite->getChildByTag(1)->runAction(CCHide::create());
    }
    this->moveToLeft();
}
void NYGame521Scene::addTimer()
{
    CCSprite *timerBg = CCSprite::createWithSpriteFrameName("m160_tiao0001.png");
    timerBg->setPosition(ccp(1024, 1437.0));
    this->addChild(timerBg,2);
    timerBg->setScaleX(0.95);
    
    CCSprite *timBg = CCSprite::createWithSpriteFrameName("m160_tiao0003.png");
    timBg->setPosition(ccp(1038.0, 1438.5));
    this->addChild(timBg,4);
    
    progressTimer = CCProgressTimer::create(CCSprite::createWithSpriteFrameName("m160_tiao0002.png"));
    progressTimer->setPosition(ccp(1035.5, 1437.3));
    this->addChild(progressTimer,6);
    progressTimer->setType(kCCProgressTimerTypeBar);
    progressTimer->setMidpoint(ccp(1, 1));
    progressTimer->setBarChangeRate(ccp(1, 0));
    
}
void NYGame521Scene::moveToLeft()
{
    float timerT;
    
    if (playSecBoo) {
        for (int i = 0; i < haiChongSptArray->count(); i++) {
            CCSprite* sprite = (CCSprite*)haiChongSptArray->objectAtIndex(i);
            sprite->runAction(CCEaseSineInOut::create(CCMoveBy::create(MOVETIMERONE, ccp(-ADDDISTANCE, 0))));
        }
        timerT = 18;
        realRightN = 8;
    }
    else
    {
        int wNum;
        int ershinum = 0;
        int erernum = 0;
        int ersinum = 0;
        int erliunum = 0;
        int objNum1;
        int objNum2;
        int objNum3;
        int objNum4;

        if (showMany == 0) {
            timerT = 14;
            realRightN = 4;
            wNum = 64;
            objNum1 = 2;
            objNum2 = 2;
            objNum3 = 2;
            objNum4 = 2;
        }
        else if (showMany == 1) {
            timerT = 18;
            realRightN = 6;
            wNum = 66;
            objNum1 = 0;
            objNum2 = 0;
            objNum3 = 2;
            objNum4 = 2;
        }
        else if (showMany == 2) {
            timerT = 20;
            realRightN = 8;
            wNum = 5;
            objNum1 = 0;
            objNum2 = 0;
            objNum3 = 0;
            objNum4 = 0;
            wNum = 70;
        }

        CCArray* newArray = CCArray::create();
        for (int j = 0; j < haiChongSptArray->count(); j++) {
            CCSprite* chong = (CCSprite*)haiChongSptArray->objectAtIndex(j);
            chong->runAction(CCEaseSineInOut::create(CCMoveBy::create(MOVETIMERONE, ccp(-ADDDISTANCE, 0))));
            if (chong->getTag() == 20 && ershinum < objNum1) {
                newArray->addObject(chong);
                ershinum++;
            }
            if (chong->getTag() == 22 && erernum < objNum2) {
                newArray->addObject(chong);
                erernum++;
            }
            if (chong->getTag() == 24 && ersinum < objNum3) {
                newArray->addObject(chong);
                ersinum++;
            }
            if (chong->getTag() == 26 && erliunum < objNum4) {
                newArray->addObject(chong);
                erliunum++;
            }
            if (chong->getTag() >= wNum) {
                
                newArray->addObject(chong);
            }
        }
        for (int i = 0; i < newArray->count(); i++) {
            CCSprite* chong = (CCSprite*)newArray->objectAtIndex(i);
            chong->setScale(0);
        }
    }

    SimpleAudioEngine::sharedEngine()->playEffect(m130pestRuninEfc);
    this->runAction(CCSequence::create(CCDelayTime::create(MOVETIMERONE),CCCallFunc::create(this, callfunc_selector(NYGame521Scene::delePlayTimeEfc)),NULL));
    progressTimer->runAction(CCSequence::create(CCDelayTime::create(MOVETIMERONE),CCProgressTo::create(timerT, 100),CCCallFunc::create(this, callfunc_selector(NYGame521Scene::isEatFlowerOrNot)),NULL));
    
}
void NYGame521Scene::delePlayTimeEfc()
{
    timrEfc = 1;
    timrEfc = SimpleAudioEngine::sharedEngine()->playEffect(m130TimrEfc,true);
}
void NYGame521Scene::isEatFlowerOrNot()
{
    if (dontPlayDouble == false) {
        if (rightN == realRightN) {
            
            this->setTouchEnabled(false);
            SimpleAudioEngine::sharedEngine()->playEffect(m130victoryEfc);
            CCParticleSystemQuad* particle =  PersonalApi::getRandomParticle();
            this->addChild(particle,100);
            this->runAction(CCSequence::create(CCDelayTime::create(0.5),CCCallFunc::create(this, callfunc_selector(NYGame521Scene::hideSome)),NULL));
        }
    }
  
    if (rightN < realRightN)
    {
        this->setTouchEnabled(false);
        SimpleAudioEngine::sharedEngine()->stopEffect(timrEfc);
        SimpleAudioEngine::sharedEngine()->playEffect(m130faitureEfc);
        this->runAction(CCSequence::create(CCDelayTime::create(0.5),CCCallFunc::create(this, callfunc_selector(NYGame521Scene::playPestJianjiao)),NULL));
        if (jiluTimes != 0) {
            jiluTimes = 0;
            this->getChildByTag(firstTag)->setTag(firstTag-100);
            this->getChildByTag(firstTag-100)->getChildByTag(1)->runAction(CCHide::create());
            firstTag = -1;
        }
        for (int i = 0; i < haiChongSptArray->count(); i++) {
            CCSprite* sprite = (CCSprite*)haiChongSptArray->objectAtIndex(i);
            if (sprite->getTag() < 59 && sprite->getScale() != 0 ) {
                sprite->runAction(CCSequence::create(CCScaleTo::create(0.15,1.2),CCScaleTo::create(0.5,0),NULL));
            }else if (sprite->getTag() > 110)
            {
                sprite->runAction(CCSequence::create(CCScaleTo::create(0.15,1.2),CCScaleTo::create(0.5,0),NULL));
                sprite->getChildByTag(1)->runAction(CCHide::create());
            }
        }
        for (int i = 0; i < 5; i++) {
            CCSprite* flower = (CCSprite*)flowerArray->objectAtIndex(i);
            this->getChildByTag(60+i*2)->runAction(CCEaseSineIn::create(CCMoveTo::create(1.5, ccp(flower->getPositionX()+180, flower->getPositionY()+40))));
            this->getChildByTag(61+i*2)->stopAllActions();
            this->getChildByTag(61+i*2)->runAction(CCSequence::create(CCScaleTo::create(0.15,1.2),CCScaleTo::create(0.5,0),NULL));

        }
        this->runAction(CCSequence::create(CCDelayTime::create(1.5),CCCallFunc::create(this, callfunc_selector(NYGame521Scene::playEatAction)),NULL));
    }
 
}
void NYGame521Scene::playPestJianjiao()
{
    SimpleAudioEngine::sharedEngine()->playEffect(m130pestsWhiningEfc);
}
void NYGame521Scene::playEatAction()
{
    
    if (jiluTimes != 0) {
        jiluTimes = 0;
        this->getChildByTag(firstTag)->setTag(firstTag-100);
        this->getChildByTag(firstTag-100)->getChildByTag(1)->runAction(CCHide::create());
        firstTag = -1;
    }
    SimpleAudioEngine::sharedEngine()->playEffect(m130eatFlowersEfc);
    for (int i = 0; i < 5; i++) {
        this->getChildByTag(60+i*2)->stopAllActions();
        CCString* nnn = (CCString*)otherNumArray->objectAtIndex(i);
        CCAction* oneAction = runOAction(nnn->intValue(), 2, "m130_xhc_", 0.3, 4);
        this->getChildByTag(60+i*2)->runAction(CCSequence::create(CCDelayTime::create(0.1),oneAction,CCDelayTime::create(0.5),CCScaleTo::create(0.3, 0),NULL));
    }
    for (int i = 0; i < flowerArray->count(); i++) {
        CCSprite* flower = (CCSprite*)flowerArray->objectAtIndex(i);
        flower->runAction(CCFadeOut::create(0.6*4));
    }
    progressTimer->stopAllActions();
    progressTimer->setPercentage(0);
    if (showMany == 2) {
        showMany = -1;
    }
    showMany++;
  
    this->runAction(CCSequence::create(CCDelayTime::create(0.6*4+2),CCCallFunc::create(this, callfunc_selector(NYGame521Scene::addHaiChong)),NULL));

}
void NYGame521Scene::hideSome()
{
    
    SimpleAudioEngine::sharedEngine()->stopEffect(timrEfc);
    SimpleAudioEngine::sharedEngine()->playEffect(m130victoryEfc);
    if (dontPlayDouble) {
        dontPlayDouble = false;
    }
    progressTimer->stopAllActions();
    progressTimer->setPercentage(0);
    if (showMany == 2) {
        showMany = -1;
        playSecBoo = true;
    }
    showMany++;
    for (int i = 0; i < haiChongSptArray->count(); i++) {
        CCSprite* Sprite = (CCSprite*)haiChongSptArray->objectAtIndex(i);
        if (Sprite->getScale() != 0) {
            Sprite->runAction(CCSequence::create(CCScaleTo::create(0.15,1.2),CCScaleTo::create(0.5,0),NULL));
        }
    }
    this->runAction(CCSequence::create(CCDelayTime::create(3),CCCallFunc::create(this, callfunc_selector(NYGame521Scene::addHaiChong)),NULL));
    
}
bool NYGame521Scene::ccTouchBegan(cocos2d::CCTouch *pTouch, cocos2d::CCEvent *pEvent)
{

    CCPoint location = convertTouchToNodeSpace(pTouch);
    for (int i = 0; i < haiChongSptArray->count(); i++) {
        CCSprite* Sprite = (CCSprite*)haiChongSptArray->objectAtIndex(i);
        if (Sprite->boundingBox().containsPoint(location) && Sprite->getTag() < 85) {
            jiluTimes++;
            if (jiluTimes == 1) {
                firstTag = Sprite->getTag();
                Sprite->setTag(firstTag+100);
                firstTag = firstTag+100;
                Sprite->getChildByTag(1)->runAction(CCShow::create());
                
            }else if (jiluTimes == 2)
            {
                this->setTouchEnabled(false);
                secondTag = Sprite->getTag();
                Sprite->getChildByTag(1)->runAction(CCSequence::create(CCShow::create(),CCDelayTime::create(0.3),CCHide::create(),NULL));
                this->getChildByTag(firstTag)->getChildByTag(1)->runAction(CCSequence::create(CCShow::create(),CCDelayTime::create(0.3),CCHide::create(),NULL));

                if (firstTag == secondTag+100) {
                    
                    rightN++;
                    SimpleAudioEngine::sharedEngine()->playEffect(m130xiaochuEfc);
                    if (rightN == realRightN) {
                        this->setTouchEnabled(false);
                        dontPlayDouble = true;
                        CCParticleSystemQuad* particle =  PersonalApi::getRandomParticle();
                        this->addChild(particle,100);
                        this->runAction(CCSequence::create(CCDelayTime::create(1),CCCallFunc::create(this, callfunc_selector(NYGame521Scene::hideSome)),NULL));
                    }
                    paopaoOneSpt->setPosition(ccp(this->getChildByTag(firstTag)->getPosition().x, this->getChildByTag(firstTag)->getPosition().y-50));
                    CCAction* oneAction = runOAction(1, 3, "m130_paopao", 0.15, 1);
                    paopaoOneSpt->runAction(CCSequence::create(CCShow::create(),oneAction,CCHide::create(),NULL));
                    
                    paopaoTwoSpt->setPosition(ccp(Sprite->getPosition().x, Sprite->getPosition().y-50));
                    CCAction* twoAction = runOAction(1, 3, "m130_paopao", 0.15, 1);
                    paopaoTwoSpt->runAction(CCSequence::create(CCShow::create(),twoAction,CCHide::create(),NULL));
                    this->getChildByTag(firstTag)->runAction(CCScaleTo::create(0.1, 0));
                    Sprite->runAction(CCScaleTo::create(0.1, 0));
                    this->getChildByTag(firstTag)->setTag(500);
                    Sprite->setTag(500);
                }
                else
                {
                    SimpleAudioEngine::sharedEngine()->playEffect(m130wrongEfc);
                    this->getChildByTag(firstTag)->setTag(firstTag-100);
                }
                if (rightN < realRightN) {
                    this->runAction(CCSequence::create(CCDelayTime::create(0.5),CCCallFunc::create(this, callfunc_selector(NYGame521Scene::openClick)),NULL));
  
                }
                
                firstTag = -1;
                secondTag = -1;
                jiluTimes = 0;
            }
        }
    }
    return true;

}

void NYGame521Scene::openClick()
{
    this->setTouchEnabled(true);
}
CCAction* NYGame521Scene::runOAction(int start,int frameCount,const char* formort,float time,int repeat)
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

CCPoint NYGame521Scene::returLightPo(int num)
{
    CCPoint po;
    if (num == 0) {
        po = ccp(85.0,80);
    }else if (num == 1)
    {
        po = ccp(80,55);
    }
    else if (num == 2)
    {
        po = ccp(85.0,65);
    }
    else if (num == 3)
    {
        po = ccp(80.0,80);
    }
    else if (num ==4)
    {
        po = ccp(80.0,80);
    }
    else if (num == 5)
    {
        po = ccp(85.0,80);
    }
    return po;
}
void NYGame521Scene::initHaiPosition()
{

    haiChongPoiArray->addControlPoint(ccp(822.0+ADDDISTANCE, 1206));
    haiChongPoiArray->addControlPoint(ccp(1395.0+ADDDISTANCE, 1265));
    haiChongPoiArray->addControlPoint(ccp(1671.0+ADDDISTANCE, 1248));
    haiChongPoiArray->addControlPoint(ccp(561.0+ADDDISTANCE, 1069));
    haiChongPoiArray->addControlPoint(ccp(1000.0+ADDDISTANCE, 1062.0));
    
    haiChongPoiArray->addControlPoint(ccp(1240.0+ADDDISTANCE, 1114));
    haiChongPoiArray->addControlPoint(ccp(1550.0+ADDDISTANCE, 1047));
    haiChongPoiArray->addControlPoint(ccp(1788+ADDDISTANCE, 992));
    haiChongPoiArray->addControlPoint(ccp(501.0+ADDDISTANCE, 785));
    haiChongPoiArray->addControlPoint(ccp(743.0+ADDDISTANCE, 852));
    
    haiChongPoiArray->addControlPoint(ccp(1076.0+ADDDISTANCE, 862.5));
    haiChongPoiArray->addControlPoint(ccp(1370.0+ADDDISTANCE, 897));
    haiChongPoiArray->addControlPoint(ccp(1718+ADDDISTANCE, 800));
    haiChongPoiArray->addControlPoint(ccp(658+ADDDISTANCE, 596));
    haiChongPoiArray->addControlPoint(ccp(870.0+ADDDISTANCE, 646));
    
    haiChongPoiArray->addControlPoint(ccp(1253+ADDDISTANCE, 695));
    haiChongPoiArray->addControlPoint(ccp(1534+ADDDISTANCE, 698));
    haiChongPoiArray->addControlPoint(ccp(1049.0+ADDDISTANCE, 504));
    haiChongPoiArray->addControlPoint(ccp(1365.0+ADDDISTANCE, 506));
    haiChongPoiArray->addControlPoint(ccp(1686.0+ADDDISTANCE, 526));
    
    haiChongPoiArray->addControlPoint(ccp(526.5+ADDDISTANCE, 290));
    haiChongPoiArray->addControlPoint(ccp(755.0+ADDDISTANCE, 350));
    haiChongPoiArray->addControlPoint(ccp(995.0+ADDDISTANCE, 275));
    haiChongPoiArray->addControlPoint(ccp(1255.0+ADDDISTANCE, 253));
    haiChongPoiArray->addControlPoint(ccp(1484.5+ADDDISTANCE, 330));
    
    haiChongPoiArray->addControlPoint(ccp(1763+ADDDISTANCE, 300));

}
void NYGame521Scene::ccTouchMoved(cocos2d::CCTouch *pTouch, cocos2d::CCEvent *pEvent)
{
}
void NYGame521Scene::ccTouchEnded(cocos2d::CCTouch *pTouch, cocos2d::CCEvent *pEvent)
{
}
void NYGame521Scene::registerWithTouchDispatcher()
{
    CCDirector::sharedDirector()->getTouchDispatcher()->addTargetedDelegate(this, 0, false);
}
void NYGame521Scene::onEnter()
{
    CCLayer::onEnter();
}
void NYGame521Scene::onExit()
{
    CCLayer::onExit();
}
