fluid_1_5=fluid_1_5||{},function($,fluid){"use strict";var unUnicode=/(\\u[\dabcdef]{4}|\\x[\dabcdef]{2})/g;fluid.unescapeProperties=function(string){string=string.replace(unUnicode,function(match){var code=match.substring(2),parsed=parseInt(code,16);return String.fromCharCode(parsed)});for(var pos=0;;){var backpos=string.indexOf("\\",pos);if(-1===backpos)break;if(backpos===string.length-1)return[string.substring(0,string.length-1),!0];var replace=string.charAt(backpos+1);"n"===replace&&(replace="\n"),"r"===replace&&(replace="\r"),"t"===replace&&(replace="	"),string=string.substring(0,backpos)+replace+string.substring(backpos+2),pos=backpos+1}return[string,!1]};var breakPos=/[^\\][\s:=]/;fluid.parseJavaProperties=function(text){var togo={};text=text.replace(/\r\n/g,"\n"),text=text.replace(/\r/g,"\n");for(var contin,key,valueComp,valueRaw,valueEsc,lines=text.split("\n"),i=0;i<lines.length;++i){var line=$.trim(lines[i]);if(line&&"#"!==line.charAt(0)&&"!"!==line.charAt(0)){if(contin)valueEsc=fluid.unescapeProperties(line);else{valueComp="";var breakpos=line.search(breakPos);-1===breakpos?(key=line,valueRaw=""):(key=$.trim(line.substring(0,breakpos+1)),valueRaw=$.trim(line.substring(breakpos+2)),(":"===valueRaw.charAt(0)||"="===valueRaw.charAt(0))&&(valueRaw=$.trim(valueRaw.substring(1)))),key=fluid.unescapeProperties(key)[0],valueEsc=fluid.unescapeProperties(valueRaw)}contin=valueEsc[1],valueEsc[1]?valueComp+=valueEsc[0]:togo[key]=valueComp+valueEsc[0]}}return togo},fluid.formatMessage=function(messageString,args){if(!args)return messageString;"string"==typeof args&&(args=[args]);for(var i=0;i<args.length;++i)messageString=messageString.replace("{"+i+"}",args[i]);return messageString}}(jQuery,fluid_1_5);