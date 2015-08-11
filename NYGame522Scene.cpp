//
//
//  NYGame522Scene.cpp
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

NYGame522Scene::~NYGame522Scene()
{

    touChSptAry->release();
//    touChSptAry = NULL;
    chooseAry->release();
//    chooseAry = NULL;
    touChSptAry = NULL;
    chooseAry = NULL;
    CCSpriteFrameCache::sharedSpriteFrameCache()->removeSpriteFramesFromFile(M145PubImage);
    CCSpriteFrameCache::sharedSpriteFrameCache()->removeSpriteFramesFromFile(M145Image1_1);
//    CCSpriteFrameCache::sharedSpriteFrameCache()->removeSpriteFramesFromFile(M145Image1_2);
//    CCSpriteFrameCache::sharedSpriteFrameCache()->removeSpriteFramesFromFile(M145Image1_3);
    
//    CCTextureCache::sharedTextureCache()->removeUnusedTextures();
    CCTextureCache::sharedTextureCache()->removeAllTextures();
}
CCScene* NYGame522Scene::scene()
{
    NYGame522Scene* layer = NYGame522Scene::create();
    CCScene* scene = CCScene::create();
    scene->addChild(layer);
    return scene;
}
bool NYGame522Scene::init()
{
    if (!NYPublicScene::init()) {
        return false;
    }
    this->setTouchEnabled(true);
    
    touChSptAry = new CCArray();
    chooseAry = new CCArray();
    
    touChClick = false;
    scenNum = 0;
    scenNum2 = 0;
    
//    SKDrawShaps* layer = SKDrawShaps::create();
//    this->addChild(layer, 100, 999);
    
    
    CCSpriteFrameCache::sharedSpriteFrameCache()->addSpriteFramesWithFile(M145PubImage);
    CCSpriteFrameCache::sharedSpriteFrameCache()->addSpriteFramesWithFile(M145Image1_1);
//    CCSpriteFrameCache::sharedSpriteFrameCache()->addSpriteFramesWithFile(M145Image1_2);
//    CCSpriteFrameCache::sharedSpriteFrameCache()->addSpriteFramesWithFile(M145Image1_3);
    
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
        hui->setRotation(45+90*i);
        hui->setTag(-1*(i+10));
        hui->setScale(1.5);
        this->addChild(hui,1);
    }
    
    
    CCSprite* bg = CCSprite::create(m145_ctbj_0001);
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
    
    mubanSpt->runAction(CCSequence::create(CCDelayTime::create(0.5),CCEaseBackOut::create(CCMoveBy::create(0.5, ccp(0, 500))),CCDelayTime::create(1.0),CCMoveBy::create(0.5, ccp(0, -500)),CCCallFunc::create(this, callfunc_selector(NYGame522Scene::openTouchClick)),NULL));
    
    CCSprite* xiaoChong = CCSprite::createWithSpriteFrameName("m145_xc_.png");
    xiaoChong->setPosition(ccp(710.5,660.8));
    xiaoChong->setTag(9);
    this->addChild(xiaoChong);

    
    CCSprite* xiaoCao = CCSprite::createWithSpriteFrameName("m145_ff_0001.png");
    xiaoCao->setPosition(ccp(708.7,592 ));
    this->addChild(xiaoCao);
    
    CCSprite* hudie = CCSprite::createWithSpriteFrameName("m145_hd_0001.png");
    hudie->setPosition(ccp(1908, 438));
    hudie->setRotation(90);
    hudie->setTag(7);
    this->addChild(hudie);
    CCArray* hudiefAry = CCArray::create();
    for (int i = 0; i < 2; i++) {
        CCSpriteFrame* frame = CCSpriteFrameCache::sharedSpriteFrameCache()->spriteFrameByName(CCString::createWithFormat("m145_hd_000%d.png",i+1)->getCString());
        hudiefAry->addObject(frame);
    }
    CCAnimation* hation = CCAnimation::createWithSpriteFrames(hudiefAry,0.2);
    CCAnimate* hanimate = CCAnimate::create(hation);
    hudie->runAction(CCRepeatForever::create(hanimate));
    
    CCSprite* chuanghu = CCSprite::createWithSpriteFrameName("m145_mc_0001.png");
    chuanghu->setPosition(ccp(1465.2, 951.5));
    chuanghu->setTag(11);
    this->addChild(chuanghu);
    touChSptAry->addObject(chuanghu);
    
    CCSprite* menSpt = CCSprite::createWithSpriteFrameName("m145_mc_0002.png");
    menSpt->setPosition(ccp(1676.8, 901.0));
    menSpt->setTag(12);
    this->addChild(menSpt);
    touChSptAry->addObject(menSpt);
    
    CCSprite* qingwa = CCSprite::createWithSpriteFrameName("m145_qw_0001.png");
    qingwa->setPosition(ccp(1596.3, 267.2));
    qingwa->setTag(8);
    this->addChild(qingwa);

    
    CCSprite* fengzheng = CCSprite::createWithSpriteFrameName("m145_sz_0001.png");
    fengzheng->setPosition(ccp(1046.4, 992.3));
    fengzheng->setTag(14);
    this->addChild(fengzheng);
    touChSptAry->addObject(fengzheng);
    
    CCSprite* xiaochuan = CCSprite::createWithSpriteFrameName("m145_xc_0001.png");
    xiaochuan->setPosition(ccp(961.3,420 ));
    xiaochuan->setTag(13);
    this->addChild(xiaochuan);
    touChSptAry->addObject(xiaochuan);
    
    CCSprite* xxiaoniao = CCSprite::createWithSpriteFrameName("m145_xxn_0001.png");
    xxiaoniao->setPosition(ccp(744.7, 1373.9));
    this->addChild(xxiaoniao);
    CCArray* xxiaofAry = CCArray::create();
    for (int i = 0; i < 3; i++) {
        if (i == 0) {
            CCSpriteFrame* frame = CCSpriteFrameCache::sharedSpriteFrameCache()->spriteFrameByName(CCString::createWithFormat("m145_xxn_000%d.png",i+1)->getCString());
            xxiaofAry->addObject(frame);
        }else{
            CCSpriteFrame* frame = CCSpriteFrameCache::sharedSpriteFrameCache()->spriteFrameByName(CCString::createWithFormat("m145_xxn_000%d.png",i+2)->getCString());
            xxiaofAry->addObject(frame);
        }

    }
    CCAnimation* xxation = CCAnimation::createWithSpriteFrames(xxiaofAry,0.2);
    CCAnimate* xxmate = CCAnimate::create(xxation);
    xxiaoniao->runAction(CCRepeatForever::create(CCSequence::create(CCDelayTime::create(2),xxmate,xxmate,NULL)));
    
    CCSprite* xiaoniao = CCSprite::createWithSpriteFrameName("m145_xn_0001.png");
    xiaoniao->setPosition(ccp(882.5 + 1500,1340.5));
    this->addChild(xiaoniao);
    CCArray* xiaonfAry = CCArray::create();
    for (int i = 0; i < 4; i++) {
        CCSpriteFrame* frame = CCSpriteFrameCache::sharedSpriteFrameCache()->spriteFrameByName(CCString::createWithFormat("m145_xn_000%d.png",i+1)->getCString());
        xiaonfAry->addObject(frame);
    }
    CCAnimation* xation = CCAnimation::createWithSpriteFrames(xiaonfAry,0.2);
    CCAnimate* xmate = CCAnimate::create(xation);
    xiaoniao->runAction(CCRepeatForever::create(xmate));
    xiaoniao->runAction(CCRepeatForever::create(CCSequence::create(CCMoveBy::create(3.5, ccp(-1500, 0)),CCCallFunc::create(this, callfunc_selector(NYGame522Scene::bridSound)),CCDelayTime::create(2.0),CCMoveBy::create(3.5, ccp(-1500, 0)),CCDelayTime::create(0.2),CCMoveTo::create(0, ccp(882.5 + 1500,1340.5)),NULL)));
    

    CCSprite* shudong = CCSprite::createWithSpriteFrameName("m145_xd_0001.png");
    shudong->setPosition(ccp(453.0,826.8 ));
    shudong->setTag(16);
    this->addChild(shudong);
    touChSptAry->addObject(shudong);
    
    CCSprite* shudong2 = CCSprite::createWithSpriteFrameName("m145_xd_0002.png");
    shudong2->setPosition(ccp(453.0,826.8 ));
    shudong2->setTag(26);
    this->addChild(shudong2);
    shudong2->setOpacity(0);
    
    CCSprite* zhizhu = CCSprite::createWithSpriteFrameName("m145_wang_0002.png");
    zhizhu->setPosition(ccp(200.8, 874.7));
    zhizhu->setTag(25);
    this->addChild(zhizhu);
    
    CCSprite* wang = CCSprite::createWithSpriteFrameName("m145_wang_0001.png");
    wang->setPosition(ccp(175.5,980.8 ));
    wang->setTag(15);
    this->addChild(wang);
    touChSptAry->addObject(wang);
    
