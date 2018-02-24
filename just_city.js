let pinyin = require('./functions')

this.alphabet = [];


var NAMES = ['北京市', '天津市', '石家庄市', '唐山市', '秦皇岛市', '邯郸市', '邢台市', '保定市', '张家口市', '承德市', '沧州市', '廊坊市', '衡水市', '太原市', '大同市', '阳泉市', '长治市', '晋城市', '朔州市', '晋中市', '运城市', '忻州市', '临汾市', '吕梁市', '呼和浩特市', '包头市', '乌海市', '赤峰市', '通辽市', '鄂尔多斯市', '呼伦贝尔市', '巴彦淖尔市', '乌兰察布市', '兴安盟', '锡林郭勒盟', '阿拉善盟', '沈阳市', '大连市', '鞍山市', '抚顺市', '本溪市', '丹东市', '锦州市', '营口市', '阜新市', '辽阳市', '盘锦市', '铁岭市', '朝阳市', '葫芦岛市', '长春市', '吉林市', '四平市', '辽源市', '通化市', '白山市', '松原市', '白城市', '延边朝鲜族自治州', '哈尔滨市', '齐齐哈尔市', '鸡西市', '鹤岗市', '双鸭山市', '大庆市', '伊春市', '佳木斯市', '七台河市', '牡丹江市', '黑河市', '绥化市', '大兴安岭地区', '上海市', '南京市', '无锡市', '徐州市', '常州市', '苏州市', '南通市', '连云港市', '淮安市', '盐城市', '扬州市', '镇江市', '泰州市', '宿迁市', '杭州市', '宁波市', '温州市', '嘉兴市', '湖州市', '绍兴市', '金华市', '衢州市', '舟山市', '台州市', '丽水市', '合肥市', '芜湖市', '蚌埠市', '淮南市', '马鞍山市', '淮北市', '铜陵市', '安庆市', '黄山市', '滁州市', '阜阳市', '宿州市', '巢湖市', '六安市', '亳州市', '池州市', '宣城市', '福州市', '厦门市', '莆田市', '三明市', '泉州市', '漳州市', '南平市', '龙岩市', '宁德市', '南昌市', '景德镇市', '萍乡市', '九江市', '新余市', '鹰潭市', '赣州市', '吉安市', '宜春市', '抚州市', '上饶市', '济南市', '青岛市', '淄博市', '枣庄市', '东营市', '烟台市', '潍坊市', '济宁市', '泰安市', '威海市', '日照市', '莱芜市', '临沂市', '德州市', '聊城市', '滨州市', '荷泽市', '郑州市', '开封市', '洛阳市', '平顶山市', '安阳市', '鹤壁市', '新乡市', '焦作市', '濮阳市', '许昌市', '漯河市', '三门峡市', '南阳市', '商丘市', '信阳市', '周口市', '驻马店市', '武汉市', '黄石市', '十堰市', '宜昌市', '襄樊市', '鄂州市', '荆门市', '孝感市', '荆州市', '黄冈市', '咸宁市', '随州市', '恩施土家族苗族自治州', '神农架', '长沙市', '株洲市', '湘潭市', '衡阳市', '邵阳市', '岳阳市', '常德市', '张家界市', '益阳市', '郴州市', '永州市', '怀化市', '娄底市', '湘西土家族苗族自治州', '广州市', '韶关市', '深圳市', '珠海市', '汕头市', '佛山市', '江门市', '湛江市', '茂名市', '肇庆市', '惠州市', '梅州市', '汕尾市', '河源市', '阳江市', '清远市', '东莞市', '中山市', '潮州市', '揭阳市', '云浮市', '南宁市', '柳州市', '桂林市', '梧州市', '北海市', '防城港市', '钦州市', '贵港市', '玉林市', '百色市', '贺州市', '河池市', '来宾市', '崇左市', '海口市', '三亚市', '重庆市', '成都市', '自贡市', '攀枝花市', '泸州市', '德阳市', '绵阳市', '广元市', '遂宁市', '内江市', '乐山市', '南充市', '眉山市', '宜宾市', '广安市', '达州市', '雅安市', '巴中市', '资阳市', '阿坝藏族羌族自治州', '甘孜藏族自治州', '凉山彝族自治州', '贵阳市', '六盘水市', '遵义市', '安顺市', '铜仁地区', '黔西南布依族苗族自治州', '毕节地区', '黔东南苗族侗族自治州', '黔南布依族苗族自治州', '昆明市', '曲靖市', '玉溪市', '保山市', '昭通市', '丽江市', '思茅市', '临沧市', '楚雄彝族自治州', '红河哈尼族彝族自治州', '文山壮族苗族自治州', '西双版纳傣族自治州', '大理白族自治州', '德宏傣族景颇族自治州', '怒江傈僳族自治州', '迪庆藏族自治州', '拉萨市', '昌都地区', '山南地区', '日喀则地区', '那曲地区', '阿里地区', '林芝地区', '西安市', '铜川市', '宝鸡市', '咸阳市', '渭南市', '延安市', '汉中市', '榆林市', '安康市', '商洛市', '兰州市', '嘉峪关市', '金昌市', '白银市', '天水市', '武威市', '张掖市', '平凉市', '酒泉市', '庆阳市', '定西市', '陇南市', '临夏回族自治州', '甘南藏族自治州', '西宁市', '海东地区', '海北藏族自治州', '黄南藏族自治州', '海南藏族自治州', '果洛藏族自治州', '玉树藏族自治州', '海西蒙古族藏族自治州', '银川市', '石嘴山市', '吴忠市', '固原市', '中卫市', '乌鲁木齐市', '克拉玛依市', '吐鲁番地区', '哈密地区', '昌吉回族自治州', '博尔塔拉蒙古自治州', '巴音郭楞蒙古自治州', '阿克苏地区', '克孜勒苏柯尔克孜自治州', '喀什地区', '和田地区', '伊犁哈萨克自治州', '塔城地区', '阿勒泰地区', '石河子市', '阿拉尔市', '图木舒克市', '五家渠市', '香港特别行政区', '澳门特别行政区', '台湾省', '仙桃市', '潜江市', '天门市'];

