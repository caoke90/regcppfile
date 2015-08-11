
//
//  NYGame522SceneTwo.cpp
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

NYGame522SceneTwo::~NYGame522SceneTwo()
{

    chooseAry->release();
//    chooseAry = NULL;
    touChSptAry->release();
//    touChSptAry = NULL;
    touChSptAry = NULL;
    chooseAry = NULL;
    CCSpriteFrameCache::sharedSpriteFrameCache()->removeSpriteFramesFromFile(M145PubImage);
    CCSpriteFrameCache::sharedSpriteFrameCache()->removeSpriteFramesFromFile(M145Image2_1);
    CCSpriteFrameCache::sharedSpriteFrameCache()->removeSpriteFramesFromFile(M145Image2_2);
//    CCSpriteFrameCache::sharedSpriteFrameCache()->removeSpriteFramesFromFile(M145Image2_3);
//    CCSpriteFrameCache::sharedSpriteFrameCache()->removeSpriteFramesFromFile(M145Image2_4);
//    CCTextureCache::sharedTextureCache()->removeUnusedTextures();
    CCTextureCache::sharedTextureCache()->removeAllTextures();
}
CCScene* NYGame522SceneTwo::scene()
{
    NYGame522SceneTwo* layer = NYGame522SceneTwo::create();
    CCScene* scene = CCScene::create();
    scene->addChild(layer);
    return scene;
}
bool NYGame522SceneTwo::init()
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
    shuichiClick = true;
    
    scenNum = 0;
    scne = 0 ;
    
    CCSpriteFrameCache::sharedSpriteFrameCache()->addSpriteFramesWithFile(M145PubImage);
    CCSpriteFrameCache::sharedSpriteFrameCache()->addSpriteFramesWithFile(M145Image2_1);
    CCSpriteFrameCache::sharedSpriteFrameCache()->addSpriteFramesWithFile(M145Image2_2);
//    CCSpriteFrameCache::sharedSpriteFrameCache()->addSpriteFramesWithFile(M145Image2_3);
//    CCSpriteFrameCache::sharedSpriteFrameCache()->addSpriteFramesWithFile(M145Image2_4);
    
    
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
        hui->setRotation(45+90*(i-1));
        hui->setTag(-1*(i+10));
        hui->setScale(1.5);
        this->addChild(hui,1);
    }
    
    CCSprite* bg = CCSprite::create(m154SUbg);
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
    
    mubanSpt->runAction(CCSequence::create(CCDelayTime::create(0.5),CCEaseBackOut::create(CCMoveBy::create(0.5, ccp(0, 500))),CCDelayTime::create(1.0),CCMoveBy::create(0.5, ccp(0, -500)),CCCallFunc::create(this, callfunc_selector(NYGame522SceneTwo::openTouchClick)),NULL));
    
    CCSprite* shuihua = CCSprite::createWithSpriteFrameName("m154SUshui0001.png");
    shuihua->setPosition(ccp(883.6,830.2 ));
    shuihua->setTag(26);
    shuihua->setVisible(false);
    this->addChild(shuihua,1);
    
    CCSprite* boliang1 = CCSprite::createWithSpriteFrameName("m154SUbolangA0001.png");
    boliang1->setPosition(ccp(1102.5,399.4 ));
    this->addChild(boliang1);
    CCArray* bolf1Ary = CCArray::create();
    for (int i = 0; i < 8; i++) {
        CCSpriteFrame* frame = CCSpriteFrameCache::sharedSpriteFrameCache()->spriteFrameByName(CCString::createWithFormat("m154SUbolangA000%d.png",i+1)->getCString());
        bolf1Ary->addObject(frame);
    }
    CCAnimation* bol1ation = CCAnimation::createWithSpriteFrames(bolf1Ary,0.1);
    CCAnimate* bl1Animate = CCAnimate::create(bol1ation);
    boliang1->runAction(CCRepeatForever::create(bl1Animate));
    
    CCSprite* boliang2 = CCSprite::createWithSpriteFrameName("m154SUbolangB0001.png");
    boliang2->setPosition(ccp(1076.9,547.1 ));
    this->addChild(boliang2);
    CCArray* bolf2Ary = CCArray::create();
    for (int i = 0; i < 8; i++) {
        CCSpriteFrame* frame = CCSpriteFrameCache::sharedSpriteFrameCache()->spriteFrameByName(CCString::createWithFormat("m154SUbolangB000%d.png",i+1)->getCString());
        bolf2Ary->addObject(frame);
    }
    CCAnimation* bol2ation = CCAnimation::createWithSpriteFrames(bolf2Ary,0.1);
    CCAnimate* bl2Animate = CCAnimate::create(bol2ation);
    boliang2->runAction(CCRepeatForever::create(bl2Animate));
    
    CCSprite* boliang3 = CCSprite::createWithSpriteFrameName("m154SUbolangB0001.png");
    boliang3->setPosition(ccp(830.5,321.6 ));
    this->addChild(boliang3);
    boliang3->runAction(CCRepeatForever::create(bl2Animate));
    
    CCSprite* boliang4 = CCSprite::createWithSpriteFrameName("m154SUbolangA0001.png");
    boliang4->setPosition(ccp(1067.5,492.1 ));
    this->addChild(boliang4);
    boliang4->runAction(CCRepeatForever::create(bl1Animate));
    
    lionSpt = CCSprite::createWithSpriteFrameName("m154SUlion0001.png");
    lionSpt->setPosition(ccp(1538.9,1275.1 ));
