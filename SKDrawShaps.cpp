//
//  SKDrawShaps.cpp
//  mathKgIII_a
//
//  Created by Super on 14-5-9.
//
//

#include "SKDrawShaps.h"
#include "../../pubTools/PersonalApi.h"
#include "NYGame522Scene.h"
#include "NYGame522SceneTwo.h"
#include "NYGame522SceneThree.h"
#include "NYGame522SceneFour.h"
#include "SimpleAudioEngine.h"

USING_NS_CC;

bool SKDrawShaps::init()
{
    if ( !CCLayer::init() ) {
        return false;
    }
    
    this->setPosition(ccp(0, 1536));
    
    CCSprite *bg = CCSprite::create("res/unit_5/game2/image/m145_muban_0001.png");
    bg->setPosition(ccp(1024, 768));
    this->addChild(bg);
    
    drawTool = new SKDrawToolInDraw;
    drawTool->initWithSize(CCSizeMake(2048, 1536));
    drawTool->setPosition(CCPointMake(0, 0));
    drawTool->creatOneBrushWithRGB(CCSizeMake(20, 20), ccc4f(255, 255, 255, 255), "one");
    drawTool->setBrush("one");
    this->addChild(drawTool,50);
    
    pointSpr = CCSprite::create("res/unit_5/game2/image/drawGamePoint.png");
    pointSpr->setPosition(ccp(0, 1536));
    this->addChild(pointSpr,51);
    
    pointArray = CCArray::create();
    CC_SAFE_RETAIN(pointArray);
    currentArray = NULL;
    
    shapSpr = NULL;
    objSpr = NULL;
    holdType = 0;
    
    return true;
}

