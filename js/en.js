	//画面を読み込んだ際の初期表示
	window.onload = function() {

		//画面の表示処理の関数を呼出
		display();
	}

	//①言語フラグの初期値設定　　0：日本語、1：英語
	var language_flg = 0;

	//②画面内表示処理
	function display() {
		//日本語・英語説明文
		if(language_flg == 0) {
			//日本語説明文
            // 言語切り替えの設定を夜にする
            
            // 編成1
            document.getElementById("language_display2").innerHTML = "通常編成";
            document.getElementById("language_display3").innerHTML = "単緑編成";
            document.getElementById("language_display4").innerHTML = "全緑編成";
            document.getElementById("language_display5").innerHTML = "黄金編成";
            // ステージ1
            document.getElementById("language_display6").innerHTML = "シェケナダム";
            document.getElementById("language_display7").innerHTML = "ドン・ブラコ";
            document.getElementById("language_display8").innerHTML = "シャケト場";
            document.getElementById("language_display9").innerHTML = "トキシラズ";
            document.getElementById("language_display10").innerHTML = "ポラリス";
            // カテゴリー1
            document.getElementById("language_display11").innerHTML = "夜あり総合赤";
            document.getElementById("language_display12").innerHTML = "夜あり総合赤(夜２回)";
            document.getElementById("language_display13").innerHTML = "昼のみ総合赤";
            document.getElementById("language_display14").innerHTML = "昼のみ総合赤(通常３回)";
            document.getElementById("language_display15").innerHTML = "昼のみ総合赤(通常２回)";
            document.getElementById("language_display16").innerHTML = "昼のみ総合赤(通常１回)";
            document.getElementById("language_display17").innerHTML = "夜あり個人赤(総合)";
            document.getElementById("language_display18").innerHTML = "夜あり個人赤(夜２回)";
            document.getElementById("language_display19").innerHTML = "昼のみ個人赤(総合)";
            document.getElementById("language_display20").innerHTML = "昼のみ個人赤(通常３回)";
            document.getElementById("language_display21").innerHTML = "昼のみ個人赤(通常２回)";
            document.getElementById("language_display22").innerHTML = "昼のみ個人赤(通常１回)";
            document.getElementById("language_display23").innerHTML = "カテゴリー別の１WAVE総合赤記録";
            document.getElementById("language_display24").innerHTML = "昼WAVE(干潮)";
            document.getElementById("language_display25").innerHTML = "ドスコイ大量発生WAVE";
            document.getElementById("language_display26").innerHTML = "霧WAVE(干潮)";
            document.getElementById("language_display27").innerHTML = "ハコビヤ襲来WAVE(干潮)";
            document.getElementById("language_display28").innerHTML = "昼WAVE(通常)";
            document.getElementById("language_display29").innerHTML = "霧WAVE(通常)";
            document.getElementById("language_display30").innerHTML = "キンシャケ探しWAVE(通常)";
            document.getElementById("language_display31").innerHTML = "グリル発進WAVE(通常)";
            document.getElementById("language_display32").innerHTML = "ハコビヤ襲来WAVE(通常)";
            document.getElementById("language_display33").innerHTML = "ラッシュWAVE(通常)";
            document.getElementById("language_display34").innerHTML = "昼WAVE(満潮)";
            document.getElementById("language_display35").innerHTML = "霧WAVE(満潮)";
            document.getElementById("language_display36").innerHTML = "キンシャケ探しWAVE(満潮)";
            document.getElementById("language_display37").innerHTML = "グリル発進WAVE(満潮)";
            document.getElementById("language_display38").innerHTML = "ハコビヤ襲来WAVE(満潮)";
            document.getElementById("language_display39").innerHTML = "ラッシュWAVE(満潮)";
                        // カテゴリー2
                        document.getElementById("language_display112").innerHTML = "夜あり総合赤";
                        document.getElementById("language_display122").innerHTML = "夜あり総合赤(夜２回)";
                        document.getElementById("language_display132").innerHTML = "昼のみ総合赤";
                        document.getElementById("language_display142").innerHTML = "昼のみ総合赤(通常３回)";
                        document.getElementById("language_display152").innerHTML = "昼のみ総合赤(通常２回)";
                        document.getElementById("language_display162").innerHTML = "昼のみ総合赤(通常１回)";
                        document.getElementById("language_display172").innerHTML = "夜あり個人赤(総合)";
                        document.getElementById("language_display182").innerHTML = "夜あり個人赤(夜２回)";
                        document.getElementById("language_display192").innerHTML = "昼のみ個人赤(総合)";
                        document.getElementById("language_display202").innerHTML = "昼のみ個人赤(通常３回)";
                        document.getElementById("language_display212").innerHTML = "昼のみ個人赤(通常２回)";
                        document.getElementById("language_display222").innerHTML = "昼のみ個人赤(通常１回)";
                        document.getElementById("language_display232").innerHTML = "カテゴリー別の１WAVE総合赤記録";
                        document.getElementById("language_display242").innerHTML = "昼WAVE(干潮)";
                        document.getElementById("language_display252").innerHTML = "ドスコイ大量発生WAVE";
                        document.getElementById("language_display262").innerHTML = "霧WAVE(干潮)";
                        document.getElementById("language_display272").innerHTML = "ハコビヤ襲来WAVE(干潮)";
                        document.getElementById("language_display282").innerHTML = "昼WAVE(通常)";
                        document.getElementById("language_display292").innerHTML = "霧WAVE(通常)";
                        document.getElementById("language_display302").innerHTML = "キンシャケ探しWAVE(通常)";
                        document.getElementById("language_display312").innerHTML = "グリル発進WAVE(通常)";
                        document.getElementById("language_display322").innerHTML = "ハコビヤ襲来WAVE(通常)";
                        document.getElementById("language_display332").innerHTML = "ラッシュWAVE(通常)";
                        document.getElementById("language_display342").innerHTML = "昼WAVE(満潮)";
                        document.getElementById("language_display352").innerHTML = "霧WAVE(満潮)";
                        document.getElementById("language_display362").innerHTML = "キンシャケ探しWAVE(満潮)";
                        document.getElementById("language_display372").innerHTML = "グリル発進WAVE(満潮)";
                        document.getElementById("language_display382").innerHTML = "ハコビヤ襲来WAVE(満潮)";
                        document.getElementById("language_display392").innerHTML = "ラッシュWAVE(満潮)";
             // カテゴリー3
            document.getElementById("language_display113").innerHTML = "夜あり総合赤";
            document.getElementById("language_display123").innerHTML = "夜あり総合赤(夜２回)";
            document.getElementById("language_display133").innerHTML = "昼のみ総合赤";
            document.getElementById("language_display143").innerHTML = "昼のみ総合赤(通常３回)";
            document.getElementById("language_display153").innerHTML = "昼のみ総合赤(通常２回)";
            document.getElementById("language_display163").innerHTML = "昼のみ総合赤(通常１回)";
            document.getElementById("language_display173").innerHTML = "夜あり個人赤(総合)";
            document.getElementById("language_display183").innerHTML = "夜あり個人赤(夜２回)";
            document.getElementById("language_display193").innerHTML = "昼のみ個人赤(総合)";
            document.getElementById("language_display203").innerHTML = "昼のみ個人赤(通常３回)";
            document.getElementById("language_display213").innerHTML = "昼のみ個人赤(通常２回)";
            document.getElementById("language_display223").innerHTML = "昼のみ個人赤(通常１回)";
            document.getElementById("language_display233").innerHTML = "カテゴリー別の１WAVE総合赤記録";
            document.getElementById("language_display243").innerHTML = "昼WAVE(干潮)";
            document.getElementById("language_display253").innerHTML = "ドスコイ大量発生WAVE";
            document.getElementById("language_display263").innerHTML = "霧WAVE(干潮)";
            document.getElementById("language_display273").innerHTML = "ハコビヤ襲来WAVE(干潮)";
            document.getElementById("language_display283").innerHTML = "昼WAVE(通常)";
            document.getElementById("language_display293").innerHTML = "霧WAVE(通常)";
            document.getElementById("language_display303").innerHTML = "キンシャケ探しWAVE(通常)";
            document.getElementById("language_display313").innerHTML = "グリル発進WAVE(通常)";
            document.getElementById("language_display323").innerHTML = "ハコビヤ襲来WAVE(通常)";
            document.getElementById("language_display333").innerHTML = "ラッシュWAVE(通常)";
            document.getElementById("language_display343").innerHTML = "昼WAVE(満潮)";
            document.getElementById("language_display353").innerHTML = "霧WAVE(満潮)";
            document.getElementById("language_display363").innerHTML = "キンシャケ探しWAVE(満潮)";
            document.getElementById("language_display373").innerHTML = "グリル発進WAVE(満潮)";
            document.getElementById("language_display383").innerHTML = "ハコビヤ襲来WAVE(満潮)";
            document.getElementById("language_display393").innerHTML = "ラッシュWAVE(満潮)";
                        // カテゴリー4
                        document.getElementById("language_display114").innerHTML = "夜あり総合赤";
                        document.getElementById("language_display124").innerHTML = "夜あり総合赤(夜２回)";
                        document.getElementById("language_display134").innerHTML = "昼のみ総合赤";
                        document.getElementById("language_display144").innerHTML = "昼のみ総合赤(通常３回)";
                        document.getElementById("language_display154").innerHTML = "昼のみ総合赤(通常２回)";
                        document.getElementById("language_display164").innerHTML = "昼のみ総合赤(通常１回)";
                        document.getElementById("language_display174").innerHTML = "夜あり個人赤(総合)";
                        document.getElementById("language_display184").innerHTML = "夜あり個人赤(夜２回)";
                        document.getElementById("language_display194").innerHTML = "昼のみ個人赤(総合)";
                        document.getElementById("language_display204").innerHTML = "昼のみ個人赤(通常３回)";
                        document.getElementById("language_display214").innerHTML = "昼のみ個人赤(通常２回)";
                        document.getElementById("language_display224").innerHTML = "昼のみ個人赤(通常１回)";
                        document.getElementById("language_display234").innerHTML = "カテゴリー別の１WAVE総合赤記録";
                        document.getElementById("language_display244").innerHTML = "昼WAVE(干潮)";
                        document.getElementById("language_display254").innerHTML = "ドスコイ大量発生WAVE";
                        document.getElementById("language_display264").innerHTML = "霧WAVE(干潮)";
                        document.getElementById("language_display274").innerHTML = "ハコビヤ襲来WAVE(干潮)";
                        document.getElementById("language_display284").innerHTML = "昼WAVE(通常)";
                        document.getElementById("language_display294").innerHTML = "霧WAVE(通常)";
                        document.getElementById("language_display304").innerHTML = "キンシャケ探しWAVE(通常)";
                        document.getElementById("language_display314").innerHTML = "グリル発進WAVE(通常)";
                        document.getElementById("language_display324").innerHTML = "ハコビヤ襲来WAVE(通常)";
                        document.getElementById("language_display334").innerHTML = "ラッシュWAVE(通常)";
                        document.getElementById("language_display344").innerHTML = "昼WAVE(満潮)";
                        document.getElementById("language_display354").innerHTML = "霧WAVE(満潮)";
                        document.getElementById("language_display364").innerHTML = "キンシャケ探しWAVE(満潮)";
                        document.getElementById("language_display374").innerHTML = "グリル発進WAVE(満潮)";
                        document.getElementById("language_display384").innerHTML = "ハコビヤ襲来WAVE(満潮)";
                        document.getElementById("language_display394").innerHTML = "ラッシュWAVE(満潮)";
            // カテゴリー5
            document.getElementById("language_display115").innerHTML = "夜あり総合赤";
            document.getElementById("language_display125").innerHTML = "夜あり総合赤(夜２回)";
            document.getElementById("language_display135").innerHTML = "昼のみ総合赤";
            document.getElementById("language_display145").innerHTML = "昼のみ総合赤(通常３回)";
            document.getElementById("language_display155").innerHTML = "昼のみ総合赤(通常２回)";
            document.getElementById("language_display165").innerHTML = "昼のみ総合赤(通常１回)";
            document.getElementById("language_display175").innerHTML = "夜あり個人赤(総合)";
            document.getElementById("language_display185").innerHTML = "夜あり個人赤(夜２回)";
            document.getElementById("language_display195").innerHTML = "昼のみ個人赤(総合)";
            document.getElementById("language_display205").innerHTML = "昼のみ個人赤(通常３回)";
            document.getElementById("language_display215").innerHTML = "昼のみ個人赤(通常２回)";
            document.getElementById("language_display225").innerHTML = "昼のみ個人赤(通常１回)";
            document.getElementById("language_display235").innerHTML = "カテゴリー別の１WAVE総合赤記録";
            document.getElementById("language_display245").innerHTML = "昼WAVE(干潮)";
            document.getElementById("language_display255").innerHTML = "ドスコイ大量発生WAVE";
            document.getElementById("language_display265").innerHTML = "霧WAVE(干潮)";
            document.getElementById("language_display275").innerHTML = "ハコビヤ襲来WAVE(干潮)";
            document.getElementById("language_display285").innerHTML = "昼WAVE(通常)";
            document.getElementById("language_display295").innerHTML = "霧WAVE(通常)";
            document.getElementById("language_display305").innerHTML = "キンシャケ探しWAVE(通常)";
            document.getElementById("language_display315").innerHTML = "グリル発進WAVE(通常)";
            document.getElementById("language_display325").innerHTML = "ハコビヤ襲来WAVE(通常)";
            document.getElementById("language_display335").innerHTML = "ラッシュWAVE(通常)";
            document.getElementById("language_display345").innerHTML = "昼WAVE(満潮)";
            document.getElementById("language_display355").innerHTML = "霧WAVE(満潮)";
            document.getElementById("language_display365").innerHTML = "キンシャケ探しWAVE(満潮)";
            document.getElementById("language_display375").innerHTML = "グリル発進WAVE(満潮)";
            document.getElementById("language_display385").innerHTML = "ハコビヤ襲来WAVE(満潮)";
            document.getElementById("language_display395").innerHTML = "ラッシュWAVE(満潮)";
            // FOOTER1
            document.getElementById("language_display40").innerHTML = "管理者 lemontea";

            document.getElementById("language_display1006").innerHTML = "シェケナダム";
            document.getElementById("language_display1007").innerHTML = "ドン・ブラコ";
            document.getElementById("language_display1008").innerHTML = "シャケト場";
            document.getElementById("language_display1009").innerHTML = "トキシラズ";
            document.getElementById("language_display1010").innerHTML = "ポラリス";

		} else {
			//英語語説明文
            
            // 編成
            document.getElementById("language_display2").innerHTML = "rotation-normal";
            document.getElementById("language_display3").innerHTML = "rotation-green-one";
            document.getElementById("language_display4").innerHTML = "rotation-green-all";
            document.getElementById("language_display5").innerHTML = "rotation-golden";
            // ステージ
            document.getElementById("language_display6").innerHTML = "Spawning Grounds";
            document.getElementById("language_display7").innerHTML = "Marooner's Bay";
            document.getElementById("language_display8").innerHTML = "Lost Outpost";
            document.getElementById("language_display9").innerHTML = "Salmonid Smokeyard";
            document.getElementById("language_display10").innerHTML = "Ruins of Ark Polaris";
            // カテゴリー1
            document.getElementById("language_display11").innerHTML = "Total Power Eggs(Night)";
            document.getElementById("language_display12").innerHTML = "Total Power Eggs(2 Night)";
            document.getElementById("language_display13").innerHTML = "Total Power Eggs(nightless)";
            document.getElementById("language_display14").innerHTML = "Total Power Eggs(nightless)(3 NT Normal)";
            document.getElementById("language_display15").innerHTML = "Total Power Eggs(nightless)(2 NT Normal)";
            document.getElementById("language_display16").innerHTML = "Total Power Eggs(nightless)(1 NT Normal)";
            document.getElementById("language_display17").innerHTML = "Single Player Power Eggs(Night)";
            document.getElementById("language_display18").innerHTML = "Single Player Power Eggs(2 Night)";
            document.getElementById("language_display19").innerHTML = "Single Player Power Eggs(nightless)";
            document.getElementById("language_display20").innerHTML = "Single Player Power Eggs(nightless)(3 NT Normal)";
            document.getElementById("language_display21").innerHTML = "Single Player Power Eggs(nightless)(2 NT Normal)";
            document.getElementById("language_display22").innerHTML = "Single Player Power Eggs(nightless)(1 NT Normal)";
            document.getElementById("language_display23").innerHTML = "1WAVE total power eggs record by category";

            document.getElementById("language_display24").innerHTML = "No event(LT)";
            document.getElementById("language_display25").innerHTML = "Cohock Charge";
            document.getElementById("language_display26").innerHTML = "Fog(LT)";
            document.getElementById("language_display27").innerHTML = "Mothership(LT)";

            document.getElementById("language_display28").innerHTML = "No event(NT)";
            document.getElementById("language_display29").innerHTML = "Fog(NT)";
            document.getElementById("language_display30").innerHTML = "Goldie Seeking(NT)";
            document.getElementById("language_display31").innerHTML = "Grillers(NT)";
            document.getElementById("language_display32").innerHTML = "Mothership(NT)";
            document.getElementById("language_display33").innerHTML = "Rush(NT)";

            document.getElementById("language_display34").innerHTML = "No event(HT)";
            document.getElementById("language_display35").innerHTML = "Fog(HT)";
            document.getElementById("language_display36").innerHTML = "Goldie Seeking(HT)";
            document.getElementById("language_display37").innerHTML = "Grillers(HT)";
            document.getElementById("language_display38").innerHTML = "Mothership(HT)";
            document.getElementById("language_display39").innerHTML = "Rush(HT)";
                        // カテゴリー2
                        document.getElementById("language_display112").innerHTML = "Total Power Eggs(Night)";
                        document.getElementById("language_display122").innerHTML = "Total Power Eggs(2 Night)";
                        document.getElementById("language_display132").innerHTML = "Total Power Eggs(nightless)";
                        document.getElementById("language_display142").innerHTML = "Total Power Eggs(nightless)(3 NT Normal)";
                        document.getElementById("language_display152").innerHTML = "Total Power Eggs(nightless)(2 NT Normal)";
                        document.getElementById("language_display162").innerHTML = "Total Power Eggs(nightless)(1 NT Normal)";
                        document.getElementById("language_display172").innerHTML = "Single Player Power Eggs(Night)";
                        document.getElementById("language_display182").innerHTML = "Single Player Power Eggs(2 Night)";
                        document.getElementById("language_display192").innerHTML = "Single Player Power Eggs(nightless)";
                        document.getElementById("language_display202").innerHTML = "Single Player Power Eggs(nightless)(3 NT Normal)";
                        document.getElementById("language_display212").innerHTML = "Single Player Power Eggs(nightless)(2 NT Normal)";
                        document.getElementById("language_display222").innerHTML = "Single Player Power Eggs(nightless)(1 NT Normal)";
                        document.getElementById("language_display232").innerHTML = "1WAVE total power eggs record by category";
            
                        document.getElementById("language_display242").innerHTML = "No event(LT)";
                        document.getElementById("language_display252").innerHTML = "Cohock Charge";
                        document.getElementById("language_display262").innerHTML = "Fog(LT)";
                        document.getElementById("language_display272").innerHTML = "Mothership(LT)";
            
                        document.getElementById("language_display282").innerHTML = "No event(NT)";
                        document.getElementById("language_display292").innerHTML = "Fog(NT)";
                        document.getElementById("language_display302").innerHTML = "Goldie Seeking(NT)";
                        document.getElementById("language_display312").innerHTML = "Grillers(NT)";
                        document.getElementById("language_display322").innerHTML = "Mothership(NT)";
                        document.getElementById("language_display332").innerHTML = "Rush(NT)";
            
                        document.getElementById("language_display342").innerHTML = "No event(HT)";
                        document.getElementById("language_display352").innerHTML = "Fog(HT)";
                        document.getElementById("language_display362").innerHTML = "Goldie Seeking(HT)";
                        document.getElementById("language_display372").innerHTML = "Grillers(HT)";
                        document.getElementById("language_display382").innerHTML = "Mothership(HT)";
                        document.getElementById("language_display392").innerHTML = "Rush(HT)";
             // カテゴリー3
            document.getElementById("language_display113").innerHTML = "Total Power Eggs(Night)";
            document.getElementById("language_display123").innerHTML = "Total Power Eggs(2 Night)";
            document.getElementById("language_display133").innerHTML = "Total Power Eggs(nightless)";
            document.getElementById("language_display143").innerHTML = "Total Power Eggs(nightless)(3 NT Normal)";
            document.getElementById("language_display153").innerHTML = "Total Power Eggs(nightless)(2 NT Normal)";
            document.getElementById("language_display163").innerHTML = "Total Power Eggs(nightless)(1 NT Normal)";
            document.getElementById("language_display173").innerHTML = "Single Player Power Eggs(Night)";
            document.getElementById("language_display183").innerHTML = "Single Player Power Eggs(2 Night)";
            document.getElementById("language_display193").innerHTML = "Single Player Power Eggs(nightless)";
            document.getElementById("language_display203").innerHTML = "Single Player Power Eggs(nightless)(3 NT Normal)";
            document.getElementById("language_display213").innerHTML = "Single Player Power Eggs(nightless)(2 NT Normal)";
            document.getElementById("language_display223").innerHTML = "Single Player Power Eggs(nightless)(1 NT Normal)";
            document.getElementById("language_display233").innerHTML = "1WAVE total power eggs record by category";

            document.getElementById("language_display243").innerHTML = "No event(LT)";
            document.getElementById("language_display253").innerHTML = "Cohock Charge";
            document.getElementById("language_display263").innerHTML = "Fog(LT)";
            document.getElementById("language_display273").innerHTML = "Mothership(LT)";

            document.getElementById("language_display283").innerHTML = "No event(NT)";
            document.getElementById("language_display293").innerHTML = "Fog(NT)";
            document.getElementById("language_display303").innerHTML = "Goldie Seeking(NT)";
            document.getElementById("language_display313").innerHTML = "Grillers(NT)";
            document.getElementById("language_display323").innerHTML = "Mothership(NT)";
            document.getElementById("language_display333").innerHTML = "Rush(NT)";

            document.getElementById("language_display343").innerHTML = "No event(HT)";
            document.getElementById("language_display353").innerHTML = "Fog(HT)";
            document.getElementById("language_display363").innerHTML = "Goldie Seeking(HT)";
            document.getElementById("language_display373").innerHTML = "Grillers(HT)";
            document.getElementById("language_display383").innerHTML = "Mothership(HT)";
            document.getElementById("language_display393").innerHTML = "Rush(HT)";
                        // カテゴリー4
                        document.getElementById("language_display114").innerHTML = "Total Power Eggs(Night)";
                        document.getElementById("language_display124").innerHTML = "Total Power Eggs(2 Night)";
                        document.getElementById("language_display134").innerHTML = "Total Power Eggs(nightless)";
                        document.getElementById("language_display144").innerHTML = "Total Power Eggs(nightless)(3 NT Normal)";
                        document.getElementById("language_display154").innerHTML = "Total Power Eggs(nightless)(2 NT Normal)";
                        document.getElementById("language_display164").innerHTML = "Total Power Eggs(nightless)(1 NT Normal)";
                        document.getElementById("language_display174").innerHTML = "Single Player Power Eggs(Night)";
                        document.getElementById("language_display184").innerHTML = "Single Player Power Eggs(2 Night)";
                        document.getElementById("language_display194").innerHTML = "Single Player Power Eggs(nightless)";
                        document.getElementById("language_display204").innerHTML = "Single Player Power Eggs(nightless)(3 NT Normal)";
                        document.getElementById("language_display214").innerHTML = "Single Player Power Eggs(nightless)(2 NT Normal)";
                        document.getElementById("language_display224").innerHTML = "Single Player Power Eggs(nightless)(1 NT Normal)";
                        document.getElementById("language_display234").innerHTML = "1WAVE total power eggs record by category";
            
                        document.getElementById("language_display244").innerHTML = "No event(LT)";
                        document.getElementById("language_display254").innerHTML = "Cohock Charge";
                        document.getElementById("language_display264").innerHTML = "Fog(LT)";
                        document.getElementById("language_display274").innerHTML = "Mothership(LT)";
            
                        document.getElementById("language_display284").innerHTML = "No event(NT)";
                        document.getElementById("language_display294").innerHTML = "Fog(NT)";
                        document.getElementById("language_display304").innerHTML = "Goldie Seeking(NT)";
                        document.getElementById("language_display314").innerHTML = "Grillers(NT)";
                        document.getElementById("language_display324").innerHTML = "Mothership(NT)";
                        document.getElementById("language_display334").innerHTML = "Rush(NT)";
            
                        document.getElementById("language_display344").innerHTML = "No event(HT)";
                        document.getElementById("language_display354").innerHTML = "Fog(HT)";
                        document.getElementById("language_display364").innerHTML = "Goldie Seeking(HT)";
                        document.getElementById("language_display374").innerHTML = "Grillers(HT)";
                        document.getElementById("language_display384").innerHTML = "Mothership(HT)";
                        document.getElementById("language_display394").innerHTML = "Rush(HT)";
            // カテゴリー5
            document.getElementById("language_display115").innerHTML = "Total Power Eggs(Night)";
            document.getElementById("language_display125").innerHTML = "Total Power Eggs(2 Night)";
            document.getElementById("language_display135").innerHTML = "Total Power Eggs(nightless)";
            document.getElementById("language_display145").innerHTML = "Total Power Eggs(nightless)(3 NT Normal)";
            document.getElementById("language_display155").innerHTML = "Total Power Eggs(nightless)(2 NT Normal)";
            document.getElementById("language_display165").innerHTML = "Total Power Eggs(nightless)(1 NT Normal)";
            document.getElementById("language_display175").innerHTML = "Single Player Power Eggs(Night)";
            document.getElementById("language_display185").innerHTML = "Single Player Power Eggs(2 Night)";
            document.getElementById("language_display195").innerHTML = "Single Player Power Eggs(nightless)";
            document.getElementById("language_display205").innerHTML = "Single Player Power Eggs(nightless)(3 NT Normal)";
            document.getElementById("language_display215").innerHTML = "Single Player Power Eggs(nightless)(2 NT Normal)";
            document.getElementById("language_display225").innerHTML = "Single Player Power Eggs(nightless)(1 NT Normal)";
            document.getElementById("language_display235").innerHTML = "1WAVE total power eggs record by category";

            document.getElementById("language_display245").innerHTML = "No event(LT)";
            document.getElementById("language_display255").innerHTML = "Cohock Charge";
            document.getElementById("language_display265").innerHTML = "Fog(LT)";
            document.getElementById("language_display275").innerHTML = "Mothership(LT)";

            document.getElementById("language_display285").innerHTML = "No event(NT)";
            document.getElementById("language_display295").innerHTML = "Fog(NT)";
            document.getElementById("language_display305").innerHTML = "Goldie Seeking(NT)";
            document.getElementById("language_display315").innerHTML = "Grillers(NT)";
            document.getElementById("language_display325").innerHTML = "Mothership(NT)";
            document.getElementById("language_display335").innerHTML = "Rush(NT)";

            document.getElementById("language_display345").innerHTML = "No event(HT)";
            document.getElementById("language_display355").innerHTML = "Fog(HT)";
            document.getElementById("language_display365").innerHTML = "Goldie Seeking(HT)";
            document.getElementById("language_display375").innerHTML = "Grillers(HT)";
            document.getElementById("language_display385").innerHTML = "Mothership(HT)";
            document.getElementById("language_display395").innerHTML = "Rush(HT)";
            // FOOTER
            document.getElementById("language_display40").innerHTML = "administrator lemon tea";

            document.getElementById("language_display1006").innerHTML = "Grounds";
            document.getElementById("language_display1007").innerHTML = "Bay";
            document.getElementById("language_display1008").innerHTML = "Outpost";
            document.getElementById("language_display1009").innerHTML = "Yard";
            document.getElementById("language_display1010").innerHTML = "Ark";
		}
	}

	//③言語切替ボタン押下時の処理
	function language_change() {
		//言語フラグ
		if(language_flg == 0) {
			//日本語→英語
			language_flg = 1;
		} else {
			//英語→日本語
			language_flg = 0;
		}
		//display関数の呼び出し（表示部分を処理するため）
		display();
	}

