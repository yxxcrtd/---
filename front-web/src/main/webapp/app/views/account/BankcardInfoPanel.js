define([
    'dojo/_base/declare',
	'dojo/dom-construct',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dijit/_WidgetsInTemplateMixin',
    'app/ux/GenericTextBox',
    'app/ux/GenericButton',
    'app/views/common/BankcardSelectionField',
    'app/ux/GenericDisplayBox',
	'app/ux/GenericSelect',
    'app/ux/GenericTooltip',
    'app/views/ViewMixin',
    'app/common/Global',
    'dojo/on',
    'dojo/_base/config',
    'dojo/text!./templates/BankcardInfoPanel.html'
], function(declare, domConstruct, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin,
            TextBox, Button, BankcardSelectionField, DisplayBox, Select, Tooltip, ViewMixin, Global, on,cfg, template){
    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, ViewMixin], {
		getProvinceData: function(){
			var provinces = {"110000":{"name":"\u5317\u4eac","city":{"110000":"\u5317\u4eac"}},"120000":{"name":"\u5929\u6d25","city":{"120000":"\u5929\u6d25"}},"130000":{"name":"\u6cb3\u5317","city":{"130100":"\u77f3\u5bb6\u5e84","130181":"\u8f9b\u96c6","130182":"\u85c1\u57ce","130183":"\u664b\u5dde","130184":"\u65b0\u4e50","130185":"\u9e7f\u6cc9","130200":"\u5510\u5c71","130207":"\u4e30\u5357","130281":"\u9075\u5316","130283":"\u8fc1\u5b89","130300":"\u79e6\u7687\u5c9b","130400":"\u90af\u90f8","130481":"\u6b66\u5b89","130500":"\u90a2\u53f0","130581":"\u5357\u5bab","130582":"\u6c99\u6cb3","130600":"\u4fdd\u5b9a","130681":"\u6dbf\u5dde","130682":"\u5b9a\u5dde","130683":"\u5b89\u56fd","130684":"\u9ad8\u7891\u5e97","130700":"\u5f20\u5bb6\u53e3","130800":"\u627f\u5fb7","130900":"\u6ca7\u5dde","130981":"\u6cca\u5934","130982":"\u4efb\u4e18","130983":"\u9ec4\u9a85","130984":"\u6cb3\u95f4","131000":"\u5eca\u574a","131081":"\u9738\u5dde","131082":"\u4e09\u6cb3","131100":"\u8861\u6c34","131181":"\u5180\u5dde","131182":"\u6df1\u5dde"}},"140000":{"name":"\u5c71\u897f","city":{"140100":"\u592a\u539f","140181":"\u53e4\u4ea4","140200":"\u5927\u540c","140300":"\u9633\u6cc9","140400":"\u957f\u6cbb","140481":"\u6f5e\u57ce","140500":"\u664b\u57ce","140581":"\u9ad8\u5e73","140600":"\u6714\u5dde","140700":"\u664b\u4e2d","140702":"\u6986\u6b21","140781":"\u4ecb\u4f11","140800":"\u8fd0\u57ce","140881":"\u6c38\u6d4e","140882":"\u6cb3\u6d25","140900":"\u5ffb\u5dde","140981":"\u539f\u5e73","141000":"\u4e34\u6c7e","141081":"\u4faf\u9a6c","141100":"\u5415\u6881","141102":"\u79bb\u77f3","141121":"\u6587\u6c34","141181":"\u5b5d\u4e49","141182":"\u6c7e\u9633"}},"150000":{"name":"\u5185\u8499\u53e4","city":{"150100":"\u547c\u548c\u6d69\u7279","150200":"\u5305\u5934","150300":"\u4e4c\u6d77","150400":"\u8d64\u5cf0","150500":"\u901a\u8fbd","150581":"\u970d\u6797\u90ed\u52d2","150600":"\u9102\u5c14\u591a\u65af","150602":"\u4e1c\u80dc","150700":"\u547c\u4f26\u8d1d\u5c14","150702":"\u6d77\u62c9\u5c14","150781":"\u6ee1\u6d32\u91cc","150782":"\u7259\u514b\u77f3","150783":"\u624e\u5170\u5c6f","150784":"\u989d\u5c14\u53e4\u7eb3","150785":"\u6839\u6cb3","150800":"\u5df4\u5f66\u6dd6\u5c14","150802":"\u4e34\u6cb3","150900":"\u4e4c\u5170\u5bdf\u5e03","150902":"\u96c6\u5b81","150981":"\u4e30\u9547","152200":"\u5174\u5b89\u76df","152201":"\u4e4c\u5170\u6d69\u7279","152202":"\u963f\u5c14\u5c71","152500":"\u9521\u6797\u90ed\u52d2","152501":"\u4e8c\u8fde\u6d69\u7279","152502":"\u9521\u6797\u6d69\u7279","152900":"\u963f\u62c9\u5584\u76df"}},"210000":{"name":"\u8fbd\u5b81","city":{"210100":"\u6c88\u9633","210181":"\u65b0\u6c11","210200":"\u5927\u8fde","210281":"\u74e6\u623f\u5e97","210282":"\u666e\u5170\u5e97","210283":"\u5e84\u6cb3","210300":"\u978d\u5c71","210381":"\u6d77\u57ce","210400":"\u629a\u987a","210500":"\u672c\u6eaa","210600":"\u4e39\u4e1c","210681":"\u4e1c\u6e2f","210682":"\u51e4\u57ce","210700":"\u9526\u5dde","210781":"\u51cc\u6d77","210782":"\u5317\u5b81","210800":"\u8425\u53e3","210881":"\u76d6\u5dde","210882":"\u5927\u77f3\u6865","210900":"\u961c\u65b0","211000":"\u8fbd\u9633","211081":"\u706f\u5854","211100":"\u76d8\u9526","211200":"\u94c1\u5cad","211281":"\u94c1\u6cd5","211282":"\u5f00\u539f","211300":"\u671d\u9633","211381":"\u5317\u7968","211382":"\u51cc\u6e90","211400":"\u846b\u82a6\u5c9b","211481":"\u5174\u57ce"}},"220000":{"name":"\u5409\u6797","city":{"220100":"\u957f\u6625","220181":"\u4e5d\u53f0","220182":"\u6986\u6811","220183":"\u5fb7\u60e0","220200":"\u5409\u6797","220281":"\u86df\u6cb3","220282":"\u6866\u7538","220283":"\u8212\u5170","220284":"\u78d0\u77f3","220300":"\u56db\u5e73","220381":"\u516c\u4e3b\u5cad","220382":"\u53cc\u8fbd","220400":"\u8fbd\u6e90","220500":"\u901a\u5316","220581":"\u6885\u6cb3\u53e3","220582":"\u96c6\u5b89","220600":"\u767d\u5c71","220681":"\u4e34\u6c5f","220700":"\u677e\u539f","220800":"\u767d\u57ce","220881":"\u6d2e\u5357","220882":"\u5927\u5b89","222400":"\u5ef6\u8fb9","222401":"\u5ef6\u5409","222402":"\u56fe\u4eec","222403":"\u6566\u5316","222404":"\u73f2\u6625","222405":"\u9f99\u4e95","222406":"\u548c\u9f99"}},"230000":{"name":"\u9ed1\u9f99\u6c5f","city":{"230100":"\u54c8\u5c14\u6ee8","230112":"\u963f\u57ce","230182":"\u53cc\u57ce","230183":"\u5c1a\u5fd7","230184":"\u4e94\u5e38","230200":"\u9f50\u9f50\u54c8\u5c14","230281":"\u8bb7\u6cb3","230300":"\u9e21\u897f","230381":"\u864e\u6797","230382":"\u5bc6\u5c71","230400":"\u9e64\u5c97","230500":"\u53cc\u9e2d\u5c71","230600":"\u5927\u5e86","230700":"\u4f0a\u6625","230781":"\u94c1\u529b","230800":"\u4f73\u6728\u65af","230881":"\u540c\u6c5f","230882":"\u5bcc\u9526","230900":"\u4e03\u53f0\u6cb3","231000":"\u7261\u4e39\u6c5f","231081":"\u7ee5\u82ac\u6cb3","231083":"\u6d77\u6797","231084":"\u5b81\u5b89","231085":"\u7a46\u68f1","231100":"\u9ed1\u6cb3","231181":"\u5317\u5b89","231182":"\u4e94\u5927\u8fde\u6c60","231200":"\u7ee5\u5316","231281":"\u5b89\u8fbe","231282":"\u8087\u4e1c","231283":"\u6d77\u4f26","232700":"\u5927\u5174\u5b89\u5cad"}},"310000":{"name":"\u4e0a\u6d77","city":{"310000":"\u4e0a\u6d77"}},"320000":{"name":"\u6c5f\u82cf","city":{"231124":"\u5434\u53bf","320100":"\u5357\u4eac","320200":"\u65e0\u9521","320205":"\u9521\u5c71","320281":"\u6c5f\u9634","320282":"\u5b9c\u5174","320300":"\u5f90\u5dde","320381":"\u65b0\u6c82","320382":"\u90b3\u5dde","320400":"\u5e38\u5dde","320412":"\u6b66\u8fdb","320481":"\u6ea7\u9633","320482":"\u91d1\u575b","320500":"\u82cf\u5dde","320581":"\u5e38\u719f","320582":"\u5f20\u5bb6\u6e2f","320583":"\u6606\u5c71","320584":"\u5434\u6c5f","320585":"\u592a\u4ed3","320600":"\u5357\u901a","320612":"\u901a\u5dde","320681":"\u542f\u4e1c","320682":"\u5982\u768b","320684":"\u6d77\u95e8","320700":"\u8fde\u4e91\u6e2f","320800":"\u6dee\u5b89","320804":"\u6dee\u9634","320900":"\u76d0\u57ce","320981":"\u4e1c\u53f0","320982":"\u5927\u4e30","321000":"\u626c\u5dde","321012":"\u6c5f\u90fd","321081":"\u4eea\u5f81","321084":"\u9ad8\u90ae","321100":"\u9547\u6c5f","321181":"\u4e39\u9633","321182":"\u626c\u4e2d","321183":"\u53e5\u5bb9","321200":"\u6cf0\u5dde","321281":"\u5174\u5316","321282":"\u9756\u6c5f","321283":"\u6cf0\u5174","321284":"\u59dc\u5830","321300":"\u5bbf\u8fc1"}},"330000":{"name":"\u6d59\u6c5f","city":{"330100":"\u676d\u5dde","330109":"\u8427\u5c71","330110":"\u4f59\u676d","330182":"\u5efa\u5fb7","330183":"\u5bcc\u9633","330185":"\u4e34\u5b89","330200":"\u5b81\u6ce2","330281":"\u4f59\u59da","330282":"\u6148\u6eaa","330283":"\u5949\u5316","330300":"\u6e29\u5dde","330381":"\u745e\u5b89","330382":"\u4e50\u6e05","330400":"\u5609\u5174","330481":"\u6d77\u5b81","330482":"\u5e73\u6e56","330483":"\u6850\u4e61","330500":"\u6e56\u5dde","330600":"\u7ecd\u5174","330681":"\u8bf8\u66a8","330682":"\u4e0a\u865e","330683":"\u5d4a\u5dde","330700":"\u91d1\u534e","330781":"\u5170\u6eaa","330782":"\u4e49\u4e4c","330783":"\u4e1c\u9633","330784":"\u6c38\u5eb7","330800":"\u8862\u5dde","330881":"\u6c5f\u5c71","330900":"\u821f\u5c71","331000":"\u53f0\u5dde","331081":"\u6e29\u5cad","331082":"\u4e34\u6d77","331100":"\u4e3d\u6c34","331181":"\u9f99\u6cc9"}},"340000":{"name":"\u5b89\u5fbd","city":{"340100":"\u5408\u80a5","340181":"\u5de2\u6e56","340200":"\u829c\u6e56","340300":"\u868c\u57e0","340400":"\u6dee\u5357","340500":"\u9a6c\u978d\u5c71","340600":"\u6dee\u5317","340700":"\u94dc\u9675","340800":"\u5b89\u5e86","340881":"\u6850\u57ce","341000":"\u9ec4\u5c71","341100":"\u6ec1\u5dde","341181":"\u5929\u957f","341182":"\u660e\u5149","341200":"\u961c\u9633","341282":"\u754c\u9996","341300":"\u5bbf\u5dde","341500":"\u516d\u5b89","341600":"\u4eb3\u5dde","341700":"\u6c60\u5dde","341702":"\u8d35\u6c60","341800":"\u5ba3\u57ce","341802":"\u5ba3\u5dde","341881":"\u5b81\u56fd"}},"350000":{"name":"\u798f\u5efa","city":{"350100":"\u798f\u5dde","350181":"\u798f\u6e05","350182":"\u957f\u4e50","350200":"\u53a6\u95e8","350300":"\u8386\u7530","350400":"\u4e09\u660e","350481":"\u6c38\u5b89","350500":"\u6cc9\u5dde","350581":"\u77f3\u72ee","350582":"\u664b\u6c5f","350583":"\u5357\u5b89","350600":"\u6f33\u5dde","350681":"\u9f99\u6d77","350700":"\u5357\u5e73","350781":"\u90b5\u6b66","350782":"\u6b66\u5937\u5c71","350783":"\u5efa\u74ef","350784":"\u5efa\u9633","350800":"\u9f99\u5ca9","350881":"\u6f33\u5e73","350900":"\u5b81\u5fb7","350981":"\u798f\u5b89","350982":"\u798f\u9f0e"}},"360000":{"name":"\u6c5f\u897f","city":{"360100":"\u5357\u660c\u5e02","360200":"\u666f\u5fb7\u9547","360281":"\u4e50\u5e73","360300":"\u840d\u4e61","360400":"\u4e5d\u6c5f","360481":"\u745e\u660c","360500":"\u65b0\u4f59","360600":"\u9e70\u6f6d","360681":"\u8d35\u6eaa","360700":"\u8d63\u5dde","360781":"\u745e\u91d1","360782":"\u5357\u5eb7","360800":"\u5409\u5b89","360881":"\u4e95\u5188\u5c71","360900":"\u5b9c\u6625","360981":"\u4e30\u57ce","360982":"\u6a1f\u6811","360983":"\u9ad8\u5b89","361000":"\u629a\u5dde","361002":"\u4e34\u5ddd","361100":"\u4e0a\u9976","361181":"\u5fb7\u5174"}},"370000":{"name":"\u5c71\u4e1c","city":{"370100":"\u6d4e\u5357","370181":"\u7ae0\u4e18","370200":"\u9752\u5c9b","370281":"\u80f6\u5dde","370282":"\u5373\u58a8","370283":"\u5e73\u5ea6","370284":"\u80f6\u5357","370285":"\u83b1\u897f","370300":"\u6dc4\u535a","370400":"\u67a3\u5e84","370481":"\u6ed5\u5dde","370500":"\u4e1c\u8425","370600":"\u70df\u53f0","370681":"\u9f99\u53e3","370682":"\u83b1\u9633","370683":"\u83b1\u5dde","370684":"\u84ec\u83b1","370685":"\u62db\u8fdc","370686":"\u6816\u971e","370687":"\u6d77\u9633","370700":"\u6f4d\u574a","370781":"\u9752\u5dde","370782":"\u8bf8\u57ce","370783":"\u5bff\u5149","370784":"\u5b89\u4e18","370785":"\u9ad8\u5bc6","370786":"\u660c\u9091","370800":"\u6d4e\u5b81","370881":"\u66f2\u961c","370882":"\u5156\u5dde","370883":"\u90b9\u57ce","370900":"\u6cf0\u5b89","370982":"\u65b0\u6cf0","370983":"\u80a5\u57ce","371000":"\u5a01\u6d77","371081":"\u6587\u767b","371082":"\u8363\u57ce","371083":"\u4e73\u5c71","371100":"\u65e5\u7167","371200":"\u83b1\u829c","371300":"\u4e34\u6c82","371400":"\u5fb7\u5dde","371481":"\u4e50\u9675","371482":"\u79b9\u57ce","371500":"\u804a\u57ce","371581":"\u4e34\u6e05","371600":"\u6ee8\u5dde","371700":"\u83cf\u6cfd"}},"410000":{"name":"\u6cb3\u5357","city":{"410100":"\u90d1\u5dde","410181":"\u5de9\u4e49","410182":"\u8365\u9633","410183":"\u65b0\u5bc6","410184":"\u65b0\u90d1","410185":"\u767B\u5C01","410200":"\u5f00\u5c01","410300":"\u6d1b\u9633","410381":"\u5043\u5e08","410400":"\u5e73\u9876\u5c71","410481":"\u821e\u94a2","410482":"\u6c5d\u5dde","410500":"\u5b89\u9633","410581":"\u6797\u5dde","410600":"\u9e64\u58c1","410700":"\u65b0\u4e61","410781":"\u536b\u8f89","410782":"\u8f89\u53bf","410800":"\u7126\u4f5c","410882":"\u6c81\u9633","410883":"\u5b5f\u5dde","410900":"\u6fee\u9633","411000":"\u8bb8\u660c","411081":"\u79b9\u5dde","411082":"\u957f\u845b","411100":"\u6f2f\u6cb3","411200":"\u4e09\u95e8\u5ce1","411281":"\u4e49\u9a6c","411282":"\u7075\u5b9d","411300":"\u5357\u9633","411381":"\u9093\u5dde","411400":"\u5546\u4e18","411481":"\u6c38\u57ce","411500":"\u4fe1\u9633","411600":"\u5468\u53e3","411681":"\u9879\u57ce","411700":"\u9a7b\u9a6c\u5e97","419001":"\u6d4e\u6e90"}},"420000":{"name":"\u6e56\u5317","city":{"420100":"\u6b66\u6c49","420200":"\u9ec4\u77f3","420300":"\u5341\u5830","420500":"\u5b9c\u660c","420600":"\u8944\u9633","420683":"\u67a3\u9633","420684":"\u5b9c\u57ce","420700":"\u9102\u5dde","420800":"\u8346\u95e8","420900":"\u5b5d\u611f","420981":"\u5e94\u57ce","420982":"\u5b89\u9646","420984":"\u6c49\u5ddd","421000":"\u8346\u5dde","421081":"\u77f3\u9996","421083":"\u6d2a\u6e56","421087":"\u677e\u6ecb","421100":"\u9ec4\u5188","421181":"\u9ebb\u57ce","421182":"\u6b66\u7a74","421200":"\u54b8\u5b81","421281":"\u8d64\u58c1","421300":"\u968f\u5dde","421381":"\u5e7f\u6c34","422801":"\u6069\u65bd","422802":"\u5229\u5ddd","423001":"\u4e09\u5ce1","429004":"\u4ed9\u6843","429005":"\u6f5c\u6c5f","429006":"\u5929\u95e8"}},"430000":{"name":"\u6e56\u5357","city":{"430100":"\u957f\u6c99","430200":"\u682a\u6d32","430300":"\u6e58\u6f6d","430381":"\u6e58\u4e61","430382":"\u97f6\u5c71","430400":"\u8861\u9633","430481":"\u8012\u9633","430482":"\u5e38\u5b81","430500":"\u90b5\u9633","430581":"\u6b66\u5188","430600":"\u5cb3\u9633","430681":"\u6c68\u7f57","430682":"\u4e34\u6e58","430700":"\u5e38\u5fb7","430781":"\u6d25\u5e02","430800":"\u5f20\u5bb6\u754c","430900":"\u76ca\u9633","430981":"\u6c85\u6c5f","431000":"\u90f4\u5dde","431081":"\u8d44\u5174","431100":"\u6c38\u5dde","431200":"\u6000\u5316","431281":"\u6d2a\u6c5f","431300":"\u5a04\u5e95","431381":"\u51b7\u6c34\u6c5f","431382":"\u6d9f\u6e90","433100":"\u6e58\u897f","433101":"\u5409\u9996"}},"440000":{"name":"\u5e7f\u4e1c","city":{"440100":"\u5e7f\u5dde","440200":"\u97f6\u5173","440300":"\u6df1\u5733","440400":"\u73e0\u6d77","440500":"\u6c55\u5934","440600":"\u4f5b\u5c71","440700":"\u6c5f\u95e8","440800":"\u6e5b\u6c5f","440882":"\u96f7\u5dde","440883":"\u5434\u5ddd","440900":"\u8302\u540d","440981":"\u9ad8\u5dde","440982":"\u5316\u5dde","440983":"\u4fe1\u5b9c","441200":"\u8087\u5e86","441283":"\u9ad8\u8981","441284":"\u56db\u4f1a","441300":"\u60e0\u5dde","441400":"\u6885\u5dde","441481":"\u5174\u5b81","441500":"\u6c55\u5c3e","441581":"\u9646\u4e30","441600":"\u6cb3\u6e90","441700":"\u9633\u6c5f","441781":"\u9633\u6625","441800":"\u6e05\u8fdc","441881":"\u82f1\u5fb7","441882":"\u8fde\u5dde","441900":"\u4e1c\u839e","442000":"\u4e2d\u5c71","445100":"\u6f6e\u5dde","445200":"\u63ed\u9633","445281":"\u666e\u5b81","445300":"\u4e91\u6d6e","445381":"\u7f57\u5b9a"}},"450000":{"name":"\u5e7f\u897f","city":{"450100":"\u5357\u5b81","450200":"\u67f3\u5dde","450300":"\u6842\u6797","450400":"\u68a7\u5dde","450481":"\u5c91\u6eaa","450500":"\u5317\u6d77","450600":"\u9632\u57ce\u6e2f","450681":"\u4e1c\u5174","450700":"\u94a6\u5dde","450800":"\u8d35\u6e2f","450881":"\u6842\u5e73","450900":"\u7389\u6797","450981":"\u5317\u6d41","451000":"\u767e\u8272","451100":"\u8d3a\u5dde","451200":"\u6cb3\u6c60","451281":"\u5b9c\u5dde","451300":"\u6765\u5bbe","451381":"\u5408\u5c71","451400":"\u5d07\u5de6","451481":"\u51ed\u7965"}},"460000":{"name":"\u6d77\u5357","city":{"460100":"\u6d77\u53e3","460107":"\u743c\u5c71","460200":"\u4e09\u4e9a","469001":"\u4e94\u6307\u5c71","469002":"\u743c\u6d77","469003":"\u510b\u5dde","469005":"\u6587\u660c","469006":"\u4e07\u5b81","469007":"\u4e1c\u65b9","469023":"\u6f84\u8fc8\u53bf"}},"500000":{"name":"\u91cd\u5e86","city":{"500000":"\u91cd\u5e86","500116":"\u6c5f\u6d25","500117":"\u5408\u5ddd","500118":"\u6c38\u5ddd","500119":"\u5357\u5ddd"}},"510000":{"name":"\u56db\u5ddd","city":{"510100":"\u6210\u90fd","510181":"\u90fd\u6c5f\u5830","510182":"\u5f6d\u5dde","510183":"\u909b\u5d03","510184":"\u5d07\u5dde","510300":"\u81ea\u8d21","510400":"\u6500\u679d\u82b1","510500":"\u6cf8\u5dde","510600":"\u5fb7\u9633","510681":"\u5e7f\u6c49","510682":"\u4ec0\u90a1","510683":"\u7ef5\u7af9","510700":"\u7ef5\u9633","510781":"\u6c5f\u6cb9","510800":"\u5e7f\u5143","510900":"\u9042\u5b81","511000":"\u5185\u6c5f","511100":"\u4e50\u5c71","511300":"\u5357\u5145","511381":"\u9606\u4e2d","511400":"\u7709\u5c71","511500":"\u5b9c\u5bbe","511600":"\u5e7f\u5b89","511681":"\u534e\u84e5","511700":"\u8fbe\u5dde","511721":"\u8fbe\u5ddd","511781":"\u4e07\u6e90","511800":"\u96c5\u5b89","511900":"\u5df4\u4e2d","512000":"\u8d44\u9633","512081":"\u7b80\u9633","513200":"\u963f\u575d","513300":"\u7518\u5b5c","513400":"\u51c9\u5c71","513401":"\u897f\u660c"}},"520000":{"name":"\u8d35\u5dde","city":{"520100":"\u8d35\u9633","520181":"\u6e05\u9547","520200":"\u516d\u76d8\u6c34","520300":"\u9075\u4e49","520381":"\u8d64\u6c34","520382":"\u4ec1\u6000","520400":"\u5b89\u987a","520500":"\u6bd5\u8282","520600":"\u94dc\u4ec1","522300":"\u9ed4\u897f\u5357","522301":"\u5174\u4e49","522600":"\u9ed4\u4e1c\u5357","522601":"\u51ef\u91cc","522700":"\u9ed4\u5357","522701":"\u90fd\u5300","522702":"\u798f\u6cc9"}},"530000":{"name":"\u4e91\u5357","city":{"530100":"\u6606\u660e","530181":"\u5b89\u5b81","530300":"\u66f2\u9756","530381":"\u5ba3\u5a01","530400":"\u7389\u6eaa","530500":"\u4fdd\u5c71","530600":"\u662d\u901a","530700":"\u4e3d\u6c5f","530802":"\u601d\u8305","530900":"\u4e34\u6ca7","532300":"\u695a\u96c4","532500":"\u7ea2\u6cb3","532501":"\u4e2a\u65e7","532502":"\u5f00\u8fdc","532600":"\u6587\u5c71","532800":"\u897f\u53cc\u7248\u7eb3","532801":"\u666f\u6d2a","532900":"\u5927\u7406","533100":"\u5fb7\u5b8f","533101":"\u7579\u753a","533102":"\u745e\u4e3d","533103":"\u6f5e\u897f","533300":"\u6012\u6c5f","533400":"\u8fea\u5e86"}},"540000":{"name":"\u897f\u85cf","city":{"540100":"\u62c9\u8428","542100":"\u660c\u90fd","542200":"\u5c71\u5357","542300":"\u65e5\u5580\u5219","542400":"\u90a3\u66f2","542500":"\u963f\u91cc","542600":"\u6797\u829d"}},"610000":{"name":"\u9655\u897f","city":{"610100":"\u897f\u5b89","610200":"\u94dc\u5ddd","610300":"\u5b9d\u9e21","610400":"\u54b8\u9633","610481":"\u5174\u5e73","610500":"\u6e2d\u5357","610581":"\u97e9\u57ce","610582":"\u534e\u9634","610600":"\u5ef6\u5b89","610700":"\u6c49\u4e2d","610800":"\u6986\u6797","610900":"\u5b89\u5eb7","611000":"\u5546\u6d1b","611002":"\u5546\u5dde"}},"620000":{"name":"\u7518\u8083","city":{"620100":"\u5170\u5dde","620200":"\u5609\u5cea\u5173","620300":"\u91d1\u660c","620400":"\u767d\u94f6","620500":"\u5929\u6c34","620600":"\u6b66\u5a01","620700":"\u5f20\u6396","620800":"\u5e73\u51c9","620900":"\u9152\u6cc9","620981":"\u7389\u95e8","620982":"\u6566\u714c","621000":"\u5e86\u9633","621002":"\u897f\u5cf0","621100":"\u5b9a\u897f","621200":"\u9647\u5357","622900":"\u4e34\u590f","623000":"\u7518\u5357","623001":"\u5408\u4f5c"}},"630000":{"name":"\u9752\u6d77","city":{"630100":"\u897f\u5b81","632100":"\u6d77\u4e1c","632200":"\u6d77\u5317","632300":"\u9ec4\u5357","632500":"\u6d77\u5357","632600":"\u679c\u6d1b","632700":"\u7389\u6811","632800":"\u6d77\u897f","632801":"\u683c\u5c14\u6728","632802":"\u5fb7\u4ee4\u54c8"}},"640000":{"name":"\u5b81\u590f","city":{"640100":"\u94f6\u5ddd","640181":"\u7075\u6b66","640200":"\u77f3\u5634\u5c71","640300":"\u5434\u5fe0","640381":"\u9752\u94dc\u5ce1","640400":"\u56fa\u539f","640500":"\u4e2d\u536b"}},"650000":{"name":"\u65b0\u7586","city":{"650100":"\u4e4c\u9c81\u6728\u9f50","650200":"\u514b\u62c9\u739b\u4f9d","652100":"\u5410\u9c81\u756a","652200":"\u54c8\u5bc6","652300":"\u660c\u5409","652302":"\u961c\u5eb7","652700":"\u535a\u5c14\u5854\u62c9","652701":"\u535a\u4e50","652800":"\u5df4\u97f3\u90ed\u695e","652801":"\u5e93\u5c14\u52d2","652900":"\u963f\u514b\u82cf","653000":"\u514b\u5b5c\u52d2\u82cf\u67ef\u5c14\u514b\u5b5c","653001":"\u963f\u56fe\u4ec0","653100":"\u5580\u4ec0","653200":"\u548c\u7530","654000":"\u4f0a\u7281\u54c8\u8428\u514b","654002":"\u4f0a\u5b81","654003":"\u594e\u5c6f","654200":"\u5854\u57ce","654202":"\u4e4c\u82cf","654300":"\u963f\u52d2\u6cf0","659001":"\u77f3\u6cb3\u5b50"}}};
			return provinces;
		},
    	
    	onConfirm: function() {},
		getSplitId: function(str){
			var tmpArray = str.split(',');
			return tmpArray[0];
		},
		changeProvince: function(){
			var obj = document.getElementById("bank_province");
			var province = this.getSplitId(obj.value);
			var city = document.getElementById('bank_city');
			city.innerHTML = '';
			var provinces = this.getProvinceData();
			for(var i in provinces[province]['city']){
				city.options.add(new Option(provinces[province]['city'][i],i+','+provinces[province]['city'][i]));
			}
		},
		provinceDefault: function(){
			var province = document.getElementById('bank_province');
			province.innerHTML = '';
			var provinces = this.getProvinceData();
			for(var i in provinces){
				province.options.add(new Option(provinces[i]['name'],i+','+provinces[i]['name']));
			}
			document.getElementById("bank_city").options.add(new Option("北京","110000,北京"));
		},
    	templateString: template,
    	user:'',

        _setUserAttr: function(user) {
            this.cardholderFld.set('value', Global.encodeInfo(user.userRealName, 1, 0));
            this.cardholderIDNoFld.set('value', Global.encodeInfo(user.idcard, 3, 3));
            if (user.isTrust == '0') {
                this.confirmBtn.set('disabled', true);
                this.confirmBtn.set('disabledMsg', '请您先完成<a target="_blank" href="'+this.baseUrl+'/user/'+(cfg.authentication ? 'uploadID.htm' : 'certification.htm')+'">实名认证</a>');
            }
        },

    	render: function() {
    		var me = this,
    			bankList = me.bankListFld = new BankcardSelectionField({
    				id: 'tofocus',
    				label: '选择银行'
    			}),
    			bankcardNo = me.bankcardNoFld = new TextBox({
    				label: '银行卡卡号',
    				promptMessage: '绑定的卡的开户信息与身份证必须一致的，否则绑定失败',
    				style:'right: -199px;',
    				validates: [{
    					pattern: /.+/,
    					message: '请输入银行卡卡号'
    				}, {
    					pattern: function() {
    						return /^\d+$/.test(this.get('value').replace(/\s/g, ''));
    					},
    					message: '银行卡卡号必须是数字'
    				}, {
    					pattern: function() {
    						return /^\d{6,}$/.test(this.get('value').replace(/\s/g, ''));
    					},
    					message: '银行卡卡号至少6位数字'
    				}],
    				onKeyUp: function(e) {
    					var value = this.get('value').replace(/\s/g,''),
    						len = value.length;
    					if (len == 5 || len == 9 || len == 13 || len == 17) {
    						value = value.split('');
    						while(len > 1) {
    							value.splice(len - 1, 0, ' ');
    							len = len - 4;
    						}
    						value = value.join('');
    						this.set('value', value);
    					}
    				}
                }),
                confirmBankcard = me.confirmBankcardFld = new TextBox({
                    label: '确认银行卡卡号',
                    promptMessage: '请仔细核对您的银行卡，姓名和卡号不一致将无法正常提款',
                    style:'right: -199px;',
                    validates: [{
                        pattern: /.+/,
                        message: '请再次输入银行卡卡号'
                    }, {
                        pattern: function() {
                            return me.confirmBankcardFld.get('Value').replace(/\s/g, '') == me.bankcardNoFld.get('Value').replace(/\s/g, '');
                        },
                        message: '两次输入不一致'
                    }],
                    onKeyUp: function(e) {
                        var value = this.get('value').replace(/\s/g,''),
                            len = value.length;
                        if (len == 5 || len == 9 || len == 13 || len == 17) {
                            value = value.split('');
                            while(len > 1) {
                                value.splice(len - 1, 0, ' ');
                                len = len - 4;
                            }
                            value = value.join('');
                            this.set('value', value);
                        }
                    }
                }),
    			cardholder = me.cardholderFld = new DisplayBox({
    				label: '持卡人姓名'
    			}),
    			cardholderIDNo = me.cardholderIDNoFld = new DisplayBox({
    				label: '持卡人身份证号'
    			}),
    			confirmBtn = me.confirmBtn = new Button({
					id:'confirmBtn',
    				label: '下一步',
    				enter: true,
                    position: 'center',
    				handler: me.onConfirm
    			});

            on(me.bankcardNoFld, 'paste', function(e) {
                var value = e.target.value.replace(/\s/g,''),
                    len = value.length;
                value = value.split('');
                while(len > 4) {
                    value.splice(len - (len % 4), 0, ' ');
                    len = len - 4;
                }
                value = value.join('');
                me.bankcardNoFld.set('value', value);

            });
            on(me.confirmBankcardFld, 'paste', function(e) {
                me.confirmBankcardFld.set('value', '');
                alert('确认输入框不允许复制。');
            });
			var branchInfoHtml = '<label data-dojo-attach-point="labelNode" class="ui-label">开户支行：</label>' +
				'<div style="font-size: 14px;">' +
				'<label>省份　</label><select name="province" id="bank_province" style="padding: 4px;"></select>' +
				'<label>　城市　</label><select name="city" id="bank_city" style="padding: 4px;"></select>' +
				'　<input type="text" id="bank_reg" name="bank_reg" placeholder="支行地址" style="width: 300px;padding: 5px;font-size: 12px;"/><br>' +
				'<span style="font-size:14px;color:#ff2323; margin: 10px;display: inline-block;">例如：xx省xx市xxx支行 或xxx分理处，如果您不清楚的话，可以致电银行客服咨询。</span>' +
				'</div>';



            cardholder.placeAt(me.formNode);
            cardholderIDNo.placeAt(me.formNode);
    		bankList.placeAt(me.formNode);
    		bankcardNo.placeAt(me.formNode);
            confirmBankcard.placeAt(me.formNode);
			var newNodexx = document.createElement("div");
			newNodexx.setAttribute("id", "branchInfoDiv");
			newNodexx.setAttribute("class", "ui-form-item");
			newNodexx.innerHTML = branchInfoHtml;
			me.formNode.appendChild(newNodexx);


			//domConstruct.create("div",{id:"branchInfoDiv", class:"ui-form-item", innerHTML:branchInfoHtml},me.formNode);
    		confirmBtn.placeAt(me.formNode);
    	},
    	
    	getData: function() {
    		var bank = this.bankListFld.get('banks')[this.bankListFld.get('bankIndex')];
//    		var user = this.bankListFld.get('user');
			var bank_province = document.getElementById('bank_province').value.replace(/\s/g, '').split(",");
			var bank_city = document.getElementById('bank_city').value.replace(/\s/g, '').split(",");

    		return {
    			'bank_no': bank['bankNo'],
    			'bank_code': '', // TODO
    			'bank_name': bank['bankName'],
    			'bank_card_no': this.bankcardNoFld.get('value').replace(/\s/g, ''),
				'bank_province': bank_province[1],
				'bank_city': bank_city[1],
				'bank_reg': document.getElementById('bank_reg').value.replace(/\s/g, ''),
    			'is_default': 1
    		};
    	},
		checkBranchInfo: function(){
			var obj = document.getElementById('bank_reg');
			if(obj.value == ''){
				Tooltip.show("请输入支行信息", obj);
				return false;
			}
			return true;
		},
    	isValid: function() {
    		return this.bankListFld.checkValidity() && this.bankcardNoFld.checkValidity() &&
                this.confirmBankcardFld.checkValidity() && this.checkBranchInfo();
    	},
    	
    	showError: function(err) {
    		Tooltip.show(err, this.confirmBtn.innerNode);
    	},
    	
    	postCreate: function() {
    		var me = this;
    		me.render();
    		me.inherited(arguments);
    	}
    	
    });
});