void SKDrawShaps::initBySeason(DRAWGAMETYPE val)
{
    cleanCurrentSeason();
    holdType = (int)val;
    
    CCString *str = CCString::createWithFormat("res/unit_5/game2/image/drawGameShap%d",holdType);
    PersonalApi::addPlist(str);
    
    CCString *str1 = CCString::createWithFormat("res/unit_5/game2/image/drawGameObj%d",holdType);
    PersonalApi::addPlist(str1);
    
    pointArray->removeAllObjects();
    switch (val) {
        case SPRING_TAG:
        {
            CCPointArray *arr1 = CCPointArray::create(4);
            arr1->addControlPoint(ccp(729, 777));
            arr1->addControlPoint(ccp(1017, 342));
            arr1->addControlPoint(ccp(1316, 788));
            arr1->addControlPoint(ccp(1017, 1190));
            pointArray->addObject(arr1);
            
            CCPointArray *arr2 = CCPointArray::create(6);
            arr2->addControlPoint(ccp(656, 980));
            arr2->addControlPoint(ccp(656, 555));
            arr2->addControlPoint(ccp(1025, 338));
            arr2->addControlPoint(ccp(1394, 555));
            arr2->addControlPoint(ccp(1394, 980));
            arr2->addControlPoint(ccp(1025, 1195));
            pointArray->addObject(arr2);
            
            CCPointArray *arr3 = CCPointArray::create(6);
            arr3->addControlPoint(ccp(780, 634));
            arr3->addControlPoint(ccp(1265, 634));
            arr3->addControlPoint(ccp(1515, 897));
            arr3->addControlPoint(ccp(533, 897));
            pointArray->addObject(arr3);
            
            CCPointArray *arr4 = CCPointArray::create(6);
            arr4->addControlPoint(ccp(648, 394));
            arr4->addControlPoint(ccp(1398, 394));
            arr4->addControlPoint(ccp(1398, 1144));
            arr4->addControlPoint(ccp(648, 1144));
            pointArray->addObject(arr4);
            
            CCPointArray *arr5 = CCPointArray::create(6);
            arr5->addControlPoint(ccp(730, 350));
            arr5->addControlPoint(ccp(1318, 350));
            arr5->addControlPoint(ccp(1318, 1184));
            arr5->addControlPoint(ccp(730, 1184));
            pointArray->addObject(arr5);
            
            CCPointArray *arr6 = CCPointArray::create(6);
            arr6->addControlPoint(ccp(674, 847));
            arr6->addControlPoint(ccp(810, 434));
            arr6->addControlPoint(ccp(1242, 434));
            arr6->addControlPoint(ccp(1380, 847));
            arr6->addControlPoint(ccp(1030, 1100));
            pointArray->addObject(arr6);
        }
            break;
        case SUMMER_TAG:
        {
            
            CCPointArray *arr1 = CCPointArray::create(6);
            arr1->addControlPoint(ccp(690, 434));
            arr1->addControlPoint(ccp(1360, 434));
            arr1->addControlPoint(ccp(1360, 1102));
            arr1->addControlPoint(ccp(690, 1102));
            pointArray->addObject(arr1);
            
            CCPointArray *arr2 = CCPointArray::create(6);
            arr2->addControlPoint(ccp(672, 335));
            arr2->addControlPoint(ccp(1360, 335));
            arr2->addControlPoint(ccp(1360, 1178));
            arr2->addControlPoint(ccp(672, 1178));
            pointArray->addObject(arr2);
            
            CCPointArray *arr3 = CCPointArray::create(6);
            arr3->addControlPoint(ccp(662, 352));
            arr3->addControlPoint(ccp(1365, 352));
            arr3->addControlPoint(ccp(1240, 1173));
            arr3->addControlPoint(ccp(783, 1173));
            pointArray->addObject(arr3);
            
            CCPointArray *arr4 = CCPointArray::create(6);
            arr4->addControlPoint(ccp(465, 789));
            arr4->addControlPoint(ccp(665, 464));
            arr4->addControlPoint(ccp(1370, 464));
            arr4->addControlPoint(ccp(1573, 783));
            arr4->addControlPoint(ccp(1360, 1071));
            arr4->addControlPoint(ccp(712, 1071));
            pointArray->addObject(arr4);
            
            CCPointArray *arr5 = CCPointArray::create(6);
            arr5->addControlPoint(ccp(804, 810));
            arr5->addControlPoint(ccp(876, 337));
            arr5->addControlPoint(ccp(1202, 716));
            arr5->addControlPoint(ccp(1106, 1197));
            pointArray->addObject(arr5);
            
            CCPointArray *arr6 = CCPointArray::create(6);
            arr6->addControlPoint(ccp(904, 796));
            arr6->addControlPoint(ccp(949, 654));
            arr6->addControlPoint(ccp(1096, 654));
            arr6->addControlPoint(ccp(1142, 794));
            arr6->addControlPoint(ccp(1026, 879));
            pointArray->addObject(arr6);
        }
            break;
        case AUTUMN_TAG:
        {
            
            CCPointArray *arr1 = CCPointArray::create(6);
            arr1->addControlPoint(ccp(672, 757));
            arr1->addControlPoint(ccp(872, 470));
            arr1->addControlPoint(ccp(1185, 470));
            arr1->addControlPoint(ccp(1381, 755));
            arr1->addControlPoint(ccp(1187, 1059));
            arr1->addControlPoint(ccp(871, 1060));
            pointArray->addObject(arr1);
            
            CCPointArray *arr2 = CCPointArray::create(6);
            arr2->addControlPoint(ccp(696, 480));
            arr2->addControlPoint(ccp(1352, 480));
            arr2->addControlPoint(ccp(1247, 1053));
            arr2->addControlPoint(ccp(860, 1053));
            pointArray->addObject(arr2);
            
            CCPointArray *arr3 = CCPointArray::create(6);
            arr3->addControlPoint(ccp(675, 846));
            arr3->addControlPoint(ccp(809, 435));
            arr3->addControlPoint(ccp(1244, 435));
            arr3->addControlPoint(ccp(1380, 845));
            arr3->addControlPoint(ccp(1030, 1100));
            pointArray->addObject(arr3);
            
            CCPointArray *arr4 = CCPointArray::create(6);
            arr4->addControlPoint(ccp(606, 765));
            arr4->addControlPoint(ccp(1024, 551));
            arr4->addControlPoint(ccp(1440, 764));
            arr4->addControlPoint(ccp(1022, 978));
            pointArray->addObject(arr4);
            
            CCPointArray *arr5 = CCPointArray::create(6);
            arr5->addControlPoint(ccp(830, 355));
            arr5->addControlPoint(ccp(1213, 355));
            arr5->addControlPoint(ccp(1214, 1180));
            arr5->addControlPoint(ccp(853, 1183));
            pointArray->addObject(arr5);
            
            CCPointArray *arr6 = CCPointArray::create(6);
            arr6->addControlPoint(ccp(734, 478));
            arr6->addControlPoint(ccp(1313, 478));
            arr6->addControlPoint(ccp(1313, 1057));
            arr6->addControlPoint(ccp(734, 1057));
            pointArray->addObject(arr6);
        }
            break;
        case WINTTER_TAG:
        {
            CCPointArray *arr1 = CCPointArray::create(6);
            arr1->addControlPoint(ccp(423, 487));
            arr1->addControlPoint(ccp(1625, 487));
            arr1->addControlPoint(ccp(983, 1038));
            arr1->addControlPoint(ccp(639, 1038));
            pointArray->addObject(arr1);
            
            CCPointArray *arr2 = CCPointArray::create(6);
            arr2->addControlPoint(ccp(622, 767));
            arr2->addControlPoint(ccp(1026, 564));
            arr2->addControlPoint(ccp(1424, 766));
            arr2->addControlPoint(ccp(1023, 966));
            pointArray->addObject(arr2);
            
            CCPointArray *arr3 = CCPointArray::create(6);
            arr3->addControlPoint(ccp(652, 387));
            arr3->addControlPoint(ccp(1400, 396));
            arr3->addControlPoint(ccp(1396, 1140));
            arr3->addControlPoint(ccp(643, 1135));
            pointArray->addObject(arr3);
            
            CCPointArray *arr4 = CCPointArray::create(6);
            arr4->addControlPoint(ccp(652, 972));
            arr4->addControlPoint(ccp(652, 550));
            arr4->addControlPoint(ccp(1024, 343));
            arr4->addControlPoint(ccp(1392, 547));
            arr4->addControlPoint(ccp(1392, 972));
            arr4->addControlPoint(ccp(1024, 1180));
            pointArray->addObject(arr4);
            
            CCPointArray *arr5 = CCPointArray::create(6);
            arr5->addControlPoint(ccp(721, 837));
            arr5->addControlPoint(ccp(838, 484));
            arr5->addControlPoint(ccp(1209, 484));
            arr5->addControlPoint(ccp(1327, 837));
            arr5->addControlPoint(ccp(1025, 1050));
            pointArray->addObject(arr5);
            
            CCPointArray *arr6 = CCPointArray::create(6);
            arr6->addControlPoint(ccp(730, 350));
            arr6->addControlPoint(ccp(1318, 350));
            arr6->addControlPoint(ccp(1318, 1184));
            arr6->addControlPoint(ccp(730, 1184));
            pointArray->addObject(arr6);
        }
            break;
        default:
            break;
    }
}