//    BigbanSpt = CCSprite::createWithSpriteFrameName("m145_muban_0001.png");
//    BigbanSpt->setPosition(ccp(1024,768 + 1500));
//    this->addChild(BigbanSpt,1);
    
//    onbanTuXing = CCSprite::createWithSpriteFrameName("m145_chun_0001.png");
//    onbanTuXing->setPosition(ccp(1024, 768 + 1500));
//    this->addChild(onbanTuXing,1);
    
    xuXianSpt = CCSprite::createWithSpriteFrameName("m145_xian3_0001.png");
    xuXianSpt->setPosition(ccp(1024, 768 + 1500));
    this->addChild(xuXianSpt, 1);
    
    SimpleAudioEngine::sharedEngine()->playBackgroundMusic(m145spring_music, true);
    
    return true;
}

void NYGame522Scene::bridSound()
{
    SimpleAudioEngine::sharedEngine()->playEffect(m145bird_singing);
}

void NYGame522Scene::qingwaChange()
{
    CCSprite* qingwa = (CCSprite*)this->getChildByTag(8);
    qingwa->setDisplayFrame(CCSpriteFrameCache::sharedSpriteFrameCache()->spriteFrameByName("m145_qw_0002.png"));
}

void NYGame522Scene::qingwaChangeBack()
{
    CCSprite* qingwa = (CCSprite*)this->getChildByTag(8);
    qingwa->setDisplayFrame(CCSpriteFrameCache::sharedSpriteFrameCache()->spriteFrameByName("m145_qw_0001.png"));
}

