
//
//  NYGame522SceneFour.cpp
//  mathKgIII_a
//
//  Created by nieying on 14-4-28.
//
//

#include "NYGame522Scene.h"
#include "NYGame522SceneTwo.h"
#include "NYGame522SceneThree.h"
#include "NYGame522SceneFour.h"
#include "SimpleAudioEngine.h"

using namespace CocosDenshion;

NYGame522SceneFour::~NYGame522SceneFour()
{

    chooseAry->release();
    touChSptAry->release();
    touChSptAry = NULL;
    chooseAry = NULL;
    CCSpriteFrameCache::sharedSpriteFrameCache()->removeSpriteFramesFromFile(M145PubImage);
    CCSpriteFrameCache::sharedSpriteFrameCache()->removeSpriteFramesFromFile(M145Image4_1);
//    CCTextureCache::sharedTextureCache()->removeUnusedTextures();
    CCTextureCache::sharedTextureCache()->removeAllTextures();
}
CCScene* NYGame522SceneFour::scene()
{
    NYGame522SceneFour* layer = NYGame522SceneFour::create();
    CCScene* scene = CCScene::create();
    scene->addChild(layer);
    return scene;
}
bool NYGame522SceneFour::init()
{
    if (!NYPublicScene::init()) {
        return false;
    }
    this->setTouchEnabled(true);
    
    
//    SKDrawShaps* layer = SKDrawShaps::create();
//    this->addChild(layer, 100, 999);
    
    
    chooseAry = new CCArray();
    touChSptAry = new CCArray();
    
    touChClick = false;
    
    scenNum = 0;
    scne = 0;
    
    CCSpriteFrameCache::sharedSpriteFrameCache()->addSpriteFramesWithFile(M145PubImage);
    CCSpriteFrameCache::sharedSpriteFrameCache()->addSpriteFramesWithFile(M145Image4_1);
    
    for (int i = 0; i < 4; i ++) {
        CCSprite* hui = CCSprite::createWithSpriteFrameName("m145_yuanjiao.png");
        hui->setAnchorPoint(ccp(1.0, 0));
        if (i == 0) {
            hui->setPosition(ccp(1907.4,1426.6));
        }else if (i == 1){
            hui->setPosition(ccp(1926.1,1403.0));
        }else if (i == 2){
            hui->setPosition(ccp(1909.5,1380.1));
        }else if (i == 3){
            hui->setPosition(ccp(1892.8,1402.3));
        }
        hui->setRotation(45+90*i);
        hui->setScale(1.0);
        hui->setTag(-1*(i+1));
        this->addChild(hui);
        chooseAry->addObject(hui);
    }
    CCSprite* chooseSpt = CCSprite::createWithSpriteFrameName("m145_yuan.png");
    chooseSpt->setPosition(ccp(1906,1403));
    chooseSpt->setScale(1.5);
    this->addChild(chooseSpt,1);
    for (int i = 1; i < 4; i ++) {
        CCSprite* hui = CCSprite::createWithSpriteFrameName("m145_yuanjiao.png");
        hui->setAnchorPoint(ccp(1.0, 0));
        hui->setPosition(ccp(1906,1403));
        hui->setRotation(45+90*(i+1));
        hui->setTag(-1*(i+10));
        hui->setScale(1.5);
        this->addChild(hui,1);
    }

    CCSprite* bg = CCSprite::create(m145_bj_0001);
    bg->setPosition(ccp(1024, 768));
    this->addChild(bg);
    
    mubanSpt = CCSprite::createWithSpriteFrameName("m145_au_banzi.png");
    mubanSpt->setPosition(ccp(1024,88 - 500));
    this->addChild(mubanSpt, 1);
    
    for (int i = 0; i < 6; i++) {
        CCSprite* duobian = CCSprite::createWithSpriteFrameName(CCString::createWithFormat("m145_au_tuxing_%d.png",i+1)->getCString());
        float Px;
        if (i == 0) {
            Px = 420;
        }else if (i == 1){
            Px = 648;
        }else if (i == 2){
            Px = 900;
        }else if (i == 3){
            Px = 1176;
        }else if (i == 4){
            Px = 1428;
        }else if (i == 5){
            Px = 1644;
        }
        duobian->setTag(i+1);
        duobian->setScale(0);
        duobian->setPosition(ccp(Px, 96 - 500));
        this->addChild(duobian, 1);
    }
    
    mubanSpt->runAction(CCSequence::create(CCDelayTime::create(0.5),CCEaseBackOut::create(CCMoveBy::create(0.5, ccp(0, 500))),CCDelayTime::create(1.0),CCMoveBy::create(0.5, ccp(0, -500)),CCCallFunc::create(this, callfunc_selector(NYGame522SceneFour::openTouchClick)),NULL));
    
    CCSprite* door = CCSprite::createWithSpriteFrameName("m145_cx_0001.png");
    door->setPosition(ccp(1063.4,705.8 ));
    door->setTag(12);
    this->addChild(door);
    touChSptAry->addObject(door);
    
    CCSprite* tixing = CCSprite::createWithSpriteFrameName("m145_tixing_0001.png");
    tixing->setPosition(ccp(312.0,727.0 ));
    tixing->setTag(13);
    this->addChild(tixing);
    touChSptAry->addObject(tixing);
    
    CCSprite* daxiang = CCSprite::createWithSpriteFrameName("m145_dx_0001.png");
    daxiang->setPosition(ccp(214.8,922.7 ));
    daxiang->setTag(23);
    this->addChild(daxiang);
    
    CCSprite* xuhua = CCSprite::createWithSpriteFrameName("m145_lbx_0001.png");
    xuhua->setPosition(ccp(1025.7,1306.3 ));
    xuhua->setTag(16);
    this->addChild(xuhua);
    touChSptAry->addObject(xuhua);
    
    CCSprite* huaban = CCSprite::createWithSpriteFrameName("m145_lingxing_0001.png");
    huaban->setPosition(ccp(919.9,302.3 ));
    huaban->setTag(14);
    this->addChild(huaban);
    touChSptAry->addObject(huaban);
    
    for (int i = 0; i < 5; i++) {
        CCSprite* tangguo = CCSprite::createWithSpriteFrameName(CCString::createWithFormat("m145_tg_0001000%d.png",i+1)->getCString());
        if ( i == 0) {
            tangguo->setPosition(ccp(1970.2,540.8 ));
        }else if (i == 1){
            tangguo->setPosition(ccp(1592.0,584.0 ));
        }else if (i == 2){
            tangguo->setPosition(ccp(1884.0,673.0 ));
        }else if (i == 3){
            tangguo->setPosition(ccp(1662.4,509.8 ));
        }else if (i == 4){
            tangguo->setPosition(ccp(1824.4,528.0 ));
        }
        tangguo->setTag(51+i);
        tangguo->setOpacity(0);
        this->addChild(tangguo);
    }
    
    CCSprite* shugan = CCSprite::createWithSpriteFrameName("m145_wbx_0002.png");
    shugan->setPosition(ccp(1771.8,685.1 ));
    this->addChild(shugan);
    
    CCSprite* shuzhi = CCSprite::createWithSpriteFrameName("m145_wbx_0001.png");
    shuzhi->setPosition(ccp(1773.6,976.9 ));
    shuzhi->setTag(15);
    this->addChild(shuzhi);
    touChSptAry->addObject(shuzhi);
    
    CCSprite* yan = CCSprite::createWithSpriteFrameName("m145_yan_0001.png");
    yan->setPosition(ccp(960.7,1205.0 ));
    this->addChild(yan);
    CCArray* yanfAry = CCArray::create();
    for (int i = 0; i < 6; i++) {
        CCSpriteFrame* frame = CCSpriteFrameCache::sharedSpriteFrameCache()->spriteFrameByName(CCString::createWithFormat("m145_yan_000%d.png",i+1)->getCString());
        yanfAry->addObject(frame);
    }
    CCAnimation* yation = CCAnimation::createWithSpriteFrames(yanfAry,0.2);
    CCAnimate* ymate = CCAnimate::create(yation);
    yan->runAction(CCRepeatForever::create(ymate));
    
    CCSprite* chuanghu = CCSprite::createWithSpriteFrameName("m145_zfx_0001.png");
    chuanghu->setPosition(ccp(1222.6,737.1 ));
    chuanghu->setTag(11);
    this->addChild(chuanghu);
    touChSptAry->addObject(chuanghu);
    
    SimpleAudioEngine::sharedEngine()->playBackgroundMusic(s74backgroundmusic, true);
    
    return true;
}