//    lionSpt->setTag(16);
    this->addChild(lionSpt,2);
    
    CCSprite* zhuoZi = CCSprite::createWithSpriteFrameName("m154SUzhuozi.png");
    zhuoZi->setPosition(ccp(416.4,1001.8 ));
    zhuoZi->setTag(11);
    this->addChild(zhuoZi);
    touChSptAry->addObject(zhuoZi);
    
    CCSprite* qiushdow = CCSprite::createWithSpriteFrameName("m154SUzuqiuying.png");
    qiushdow->setPosition(ccp(150.8,359.9 ));
    qiushdow->setTag(25);
    this->addChild(qiushdow);
    
    CCSprite* qiuSpt = CCSprite::createWithSpriteFrameName("m154SUzuqiu.png");
    qiuSpt->setPosition(ccp(154.2,425.7 ));
    qiuSpt->setTag(15);
    this->addChild(qiuSpt);
    touChSptAry->addObject(qiuSpt);
    
    CCSprite* xiaochuan = CCSprite::createWithSpriteFrameName("m154SUchuan.png");
    xiaochuan->setPosition(ccp(671.1,471.8 ));
    xiaochuan->setTag(7);
    this->addChild(xiaochuan);
//    xiaochuan->runAction(CCRepeatForever::create(CCSequence::create(CCDelayTime::create(1.0),CCMoveBy::create(0.5, ccp(100,-100 )),CCDelayTime::create(1.0),CCMoveBy::create(0.5, ccp(-100, 100)),CCDelayTime::create(5.0),NULL)));
    
    CCSprite* huaban = CCSprite::createWithSpriteFrameName("m154SUfanchuan.png");
    huaban->setPosition(ccp(1878.1,641.6 ));
    huaban->setTag(14);
    this->addChild(huaban);
    touChSptAry->addObject(huaban);
    
    CCSprite* pengquan = CCSprite::createWithSpriteFrameName("m154SUpenquan0001.png");
    pengquan->setPosition(ccp(1222.1,1132.5 ));
    pengquan->setVisible(false);
    pengquan->setTag(9);
    this->addChild(pengquan,1);
    
    
    CCSprite* huangya = CCSprite::createWithSpriteFrameName("m154SUyazi.png");
    huangya->setPosition(ccp(1229.5,459.7 ));
    huangya->setTag(8);
    this->addChild(huangya);