void NYGame522Scene::BigbanDown(CCNode* sender)
{
    if (scenNum2 == 0) {
        SimpleAudioEngine::sharedEngine()->playEffect(duobianxingjichu_duona2);
    }
    
    if (sender->getTag() == 111) {
        scenNum2 = 4;
    }else if (sender->getTag() == 112){
        scenNum2 = 5;
    }else if (sender->getTag() == 113){
        scenNum2 = 3;
    }else if (sender->getTag() == 114){
        scenNum2 = 1;
    }else if (sender->getTag() == 115){
        scenNum2 = 6;
    }else if (sender->getTag() == 116){
        scenNum2 = 2;
    }
    SKDrawShaps* layer = SKDrawShaps::create();
    this->addChild(layer, 100, 999);
//    SKDrawShaps* layer = (SKDrawShaps*)this->getChildByTag(999);
    layer->initBySeason(SPRING_TAG);
    layer->callDraw(scenNum2);
    
//    this->BigbanUp();
}

void NYGame522Scene::BigbanUp()
{
    
}

void NYGame522Scene::mubanUp()
{
    if (this->getChildByTag(999) != NULL) {
        this->removeChildByTag(999, true);
    }
    for (int i = 0; i < 6; i++) {
        this->getChildByTag(i+1)->runAction(CCSequence::create(CCDelayTime::create(0.5),CCEaseBackOut::create(CCMoveBy::create(0.5, ccp(0, 500))),CCDelayTime::create(1.0),CCMoveBy::create(0.5, ccp(0, -500)),NULL));
    }
    mubanSpt->runAction(CCSequence::create(CCDelayTime::create(0.5),CCEaseBackOut::create(CCMoveBy::create(0.5, ccp(0, 500))),CCDelayTime::create(1.0),CCMoveBy::create(0.5, ccp(0, -500)),CCCallFunc::create(this, callfunc_selector(NYGame522Scene::openTouchClick)),NULL));
}

