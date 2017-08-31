// {
//     [
//         {
//          "name": "广东省", 
//          "proId": 001, 
//          "city": [
//             {
//                 "name": "东莞市", 
//                 "cityId": 0000001,
//                 "country":
//                         [
//                             {
//                                 "name": "管城区", 
//                                 "countryId": 0022
//                             }
//                         ]
//             }
//           ]
//         }
//     ]
// }
var path = require('path');
var fs = require('fs');
var province_json = require('./province').rows
var city_json = require('./city').rows
var county_json = require('./county').rows

let arr = []

province_json.forEach(function (v, k) {
    // 省自己的id， 自己的省名
    // console.log(v.proid, v.proname)
    let name = v.proname;
    let proId = v.proid;
    arr.push({name,proId, city:[]});
})

city_json.forEach(function (v, k) {
    // 市自己的id， 父辈省的id，自己的城市名
    // console.log(v.CityID, v.ProId, v.cityname)
    let name = v.cityname;
    let cityId = v.CityID;
    // console.log(+(v.ProId) - 1)
    arr[+(v.ProId) - 1].city.push({name, cityId, country: []});
})



county_json.forEach(function (v, k) {
    // 区自己的id， 父辈市的id， 自己的区名
    // 按顺序输出以下内容
    // 1、自己的id
    // 2、自己的区名
    // 3、父辈城市的id
    // 4、父辈城市的名字
    // 5、爷辈的id
    // 6、爷辈的省名字
    var fater = city_json[+(v.city_id) - 1]
    var yeye = province_json[+(fater.ProId) - 1]
    let name = v.county_name;
    let countryId = v.county_id;
    // console.log(v.county_id, v.county_name, v.city_id, fater.cityname, yeye.proid, yeye.proname)
    // console.log(v.county_id, v.city_id, v.county_name)
    let yeye_arr = arr[+(fater.ProId) - 1];
    let fater_arr = yeye_arr.city;
    let index = 0;

    fater_arr.forEach(function(vv, kk){
        if (vv.cityId == v.city_id) {
            return index = kk;
        }
    })

    fater_arr[index].country.push({name, countryId})

})


// console.log(JSON.stringify(arr));
// console.log(arr);


//写入文本
fs.writeFile(path.join(__dirname, 'my.json' ), JSON.stringify(arr) , function(err){
    if(err) throw err;
    console.log("json已生成完毕")
});