//    huangya->runAction(CCRepeatForever::create(CCSequence::create(CCRotateTo::create(0.1, 10),CCRotateTo::create(0.1, 0),CCRotateTo::create(0.1, -10),CCRotateTo::create(0.1, 0),CCRotateTo::create(0.1, 10),CCRotateTo::create(0.1, 0),CCRotateTo::create(0.1, -10),CCRotateTo::create(0.1, 0),CCDelayTime::create(1.0),CCEaseBackOut::create(CCMoveBy::create(0.5, ccp(0, -50))),CCEaseBackOut::create(CCMoveBy::create(0.5, ccp(0, 50))),CCDelayTime::create(1.0),NULL)));
    
    CCSprite* lanseshui = CCSprite::createWithSpriteFrameName("m154SUzhe.png");
    lanseshui->setPosition(ccp(877.2,397.4 ));
    this->addChild(lanseshui);
    
    CCSprite* door1 = CCSprite::createWithSpriteFrameName("m154SUdoorA0001.png");
    door1->setPosition(ccp(635.1,1305.9 ));
    door1->setTag(12);
    this->addChild(door1);
    touChSptAry->addObject(door1);
    
    CCSprite* door2back = CCSprite::createWithSpriteFrameName("m154SUdoorBK1.png");
    door2back->setPosition(ccp(992.4, 1303.8));
    this->addChild(door2back);
    CCArray* dbfAry = CCArray::create();
    for (int i = 0; i < 2; i++) {
        CCSpriteFrame* frame = CCSpriteFrameCache::sharedSpriteFrameCache()->spriteFrameByName(CCString::createWithFormat("m154SUdoorBK%d.png",i+1)->getCString());
        dbfAry->addObject(frame);
    }
    CCAnimation* dbation = CCAnimation::createWithSpriteFrames(dbfAry,0.1);
    CCAnimate* dbanimate = CCAnimate::create(dbation);
    door2back->runAction(CCRepeatForever::create(CCSequence::create(dbanimate,dbanimate,CCDelayTime::create(1.0),NULL)));
    
    CCSprite* door2 = CCSprite::createWithSpriteFrameName("m154SUdoorB0001.png");
    door2->setPosition(ccp(992.4,1303.8 ));
    door2->setTag(13);
    this->addChild(door2);
    touChSptAry->addObject(door2);
    
    SimpleAudioEngine::sharedEngine()->playBackgroundMusic(s185bgmusic, true);
    
    return true;
    
}

void NYGame522SceneTwo::pengquanSound()
{
    SimpleAudioEngine::sharedEngine()->playEffect(s185fountain);
}

void NYGame522SceneTwo::openTouchClick()
{
    touChClick = true;
}

void NYGame522SceneTwo::changeScene()
{
    if (scenNum == -1) {
        SimpleAudioEngine::sharedEngine()->stopAllEffects();
        CCDirector::sharedDirector()->replaceScene(NYGame522Scene::scene());
    }else if (scenNum == -3){
        SimpleAudioEngine::sharedEngine()->stopAllEffects();
        CCDirector::sharedDirector()->replaceScene(NYGame522SceneThree::scene());
    }else if (scenNum == -2){
        SimpleAudioEngine::sharedEngine()->stopAllEffects();
        CCDirector::sharedDirector()->replaceScene(NYGame522SceneFour::scene());
    }
}

void NYGame522SceneTwo::BigbanDown(cocos2d::CCNode *sender)
{
    if (scne == 0) {
        SimpleAudioEngine::sharedEngine()->playEffect(duobianxingjichu_duona2);
    }
    
    int tuxingNum;
    if (sender->getTag() != 8) {
        tuxingNum = sender->getTag() - 104;
    }else{
        tuxingNum = 12;
    }
    
    if (tuxingNum == 7) {
        scne = 1;
    }else if (tuxingNum == 8){
        scne = 2;
    }else if (tuxingNum == 9){
        scne = 3;
    }else if (tuxingNum == 10){
        scne = 5;
    }else if (tuxingNum == 11){
        scne = 6;
    }else if (tuxingNum == 12){
        scne = 4;
    }
    SKDrawShaps* layer = SKDrawShaps::create();
    this->addChild(layer, 100, 999);
//    SKDrawShaps* layer = (SKDrawShaps*)this->getChildByTag(999);
    layer->initBySeason(SUMMER_TAG);
    layer->callDraw(scne);
}

