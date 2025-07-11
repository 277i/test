/*09.18修改内容：隐藏掉小类*/

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}
// 社招id
let agencyId = getUrlParam('agencyId')
var params = {
    ctmid: "4963893",
    keyword: "",
    coid: "",
    divid: "",
    pagesize: '2000',
}

!function (p) {
    let coid_obj = {};
    let lis = [
        { name: '上海建工一建集团有限公司', value: '上海建工 一建集团' },
        { name: '上海建工二建集团有限公司', value: '上海建工 二建集团' },
        { name: '上海建工四建集团有限公司', value: '上海建工 四建集团' },
        { name: '上海建工五建集团有限公司', value: '上海建工 五建集团' },
        { name: '上海建工七建集团有限公司', value: '上海建工 七建集团' },
        { name: '上海建工集团股份有限公司总承包部', value: '上海建工 总承包部' },
        { name: '天津住宅建设发展集团有限公司', value: '上海建工 天住集团' },
        { name: '上海市安装工程集团有限公司', value: '上海建工 安装集团' },
        { name: '上海市基础工程集团有限公司', value: '上海建工 基础集团' },
        { name: '上海市机械施工集团有限公司', value: '上海建工 机施集团' },
        { name: '上海市建筑装饰工程集团有限公司', value: '上海建工 装饰集团' },
        { name: '上海园林（集团）有限公司', value: '上海建工 园林集团' },
        { name: '上海市政工程设计研究总院(集团)有限公司', value: '上海市政工程 设计研究总院' },
        { name: '上海市建工设计研究总院有限公司', value: '上海建工 设计总院' },
        { name: '上海建工房产有限公司', value: '上海建工 房产公司', co: '6244794' },
        { name: '上海建工集团投资有限公司', value: '上海建工 投资公司' },
        { name: '上海建工建材科技集团股份有限公司' }, ,
        { name: '上海外经集团控股有限公司', value: '上海建工 外经控股' },
        { name: '上海建工环境科技有限公司' },
        { name: '上海建工集团股份有限公司海外事业部', value: '上海建工 海外部' },
        { name: '上海建工电子商务有限公司', value: '上海建工 电商公司' },
        { name: "上海建工集团股份有限公司工程研究总院" },
        { name: '上海建工羿云科技有限公司' },
        { name: '上海市工程建设咨询监理有限公司' }
    ]
    coapi.getJobCondition(p.ctmid, function (data) { //搜索器接口
        //取到数据之后的操作
        data.resultbody.coid.forEach(function (a) {
            coid_obj[a.value] = a.key;
        })
        console.log(coid_obj);

        let h = '';
        for (let i in lis) {
            if (lis[i].co) {
                h += `<div class="${agencyId == lis[i].co ? 'on' : ''}" data-coid="${lis[i].co}">` + lis[i].name + '</div>'
            } else if (coid_obj[lis[i].name]) {
                h += `<div class="${agencyId == coid_obj[lis[i].name] ? 'on' : ''}"  data-coid="${coid_obj[lis[i].name]}">` + lis[i].name + '</div>'
            } else {
                h += `<div class="${agencyId == "0001" + i ? 'on' : ''}" data-coid="0001${i}">` + lis[i].name + '</div>'
            }
        }
        $('.functypebox2').html(h);
    }, p)
}(params);

function getJobCon(p, tp) { //搜索器函数
    coapi.getJobCondition(p.ctmid, function (data) { //搜索器接口
        //取到数据之后的操作
        console.log(data, "data---data-----")
        switch (tp) {
            case "校招":
                conbox(data, '#jobarea1', '#coid1')
                if (getUrlParam('coid')) {
                    params.coid = getUrlParam('coid');
                    $('#coid1').val(getUrlParam('coid'))
                }
                getJobList(params, $('.zwlist1'), '校招')
                break;
            case "社招":
                conbox(data, '#jobarea2', '#coid2')
                break;
            case "实习生":
                conbox(data, '#jobarea3', '#coid3')
                break;
        }

        for (var i = 0; i < data.resultbody.jobarea.length; i++) {
            $('.jobarea').append('<option value="' + data.resultbody.jobarea[i].key + '">' + data.resultbody.jobarea[i].value + '</option>')
        }

    }, p)
}