void SKDrawShaps::cleanCurrentSeason()
{
    if (holdType!=0) {
        CCString *str = CCString::createWithFormat("res/unit_5/game2/image/drawGameShap%d.plist",holdType);
        CCString *str1 = CCString::createWithFormat("res/unit_5/game2/image/drawGameShap%d.png",holdType);
        CCString *str2 = CCString::createWithFormat("res/unit_5/game2/image/drawGameObj%d.plist",holdType);
        CCString *str3 = CCString::createWithFormat("res/unit_5/game2/image/drawGameObj%d.png",holdType);
        CCSpriteFrameCache::sharedSpriteFrameCache()->removeSpriteFramesFromFile(str->getCString());
        CCTextureCache::sharedTextureCache()->removeTextureForKey(str1->getCString());
        CCSpriteFrameCache::sharedSpriteFrameCache()->removeSpriteFramesFromFile(str2->getCString());
        CCTextureCache::sharedTextureCache()->removeTextureForKey(str3->getCString());
        holdType = 0;
    }
}

void SKDrawShaps::callDraw(int indexVal)
{
    CCLog("%d",indexVal);
    switch (holdType) {
        case SPRING_TAG:
            switch (indexVal) {
                case 1:
                    sideNumber = 4;
                    break;
                case 2:
                    sideNumber = 6;
                    break;
                case 3:
                    sideNumber = 4;
                    break;
                case 4:
                    sideNumber = 4;
                    break;
                case 5:
                    sideNumber = 4;
                    break;
                case 6:
                    sideNumber = 5;
                    break;
                default:
                    break;
            }
            break;
        case SUMMER_TAG:
            switch (indexVal) {
                case 1:
                    sideNumber = 4;
                    break;
                case 2:
                    sideNumber = 4;
                    break;
                case 3:
                    sideNumber = 4;
                    break;
                case 4:
                    sideNumber = 6;
                    break;
                case 5:
                    sideNumber = 4;
                    break;
                case 6:
                    sideNumber = 5;
                    break;
                default:
                    break;
            }
            break;
        case AUTUMN_TAG:
            switch (indexVal) {
                case 1:
                    sideNumber = 6;
                    break;
                case 2:
                    sideNumber = 4;
                    break;
                case 3:
                    sideNumber = 5;
                    break;
                case 4:
                    sideNumber = 4;
                    break;
                case 5:
                    sideNumber = 4;
                    break;
                case 6:
                    sideNumber = 4;
                    break;
                default:
                    break;
            }
            break;
        case WINTTER_TAG:
            switch (indexVal) {
                case 1:
                    sideNumber = 4;
                    break;
                case 2:
                    sideNumber = 4;
                    break;
                case 3:
                    sideNumber = 4;
                    break;
                case 4:
                    sideNumber = 6;
                    break;
                case 5:
                    sideNumber = 5;
                    break;
                case 6:
                    sideNumber = 4;
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
    CCString *str = CCString::createWithFormat("shap%d.png",indexVal);
    objName = CCString::createWithFormat("obj%d.png",indexVal)->getCString();
    if (shapSpr==NULL) {
        shapSpr = CCSprite::createWithSpriteFrameName(str->getCString());
        shapSpr->setPosition(ccp(1024, 768));
        this->addChild(shapSpr);
    }
    else {
        shapSpr->setDisplayFrame(CCSpriteFrameCache::sharedSpriteFrameCache()->spriteFrameByName(str->getCString()));
    }
    
    this->runAction(CCSequence::create(CCEaseIn::create(CCMoveBy::create(0.5f, ccp(0, -1536)), 4),CCMoveBy::create(0.1f, ccp(0, 20)),CCMoveBy::create(0.1f, ccp(0, -20)),NULL));
    
    currentArray = (CCPointArray*)pointArray->objectAtIndex(indexVal-1);
    drawTool->allClear();
    
    pointSpr->setPosition(currentArray->getControlPointAtIndex(currentArray->count()-1));
    
    //计算equationK equationB
    CCPoint temp = currentArray->getControlPointAtIndex(0);
    if (temp.x-pointSpr->getPositionX()==0) {
        haveK = false;
    }
    else {
        haveK = true;
        equationK = (temp.y-pointSpr->getPositionY())/(temp.x-pointSpr->getPositionX());
        equationB = temp.y-equationK*temp.x;
    }
    
    canMove = false;
    if (objSpr!=NULL) {
        objSpr->setOpacity(0);
    }
    
    shapSpr->setVisible(true);
    pointSpr->setVisible(true);
    
    this->setTouchEnabled(true);
}

void SKDrawShaps::drawOver()
{
    currentArray = NULL;
    this->runAction(CCSequence::create(CCMoveBy::create(0.1, ccp(0, -20)), CCEaseIn::create(CCMoveBy::create(0.3f, ccp(0, 1536)), 3),CCCallFunc::create(this, callfunc_selector(SKDrawShaps::drawOver1)),NULL));
    this->setTouchEnabled(false);
    
}

void SKDrawShaps::drawOver1()
{
    if (holdType == SPRING_TAG) {
        NYGame522Scene* scene = (NYGame522Scene*)this->getParent();
        scene->mubanUp();
    }else if (holdType == SUMMER_TAG){
        NYGame522SceneTwo* scene = (NYGame522SceneTwo*)this->getParent();
        scene->mubanUp();
    }else if (holdType == AUTUMN_TAG){
        NYGame522SceneThree* scene = (NYGame522SceneThree*)this->getParent();
        scene->mubanUp();
    }else if (holdType == WINTTER_TAG){
        NYGame522SceneFour* scene = (NYGame522SceneFour*)this->getParent();
        scene->mubanUp();
    }
}


SKDrawShaps::~SKDrawShaps()
{
    currentArray = NULL;
    CC_SAFE_RELEASE(pointArray);
    cleanCurrentSeason();
    CCTextureCache::sharedTextureCache()->removeUnusedTextures();
}

void SKDrawShaps::onEnter()
{
    CCLayer::onEnter();
}

void SKDrawShaps::onExit()
{
    CCDirector::sharedDirector()->getTouchDispatcher()->removeDelegate(this);
    CCLayer::onExit();
}

void SKDrawShaps::registerWithTouchDispatcher()
{
    CCDirector::sharedDirector()->getTouchDispatcher()->addTargetedDelegate(this,0, true);
}

bool SKDrawShaps::ccTouchBegan(CCTouch* touches, CCEvent* event)
{
    //return false;
    //CCPoint touchLocation = touch->getLocationInView();
    //touchLocation = CCDirector::sharedDirector()>convertToGL(touchLocation);
    //CCPoint touchLocation = convertTouchToNodeSpace(touch);
    CCPoint location = convertTouchToNodeSpace(touches);
    if (pointSpr->boundingBox().containsPoint(location)) {
        canMove = true;
        drawTool->setStorePointValue(pointSpr->getPosition());
    }
    
    return true;
}

bool SKDrawShaps::setNewPosition(CCPoint pot)
{
    if (currentArray->count()==0) {
        return false;
    }
    CCPoint tarPot = currentArray->getControlPointAtIndex(0);
    
    bool recount = false;
    if (haveK==false) {//无斜率
        if (pointSpr->getPositionY()-tarPot.y>=0.0) {//向下拖动
            if (pot.y-tarPot.y<=0.0) {
                pointSpr->setPositionY(tarPot.y);
                recount = true;
            }
            else if(pot.y-pointSpr->getPositionY()<0.0) {
                pointSpr->setPositionY(pot.y);
            }
        }
        else {//向上拖动
            if (pot.y-tarPot.y>=0.0) {
                pointSpr->setPositionY(tarPot.y);
                recount = true;
            }
            else if(pot.y-pointSpr->getPositionY()>0.0) {
                pointSpr->setPositionY(pot.y);
            }
        }
    }
    else {
        if (fabsf(equationK)>=1) {//y主导
            if (pointSpr->getPositionY()-tarPot.y>=0.0) {//向下拖动
                if (pot.y-tarPot.y<=0.0) {
                    //pointSpr->setPositionY(tarPot.y);
                    pointSpr->setPosition(tarPot);
                    recount = true;
                    //pointSpr->setPositionX((pot.y-equationB)/equationK);
 
                }
                else if(pot.y-pointSpr->getPositionY()<0.0) {
                    pointSpr->setPositionY(pot.y);
                    pointSpr->setPositionX((pot.y-equationB)/equationK);
                }
            }
            else {//向上
                if (pot.y-tarPot.y>=0.0) {
                    //pointSpr->setPositionY(tarPot.y);
                    recount = true;
                    //pointSpr->setPositionX((pot.y-equationB)/equationK);
                    pointSpr->setPosition(tarPot);
                }
                else if(pot.y-pointSpr->getPositionY()>0.0) {
                    pointSpr->setPositionY(pot.y);
                    pointSpr->setPositionX((pot.y-equationB)/equationK);
                }
            }
            
        }
        else {//x主导
            if (pointSpr->getPositionX()-tarPot.x>=0.0) {//向左拖动
                if (pot.x-tarPot.x<=0.0) {
                    //pointSpr->setPositionX(tarPot.x);
                    pointSpr->setPosition(tarPot);
                    recount = true;
                    //pointSpr->setPositionY(equationK*pot.x+equationB);
                }
                else if(pot.x-pointSpr->getPositionX()<0.0) {
                    pointSpr->setPositionX(pot.x);
                    pointSpr->setPositionY(equationK*pot.x+equationB);
                }
            }
            else {//向右拖动
                if (pot.x-tarPot.x>=0.0) {
                    //pointSpr->setPositionX(tarPot.x);
                    recount = true;
                    pointSpr->setPosition(tarPot);
                    //pointSpr->setPositionY(equationK*pot.x+equationB);
                }
                else if(pot.x-pointSpr->getPositionX()>0.0) {
                    pointSpr->setPositionX(pot.x);
                    pointSpr->setPositionY(equationK*pot.x+equationB);
                }
            }
            
        }
    }
    
    if (recount==true) {
        currentArray->removeControlPointAtIndex(0);
        if (currentArray->count()==0) {
            //draw over
            if (objSpr==NULL) {
                objSpr = CCSprite::createWithSpriteFrameName(objName.c_str());
                objSpr->setPosition(ccp(1024, 768));
                this->addChild(objSpr,52);
                objSpr->setOpacity(0);
            }
            else {
                objSpr->setDisplayFrame(CCSpriteFrameCache::sharedSpriteFrameCache()->spriteFrameByName(objName.c_str()));
            }
            //objSpr->runAction(CCSequence::createWithTwoActions(CCDelayTime::create(0.5f), CCFadeIn::create(0.5f)));
            objSpr->runAction(CCFadeIn::create(0.5f));
            CCString *str = CCString::createWithFormat("res/unit_5/game2/audio/m145duobianxing%d.mp3",sideNumber);
            CocosDenshion::SimpleAudioEngine::sharedEngine()->playEffect(str->getCString());
            
            drawTool->allClear();
            shapSpr->setVisible(false);
            pointSpr->setVisible(false);
            
            this->runAction(CCSequence::createWithTwoActions(CCDelayTime::create(2.5f), CCCallFunc::create(this, callfunc_selector(SKDrawShaps::drawOver))));
            
            return false;
        }
        else {
            CCPoint temp = currentArray->getControlPointAtIndex(0);
            if (temp.x-pointSpr->getPositionX()==0) {
                haveK = false;
            }
            else {
                haveK = true;
                equationK = (temp.y-pointSpr->getPositionY())/(temp.x-pointSpr->getPositionX());
                equationB = temp.y-equationK*temp.x;
            }
        }
    }
    
    return true;
}

void SKDrawShaps::ccTouchMoved(cocos2d::CCTouch *pTouch, cocos2d::CCEvent *pEvent)
{
    CCPoint location = convertTouchToNodeSpace(pTouch);
    
    if (!pointSpr->boundingBox().containsPoint(location)) {
        canMove = false;
    }
    
    if (canMove && setNewPosition(location)==true) {
        drawTool->beganDraw(pointSpr->getPosition());
        drawTool->setStorePointValue(pointSpr->getPosition());
    }
    
}
void SKDrawShaps::ccTouchEnded(cocos2d::CCTouch *pTouch, cocos2d::CCEvent *pEvent)
{
    //CCPoint location = convertTouchToNodeSpace(pTouch);
    canMove = false;
}