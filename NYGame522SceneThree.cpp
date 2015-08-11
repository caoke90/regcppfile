

//
//  NYGame522SceneThree.cpp
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

NYGame522SceneThree::~NYGame522SceneThree()
{

    chooseAry->release();
    touChSptAry->release();
    touChSptAry = NULL;
    chooseAry = NULL;
    CCSpriteFrameCache::sharedSpriteFrameCache()->removeSpriteFramesFromFile(M145PubImage);
    CCSpriteFrameCache::sharedSpriteFrameCache()->removeSpriteFramesFromFile(M145Image3_1);
//    CCTextureCache::sharedTextureCache()->removeUnusedTextures();
    CCTextureCache::sharedTextureCache()->removeAllTextures();
}
CCScene* NYGame522SceneThree::scene()
{
    NYGame522SceneThree* layer = NYGame522SceneThree::create();
    CCScene* scene = CCScene::create();
    scene->addChild(layer);
    return scene;
}
bool NYGame522SceneThree::init()
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
    wangClick = true;
    shuClick = true;
    
    scenNum = 0;
    tuxingNum = 0;
    scne = 0;
    
    CCSpriteFrameCache::sharedSpriteFrameCache()->addSpriteFramesWithFile(M145PubImage);
    CCSpriteFrameCache::sharedSpriteFrameCache()->addSpriteFramesWithFile(M145Image3_1);
    
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
        hui->setRotation(45+90*(i-2));
        hui->setTag(-1*(i+10));
        hui->setScale(1.5);
        this->addChild(hui,1);
    }

    CCSprite* bg = CCSprite::create(m145_au_bg);
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
    
    mubanSpt->runAction(CCSequence::create(CCDelayTime::create(0.5),CCEaseBackOut::create(CCMoveBy::create(0.5, ccp(0, 500))),CCDelayTime::create(1.0),CCMoveBy::create(0.5, ccp(0, -500)),CCCallFunc::create(this, callfunc_selector(NYGame522SceneThree::openTouchClick)),NULL));
    
    CCSprite* tizhi = CCSprite::createWithSpriteFrameName("m145_au_tizi.png");
    tizhi->setTag(13);
    tizhi->setPosition(ccp(1088.0,848.0 ));
    tizhi->cocos2d::CCNode::setScale(3.713,3.651 );
    this->addChild(tizhi);
    touChSptAry->addObject(tizhi);
    
    CCSprite* xian = CCSprite::createWithSpriteFrameName("m145_au_zhizhuxian.png");
    xian->setPosition(ccp(288.0,796.0 ));
    xian->cocos2d::CCNode::setScale(0.765,0.552 );
    this->addChild(xian);
    
    CCSprite* zhizhu = CCSprite::createWithSpriteFrameName("m145_au_zhizhu.png");
    zhizhu->setPosition(ccp(284.1, 652.0));
    zhizhu->setTag(25);
    this->addChild(zhizhu);
    
    CCSprite* cheSpt = CCSprite::createWithSpriteFrameName("m145_au_kache.png");
    cheSpt->setPosition(ccp(1352.5,697.8 ));
    cheSpt->setTag(12);
    this->addChild(cheSpt);
    touChSptAry->addObject(cheSpt);
    
    CCSprite* mouse = CCSprite::createWithSpriteFrameName("m145_au_kache01.png");
    mouse->setPosition(ccp(1359.9,600.1 ));
    mouse->setTag(22);
    this->addChild(mouse);
    
    CCSprite* lan = CCSprite::createWithSpriteFrameName("m145_au_ptk0001.png");
    lan->setPosition(ccp(876.0,380.0 ));
    lan->setTag(51);
    lan->cocos2d::CCNode::setScale(2.863,2.599 );
    this->addChild(lan);
    touChSptAry->addObject(lan);
    
    CCSprite* lan2 = CCSprite::createWithSpriteFrameName("m145_au_ptk0002.png");
    lan2->setPosition(ccp(1072.0,324.0 ));
    lan2->setTag(52);
    lan2->cocos2d::CCNode::setScale(2.659,2.341 );
    this->addChild(lan2);
    touChSptAry->addObject(lan2);
    
    CCSprite* lan3 = CCSprite::createWithSpriteFrameName("m145_au_ptk0003.png");
    lan3->setPosition(ccp(1100.0,616.0 ));
    lan3->setTag(53);
    lan3->cocos2d::CCNode::setScale(2.937,2.561 );
    this->addChild(lan3);
    touChSptAry->addObject(lan3);
    
    for (int i = 0; i < 6; i++) {
        CCSprite* yezhi = CCSprite::createWithSpriteFrameName("m145_au_shuye.png");
        if (i == 0) {
            yezhi->setPosition(ccp(1630.0,1422.0 ));
            yezhi->setScale(3.75);
            yezhi->setRotation(-75);
        }
        else if (i == 1){
            yezhi->setPosition(ccp(1726.0,1328.0 ));
            yezhi->cocos2d::CCNode::setScale(3.333, 2.52);
            yezhi->setRotation(-90.0);
        }
        else if (i == 2){
            yezhi->setPosition(ccp(1812.0,1232.0 ));
            yezhi->cocos2d::CCNode::setScale(5.427, 3.879);
            yezhi->setRotation(-60.0);
        }
        else if (i == 3){
            yezhi->setPosition(ccp(1654.0,1164.0 ));
            yezhi->cocos2d::CCNode::setScale(4.127, 3.231);
            yezhi->setRotation(0.0);
        }
        else if (i == 4){
            yezhi->setPosition(ccp(1690.0,1056.0 ));
            yezhi->cocos2d::CCNode::setScale(2.902, 2.367);
            yezhi->setRotation(-45.0);
        }
        else if (i == 5){
            yezhi->setPosition(ccp(1826.0,966.0 ));
            yezhi->cocos2d::CCNode::setScale(2.787, 3.645);
            yezhi->setRotation(-75.0);
        }
        yezhi->setTag(61+i);
        this->addChild(yezhi);
        touChSptAry->addObject(yezhi);
    }
    
    for (int i = 0; i < 10; i++) {
        CCSprite* guozi = CCSprite::createWithSpriteFrameName("m145_au_guozi.png");
        if (i == 0) {
           guozi->setPosition(ccp(324.0,1178.0 ));
        }else if (i == 1){
            guozi->setPosition(ccp(376.0, 1108.0));
        }else if (i == 2){
            guozi->setPosition(ccp(444.0, 1196.0));
        }else if (i == 3){
            guozi->setPosition(ccp(474, 1298.0));
        }else if (i == 4){
            guozi->setPosition(ccp(542.0, 1206.0));
        }else if (i == 5){
            guozi->setPosition(ccp(588.0, 1254.0));
        }else if (i == 6){
            guozi->setPosition(ccp(650.0, 1140.0));
        }else if (i == 7){
            guozi->setPosition(ccp(706.0, 1184.0));
        }else if (i == 8){
            guozi->setPosition(ccp(698.0, 1064.0));
        }else if (i == 9){
            guozi->setPosition(ccp(630.0, 994.0));
        }
        guozi->setTag(71+i);
        this->addChild(guozi);
        
    }
    
    SimpleAudioEngine::sharedEngine()->playBackgroundMusic(m145autumn_music, true);
    
    return true;
}