void NYGame522Scene::fengzhengAction(CCNode* sender)
{
    SimpleAudioEngine::sharedEngine()->playEffect(m145click_on_the_kite);
    CCArray* fengzfAry = CCArray::create();
    for (int i = 0; i < 4; i++) {
        int num;
        if (i < 3) {
            num = i+1;
        }else{
            num = 1;
        }
        CCSpriteFrame* frame = CCSpriteFrameCache::sharedSpriteFrameCache()->spriteFrameByName(CCString::createWithFormat("m145_sz_000%d.png",num)->getCString());
        fengzfAry->addObject(frame);
    }
    CCAnimation* ation = CCAnimation::createWithSpriteFrames(fengzfAry,0.1);
    CCAnimate* animate = CCAnimate::create(ation);
    sender->runAction(CCRepeat::create(animate, 2));
}

void NYGame522Scene::changeScene()
{
    if (scenNum == -2) {
        SimpleAudioEngine::sharedEngine()->stopAllEffects();
        CCDirector::sharedDirector()->replaceScene(NYGame522SceneFour::scene());
    }else if (scenNum == -3){
        SimpleAudioEngine::sharedEngine()->stopAllEffects();
        CCDirector::sharedDirector()->replaceScene(NYGame522SceneThree::scene());
    }else if (scenNum == -4){
        SimpleAudioEngine::sharedEngine()->stopAllEffects();
        CCDirector::sharedDirector()->replaceScene(NYGame522SceneTwo::scene());
    }
}

void NYGame522Scene::openTouchClick()
{
    touChClick = true;
}

void NYGame522Scene::boatSOund()
{
    SimpleAudioEngine::sharedEngine()->playEffect(m145boat_swimming);
}

void NYGame522Scene::kiteSOund()
{
    SimpleAudioEngine::sharedEngine()->playEffect(m145click_on_the_kite);
}

void NYGame522Scene::spiderSound()
{
    SimpleAudioEngine::sharedEngine()->playEffect(m145spider_action);
}