'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(initial => {
   let cells = NAMES.filter(name => pinyin.getCamelChars(name[0]) === initial);
   this.alphabet.push({ initial, cells });
});

this.alphabet2 = [];
for (let [index, ele] of this.alphabet.entries()) {
    if (ele.cells.length) {
        let cells = ele.cells;
        let initial = ele.initial;
        this.alphabet2.push({ initial, cells });
    }
}

console.log(this.alphabet2);


// [{initial:'A',cells:['阿拉善盟','鞍山市','安庆市','安阳市','阿坝藏族羌族自治州','安顺市','阿里地区','安康市','阿克苏地区','阿勒泰地区','阿拉尔市','澳门特别行政区']},{initial:'B',cells:['北京市','保定市','包头市','巴彦淖尔市','本溪市','白山市','白城市','蚌埠市','亳州市','滨州市','佛山市','北海市','百色市','巴中市','毕节地区','保山市','宝鸡市','白银市','博尔塔拉蒙古自治州','巴音郭楞蒙古自治州']},{initial:'C',cells:['承德市','沧州市','赤峰市','朝阳市','常州市','滁州市','巢湖市','池州市','常德市','郴州市','潮州市','崇左市','成都市','楚雄彝族自治州','昌都地区','昌吉回族自治州']},{initial:'D',cells:['大同市','大连市','丹东市','大庆市','大兴安岭地区','东营市','德州市','东莞市','德阳市','达州市','大理白族自治州','德宏傣族景颇族自治州','迪庆藏族自治州','定西市']},{initial:'E',cells:['鄂尔多斯市','鄂州市','恩施土家族苗族自治州']},{initial:'F',cells:['抚顺市','阜新市','阜阳市','福州市','抚州市','防城港市']},{initial:'G',cells:['赣州市','广州市','桂林市','贵港市','广元市','广安市','甘孜藏族自治州','贵阳市','甘南藏族自治州','果洛藏族自治州','固原市']},{initial:'H',cells:['邯郸市','衡水市','呼和浩特市','呼伦贝尔市','葫芦岛市','哈尔滨市','鹤岗市','黑河市','淮安市','杭州市','湖州市','合肥市','淮南市','淮北市','黄山市','荷泽市','鹤壁市','黄石市','黄冈市','衡阳市','怀化市','惠州市','河源市','贺州市','河池市','海口市','红河哈尼族彝族自治州','汉中市','海东地区','海北藏族自治州','黄南藏族自治州','海南藏族自治州','海西蒙古族藏族自治州','哈密地区','和田地区']},{initial:'J',cells:['晋城市','晋中市','锦州市','吉林市','鸡西市','佳木斯市','嘉兴市','金华市','景德镇市','九江市','吉安市','济南市','济宁市','焦作市','荆门市','荆州市','江门市','揭阳市','嘉峪关市','金昌市','酒泉市']},{initial:'K',cells:['开封市','昆明市','克拉玛依市','克孜勒苏柯尔克孜自治州','喀什地区']},{initial:'L',cells:['廊坊市','临汾市','吕梁市','辽阳市','辽源市','连云港市','丽水市','六安市','龙岩市','莱芜市','临沂市','聊城市','洛阳市','漯河市','娄底市','柳州市','来宾市','泸州市','乐山市','凉山彝族自治州','六盘水市','丽江市','临沧市','拉萨市','林芝地区','兰州市','陇南市','临夏回族自治州']},{initial:'M',cells:['牡丹江市','马鞍山市','茂名市','梅州市','绵阳市','眉山市']},{initial:'N',cells:['南京市','南通市','宁波市','南平市','宁德市','南昌市','南阳市','南宁市','内江市','南充市','怒江傈僳族自治州','那曲地区']},{initial:'P',cells:['盘锦市','莆田市','萍乡市','平顶山市','濮阳市','攀枝花市','平凉市']},{initial:'Q',cells:['秦皇岛市','齐齐哈尔市','七台河市','衢州市','泉州市','青岛市','清远市','钦州市','黔西南布依族苗族自治州','黔东南苗族侗族自治州','黔南布依族苗族自治州','曲靖市','庆阳市','潜江市']},{initial:'R',cells:['日照市','日喀则地区']},{initial:'S',cells:['石家庄市','朔州市','沈阳市','四平市','松原市','双鸭山市','绥化市','上海市','苏州市','绍兴市','厦门市','三明市','上饶市','三门峡市','商丘市','十堰市','随州市','神农架','邵阳市','韶关市','深圳市','汕头市','汕尾市','三亚市','遂宁市','思茅市','山南地区','商洛市','石嘴山市','石河子市']},{initial:'T',cells:['天津市','唐山市','太原市','通辽市','铁岭市','通化市','泰州市','台州市','铜陵市','泰安市','铜仁地区','铜川市','天水市','吐鲁番地区','塔城地区','图木舒克市','台湾省','天门市']},{initial:'W',cells:['乌海市','乌兰察布市','无锡市','温州市','芜湖市','潍坊市','威海市','武汉市','梧州市','文山壮族苗族自治州','渭南市','武威市','吴忠市','乌鲁木齐市','五家渠市']},{initial:'X',cells:['邢台市','忻州市','兴安盟','锡林郭勒盟','徐州市','宿迁市','宿州市','宣城市','新余市','新乡市','许昌市','信阳市','襄樊市','孝感市','咸宁市','湘潭市','湘西土家族苗族自治州','西双版纳傣族自治州','西安市','咸阳市','西宁市','香港特别行政区','仙桃市']},{initial:'Y',cells:['阳泉市','运城市','营口市','延边朝鲜族自治州','伊春市','盐城市','扬州市','鹰潭市','宜春市','烟台市','宜昌市','岳阳市','益阳市','永州市','阳江市','云浮市','玉林市','宜宾市','雅安市','玉溪市','延安市','榆林市','玉树藏族自治州','银川市','伊犁哈萨克自治州']},{initial:'Z',cells:['张家口市','长治市','长春市','镇江市','舟山市','漳州市','淄博市','枣庄市','郑州市','周口市','驻马店市','长沙市','株洲市','张家界市','珠海市','湛江市','肇庆市','中山市','重庆市','自贡市','资阳市','遵义市','昭通市','张掖市','中卫市']}]
