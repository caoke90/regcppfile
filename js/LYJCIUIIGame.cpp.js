//
//  LYJCIUIIGame.cpp
//  math_kg
//
//  Created by lili on 13-6-13.
//
//

//#include "LYJCIUIIGame.h"

bool LYJCIUIIGame.isHaveAlpha(CCPoint point,sprite)
{
    unsigned char data[4];
    CCSize s = //CCDirector.sharedDirector().getWinSize();
    var  renderTexture = CCRenderTexture.create(s.width, s.height, kCCTexture2DPixelFormat_RGBA8888);
    
    renderTexture.begin();
    sprite.visit();
    
    glReadPixels((GLint)point.x,(GLint)point.y, 1, 1, GL_RGBA, GL_UNSIGNED_BYTE, data);
    renderTexture.end();
    
    if(data[0] != 0 && data[1] != 0 && data[2] != 0 && data[3] != 0)
    {
        //            cc.log("have");
        return true;
    }
    //        cc.log("not have");
    return false;
}


var  LYJCIUIIGame.LYJgetNumbersArr(int total,var amount)
{
    //int类型的数装入数组中，使用cc.Integer进行封装
    srand((unsigned) time(null));
    var arr = [];
    var  All = new int[total];
    for (var i = 0; i<total; i++) {
        All[i] = i;
    }
   var end = total;
    for (var i=0; i<amount; i++) {
       var r = rand()%end;
       var a = All[r];
        All[r] = All[end-1];
        var integer = cc.Integer.create(a);
        arr.push(integer);
        end--;
    }
	delete []All;
    return arr;
}
LYJCIUIIGame.LYJgetNumbersArr2(int total,var amount)
{
    //int类型的数装入数组中，使用cc.Integer进行封装
    srand((unsigned) time(null));
    var arr = [];
    var  All = new int[total];
    for (var i = 0; i<total; i++) {
        All[i] = i;
    }
   var end = total;
    for (var i=0; i<amount; i++) {
       var r = rand()%end;
       var a = All[r];
        All[r] = All[end-1];
        var integer = cc.Integer.create(a);
        arr.push(integer);
        end--;
    }
	delete []All;
    return arr;
}

bool LYJCIUIIGame.ReleaseMap(std.map<int, CCPoint> *maparr)
{
    // delete the element
    for( std.map<var, CCPoint>.iterator iter = maparr.begin();
        iter != maparr.end();   iter++)
    {
        maparr.erase(iter);
    }

    return true;
}