bool NYGame522Scene::ccTouchBegan(CCTouch *pTouch, CCEvent *pEvent)
{
    CCPoint location = convertTouchToNodeSpace(pTouch);
    for (int i = 0; i < chooseAry->count(); i++) {
        CCSprite* choose = (CCSprite*)chooseAry->objectAtIndex(i);
        if (choose->boundingBox().containsPoint(location) && scenNum == 0 && choose->getTag() != -1) {
            for (int j = 0; j < 3; j++) {
                this->getChildByTag(-1*(j +11))->runAction(CCRotateTo::create(0.2, 45+(j+1)*90+i*90));
            }
            this->setTouchEnabled(false);
            scenNum = choose->getTag();
            this->runAction(CCSequence::create(CCDelayTime::create(0.2),CCCallFunc::create(this, callfunc_selector(NYGame522Scene::changeScene)),NULL));
//            return true;
        }
    }
    
    if (this->getChildByTag(9)->boundingBox().containsPoint(location) && this->getChildByTag(9)->numberOfRunningActions() == 0 ) {
        this->getChildByTag(9)->runAction(CCRepeatForever::create(CCSequence::create(CCDelayTime::create(2.0),CCMoveBy::create(0.2, ccp(0, -70)),CCDelayTime::create(8),CCMoveBy::create(0.2, ccp(0, 70)),NULL)));
    }
    
    if (this->getChildByTag(7)->boundingBox().containsPoint(location) && this->getChildByTag(7)->numberOfRunningActions() == 1 ) {
        SimpleAudioEngine::sharedEngine()->playEffect(m145butterfly_fly);
        ccBezierConfig tr0;
        tr0.endPosition=ccp(1908, 438);
        tr0.controlPoint_1=ccp(1758, 588);
        tr0.controlPoint_2=ccp(1908, 438);
        ccBezierConfig tr1;
        tr1.endPosition=ccp(1908, 738);
        tr1.controlPoint_1=ccp(2058, 588);
        tr1.controlPoint_2=ccp(1908, 738);
        
        this->getChildByTag(7)->runAction(CCRepeatForever::create(CCSequence::create(CCSpawn::create(CCBezierTo::create(1.0, tr1),CCRotateBy::create(1.0, -180),NULL),CCDelayTime::create(2.0),CCSpawn::create(CCBezierTo::create(1.0, tr0),CCRotateBy::create(1.0, -180),NULL),NULL)));
    }
    
    if (this->getChildByTag(8)->boundingBox().containsPoint(location) && this->getChildByTag(8)->numberOfRunningActions() == 0 ) {
        SimpleAudioEngine::sharedEngine()->playEffect(m145frog_jump);
        this->getChildByTag(8)->runAction(CCRepeatForever::create(CCSequence::create(CCFadeIn::create(0.2),CCDelayTime::create(2),CCCallFunc::create(this, callfunc_selector(NYGame522Scene::qingwaChange)),CCMoveTo::create(0.2, ccp(1713.5, 310.2)),CCMoveTo::create(0.2, ccp(1778.2,211.0 )),CCCallFunc::create(this, callfunc_selector(NYGame522Scene::qingwaChangeBack)),CCDelayTime::create(2.0),CCFadeOut::create(0.2),CCMoveTo::create(0, ccp(1596.3, 267.2)),CCDelayTime::create(0.1),NULL)));
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
                        touSpt->runAction(CCSequence::create(CCDelayTime::create(1.2),CCCallFuncN::create(this, callfuncN_selector(NYGame522Scene::BigbanDown)),NULL));
                    }
                    else if (touSpt->getTag() == 113) {
                        touSpt->runAction(CCSequence::create(CCDelayTime::create(1.2),CCCallFunc::create(this, callfunc_selector(NYGame522Scene::boatSOund)),CCEaseBackOut::create(CCMoveBy::create(1.0, ccp(-500,0))),CCDelayTime::create(0.3),CCCallFunc::create(this, callfunc_selector(NYGame522Scene::boatSOund)),CCEaseBackOut::create(CCMoveBy::create(1.0, ccp(500,0))),CCCallFuncN::create(this, callfuncN_selector(NYGame522Scene::BigbanDown)),NULL));
                    }
                    else if (touSpt->getTag() == 114){
                        touSpt->runAction(CCSequence::create(CCDelayTime::create(1.2),CCCallFuncN::create(this, callfuncN_selector(NYGame522Scene::fengzhengAction)),CCDelayTime::create(0.8),CCCallFuncN::create(this, callfuncN_selector(NYGame522Scene::BigbanDown)),NULL));
                    }
                    else if (touSpt->getTag() == 115){
                        this->getChildByTag(25)->runAction(CCSequence::create(CCDelayTime::create(1.2),CCMoveBy::create(0.2, ccp(0, 100)),CCMoveBy::create(0.2, ccp(0, -100)),CCMoveBy::create(0.2, ccp(0, 100)),CCMoveBy::create(0.2, ccp(0, -100)),NULL));
                        touSpt->runAction(CCSequence::create(CCDelayTime::create(1.2),CCDelayTime::create(0.8),CCCallFuncN::create(this, callfuncN_selector(NYGame522Scene::BigbanDown)),NULL));
                    }
                    else if (touSpt->getTag() == 116){
                        this->getChildByTag(26)->runAction(CCSequence::create(CCDelayTime::create(1.2),CCFadeIn::create(0.2),CCDelayTime::create(0.4),CCFadeOut::create(0.2),CCFadeIn::create(0.2),CCDelayTime::create(0.4),CCFadeOut::create(0.2),NULL));
                        touSpt->runAction(CCSequence::create(CCDelayTime::create(1.2),CCDelayTime::create(1.6),CCCallFuncN::create(this, callfuncN_selector(NYGame522Scene::BigbanDown)),NULL));
                    }
                }else{
                    if (touSpt->getTag() == 111 || touSpt->getTag() == 112) {
                        touSpt->runAction(CCSequence::create(CCDelayTime::create(1.2),CCCallFunc::create(this, callfunc_selector(NYGame522Scene::mubanUp)),NULL));
                    }
                    else if (touSpt->getTag() == 113) {
                        touSpt->runAction(CCSequence::create(CCDelayTime::create(1.2),CCCallFunc::create(this, callfunc_selector(NYGame522Scene::boatSOund)),CCEaseBackOut::create(CCMoveBy::create(0.5, ccp(-500,0))),CCDelayTime::create(0.3),CCCallFunc::create(this, callfunc_selector(NYGame522Scene::boatSOund)),CCEaseBackOut::create(CCMoveBy::create(0.5, ccp(500,0))),CCCallFunc::create(this, callfunc_selector(NYGame522Scene::mubanUp)),NULL));
                    }
                    else if (touSpt->getTag() == 114){
                        touSpt->runAction(CCSequence::create(CCDelayTime::create(1.2),CCCallFuncN::create(this, callfuncN_selector(NYGame522Scene::fengzhengAction)),CCDelayTime::create(0.8),CCCallFunc::create(this, callfunc_selector(NYGame522Scene::mubanUp)),NULL));
                    }
                    else if (touSpt->getTag() == 115){
                        this->getChildByTag(25)->runAction(CCSequence::create(CCDelayTime::create(1.2),CCCallFunc::create(this, callfunc_selector(NYGame522Scene::spiderSound)),CCMoveBy::create(0.2, ccp(0, 100)),CCMoveBy::create(0.2, ccp(0, -100)),CCMoveBy::create(0.2, ccp(0, 100)),CCMoveBy::create(0.2, ccp(0, -100)),NULL));
                        touSpt->runAction(CCSequence::create(CCDelayTime::create(1.2),CCDelayTime::create(0.8),CCCallFunc::create(this, callfunc_selector(NYGame522Scene::mubanUp)),NULL));
                    }
                    else if (touSpt->getTag() == 116){
                        this->getChildByTag(26)->runAction(CCSequence::create(CCDelayTime::create(1.2),CCFadeIn::create(0.2),CCDelayTime::create(0.4),CCFadeOut::create(0.2),CCFadeIn::create(0.2),CCDelayTime::create(0.4),CCFadeOut::create(0.2),NULL));
                        touSpt->runAction(CCSequence::create(CCDelayTime::create(1.2),CCDelayTime::create(1.6),CCCallFunc::create(this, callfunc_selector(NYGame522Scene::mubanUp)),NULL));
                    }
                }

                CCSprite* xuXian = CCSprite::createWithSpriteFrameName(CCString::createWithFormat("m145_xian3_000%d.png",touSpt->getTag()-110)->getCString());
                if (touSpt->getTag() == 111) {
                    xuXian->setPosition(touSpt->getPosition());
                    xuXian->setScale(2);
                }else if (touSpt->getTag() == 112){
                    xuXian->setPosition(touSpt->getPosition());
                    xuXian->setScale(2);
                }else if (touSpt->getTag() == 113){
                    xuXian->setPosition(ccp(963.8, 293));
//                    xuXian->setScale(0.45);
                }else if (touSpt->getTag() == 114){
                    xuXian->setPosition(ccp(1188.3, 1099.4));
//                    xuXian->setScale(0.45);
                }else if (touSpt->getTag() == 115){
                    xuXian->setPosition(ccp(192.5, 1019.1));
//                    xuXian->setScale(0.45);
                }else if (touSpt->getTag() == 116){
                    xuXian->setPosition(touSpt->getPosition());
//                    xuXian->setScale(0.27);
                    SimpleAudioEngine::sharedEngine()->playEffect(m145bear_appear);
                }
                xuXian->setColor(ccc3(0, 0, 0));
                this->addChild(xuXian, 1);
                xuXian->runAction(CCSequence::create(CCRepeat::create(CCSequence::create(CCShow::create(),CCDelayTime::create(0.2),CCHide::create(),CCDelayTime::create(0.2),NULL), 3),CCCallFuncN::create(this, callfuncN_selector(NYGame522Scene::removeFormP)),NULL));

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
void NYGame522Scene::ccTouchMoved(CCTouch *pTouch, CCEvent *pEvent)
{
    
}
void NYGame522Scene::ccTouchEnded(CCTouch *pTouch, CCEvent *pEvent)
{
    
}

void NYGame522Scene::removeFormP(CCNode* sender)
{
    sender->removeFromParentAndCleanup(true);
}

void NYGame522Scene::registerWithTouchDispatcher()
{
    CCDirector::sharedDirector()->getTouchDispatcher()->addTargetedDelegate(this, 0, false);
}
void NYGame522Scene::onEnter()
{
    SimpleAudioEngine::sharedEngine()->playEffect(duobianxingjichu_duona1);
    CCLayer::onEnter();
}
void NYGame522Scene::onExit()
{
    CCLayer::onExit();
}

