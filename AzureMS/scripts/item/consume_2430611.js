
var status;
var select = -1;
var book  = new Array(2290294,2290295,2290296,2290297,2290298,2290299,2290300,2290301,2290302,2290303,2290304,2290305,2290306,2290307,2290308,2290309,2290310,2290311,2290312,2290313,2290314,2290315,2290316,2290319,2290320,2290321,2290335,2290336,2290337,2290338,2290339,2290350,2290351,2290352,2290353,2290368,2290369,2290371,2290372,2290373,2290375,2290376,2290377,2290380,2290381,2290382,2290383,2290384,2290385,2290386,2290387,2290388,2290389,2290390,2290391,2290392,2290393,2290394,2290395,2290396,2290397,2290398,2290399,2290400,2290401,2290402,2290403,2290404,2290405,2290406,2290407,2290408,2290409,2290410,2290469,2290470,2290471,2290472,2290473,2290474,2290475,2290476,2290477,2290478,2290479,2290480,2290481,2290482,2290483,2290484,2290485,2290486,2290487,2290488,2290489,2290490,2290491,2290492,2290493,2290494,2290495,2290496,2290497,2290498,2290499,2290500,2290501,2290502,2290503,2290504,2290505,2290506,2290507,2290508,2290509,2290510,2290511,2290524,2290526,2290527,2290528,2290529,2290530,2290531,2290532,2290533,2290534,2290535,2290536,2290537,2290538,2290539,2290540,2290541,2290542,2290543,2290544,2290545,2290546,2290547,2290548,2290549,2290550,2290551,2290552,2290553,2290554,2290555,2290556,2290557,2290558,2290559,2290560,2290561,2290562,2290563,2290564,2290565,2290566,2290567,2290568,2290569,2290570,2290572,2290573,2290575,2290576,2290577,2290578,2290579,2290582,2290583,2290584,2290585,2290586,2290587,2290588
);

function start() {    status = -1;
    action(1, 1, 0);
}

function action(mode, type, selection) {
    if (mode <= 0) {
        cm.dispose();
    	return;
    } else {
        if (mode == 1)
            status++;
        if (status == 0) {
	    var text = "Please select the special mastery book you would like to receive.\r\n\r\n#b";
		for (var i = 0; i < book.length; i++) {
		    text+="#L"+i+"##i"+book[i]+"# #t"+book[i]+"##l\r\n";
		}
		cm.sendSimple(text);
	} else if (status == 1) {
		select = selection;
		cm.sendYesNo("The mastery book to receive #b#t"+book[select]+"##k right?");
	} else if (status == 2) {
		cm.gainItem(book[select], 1);
		cm.gainItem(2430611, -1);
		cm.dispose();
	}
    }
}