void NYGame522SceneTwo::BigbanUp()
{
//    this->mubanUp();
}

void NYGame522SceneTwo::mubanUp()
{
    if (this->getChildByTag(999) != NULL) {
        this->removeChildByTag(999, true);
    }
    if (this->getChildByTag(112) != NULL) {
        CCSprite* door1 = (CCSprite*)this->getChildByTag(112);
        door1->setDisplayFrame(CCSpriteFrameCache::sharedSpriteFrameCache()->spriteFrameByName("m154SUdoorA0001.png"));
    }
    if (this->getChildByTag(113) != NULL) {
        CCSprite* door2 = (CCSprite*)this->getChildByTag(113);
        door2->setDisplayFrame(CCSpriteFrameCache::sharedSpriteFrameCache()->spriteFrameByName("m154SUdoorB0001.png"));

    }
    for (int i = 0; i < 6; i++) {
        this->getChildByTag(i+1)->runAction(CCSequence::create(CCDelayTime::create(0.5),CCEaseBackOut::create(CCMoveBy::create(0.5, ccp(0, 500))),CCDelayTime::create(1.0),CCMoveBy::create(0.5, ccp(0, -500)),NULL));
    }
    mubanSpt->runAction(CCSequence::create(CCDelayTime::create(0.5),CCEaseBackOut::create(CCMoveBy::create(0.5, ccp(0, 500))),CCDelayTime::create(1.0),CCMoveBy::create(0.5, ccp(0, -500)),CCCallFunc::create(this, callfunc_selector(NYGame522SceneTwo::openTouchClick)),NULL));
}

void NYGame522SceneTwo::dooroneAction()
{
    CCArray* door1fary = CCArray::create();
    for (int i = 0; i < 8; i++) {
        CCSpriteFrame* frame = CCSpriteFrameCache::sharedSpriteFrameCache()->spriteFrameByName(CCString::createWithFormat("m154SUdoorA000%d.png",i+1)->getCString());
        door1fary->addObject(frame);
    }
    CCAnimation* ation = CCAnimation::createWithSpriteFrames(door1fary,0.2);
    CCAnimate* animate = CCAnimate::create(ation);
    this->getChildByTag(112)->runAction(animate);
    SimpleAudioEngine::sharedEngine()->playEffect(s185toilet);
}

void NYGame522SceneTwo::dooroneSound()
{
    SimpleAudioEngine::sharedEngine()->playEffect(s185toilet);
}

void NYGame522SceneTwo::doortwoAction()
{
    CCArray* door1fary = CCArray::create();
    for (int i = 0; i < 8; i++) {
        CCSpriteFrame* frame = CCSpriteFrameCache::sharedSpriteFrameCache()->spriteFrameByName(CCString::createWithFormat("m154SUdoorB000%d.png",i+1)->getCString());
        door1fary->addObject(frame);
    }
    CCAnimation* ation = CCAnimation::createWithSpriteFrames(door1fary,0.2);
    CCAnimate* animate = CCAnimate::create(ation);
    this->getChildByTag(113)->runAction(animate);
    SimpleAudioEngine::sharedEngine()->playEffect(s185funny2);
}

void NYGame522SceneTwo::doortwoSound()
{
    SimpleAudioEngine::sharedEngine()->playEffect(s185funny2);
}

