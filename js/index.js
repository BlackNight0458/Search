var text = document.getElementsByTagName('input')[0];
var Xs = document.getElementsByTagName('p')[0];
var Cz = document.getElementsByTagName('p')[1];


var t1 = /烟波苑|烟湖苑|烟雨苑|毛纺五村|菱香坊|明湖人家|皇冠花苑|南溪花园一期|南溪花园二期|水仙坊|绢纺一村|公安新村|铁树坊|锦州坊|枫杨坊|桂林坊|民丰三村|新湖绿都|湖滨花园|二毛一村|化肥新村/
var t2 = /嘉城绿都|赞成丽景苑|泾水小区|紫竹名苑|同方烟雨林苑|双溪花园|景湖花园|庆丰苑|湘都公寓/
var t3 = /中山怡和园|皇都花苑|信达东都|翡翠花园|御溪花园|罗马都市|当代华府|郁金香花园|雨润天阁|南德大院|翰林兰庭|翰林兰庭二期|金都夏宫|宝石公馆|格兰英群|中港名都|铂金府邸|信源亲水湾|新世纪公寓|康桥花园|格林小镇|水榭花都|广宜文苑/
var t4 = /绿景沁园|亚太花苑|绿景华庭|英伦都市|嘉佳家院|御树湾|好第坊|璀璨华庭|禾风留香园|绿景名邸/
var t5 = /宏润花园|东方都市|御上江南|花溪地|吴越学府|金地风华|格兰上群/
var t6 = /城南花园|梅湾花园|放鹤洲花园一期|放鹤洲花园二期|放鹤洲花园三期|放鹤洲花园四期|望鹤苑|云鹤洲公寓|禾院|博海华庭|天天嘉苑|兴业苑|怡南花园|西南湖公寓|松合里|真如新村|天城园林局|文萃苑|景萃苑|王冠里|王安里北区|真合里|腾飞新村/
var t7 = /海棠苑|长中苑|翰林府第|赞成学仕苑|汇龙苑|云州苑|百盛花园|巴黎都市|澳洲花园|探花苑/
var t8 = /石榴坊|天风阁|牡丹坊|杜鹃坊|银柳坊|万家花园|农翔苑|富安臻园|桂苑|天华苑|三景花园|百隆花园|桂苑社区|冶金二村|冶金三村/
var t9 = /耀城广场|越秀花园|吉杨公寓|越运里|嘉报宿舍|水产宿舍|越秀里|三塔里|双园公寓|文秀里|吉安小区|吉明里|文经里|文纬里|齐心弄|文昌里|文南里|文运里|文武里|吉水花园|远洋绿洲|吉杨里|西丽社区|西园弄|西园里|吉安公寓|中央花园/


text.addEventListener('input',Handler);
function Handler(e){
    if(t1.test(text.value)){
        Xs.textContent = '嘉兴市三水湾小学';
        Cz.textContent = '嘉兴市三水湾中学';
        return;
    }
    if(t2.test(text.value)){
        Xs.textContent = '嘉兴市东栅中心小学';
        Cz.textContent = '嘉兴市南溪中学';
        return;
    }
    if(t3.test(text.value)){
        Xs.textContent = '北京师范大学南湖附属学校';
        Cz.textContent = '北京师范大学南湖附属学校';
        return;
    }
    if(t4.test(text.value)){
        Xs.textContent = '东北师范大学南湖实验学校';
        Cz.textContent = '东北师范大学南湖实验学校';
        return;
    }
    if(t5.test(text.value)){
        Xs.textContent = '嘉兴市实验小学(科技城校区)';
        return;
    }
    if(t6.test(text.value)){
        Xs.textContent = '嘉兴市行知小学';
        Xs.textContent = '嘉兴市城南中学';
        return;
    }
    if(t7.test(text.value)){
        Xs.textContent = '嘉兴市实验小学(东校区)';
        return;
    }
    if(t8.test(text.value)){
        Xs.textContent = '秀城实验教育集团-钧儒小学';
        Cz.textContent = '嘉兴市三水湾中学';
        return;
    }
    if(t9.test(text.value)){
        Xs.textContent = '秀洲实验教育集团-吉水小学';
        return;
    }
    else if(/\S/.test(text.value)){
        Xs.textContent = '';
        Cz.textContent = '';
    }
}
