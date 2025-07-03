$(function () {
  let flArr = [
    {
      flbt: "汇丰科技中国数字科技管理培训生项目",
      flcontent:
        "汇丰科技中国数字科技管理培训生项目是一个为期两年的轮岗实践项目，该项目面向希望通过使用云计算、网络、数据和人工智能等最具创新的技术，为全球数百万客户解决问题的人才。",
      one: "<p>你将与一系列技术团队合作开展大规模的全球项目，这将使你在云计算、网络安全、大数据和人工智能领域积累宝贵的经验。</p>\n<p>你将构建和测试新技术，进行网络攻击模拟，并帮助我们继续向多个云平台过渡。</p>\n<p>该项目为你提供了个性化的成长路径、全球经验和技能。在两年的时间内，你将有机会接触到汇丰内部的不同团队，拥有跨部门合作机会，并成为一名推动银行创新的技术专家或技术通才。</p>",
      two: "<p>你是一名具有创造性思维且善于解决问题的人，并且热衷于科技创新。</p>\n<p>你善于表达自己并与他人建立良好的关系，以更好地促进合作。你接受敏捷工作模式，并渴望与全球背景人才合作，开展影响数百万人的大型项目。你拥有敏锐的分析思维，对开发技术技能充满兴趣，并希望将其应用于实际情况中。</p>\n<p>你是一名富有创新精神和逻辑思维能力的思想家，能够纵观全局，并有信心探索新概念和新想法。你喜欢通过构建和设计创新型方案来解决问题，并乐于通过实践去不断学习。你擅长运用结构化方法和具备分析性的方式应对复杂挑战，并通过数据和逻辑找到问题的解决方案。</p>",
      three:
        "<p>你将通过参加一个沉浸式的入职培训，了解银行业的新兴技术以及我们如何推动银行业的未来发展。</p>\n<p>在为期两年的项目中，你将接触到不同的技术团队。你将拥有一个结构化的学习计划，并有机会获得业界认可的专业证书，如Scrum Master、GCP或AWS的云计算认证、SaFE以及Agile Ways of Working。</p>\n<p>项目期间，你将获得大量持续学习的机会以及团队的支持，助力你为未来做好充分准备。请点击<a class='readmore click-web' href='https://www.hsbc.com/careers/students-and-graduates/student-and-graduate-development'>阅读更多</a>了解相关信息。</p>",
      videolink: "https://ideal.chinaceotv.com/2023/hsbcnet/2.mp4",
      fm: "./images/fm5.png",
      applylink:
        "https://hsbcearlycareers.groupgti.com/account/register?ReturnUrl=https://hsbcearlycareers.groupgti.com/digital-innovation-graduate-programme-2023-2024-mainland-china---guangzhou/2020/apply",
      applylink2:
        "https://hsbcearlycareers.groupgti.com/account/register?ReturnUrl=https://hsbcearlycareers.groupgti.com/digital-innovation-graduate-programme-2023-2024-mainland-china---xian/2018/apply",
    },
  ];
  // $('.three-content div').eq(0).addClass('.show2')

  // $(document).on("click", ".bm", function () {
  //   bmname = $(this).text().trim();
  //   console.log(bmname, "bm");
  //   filterarr = flArr.filter((item) => {
  //     return item.flname == bmname;
  //   });
  //   console.log(filterarr, "filterarr");
  //   showcontent();
  //   $(".three-content div").eq(0).addClass("show2");
  // });
  function showcontent() {
    $(".xhcontent").html("");
    flArr.forEach((v) => {
      v.flcontent = v.flcontent.replace(/\n/g, "</br>");
      let string = `
            <div class="jjbox">
                <p>
                    ${v.flbt}
                </p>
                <p>
                    ${v.flcontent}
                </p>
            </div>

            <div class="threebox">
                <div class="three-nav">
                    <div class="on">
                        你将会做什么
                    </div>
                    <div>
                        我们希望你是
                    </div>
                    <div>
                        你将收获
                    </div>
                </div>
                <div class="three-content">
                    <div>
                      ${v.one}
                    </div>
                    <div>
                      ${v.two}
                    </div>
                    <div>
                      ${v.three}
                    </div>
                </div>
            </div>

            <div class="spcontent">
                <div class="spbox">
                    <p>
                        与我们的管培生“汇”面
                    </p>
                    <p>
                        与目前参加了我们项目的管培生“汇”面。他们将向你介绍他们在汇丰的工作体验、工作内容以及收获，并根据他们的经验分享建议。
                        <br><br>在视频下方，你将看到更多管培生分享他们在汇丰的工作经历。
                    </p>
                </div>
                <div class="videobox">
                    <video poster="${v.fm}" src="${v.videolink}" controls="controls"></video>
                </div>
               <div class="twocity">
                <a class="click-web" href="${v.applylink}">
                      <div class="submit">
                      立即申请（广州）
                      </div>
                  </a>
                  <a class="click-web" href="${v.applylink2}">
                      <div class="submit">
                      立刻申请（西安）
                      </div>
                  </a>
               </div>
                <p class="welcome">
                    如果该计划已截止申请
                    <a class="click-web" href="https://mycareer.hsbc.com/zh_CN/talentcommunity">欢迎加入我们的人才社区，</a>
                    以便我们及时向你提供你感兴趣的新闻、活动、我们的项目资讯和就业机会。
                </p>
            </div>    
            `;
      $(".xhcontent").append(string);
    });
  }
  showcontent();
  $(".three-content div").eq(0).addClass("show2");
  $(document).on("click", ".three-nav div", function () {
    links();
    let index = $(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    $(".three-content div")
      .eq(index)
      .addClass("show2")
      .siblings()
      .removeClass("show2");
  });
  function links() {
    $(".click-web").on("click", function (e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      console.log("点击事件被触发了");
      console.log("链接地址:", $(this).attr("href"));
      var url = $(this).attr("href");
      if (
        window.confirm(
          "您即将离开前程无忧官方招聘网站，前往第三方页面。是否确认前往？"
        )
      ) {
        window.open(url);
      } else {
        return false;
      }
    });
  }

  links();
  // $(document).on("click", ".bm", function () {
  //   $(".bm").removeClass("on");
  //   $(this).addClass("on");

  //   $(".jt1").css("display", "block");
  //   $(".jt2").css("display", "none");
  //   $(this).children(".jt1").css("display", "none");
  //   $(this).children(".jt2").css("display", "block");
  // });
});