void NYGame522SceneFour::changeScene()
{
    if (scenNum == -1) {
        SimpleAudioEngine::sharedEngine()->stopAllEffects();
        CCDirector::sharedDirector()->replaceScene(NYGame522Scene::scene());
    }else if (scenNum == -3){
        SimpleAudioEngine::sharedEngine()->stopAllEffects();
        CCDirector::sharedDirector()->replaceScene(NYGame522SceneThree::scene());
    }else if (scenNum == -4){
        SimpleAudioEngine::sharedEngine()->stopAllEffects();
        CCDirector::sharedDirector()->replaceScene(NYGame522SceneTwo::scene());
    }
}

void NYGame522SceneFour::openTouchClick()
{
    touChClick = true;
}

void NYGame522SceneFour::BigbanDown(CCNode* sender)
{
//    this->BigbanUp();
    if (scne == 0) {
        SimpleAudioEngine::sharedEngine()->playEffect(duobianxingjichu_duona2);
    }
    if (sender->getTag() == 111) {
        scne = 3;
    }else if (sender->getTag() == 112){
        scne = 6;
    }else if (sender->getTag() == 113){
        scne = 1;
    }else if (sender->getTag() == 114){
        scne = 2;
    }else if (sender->getTag() == 115){
        scne = 5;
    }else if (sender->getTag() == 116){
        scne = 4;
    }
    
    SKDrawShaps* layer = SKDrawShaps::create();
    this->addChild(layer, 100, 999);
//    SKDrawShaps* layer = (SKDrawShaps*)this->getChildByTag(999);
    layer->initBySeason(WINTTER_TAG);
    layer->callDraw(scne);
}