void NYGame522SceneThree::changeScene()
{
    if (scenNum == -1) {
        SimpleAudioEngine::sharedEngine()->stopAllEffects();
        CCDirector::sharedDirector()->replaceScene(NYGame522Scene::scene());
    }else if (scenNum == -2){
        SimpleAudioEngine::sharedEngine()->stopAllEffects();
        CCDirector::sharedDirector()->replaceScene(NYGame522SceneFour::scene());
    }else if (scenNum == -4){
        SimpleAudioEngine::sharedEngine()->stopAllEffects();
        CCDirector::sharedDirector()->replaceScene(NYGame522SceneTwo::scene());
    }
}

void NYGame522SceneThree::openTouchClick()
{
    touChClick = true;
}

void NYGame522SceneThree::BigbanDown(CCNode* sender)
{
//    this->BigbanUp();
    if (scne == 0) {
        SimpleAudioEngine::sharedEngine()->playEffect(duobianxingjichu_duona2);
    }
    
    if (tuxingNum == 1) {
        scne = 6;
    }else if (tuxingNum == 2){
        scne = 5;
    }else if (tuxingNum == 3){
        scne = 2;
    }else if (tuxingNum == 4){
        scne = 4;
    }else if (tuxingNum == 5){
        scne = 3;
    }else if (tuxingNum == 6){
        scne = 1;
    }
    SKDrawShaps* layer = SKDrawShaps::create();
    this->addChild(layer, 100, 999);
//    SKDrawShaps* layer = (SKDrawShaps*)this->getChildByTag(999);
    layer->initBySeason(AUTUMN_TAG);
    layer->callDraw(scne);
}