function conbox(data, areabox, dividbox) {
    for (let i = 0; i < data.resultbody.coid.length; i++) {
        // $(dividbox).append('<option value="' + data.resultbody.coid[i].key + '">' + data.resultbody.coid[i].value + '</option>')
        $(dividbox).append(`<option value="${data.resultbody.coid[i].key}" ${data.resultbody.coid[i].key == agencyId ? "selected" : ''}>${data.resultbody.coid[i].value}</option>`)
    }
}
getJobCon(params, '校招') //调用搜索器接口函数
getJobCon(params, '社招')
getJobCon(params, '实习生')

function getJobList(p, box, tp) {
    if (!params.coid) {
        params.coid = agencyId
        $(document).ready(() => {
            setTimeout(() => {
                $("#s5 div.on").click()
            })
        })
        // getJobList(params, box, '社招')
    }
    box.html("<div>加载中...</div>")
    coapi.getJobList(p, function (data) {
        //取到数据之后的操作
        let job = data.resultbody.joblist;
        console.log(job);
        var newJob = []
        if (job !== undefined) {
            job.forEach((item, index) => {
                if (item.jobid == '142767083' || item.jobid == '142767283') {
                    newJob.push(item)
                    job.splice(index, 1)
                }
            })
        } else {
            $('.zwlist1 div').html('<li class="text-align:center;">暂无相关职位~</li>')
        }
        job = [...newJob, ...job]

        console.log(newJob);
        switch (tp) {
            case '校招':
                var arr = [];
                for (let i in job) {
                    if (job[i].jobname.indexOf('应届') != '-1') {
                        arr.push(job[i]);
                    }
                }
                jobhtml(arr, box);
                break;
            case '社招':
                var arr = [];
                for (let i in job) {
                    if (job[i].jobname.indexOf('社招') != '-1') {
                        arr.push(job[i]);
                    }
                }

                console.log(job, arr, "社招=======");
                jobhtml(arr, box);
                break;
            case '实习生':
                var arr = [];
                for (let i in job) {
                    if (job[i].jobname.indexOf('实习') != '-1') {
                        arr.push(job[i]);
                    }
                }
                jobhtml(arr, box);
                break;
        }
        // console.log(job);
    });
}
// getJobList(params, $('.zwlist1'), '校招')

function jobhtml(job, box) {
    console.log("社招...........", job, box);


    let h = '<ul class="list">';
    if (Array.isArray(job) && job.length != 0) {
        job.forEach(function (item, i) {
            h += '<li>' +
                '<div class="name">' +
                '<div><div>' + item.jobname + '</div><div>' + item.workareaname + '</div></div>' +
                '</div>' +
                '<div>' +
                '<div>工作地点：' + item.workareaname + '</div>' +
                '<div>招聘单位：' + item.coname + '</div>' +
                '<div>招聘人数：' + item.jobnum + '</div>' +
                '<a href="javascript:;" data-jobid="' + item.jobid + '" data-ctmid="' + item.ctmid + '" class="go">立即申请</a>' +
                '</div>' +
                '</li>'
        })
    } else {
        h += '<li class="text-align:center;">暂无相关职位~</li>'
    }
    h += '<ul>'

    console.log(h, "===========================", box);
    box.html(h);
}

function addon(dom) {
    dom.addClass('on').siblings().removeClass('on');
}

function keyword(dom, dom2, box, tp) {
    $(dom2).click(function (event) { //搜索
        event.stopPropagation();
        params.keyword = $(dom).val()
        switch (tp) {
            case '校招':
                getJobList(params, box, '校招')
                break;
            case "社招":
                getJobList(params, box, '社招')
                break;
            case "实习生":
                getJobList(params, box, '实习生')
                break;
        }
    })
    //  改动
    $(dom).focus(function () { //关键字
        $(dom).val('');
    })
    $(dom).bind('keypress', function (event) { //关键字
        if (event.keyCode == "13") {
            params.keyword = $(dom).val()
            switch (tp) {
                case '校招':
                    getJobList(params, box, '校招')
                    break;
                case "社招":
                    getJobList(params, box, '社招')
                    break;
                case "实习生":
                    getJobList(params, box, '实习生')
                    break;
            }
        }
    })
}
keyword('#keyword1', '.search-btn1', $('.zwlist1'), '校招');
keyword('#keyword2', '.search-btn2', $('.zwlist2'), '社招');
keyword('#keyword3', '.search-btn3', $('.zwlist3'), '实习生');