void NYGame522SceneFour::BigbanUp()
{
    this->mubanUp();
}

void NYGame522SceneFour::mubanUp()
{
    if (this->getChildByTag(999) != NULL) {
        this->removeChildByTag(999, true);
    }
    
    for (int i = 0; i < 6; i++) {
        this->getChildByTag(i+1)->runAction(CCSequence::create(CCDelayTime::create(0.5),CCEaseBackOut::create(CCMoveBy::create(0.5, ccp(0, 500))),CCDelayTime::create(1.0),CCMoveBy::create(0.5, ccp(0, -500)),NULL));
    }
    mubanSpt->runAction(CCSequence::create(CCDelayTime::create(0.5),CCEaseBackOut::create(CCMoveBy::create(0.5, ccp(0, 500))),CCDelayTime::create(1.0),CCMoveBy::create(0.5, ccp(0, -500)),CCCallFunc::create(this, callfunc_selector(NYGame522SceneFour::openTouchClick)),NULL));
}

void NYGame522SceneFour::daxiangAction()
{
    CCArray* dafAry = CCArray::create();
    for (int i = 0; i < 4; i++) {
        CCSpriteFrame* frame = CCSpriteFrameCache::sharedSpriteFrameCache()->spriteFrameByName(CCString::createWithFormat("m145_dx_000%d.png",i+1)->getCString());
        dafAry->addObject(frame);
    }
    CCAnimation* ation = CCAnimation::createWithSpriteFrames(dafAry,0.2);
    CCAnimate* amate = CCAnimate::create(ation);
    this->getChildByTag(23)->runAction(CCSequence::create(CCSpawn::create(CCSequence::create(CCMoveTo::create(0.2, ccp(301.9, 891.6)),CCRotateTo::create(0.2, 45),CCMoveTo::create(0.4, ccp(627.4,586.8)),NULL),amate,NULL),CCSpawn::create(CCSequence::create(CCSpawn::create(CCMoveTo::create(0.2, ccp(745.6, 557.8)),CCRotateTo::create(0.2, 0),NULL),CCMoveTo::create(0.2, ccp(880.4,564.0)),CCFadeOut::create(0.2),NULL),amate,NULL),CCDelayTime::create(0.5),CCMoveTo::create(0, ccp(214.8,922.7)),CCFadeIn::create(0.2),NULL));
}

void NYGame522SceneFour::treeSound()
{
    SimpleAudioEngine::sharedEngine()->playEffect(m145click_on_the_tree);
}