void NYGame522SceneThree::BigbanUp()
{
    this->mubanUp();
}

void NYGame522SceneThree::mubanUp()
{
    if (this->getChildByTag(999) != NULL) {
        this->removeChildByTag(999, true);
    }
    for (int i = 0; i < 6; i++) {
        this->getChildByTag(i+1)->runAction(CCSequence::create(CCDelayTime::create(0.5),CCEaseBackOut::create(CCMoveBy::create(0.5, ccp(0, 500))),CCDelayTime::create(1.0),CCMoveBy::create(0.5, ccp(0, -500)),NULL));
    }
    mubanSpt->runAction(CCSequence::create(CCDelayTime::create(0.5),CCEaseBackOut::create(CCMoveBy::create(0.5, ccp(0, 500))),CCDelayTime::create(1.0),CCMoveBy::create(0.5, ccp(0, -500)),CCCallFunc::create(this, callfunc_selector(NYGame522SceneThree::openTouchClick)),NULL));
}

void NYGame522SceneThree::mouseAction()
{
    SimpleAudioEngine::sharedEngine()->playEffect(m145mouse_say_hello);
    CCArray* mfAry = CCArray::create();
    for (int i = 0; i < 9; i++) {
        CCSpriteFrame* frame = CCSpriteFrameCache::sharedSpriteFrameCache()->spriteFrameByName(CCString::createWithFormat("m145_au_kache0%d.png",i+1)->getCString());
        mfAry->addObject(frame);
    }
    CCAnimation* ation = CCAnimation::createWithSpriteFrames(mfAry,0.2);
    CCAnimate* animate = CCAnimate::create(ation);
    this->getChildByTag(22)->runAction(animate);
}

void NYGame522SceneThree::basketSound()
{
    SimpleAudioEngine::sharedEngine()->playEffect(m145grape_basket_shaking);
}

void NYGame522SceneThree::spiderSOund()
{
    SimpleAudioEngine::sharedEngine()->playEffect(m145spider_action);
}

