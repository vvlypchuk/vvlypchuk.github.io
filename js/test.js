$(document).ready(function(){ 
		var local_score  = 0,
		global_score = 0;

		for(let i = 0; i < 20; i++){
			$(`.tab:eq(${i})`).attr('data-action', 'confirm');
		}

		$(".answer:nth-child(1) > input[name='test_radio_tab']").attr('data-value', '1');
		$(".answer:nth-child(2) > input[name='test_radio_tab']").attr('data-value', '2');
		$(".answer:nth-child(3) > input[name='test_radio_tab']").attr('data-value', '3');


		$("input[name='test_radio_tab']").click(function(){
			local_score = +$(this).attr('data-value');
		});
		$('.tab[data-action="confirm"]').click(function(){
			global_score += local_score;
			local_score = 0;
		});
		$('#get_res').click(function(){
			if(global_score>=21 && global_score<=28){
				$( ".results_text").html("Ваш рівень навчання:<br />Дуже низький");
			}
			else if(global_score>=29 && global_score<=32){
				$( ".results_text").html("Ваш рівень навчання:<br />Низький");
			}
			else if(global_score>=33 && global_score<=36){
				$( ".results_text").html("Ваш рівень навчання:<br />Нижчий середнього");
			}
			else if(global_score>=37 && global_score<=40){
				$( ".results_text").html("Ваш рівень навчання:<br />Трохи нижчий середнього");
			}
			else if(global_score>=41 && global_score<=44){
				$( ".results_text").html("Ваш рівень навчання:<br />Середній");
			}
			else if(global_score>=45 && global_score<=48){
				$( ".results_text").html("Ваш рівень навчання:<br />Трохи вищий за середній");
			}
			else if(global_score>=49 && global_score<=52){
				$( ".results_text").html("Ваш рівень навчання:<br />Вищий за середній");
			}
			else if(global_score>=53 && global_score<=56){
				$( ".results_text").html("Ваш рівень навчання:<br />Високий");
			}
			else if(global_score>=57 && global_score<=60){
				$( ".results_text").html("Ваш рівень навчання:<br />Дуже високий");
			}
		});

}
);