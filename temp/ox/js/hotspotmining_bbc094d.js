define("wiki-lemma:widget/lemma_content/configModule/hotspotmining/hotspotmining",function(t,n,i){function o(t){m.sendClk("lemma_page_hot_spot_click",{lemmaTitle:a,lemmaId:c,tab:s(t).closest(".hotspotminingContent").data("tab")})}var s=t("wiki-common:widget/lib/jquery/jquery"),e=t("wiki-common:widget/component/nslog/nslog"),m=t("wiki-common:widget/component/superLogger/superLogger.es");e(10070101);var a,c;s(".hotspotminingContent_cnt_tit_tit a").on("click",function(){o(this),e(10070102)}),s(".hotspotminingContent_cnt_cnt a").on("click",function(){o(this),e(10070102)}),s(".hotspotminingContent_pic a").on("click",function(){o(this)}),s("#hotspotmining_s .hotspotminingNavbar li").on("mouseover",function(){if(!s(this).hasClass("active")){var t=s(this).attr("data-id");s("#hotspotmining_s .hotspotminingNavbar li").removeClass("active"),s(this).addClass("active"),s("#hotspotmining_s .hotspotminingContent").hide(),s("#hotspotmining_s #hotspotminingContent-"+t).show()}}),i.exports={init:function(t,n){a=t,c=n}}});