bool NYGame522SceneThree::ccTouchBegan(cocos2d::CCTouch *pTouch, cocos2d::CCEvent *pEvent)
{
    CCPoint location = convertTouchToNodeSpace(pTouch);
    for (int i = 0; i < chooseAry->count(); i++) {
        CCSprite* choose = (CCSprite*)chooseAry->objectAtIndex(i);
        if (choose->boundingBox().containsPoint(location) && scenNum == 0 && choose->getTag() != -3) {
            for (int j = 0; j < 3; j++) {
                this->getChildByTag(-1*(j +11))->runAction(CCRotateTo::create(0.2, 45+(j+1)*90+i*90));
            }
            this->setTouchEnabled(false);
            scenNum = choose->getTag();
            this->runAction(CCSequence::create(CCDelayTime::create(0.2),CCCallFunc::create(this, callfunc_selector(NYGame522SceneThree::changeScene)),NULL));
            //            return true;
        }
    }
    
    if (touChClick) {
        for (int i = 0; i < touChSptAry->count(); i++) {
            CCSprite* touSpt = (CCSprite*)touChSptAry->objectAtIndex(i);
            
            if ((touSpt->boundingBox().containsPoint(location) && ((touSpt->getTag() == 12|| touSpt->getTag() == 112)&& location.x >= 1244 && location.y < 770)) || (touSpt->boundingBox().containsPoint(location) && (touSpt->getTag() != 12 && touSpt->getTag() != 112))) {
                touChClick = false;
                
                if (touSpt->getTag() < 100) {
                    if (touSpt->getTag() < 50) {
                        tuxingNum = touSpt->getTag() - 10;
                        this->getChildByTag(touSpt->getTag() - 10)->setScale(1);
                        if (touSpt->getTag() == 12) {
                            touSpt->runAction(CCSequence::create(CCDelayTime::create(1.2),CCCallFunc::create(this, callfunc_selector(NYGame522SceneThree::mouseAction)),CCDelayTime::create(2.0),CCCallFuncN::create(this, callfuncN_selector(NYGame522SceneThree::BigbanDown)),NULL));
                        }
                        if (touSpt->getTag() == 13) {
                            touSpt->runAction(CCSequence::create(CCDelayTime::create(1.2),CCCallFuncN::create(this, callfuncN_selector(NYGame522SceneThree::BigbanDown)),NULL));
                        }
                    }
                    else if (touSpt->getTag() > 50 && touSpt->getTag() < 60){
                        this->getChildByTag(1)->setScale(1);
                        tuxingNum = 1;
                        if (touSpt->getTag() == 51) {
                            touSpt->setZOrder(1);
                            touSpt->runAction(CCSequence::create(CCDelayTime::create(1.2),CCCallFunc::create(this, callfunc_selector(NYGame522SceneThree::basketSound)),CCEaseBackOut::create(CCMoveTo::create(0.2, ccp(994.2,589.4 ))),CCDelayTime::create(0.5),CCFadeOut::create(0.2),CCMoveTo::create(0, ccp(876.0,380.0)),CCFadeIn::create(0.2),CCDelayTime::create(0.1),CCCallFuncN::create(this, callfuncN_selector(NYGame522SceneThree::BigbanDown)),NULL));
                        }else if (touSpt->getTag() == 52){
                            touSpt->setZOrder(1);
                            touSpt->runAction(CCSequence::create(CCDelayTime::create(1.2),CCCallFunc::create(this, callfunc_selector(NYGame522SceneThree::basketSound)),CCEaseBackOut::create(CCMoveTo::create(0.2, ccp(994.2,589.4 ))),CCDelayTime::create(0.5),CCFadeOut::create(0.2),CCMoveTo::create(0, ccp(1072.0,324.0)),CCFadeIn::create(0.2),CCDelayTime::create(0.1),CCCallFuncN::create(this, callfuncN_selector(NYGame522SceneThree::BigbanDown)),NULL));
                        }else if (touSpt->getTag() == 53){
                            
                            touSpt->runAction(CCSequence::create(CCDelayTime::create(1.2),CCCallFunc::create(this, callfunc_selector(NYGame522SceneThree::basketSound)),CCRotateTo::create(0.2, 5),CCRotateTo::create(0.2, 0),CCRotateTo::create(0.2, 5),CCRotateTo::create(0.2, 0),CCRotateTo::create(0.2, 5),CCRotateTo::create(0.2, 0),CCDelayTime::create(0.1),CCCallFuncN::create(this, callfuncN_selector(NYGame522SceneThree::BigbanDown)),NULL));
                        }
                        
                    }
                    else if (touSpt->getTag() > 60 && touSpt->getTag() < 70){
                        this->getChildByTag(4)->setScale(1);
                        tuxingNum = 4;
                        touSpt->runAction(CCSequence::create(CCDelayTime::create(1.2),CCRotateBy::create(0.2, 5),CCRotateBy::create(0.2, -5),CCMoveBy::create(0.5, ccp(0,-500)),CCFadeOut::create(0.2),CCCallFuncN::create(this, callfuncN_selector(NYGame522SceneThree::BigbanDown)),CCDelayTime::create(0.2),CCMoveBy::create(0, ccp(0, 500)),CCFadeIn::create(0.2),NULL));
                    }
                    touSpt->setTag(touSpt->getTag()+100);


                }else{
                    if (touSpt->getTag() == 151) {
                        touSpt->setZOrder(1);
                        touSpt->runAction(CCSequence::create(CCDelayTime::create(1.2),CCEaseBackOut::create(CCMoveTo::create(0.2, ccp(994.2,589.4 ))),CCDelayTime::create(0.5),CCFadeOut::create(0.2),CCMoveTo::create(0, ccp(876.0,380.0)),CCFadeIn::create(0.2),CCDelayTime::create(0.1),CCCallFunc::create(this, callfunc_selector(NYGame522SceneThree::mubanUp)),NULL));
                    }else if (touSpt->getTag() == 152){
                        touSpt->setZOrder(1);
                        touSpt->runAction(CCSequence::create(CCDelayTime::create(1.2),CCEaseBackOut::create(CCMoveTo::create(0.2, ccp(994.2,589.4 ))),CCDelayTime::create(0.5),CCFadeOut::create(0.2),CCMoveTo::create(0, ccp(1072.0,324.0)),CCFadeIn::create(0.2),CCDelayTime::create(0.1),CCCallFunc::create(this, callfunc_selector(NYGame522SceneThree::mubanUp)),NULL));
                    }else if (touSpt->getTag() == 153){
                        
                        touSpt->runAction(CCSequence::create(CCDelayTime::create(1.2),CCRotateTo::create(0.2, 5),CCRotateTo::create(0.2, 0),CCRotateTo::create(0.2, 5),CCRotateTo::create(0.2, 0),CCRotateTo::create(0.2, 5),CCRotateTo::create(0.2, 0),CCDelayTime::create(0.1),CCCallFunc::create(this, callfunc_selector(NYGame522SceneThree::mubanUp)),NULL));
                    }
                    if (touSpt->getTag() == 112) {
                        touSpt->runAction(CCSequence::create(CCDelayTime::create(1.2),CCCallFunc::create(this, callfunc_selector(NYGame522SceneThree::mouseAction)),CCDelayTime::create(2.0),CCCallFunc::create(this, callfunc_selector(NYGame522SceneThree::mubanUp)),NULL));
                    }
                    if (touSpt->getTag() > 160 && touSpt->getTag() < 170){
                        touSpt->runAction(CCSequence::create(CCDelayTime::create(1.2),CCRotateBy::create(0.2, 5),CCRotateBy::create(0.2, -5),CCMoveBy::create(0.5, ccp(0,-500)),CCFadeOut::create(0.2),CCCallFunc::create(this, callfunc_selector(NYGame522SceneThree::mubanUp)),CCDelayTime::create(0.2),CCMoveBy::create(0, ccp(0, 500)),CCFadeIn::create(0.2),NULL));
                    }
                    
                    
                }
                
                if (touSpt->getTag() < 150) {
                    tuxingNum = touSpt->getTag() - 110;
                    
                }
                else if (touSpt->getTag() > 150 && touSpt->getTag() < 160){
                    
                    tuxingNum = 1;
                }
                else if (touSpt->getTag() > 160 && touSpt->getTag() < 170){
                    
                    tuxingNum = 4;
                    SimpleAudioEngine::sharedEngine()->playEffect(m145diamond_leaf_fluttering);
                }
                
                
                    CCSprite* xuXian = CCSprite::createWithSpriteFrameName(CCString::createWithFormat("m145_au_bx000%d.png",tuxingNum)->getCString());
                    if (tuxingNum == 1){
                        if (touSpt ->getTag() == 151) {
                            xuXian->setPosition(ccp(899.4, 318.2));
                            
                        }else if (touSpt ->getTag() == 152){
                            xuXian->setPosition(ccp(1098.5, 264.3));
                            xuXian->setScale(0.9);
                        }else if (touSpt ->getTag() == 153){
                            xuXian->setPosition(ccp(1088.0, 554.0));
                        }

                    }
                    else if (tuxingNum == 2){
                        xuXian->setPosition(ccp(1389.9, 602.0));
                        
                    }else if (tuxingNum == 3){
                        xuXian->setPosition(ccp(1092.1, 843.9));
                        
                    }else if (tuxingNum == 4){
                        if (touSpt ->getTag() == 161) {
                            xuXian->setPosition(ccp(1619.2, 1402.0));
                            xuXian->setRotation(-75.0);
//                            xuXian->setScale(0);
                        }else if (touSpt ->getTag() == 162){
                            xuXian->setPosition(ccp(1718.7, 1302.5));
                            xuXian->setRotation(-90);
                            xuXian->setScale(0.6);
                        }else if (touSpt ->getTag() == 163){
                            xuXian->setPosition(ccp(1783.0, 1209.2));
                            xuXian->setRotation(-60);
//                            xuXian->setScale(0);
                        }else if (touSpt ->getTag() == 164){
                            xuXian->setPosition(ccp(1627.4, 1178.1));
//                            xuXian->setRotation(0);
//                            xuXian->setScale(0);
                        }else if (touSpt ->getTag() == 165){
                            xuXian->setPosition(ccp(1668.9, 1047.4));
                            xuXian->setRotation(-45);
                            xuXian->setScale(0.6);
                        }else if (touSpt ->getTag() == 166){
                            xuXian->setPosition(ccp(1807.9, 952.1));
                            xuXian->setRotation(-62.8);
                            xuXian->setScale(0.8);
                        }
                        
                    }
                    xuXian->setColor(ccc3(0, 0, 0));
                    this->addChild(xuXian, 1);
                    xuXian->runAction(CCSequence::create(CCRepeat::create(CCSequence::create(CCShow::create(),CCDelayTime::create(0.2),CCHide::create(),CCDelayTime::create(0.2),NULL), 3),CCCallFuncN::create(this, callfuncN_selector(NYGame522SceneThree::removeFormP)),NULL));
                
                
                return true;
            }
        }
        
        if (CCRect(143.1, 711.2, 250, 250).containsPoint(location)) {
            touChClick = false;
            
            if (wangClick) {
                wangClick = false;
                tuxingNum = 5;
                this->getChildByTag(5)->setScale(1);
                this->getChildByTag(25)->runAction(CCSequence::create(CCDelayTime::create(1.2),CCCallFunc::create(this, callfunc_selector(NYGame522SceneThree::spiderSOund)),CCEaseBackOut::create(CCMoveBy::create(0.2, ccp(0, 50))),CCDelayTime::create(0.1),CCEaseBackOut::create(CCMoveBy::create(0.2, ccp(0, -50))),CCCallFuncN::create(this, callfuncN_selector(NYGame522SceneThree::BigbanDown)),NULL));
            }else{
                this->getChildByTag(25)->runAction(CCSequence::create(CCDelayTime::create(1.2),CCCallFunc::create(this, callfunc_selector(NYGame522SceneThree::spiderSOund)),CCEaseBackOut::create(CCMoveBy::create(0.2, ccp(0, 50))),CCDelayTime::create(0.1),CCEaseBackOut::create(CCMoveBy::create(0.2, ccp(0, -50))),CCCallFunc::create(this, callfunc_selector(NYGame522SceneThree::mubanUp)),NULL));
            }
            
            tuxingNum = 5;
            CCSprite* xuXian = CCSprite::createWithSpriteFrameName(CCString::createWithFormat("m145_au_bx000%d.png",tuxingNum)->getCString());
            xuXian->setPosition(ccp(278.0, 866));
            this->addChild(xuXian, 1);
            xuXian->setColor(ccc3(0, 0, 0));
            xuXian->runAction(CCSequence::create(CCRepeat::create(CCSequence::create(CCShow::create(),CCDelayTime::create(0.2),CCHide::create(),CCDelayTime::create(0.2),NULL), 3),CCCallFuncN::create(this, callfuncN_selector(NYGame522SceneThree::removeFormP)),NULL));
           
            
        }
        if (CCRect(342.1, 966.3, 350, 350).containsPoint(location)) {
            touChClick = false;
            SimpleAudioEngine::sharedEngine()->playEffect(m145click_on_the_tree);
            if (shuClick) {
                 shuClick = false;
                tuxingNum = 6;
                this->getChildByTag(6)->setScale(1);
                this->getChildByTag(71)->runAction(CCSequence::create(CCDelayTime::create(1.2),CCDelayTime::create(2.1),CCCallFuncN::create(this, callfuncN_selector(NYGame522SceneThree::BigbanDown)),NULL));
            }else{
                this->getChildByTag(71)->runAction(CCSequence::create(CCDelayTime::create(1.2),CCDelayTime::create(2.1),CCCallFunc::create(this, callfunc_selector(NYGame522SceneThree::mubanUp)),NULL));
            }
            
            for (int i = 0; i < 10; i++) {
                int random = arc4random()%10;
                float time = (float)random/10;
                this->getChildByTag(71+i)->runAction(CCSequence::create(CCDelayTime::create(time),CCMoveBy::create(0.5, ccp(0, -500)),CCFadeOut::create(0.2),CCDelayTime::create(0.2),CCMoveBy::create(0, ccp(0, 500)),CCFadeIn::create(0.2),NULL));
            }
            
            tuxingNum = 6;
            CCSprite* xuXian = CCSprite::createWithSpriteFrameName(CCString::createWithFormat("m145_au_bx000%d.png",tuxingNum)->getCString());
            xuXian->setPosition(ccp(522.0, 1140.0));
            this->addChild(xuXian, 1);
            xuXian->setColor(ccc3(0, 0, 0));
            xuXian->runAction(CCSequence::create(CCRepeat::create(CCSequence::create(CCShow::create(),CCDelayTime::create(0.2),CCHide::create(),CCDelayTime::create(0.2),NULL), 3),CCCallFuncN::create(this, callfuncN_selector(NYGame522SceneThree::removeFormP)),NULL));
            
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
void NYGame522SceneThree::ccTouchMoved(cocos2d::CCTouch *pTouch, cocos2d::CCEvent *pEvent)
{
    
}
void NYGame522SceneThree::ccTouchEnded(cocos2d::CCTouch *pTouch, cocos2d::CCEvent *pEvent)
{
//    tuxingNum = 0;
}
void NYGame522SceneThree::registerWithTouchDispatcher()
{
    CCDirector::sharedDirector()->getTouchDispatcher()->addTargetedDelegate(this, 0, false);
}

void NYGame522SceneThree::removeFormP(cocos2d::CCNode *sender)
{
    sender->removeFromParentAndCleanup(true);
}

void NYGame522SceneThree::onEnter()
{
    SimpleAudioEngine::sharedEngine()->playEffect(duobianxingjichu_duona1);
    CCLayer::onEnter();
}
void NYGame522SceneThree::onExit()
{
    CCLayer::onExit();
}