void NYGame522SceneTwo::lionChang1()
{
    lionSpt->setDisplayFrame(CCSpriteFrameCache::sharedSpriteFrameCache()->spriteFrameByName("m154SUlion0013.png"));
}
void NYGame522SceneTwo::lionChang2()
{
    lionSpt->setDisplayFrame(CCSpriteFrameCache::sharedSpriteFrameCache()->spriteFrameByName("m154SUlion0014.png"));
}
void NYGame522SceneTwo::lionChangBack()
{
    lionSpt->setDisplayFrame(CCSpriteFrameCache::sharedSpriteFrameCache()->spriteFrameByName("m154SUlion0001.png"));
}

void NYGame522SceneTwo::shuihuAction()
{
    CCArray* frameAry = CCArray::create();
    for (int i = 0; i < 8; i++) {
        CCSpriteFrame* frame = CCSpriteFrameCache::sharedSpriteFrameCache()->spriteFrameByName(CCString::createWithFormat("m154SUshui000%d.png",i+1)->getCString());
        frameAry->addObject(frame);
    }
    CCAnimation* ation = CCAnimation::createWithSpriteFrames(frameAry,0.2);
    CCAnimate* animate = CCAnimate::create(ation);
    this->getChildByTag(26)->runAction(CCSequence::create(CCShow::create(),CCFadeIn::create(0.1),animate,CCFadeOut::create(0.2),CCHide::create(),NULL));
    
}

