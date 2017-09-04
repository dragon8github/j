// insert into tb_city2(city_name, city_py, city_py_first, pro_id, pro_name) values ('1', '2', '3', '4', '5')
var path = require('path');
var fs = require('fs');
var province_json = require('./province').rows
var city_json = require('./city').rows
var county_json = require('./county').rows
let pinyin = require('./functions')
var sql_pre = `insert into tb_city2 (city_name, city_py, city_py_first, pro_id, pro_name) values `

// console.log(province_json[0].proname)
// console.log(city_json[0].cityname)
// console.log(county_json[0].county_name)

// province_json.forEach(function (v, k) {
//     // 省自己的id， 自己的省名
//     console.log(v.proid, v.proname)
// })


city_json.forEach(function (v, k) {
    // 市自己的id， 父辈省的id，自己的城市名
    // console.log(v.CityID, v.ProId, v.cityname)
    var fater = city_json[+(v.CityID) - 1]
    var yeye = province_json[+(fater.ProId) - 1]
    sql_pre += `('${v.cityname}', '${pinyin.getFullChars(v.cityname).toUpperCase()}', '${pinyin.getCamelChars(v.cityname)}', '${v.ProId}', '${yeye.proname}'),`;
})


// county_json.forEach(function (v, k) {
    // 区自己的id， 父辈市的id， 自己的区名
    // console.log(v.county_id, v.city_id, v.county_name)
    
    // 按顺序输出以下内容
    // 1、自己的id
    // 2、自己的区名
    // 3、父辈城市的id
    // 4、父辈城市的名字
    // 5、爷辈的id
    // 6、爷辈的省名字
    // var fater = city_json[+(v.city_id) - 1]
    // var yeye = province_json[+(fater.ProId) - 1]
    // console.log(v.county_id, v.county_name, v.city_id, fater.cityname, yeye.proid, yeye.proname)
    // sql_pre += `('${v.county_id}', '${v.county_name}', '${v.city_id}', '${fater.cityname}', '${yeye.proid}', '${yeye.proname}'),`;
// })

sql_pre = sql_pre.substr(0, sql_pre.length - 1)

//写入文本
fs.writeFile(path.join(__dirname, 'my.sql' ), sql_pre , function(err){
    if(err) throw err;
    console.log("sql已生成完毕")
});