function search(area, divid, box, tp) {
    $(area).change(function (event) { //地点
        /* Act on the event */
        event.stopPropagation();
        params.jobarea = $(area).val();
        switch (tp) {
            case '校招':
                getJobList(params, box, '校招')
                break;
            case "社招":
                getJobList(params, box, '社招')
                break;
            case "实习生":
                getJobList(params, box, '实习生')
                break;
        }
    });
    $(divid).change(function (event) { //部门
        /* Act on the event */
        event.stopPropagation();
        params.coid = $(divid).val()

        console.log($(divid).val(), "$(divid).val()");


        // 替换 页面url的
        var url = new URL(window.location.href);
        const sps = new URLSearchParams($(location).attr('search'))
        sps.set('agencyId', $(divid).val())
        sps.set('rand', Math.random(0, 1) * 100000)
        url.search = sps.toString();
        history.pushState(null, '', url.href);


        switch (tp) {
            case '校招':
                // let url = window.location.href
                // window.history.pushState({}, 0, url.split('?')[0] + '?coid=' + params.coid);
                getJobList(params, box, '校招')
                break;
            case "社招":
                getJobList(params, box, '社招')
                break;
            case "实习生":
                getJobList(params, box, '实习生')
                break;
        }
    });
}
search('#jobarea1', '#coid1', $('.zwlist1'), '校招')
search('#jobarea2', '#coid2', $('.zwlist2'), '社招');
search('#jobarea3', '#coid3', $('.zwlist3'), '实习生');

$('.nav1>div').on('click', function () {
    addon($(this));
    let idx = $(this).index();
    $('.mainbox>.main').eq(idx).show(100).siblings().hide(100);
})

$('.gsjj-tit').on('click', function () {
    $(this).parents('.gsjjbox').toggleClass('on')
    $(this).next().slideToggle(200);
})

$('.functypebox1>div').on('click', function () { // 大类点击
    $(this).addClass('on').siblings().removeClass('on');
    params.poscode = $(this).data('key')
    getJobList(params, $('.zwlist1'), '校招')
})
/*$('.poscode1>div').on('click', function(event) { // 小类点击
    event.stopPropagation();
    $('.poscode1>div').removeClass('on')
    $(this).addClass('on')
    let poscode = $(this).parents().parents().attr('data-key') + $(this).attr('data-key2')
    // console.log(poscode);
    params.poscode = poscode;
    params.keyword = $('#keyword1').val();
    params.coid = $('#coid1').val();
    params.jobarea = $('#jobarea1').val();
    getJobList(params, $('.zwlist1'), '校招')
})*/
$(document).on('click', '.functypebox2>div', function () {
    addon($(this));
    let coid = $(this).attr('data-coid');

    params.coid = coid;
    params.poscode = '';
    getJobList(params, $('.zwlist2'), '社招');
})
$('.functypebox3>div').on('click', function () {
    addon($(this));
    let coid = $(this).attr('data-coid');
    params.coid = coid;
    params.poscode = '';
    getJobList(params, $('.zwlist2'), '实习生');
})

$('.zwlist').on('click', '.name', function () {
    $(this).toggleClass('on');
})
$('.zwlist1').on('click', '.go', function (event) {
    event.stopPropagation();
    let jobid = $(this).attr('data-jobid');
    let ctmid = $(this).attr('data-ctmid');
    window.open('https://vip.51job.com/external/personal/personal_applyjob.aspx?ctmid=' + ctmid + '&jobid=' + jobid);
})
$('.zwlist2').on('click', '.go', function (event) {
    event.stopPropagation();
    let jobid = $(this).attr('data-jobid');
    window.open('https://jobs.51job.com/all/' + jobid + '.html');
    // jobApply(jobid);
})
$('.zwlist3').on('click', '.go', function (event) {
    event.stopPropagation();
    let jobid = $(this).attr('data-jobid');

})


$(function () {



})

function getUrlParam(name) {
    // 用该属性获取页面 URL 地址从问号 (?) 开始的 URL（查询部分）
    var url = window.location.search;
    // 正则筛选地址栏
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    // 匹配目标参数
    var result = url.substr(1).match(reg);
    //返回参数值
    return result ? decodeURIComponent(result[2]) : '';
}