bool NYGame522SceneTwo::ccTouchBegan(cocos2d::CCTouch *pTouch, cocos2d::CCEvent *pEvent)
{
    CCPoint location = convertTouchToNodeSpace(pTouch);
    for (int i = 0; i < chooseAry->count(); i++) {
        CCSprite* choose = (CCSprite*)chooseAry->objectAtIndex(i);
        if (choose->boundingBox().containsPoint(location) && scenNum == 0 && choose->getTag() != -4) {
            for (int j = 0; j < 3; j++) {
                this->getChildByTag(-1*(j +11))->runAction(CCRotateTo::create(0.2, 45+(j+1)*90+i*90));
            }
            this->setTouchEnabled(false);
            scenNum = choose->getTag();
            this->runAction(CCSequence::create(CCDelayTime::create(0.2),CCCallFunc::create(this, callfunc_selector(NYGame522SceneTwo::changeScene)),NULL));
            //            return true;
        }
    }
    
    if (CCRect(985, 910, 550, 170).containsPoint(location) && this->getChildByTag(9)->numberOfRunningActions() == 0) {
        CCArray* pengfAry = CCArray::create();
        for (int i = 0; i < 3; i++) {
            CCSpriteFrame* frame = CCSpriteFrameCache::sharedSpriteFrameCache()->spriteFrameByName(CCString::createWithFormat("m154SUpenquan000%d.png",i+1)->getCString());
            pengfAry->addObject(frame);
        }
        CCAnimation* pation = CCAnimation::createWithSpriteFrames(pengfAry,0.2);
        CCAnimate* panimate = CCAnimate::create(pation);
        this->getChildByTag(9)->runAction(CCSequence::create(CCDelayTime::create(1.0),CCCallFunc::create(this, callfunc_selector(NYGame522SceneTwo::pengquanSound)),CCShow::create(),panimate,panimate,panimate,panimate,panimate,panimate,panimate,CCHide::create(),NULL));
    }
    
    if (touChClick) {
        for (int i = 0; i < touChSptAry->count(); i++) {
            CCSprite* touSpt = (CCSprite*)touChSptAry->objectAtIndex(i);
            if (touSpt->boundingBox().containsPoint(location)) {
                touChClick = false;
                if (touSpt->getTag() < 100) {
                    this->getChildByTag(touSpt->getTag() - 10)->setScale(1);
                    touSpt->setTag(touSpt->getTag()+100);
                    if (touSpt->getTag() == 111) {
                        touSpt->runAction(CCSequence::create(CCDelayTime::create(1.2),CCCallFuncN::create(this, callfuncN_selector(NYGame522SceneTwo::BigbanDown)),NULL));
                    }else if (touSpt->getTag() == 112){
                        SimpleAudioEngine::sharedEngine()->playEffect(s185door);
                        touSpt->runAction(CCSequence::create(CCDelayTime::create(1.2),CCCallFunc::create(this, callfunc_selector(NYGame522SceneTwo::dooroneAction)),CCDelayTime::create(1.6),CCCallFuncN::create(this, callfuncN_selector(NYGame522SceneTwo::BigbanDown)),NULL));
                    }else if (touSpt->getTag() == 113){
                        SimpleAudioEngine::sharedEngine()->playEffect(s185door);
                        touSpt->runAction(CCSequence::create(CCDelayTime::create(1.2),CCCallFunc::create(this, callfunc_selector(NYGame522SceneTwo::doortwoAction)),CCDelayTime::create(1.6),CCCallFuncN::create(this, callfuncN_selector(NYGame522SceneTwo::BigbanDown)),NULL));
                    }else if (touSpt->getTag() == 114){
                        
                        touSpt->runAction(CCSequence::create(CCDelayTime::create(1.2),CCRotateTo::create(0.2, 10),CCRotateTo::create(0.2, 0),CCRotateTo::create(0.2, -10),CCRotateTo::create(0.2, 0),CCRotateTo::create(0.2, 10),CCRotateTo::create(0.2, 0),CCRotateTo::create(0.2, -10),CCRotateTo::create(0.2, 0),CCCallFuncN::create(this, callfuncN_selector(NYGame522SceneTwo::BigbanDown)),NULL));
                    }else if (touSpt->getTag() == 115){
                        touSpt->runAction(CCSequence::create(CCDelayTime::create(1.2),CCMoveBy::create(0.2, ccp(0, 70)),CCMoveBy::create(0.2, ccp(0, -70)),CCMoveBy::create(0.2, ccp(0, 50)),CCMoveBy::create(0.2, ccp(0,- 50)),CCCallFuncN::create(this, callfuncN_selector(NYGame522SceneTwo::BigbanDown)),NULL));
                    }
                }else{
                    if (touSpt->getTag() == 111) {
                        touSpt->runAction(CCSequence::create(CCDelayTime::create(1.2),CCCallFunc::create(this, callfunc_selector(NYGame522SceneTwo::mubanUp)),NULL));
                    }else if (touSpt->getTag() == 112){
                        touSpt->runAction(CCSequence::create(CCDelayTime::create(1.2),CCCallFunc::create(this, callfunc_selector(NYGame522SceneTwo::dooroneAction)),CCDelayTime::create(1.6),CCCallFunc::create(this, callfunc_selector(NYGame522SceneTwo::mubanUp)),NULL));
                    }else if (touSpt->getTag() == 113){
                        touSpt->runAction(CCSequence::create(CCDelayTime::create(1.2),CCCallFunc::create(this, callfunc_selector(NYGame522SceneTwo::doortwoAction)),CCDelayTime::create(1.6),CCCallFunc::create(this, callfunc_selector(NYGame522SceneTwo::mubanUp)),NULL));
                    }else if (touSpt->getTag() == 114){
                        touSpt->runAction(CCSequence::create(CCDelayTime::create(1.2),CCRotateTo::create(0.2, 10),CCRotateTo::create(0.2, 0),CCRotateTo::create(0.2, -10),CCRotateTo::create(0.2, 0),CCRotateTo::create(0.2, 10),CCRotateTo::create(0.2, 0),CCRotateTo::create(0.2, -10),CCRotateTo::create(0.2, 0),CCCallFunc::create(this, callfunc_selector(NYGame522SceneTwo::mubanUp)),NULL));
                    }else if (touSpt->getTag() == 115){
                        touSpt->runAction(CCSequence::create(CCDelayTime::create(1.2),CCMoveBy::create(0.2, ccp(0, 70)),CCMoveBy::create(0.2, ccp(0, -70)),CCMoveBy::create(0.2, ccp(0, 50)),CCMoveBy::create(0.2, ccp(0,- 50)),CCCallFunc::create(this, callfunc_selector(NYGame522SceneTwo::mubanUp)),NULL));
                    }
                }
                if (touSpt->getTag() < 116) {
                    CCSprite* xuXian = CCSprite::createWithSpriteFrameName(CCString::createWithFormat("m145_xian2_000%d.png",touSpt->getTag()-110)->getCString());
                    if (touSpt->getTag() == 111) {
                        xuXian->setPosition(ccp(414.2, 1016.5));
//                        xuXian->cocos2d::CCNode::setScale(0.38, 0.35);
                        xuXian->setColor(ccc3(0, 0, 0));
                    }else if (touSpt->getTag() == 112){
                        xuXian->setPosition(ccp(714.0, 1325.1));
//                        xuXian->setScale(0.4);
                        xuXian->setColor(ccc3(0, 0, 0));
                    }else if (touSpt->getTag() == 113){
                        xuXian->setPosition(ccp(1055.6, 1329.5));
//                        xuXian->setScale(0.45);
                        xuXian->setColor(ccc3(0, 0, 0));
                    }else if (touSpt->getTag() == 114){
                        xuXian->setPosition(ccp(1886.2, 653.0));
//                        xuXian->setScale(0.40);
                        xuXian->setRotation(-5);
                        xuXian->setColor(ccc3(0, 0, 0));
                    }else if (touSpt->getTag() == 115){
                        xuXian->setPosition(ccp(148.4, 395.2 ));
//                        xuXian->setScale(0.23);
//                        xuXian->setRotation(133.7);
                        xuXian->setColor(ccc3(0, 0, 0));
                    }
                    this->addChild(xuXian, 1);
                    xuXian->runAction(CCSequence::create(CCRepeat::create(CCSequence::create(CCShow::create(),CCDelayTime::create(0.2),CCHide::create(),CCDelayTime::create(0.2),NULL), 3),CCCallFuncN::create(this, callfuncN_selector(NYGame522SceneTwo::removeFormP)),NULL));
                }
                return true;
            }
        }
        if (CCRect(569.8, 199.1, 900, 700).containsPoint(location)) {
            touChClick = false;
            this->getChildByTag(6)->setScale(1);
            if (shuichiClick) {
                this->getChildByTag(7)->runAction(CCRepeatForever::create(CCSequence::create(CCDelayTime::create(1.0),CCMoveBy::create(0.5, ccp(100,-100 )),CCDelayTime::create(1.0),CCMoveBy::create(0.5, ccp(-100, 100)),CCDelayTime::create(5.0),NULL)));
                this->getChildByTag(8)->runAction(CCRepeatForever::create(CCSequence::create(CCRotateTo::create(0.1, 10),CCRotateTo::create(0.1, 0),CCRotateTo::create(0.1, -10),CCRotateTo::create(0.1, 0),CCRotateTo::create(0.1, 10),CCRotateTo::create(0.1, 0),CCRotateTo::create(0.1, -10),CCRotateTo::create(0.1, 0),CCDelayTime::create(1.0),CCEaseBackOut::create(CCMoveBy::create(0.5, ccp(0, -50))),CCEaseBackOut::create(CCMoveBy::create(0.5, ccp(0, 50))),CCDelayTime::create(1.0),NULL)));
                this->getChildByTag(8)->runAction(CCSequence::create(CCDelayTime::create(2.0),CCCallFuncN::create(this, callfuncN_selector(NYGame522SceneTwo::BigbanDown)),NULL));
            }else{
                this->runAction(CCSequence::create(CCDelayTime::create(1.2),CCCallFunc::create(this, callfunc_selector(NYGame522SceneTwo::mubanUp)),NULL));
            }
            shuichiClick = false;
            
            
             CCSprite* xuXian = CCSprite::createWithSpriteFrameName(CCString::createWithFormat("m145_xian2_000%d.png",6)->getCString());
            xuXian->setPosition(ccp(1014.0, 547.7));
            xuXian->setScale(1.1);
            this->addChild(xuXian, 1);
            xuXian->setColor(ccc3(0, 0, 0));
            xuXian->runAction(CCSequence::create(CCRepeat::create(CCSequence::create(CCShow::create(),CCDelayTime::create(0.2),CCHide::create(),CCDelayTime::create(0.2),NULL), 3),CCCallFuncN::create(this, callfuncN_selector(NYGame522SceneTwo::removeFormP)),NULL));
            
        }
    }
    
    if (lionSpt->boundingBox().containsPoint(location) && lionSpt->numberOfRunningActions() == 0) {
        CCArray* lionqary = CCArray::create();
        for (int i = 0; i < 4; i++) {
            CCSpriteFrame* frame = CCSpriteFrameCache::sharedSpriteFrameCache()->spriteFrameByName(CCString::createWithFormat("m154SUlion000%d.png",i+1)->getCString());
            lionqary->addObject(frame);
        }
        CCAnimation* qation = CCAnimation::createWithSpriteFrames(lionqary,0.1);
        CCAnimate* qmate = CCAnimate::create(qation);
        CCArray* lionpary = CCArray::create();
        for (int i = 5; i <= 12; i++) {
            CCSpriteFrame* frame = CCSpriteFrameCache::sharedSpriteFrameCache()->spriteFrameByName(CCString::createWithFormat("m154SUlion%04d.png",i)->getCString());
            lionpary->addObject(frame);
        }
        CCAnimation* pation = CCAnimation::createWithSpriteFrames(lionpary,0.1);
        CCAnimate* pmate = CCAnimate::create(pation);
        SimpleAudioEngine::sharedEngine()->playEffect(s185lion1);
        lionSpt->runAction(CCSequence::create(qmate,CCSpawn::create(CCMoveTo::create(0.4,ccp(1388.3, 1282.3)),pmate,NULL),CCCallFunc::create(this, callfunc_selector(NYGame522SceneTwo::lionChang1)),CCMoveTo::create(0.2, ccp(1214.0,1357.7 )),CCCallFunc::create(this, callfunc_selector(NYGame522SceneTwo::lionChang2)),CCMoveTo::create(0.2, ccp(1117.4, 1248.4)),CCMoveTo::create(0.2, ccp(1018.0, 708.9)),CCCallFunc::create(this, callfunc_selector(NYGame522SceneTwo::shuihuAction)),CCFadeOut::create(0.2),CCDelayTime::create(0.5),CCCallFunc::create(this, callfunc_selector(NYGame522SceneTwo::lionChangBack)),CCMoveTo::create(0, ccp(1549.4,1282.3 )),CCFadeIn::create(0.2),NULL));
    }
    
    if (touChClick) {
        if (location.y < 200) {
            touChClick = false;
            this->mubanUp();
        }
    }
    
    

    return true;
}
void NYGame522SceneTwo::ccTouchMoved(cocos2d::CCTouch *pTouch, cocos2d::CCEvent *pEvent)
{
    
}
void NYGame522SceneTwo::ccTouchEnded(cocos2d::CCTouch *pTouch, cocos2d::CCEvent *pEvent)
{
    
}

void NYGame522SceneTwo::removeFormP(cocos2d::CCNode *sender)
{
    sender->removeFromParentAndCleanup(true);
}

void NYGame522SceneTwo::registerWithTouchDispatcher()
{
    CCDirector::sharedDirector()->getTouchDispatcher()->addTargetedDelegate(this, 0, false);
}
void NYGame522SceneTwo::onEnter()
{
    SimpleAudioEngine::sharedEngine()->playEffect(duobianxingjichu_duona1);
    CCLayer::onEnter();
}
void NYGame522SceneTwo::onExit()
{
    CCLayer::onExit();
}