bool NYGame522SceneFour::ccTouchBegan(cocos2d::CCTouch *pTouch, cocos2d::CCEvent *pEvent)
{
    CCPoint location = convertTouchToNodeSpace(pTouch);
    for (int i = 0; i < chooseAry->count(); i++) {
        CCSprite* choose = (CCSprite*)chooseAry->objectAtIndex(i);
        if (choose->boundingBox().containsPoint(location) && scenNum == 0 && choose->getTag() != -2) {
            for (int j = 0; j < 3; j++) {
                this->getChildByTag(-1*(j +11))->runAction(CCRotateTo::create(0.2, 45+(j+1)*90+i*90));
            }
            this->setTouchEnabled(false);
            scenNum = choose->getTag();
            this->runAction(CCSequence::create(CCDelayTime::create(0.2),CCCallFunc::create(this, callfunc_selector(NYGame522SceneFour::changeScene)),NULL));
            //            return true;
        }
    }
    
    if (touChClick) {
        for (int i = 0; i < touChSptAry->count(); i++) {
            CCSprite* touSpt = (CCSprite*)touChSptAry->objectAtIndex(i);
            if (touSpt->boundingBox().containsPoint(location)) {
                touChClick = false;
                if (touSpt->getTag() < 100) {
                    this->getChildByTag(touSpt->getTag() - 10)->setScale(1);
                    touSpt->setTag(touSpt->getTag()+100);
                    if (touSpt->getTag() == 111 || touSpt->getTag() == 112) {
                        touSpt->runAction(CCSequence::create(CCDelayTime::create(1.2),CCCallFuncN::create(this, callfuncN_selector(NYGame522SceneFour::BigbanDown)),NULL));
                    }
                    else if (touSpt->getTag() == 113){
                        touSpt->runAction(CCSequence::create(CCDelayTime::create(1.2),CCCallFunc::create(this, callfunc_selector(NYGame522SceneFour::daxiangAction)),CCDelayTime::create(2.1),CCCallFuncN::create(this, callfuncN_selector(NYGame522SceneFour::BigbanDown)),NULL));
                    }
                    else if (touSpt->getTag() == 114){
                        touSpt->runAction(CCSequence::create(CCDelayTime::create(1.2),CCMoveTo::create(0.5, ccp(401.5,341.7 )),CCDelayTime::create(0.5),CCMoveTo::create(0.5, ccp(919.9,302.3 )),CCCallFuncN::create(this, callfuncN_selector(NYGame522SceneFour::BigbanDown)),NULL));
                    }
                    else if (touSpt->getTag() == 115){
                        for (int i = 0; i < 5; i++) {
                            this->getChildByTag(51+i)->runAction(CCSequence::create(CCDelayTime::create(3.0),CCFadeIn::create(0.2),CCRotateTo::create(0.2, 5),CCRotateTo::create(0.2, 0),CCRotateTo::create(0.2, -5),CCRotateTo::create(0.2, 0),CCFadeOut::create(0.2),NULL));
                        }
                        touSpt->runAction(CCSequence::create(CCDelayTime::create(1.2),CCCallFunc::create(this, callfunc_selector(NYGame522SceneFour::treeSound)),CCRotateTo::create(0.2, 5),CCRotateTo::create(0.2, 0),CCRotateTo::create(0.2, -5),CCRotateTo::create(0.2, 0),CCRotateTo::create(0.2, 5),CCRotateTo::create(0.2, 0),CCRotateTo::create(0.2, -5),CCRotateTo::create(0.2, 0),CCDelayTime::create(1.0),CCCallFuncN::create(this, callfuncN_selector(NYGame522SceneFour::BigbanDown)),NULL));
                    }
                    else if (touSpt->getTag() == 116){
                        touSpt->runAction(CCSequence::create(CCDelayTime::create(1.2),CCScaleTo::create(0.2, 1.2),CCScaleTo::create(0.1, 1.0),CCScaleTo::create(0.2, 1.2),CCScaleTo::create(0.1, 1.0),CCCallFuncN::create(this, callfuncN_selector(NYGame522SceneFour::BigbanDown)),NULL));
                    }
                }else{
                    if (touSpt->getTag() == 111 || touSpt->getTag() == 112) {
                        touSpt->runAction(CCSequence::create(CCDelayTime::create(1.2),CCCallFunc::create(this, callfunc_selector(NYGame522SceneFour::mubanUp)),NULL));
                    }
                    else if (touSpt->getTag() == 113){
                        touSpt->runAction(CCSequence::create(CCDelayTime::create(1.2),CCCallFunc::create(this, callfunc_selector(NYGame522SceneFour::daxiangAction)),CCDelayTime::create(2.1),CCCallFunc::create(this, callfunc_selector(NYGame522SceneFour::mubanUp)),NULL));
                    }
                    else if (touSpt->getTag() == 114){
                        touSpt->runAction(CCSequence::create(CCDelayTime::create(1.2),CCMoveTo::create(0.5, ccp(401.5,341.7 )),CCDelayTime::create(0.5),CCMoveTo::create(0.5, ccp(919.9,302.3 )),CCCallFunc::create(this, callfunc_selector(NYGame522SceneFour::mubanUp)),NULL));
                    }
                    else if (touSpt->getTag() == 115){
                        for (int i = 0; i < 5; i++) {
                            this->getChildByTag(51+i)->runAction(CCSequence::create(CCDelayTime::create(3.0),CCFadeIn::create(0.2),CCRotateTo::create(0.2, 5),CCRotateTo::create(0.2, 0),CCRotateTo::create(0.2, -5),CCRotateTo::create(0.2, 0),CCFadeOut::create(0.2),NULL));
                        }
                        touSpt->runAction(CCSequence::create(CCDelayTime::create(1.2),CCRotateTo::create(0.2, 5),CCRotateTo::create(0.2, 0),CCRotateTo::create(0.2, -5),CCRotateTo::create(0.2, 0),CCRotateTo::create(0.2, 5),CCRotateTo::create(0.2, 0),CCRotateTo::create(0.2, -5),CCRotateTo::create(0.2, 0),CCCallFunc::create(this, callfunc_selector(NYGame522SceneFour::mubanUp)),NULL));
                    }
                    else if (touSpt->getTag() == 116){
                        touSpt->runAction(CCSequence::create(CCDelayTime::create(1.2),CCScaleTo::create(0.2, 1.2),CCScaleTo::create(0.1, 1.0),CCScaleTo::create(0.2, 1.2),CCScaleTo::create(0.1, 1.0),CCCallFunc::create(this, callfunc_selector(NYGame522SceneFour::mubanUp)),NULL));
                    }
                }
                
                CCSprite* xuXian = CCSprite::createWithSpriteFrameName(CCString::createWithFormat("m145_xian4_000%d.png",touSpt->getTag()-110)->getCString());
                if (touSpt->getTag() == 111) {
                    xuXian->setPosition(touSpt->getPosition());
//                    xuXian->setScale(0.15);
                }else if (touSpt->getTag() == 112){
                    xuXian->setPosition(touSpt->getPosition());
//                    xuXian->setScale(0.2);
                }else if (touSpt->getTag() == 113){
                    xuXian->setPosition(ccp(309.9, 729.4));
//                    xuXian->setScale(0.46);
                }else if (touSpt->getTag() == 114){
                    xuXian->setPosition(ccp(922.7, 355.6));
//                    xuXian->setScale(0.3);
                }else if (touSpt->getTag() == 115){
                    xuXian->setPosition(ccp(1774.6, 977.9));
//                    xuXian->setScale(0.74);
                }else if (touSpt->getTag() == 116){
                    xuXian->setPosition(touSpt->getPosition());
//                    xuXian->setScale(0.17);
                }
                xuXian->setColor(ccc3(0, 0, 0));
                this->addChild(xuXian, 1);
                xuXian->runAction(CCSequence::create(CCRepeat::create(CCSequence::create(CCShow::create(),CCDelayTime::create(0.2),CCHide::create(),CCDelayTime::create(0.2),NULL), 3),CCCallFuncN::create(this, callfuncN_selector(NYGame522SceneFour::removeFormP)),NULL));

                
                return true;
            }
        }
    }
    
    if (touChClick) {
        if (location.y < 200) {
            touChClick = false;
            this->mubanUp();
        }
    }

    return true;
}
void NYGame522SceneFour::ccTouchMoved(cocos2d::CCTouch *pTouch, cocos2d::CCEvent *pEvent)
{
    
}
void NYGame522SceneFour::ccTouchEnded(cocos2d::CCTouch *pTouch, cocos2d::CCEvent *pEvent)
{
    
}
void NYGame522SceneFour::registerWithTouchDispatcher()
{
    CCDirector::sharedDirector()->getTouchDispatcher()->addTargetedDelegate(this, 0, false);
}

void NYGame522SceneFour::removeFormP(cocos2d::CCNode *sender)
{
    sender->removeFromParentAndCleanup(true);
}

void NYGame522SceneFour::onEnter()
{
    SimpleAudioEngine::sharedEngine()->playEffect(duobianxingjichu_duona1); 
    CCLayer::onEnter();
}
void NYGame522SceneFour::onExit()
{
    CCLayer::onExit();
}