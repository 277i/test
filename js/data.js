const com = [
    {
        name: '上海建工一建集团有限公司',
        dz: '上海市浦东新区福山路33号',
        dh: '021-58885866',
        wz: 'http://www.sc1gc.com.cn/'
    },
    {
        name: '上海建工二建集团有限公司',
        dz: '上海市虹口区梧州路289号',
        dh: '021-65377604',
        wz: 'http://www.sh2j.com/'
    },
    {
        name: '上海建工四建集团有限公司',
        dz: '上海市闵行区桂林路928号',
        dh: '021-54519518',
        wz: 'http://www.scc4.cn'
    },
    {
        name: '上海建工五建集团有限公司',
        dz: '上海市普陀区曹杨路1000号',
        dh: '62163153',
        wz: 'http://www.scgwj.com/'
    },
    {
        name: '上海建工七建集团有限公司',
        dz: '上海市武夷路150号',
        dh: '021-62527188',
        wz: 'http://www.sc7gc.com.cn/'
    },
    {
        name: '上海建工集团股份有限公司总承包部',
        dz: '上海市虹口区东大名路666号',
        dh: '021-55885959-8391',
        wz: ''
    },
    {
        name: '天津住宅建设发展集团有限公司',
        dz: '天津市和平区马场道66号',
        dh: '022-23023610',
        wz: 'https://tjhousing.scg.com.cn/'
    },
    {
        name: '上海市安装工程集团有限公司',
        dz: '上海市虹口区塘沽路路390号',
        dh: '021-63250629',
        wz: 'http://www.siec.cn'
    },
    {
        name: '上海市基础工程集团有限公司',
        dz: '上海市江西中路406号',
        dh: '021-63217655',
        wz: 'http://www.sfeg.cc/'
    },
    {
        name: '上海市机械施工集团有限公司',
        dz: '上海市静安区洛川中路701号',
        dh: '021-26101762',
        wz: 'http://www.chinasmcc.com/'
    },
    {
        name: '上海市建筑装饰工程集团有限公司',
        dz: '上海市静安区永和路318弄3号楼',
        dh: '021-206079955',
        wz: 'http://www.scdec.com'
    },
    {
        name: '上海园林（集团）有限公司',
        dz: '上海市长宁区福泉北路88号',
        dh: '021-63127878',
        wz: 'http://www.sggc.com.cn/'
    },
    {
        name: '上海市政工程设计研究总院(集团)有限公司',
        dz: '上海市杨浦区中山北二路901号',
        dh: '021－55000000',
        wz: 'http://www.smedi.com/'
    },
    {
        name: '上海市建工设计研究总院有限公司',
        dz: '上海市徐汇区吴中路51号1号楼',
        dh: '021-62107484',
        wz: 'http://www.scdri.com/'
    },
    {
        name: '上海建工房产有限公司',
        dz: '上海市东大名路666号',
        dh: '021-55886262',
        wz: 'http://www.shjgfc.com/'
    },
    {
        name: '上海建工集团投资有限公司',
        dz: '上海市虹口区东大名路501号白玉兰广场35楼',
        dh: '021-256522666',
        wz: 'https://scgi.scg.com.cn/portal/index/index.html'
    },
    {
        name: '上海建工建材科技集团股份有限公司',
        dz: '上海市虹口区四平路848号',
        dh: '021-25252874',
        wz: 'https://bmt.scg.com.cn/'
    },
    {
        name: '上海外经集团控股有限公司',
        dz: '上海市徐汇区小木桥路681号上海外经大厦10楼',
        dh: '021-61952888',
        wz: 'http://www.sfeco.net.cn/'
    },
    {
        name: '上海建工环境科技有限公司',
        dz: '上海市黄浦区南京西路388号',
        dh: '63301386',
        wz: 'http://hjkj.scg.com.cn'
    },
    {
        name: '上海建工集团股份有限公司海外事业部',
        dz: '上海市徐汇区小木桥路681号603室',
        dh: '021-61952680',
        wz: ''
    },
    {
        name: '上海建工电子商务有限公司',
        dz: '上海市长宁区武夷路150号1号楼4楼',
        dh: '021-62516006',
        wz: 'http://www.yzscg.cn/'
    },
    {
        name: '上海建工集团股份有限公司工程研究总院',
        dz: '上海市闵行区新骏环路700号',
        dh: '021-52965588',
        wz: 'http://www.scg.com.cn'
    },
    {
        name: '上海建工羿云科技有限公司',
        dz: '上海市浦东新区福山路33号3楼A座',
        dh: '021-38751120',
        wz: 'https://ecloud.scg.com.cn/'
    },
    {
        name: '上海市工程建设咨询监理有限公司',
        dz: '上海市营口路588号北楼8楼',
        dh: '021-55225252',
        wz: 'http://sccs.sh.cn'
    },
]

$(function () {

    let html = ''
    for (let i = 0; i < com.length; i++) {
        html += '<div>' +
                    '<h3>'+ com[i].name +'<img src="images/fx.png"></h3>' +
                    '<p>' +
                        '<b>地址：</b>'+ com[i].dz +
                   
                        '<br>' +
                        '<b>电话：</b>'+ com[i].dh +
                        '<br>' +
                        '<b>网址：</b>'+ com[i].wz +
                    '</p>' +
                '</div>'
    }
    $('.con').html(html)

})