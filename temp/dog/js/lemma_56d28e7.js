var $=require("wiki-common:widget/lib/jquery/jquery"),clickstream=require("wiki-lemma:widget/tools/clickstream/clickstream"),$window=$(window),winHeight=$window.height(),currentScreen=1,$Jvars=$("#J-vars");$window.on("scroll",function(){var e=$window.scrollTop(),a=Math.ceil(e/winHeight)+1;a>currentScreen&&(currentScreen=a,clickstream.logViewEl({page:"lemma",element:"lemma-screen",screen:currentScreen,lemmaId:$Jvars.attr("data-lemmaid"),lemmaTitle:$Jvars.attr("data-lemmatitle")})),e+winHeight===$("body").height()&&clickstream.logViewEl({page:"lemma",element:"lemma-footer",lemmaId:$Jvars.attr("data-lemmaid"),lemmaTitle:$Jvars.attr("data-lemmatitle")})}),$(document).ready(function(){if(window.location.hash){var e=$("a[href="+window.location.hash+"]")[0];e&&e.click()}});