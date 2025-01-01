$.fn.makeSlidePartners = function(){
		var options = {
			time: 2500,
			transition: 250
		};
		var galerie = this;
		var v = {
			currentPos: 1,
			oldPos: 0,
			width: 107,
			totSucre: 0
		};
		this.children('li').each(function(i) {
			var left = (i * v.width);
			v.totSucre = i;
			$(this).css({
				'position' : 'absolute',
				'top' : '0',
				'left' : left + 'px'
			});
		});
		function autoAnim() {
		    clearTimeout(timePartners);
			galerie.makeAnimPartners(v,options,function() {
				timePartners = setTimeout(autoAnim,options.time);
			});
		};
		var timePartners = setTimeout(autoAnim,options.time);
		
		return this;
	};
	$.fn.makeAnimPartners = function(v,options,callback){
	 	this.children('li').each(function(i) {
			var offset = $(this).position();
			$(this).animate({
				'left' : offset.left - v.width + 'px'
			},
			options.transition, 
			function() {
				if((offset.left- v.width) < 0) $(this).css({'left': v.totSucre*v.width + 'px'});
			});
			//if(i == 0) this.append($(this));
			//galerie.append(oldS);
		});
		if (typeof callback == 'function') {
			callback.call(this);
		}
	};
	
	var tradTableau = [{ 
        "lengthMenu": "Afficher _MENU_ références",
        "zeroRecords": "---",

        "info": "Page : _PAGE_ sur _PAGES_",
        "infoEmpty": "Aucun résultat de disponible",
        "infoFiltered": "(sur les _MAX_ références totales)",
        "search": "Rechercher dans les références :",
        "paginate": {
            "first": "Premier",
            "last": "Dernier",
            "next": "Suivant",
            "previous": "Précédent"
        }
	}];
	
	$(function(){
		$('.field-partners-logo').makeSlidePartners();  
		
		
		$(".content").hide();
			$(".content-article").find('.content').eq(0).slideToggle('slow');
			$(".bluebg").find('a').eq(0).css('text-decoration','underline');
			$(".bluebg a").click(function(e) {
				$('.bluebg a').css('text-decoration','none');
				var element = $(this).attr("class");
				$(".content").hide('slow');
				$("#"+element).slideToggle('slow');
				$(this).css('text-decoration','underline');
			});
			$(".drop-menu li a").click(function(e) {
                var element = $(this).attr("href").split('#')[1];
				$(".content").hide('slow');
				$("#"+element).slideToggle('slow');
            });
			if(document.URL.split('#')[1])
			{
				$(".content").hide('slow');
				$("#"+document.URL.split('#')[1]).slideToggle('slow');
			}
			
			
		$('.realisation-content').click(function(e){
			e.preventDefault;
			e.stopPropagation;
			if(e.handled !== true) // This will prevent event triggering more then once
			{
				var elementToGet = $(this);
				$('.realisation-content').each(function(index,elem){
					if($(elem).is(elementToGet))
					{
						e.handled = true;
						$(elem).parent().toggleClass('opened');
						$(elem).next('.container').toggle("slow");
					}
					else{
						$(elem).parent().removeClass('opened');
						$(elem).next('.container').hide("slow");
					}
				})
				
			}
			
		})
		//environnement
		if($('#page-realisations').length > 0)
		{
			var table = $('#environnement').DataTable({
				"language": tradTableau[0],
				"pageLength": 5,
				initComplete: function(){
					var column1 = this.api().column(1),
						column2 = this.api().column(2),
						column0 = this.api().column(0);

					$('.radio_choix_env').click(function (){
						$('#page-realisations input[type=radio]').not(this).prop('checked',false);
						if($(this).val() == "99")
						{
							column0.search("").draw(false);
						}
						else{	
							column0.search($(this).val()).draw();
						}
						
					});
					
					$('input.filtre-ref-env').on('keyup change', function(){
						column1.search(this.value).draw();
					});
					
					$('input.filtre-lieu-env').on('keyup change', function(){
						column2.search(this.value).draw();
					});
				}
			});
			
			//economie
			table = $('#economie').DataTable({
				//"ajax": 'data/'+id+'.txt'
				"language": tradTableau[0],
				"pageLength": 5,
				initComplete: function(){
					var column0 = this.api().column(1),
						column1 = this.api().column(2),
						column0 = this.api().column(0);
					
					$('.radio_choix_eco').click(function (){
						$('#page-realisations input[type=radio]').not(this).prop('checked',false);
						if($(this).val() == "99")
						{
							column0.search("").draw(false);
						}
						else{	
							column0.search($(this).val()).draw();
						}
						
					});
					$('input.filtre-ref-eco').on('keyup change', function(){
						column1.search(this.value).draw();
					});
					
					$('input.filtre-lieu-eco').on('keyup change', function(){
						column2.search(this.value).draw();
					});
				}
			});
			
			//genie_civil
			table = $('#genie_civil').DataTable({
				//"ajax": 'data/'+id+'.txt'
				"language": tradTableau[0],
				"pageLength": 5,
				initComplete: function(){
					var column0 = this.api().column(1),
						column1 = this.api().column(2),
						column0 = this.api().column(0);
					
					$('.radio_choix_geciru').click(function (){
						$('#page-realisations input[type=radio]').not(this).prop('checked',false);
						if($(this).val() == "99")
						{
							column0.search("").draw(false);
						}
						else{	
							column0.search($(this).val()).draw();
						}
						
					});
					
					$('input.filtre-ref-geciru').on('keyup change', function(){
						column1.search(this.value).draw();
					});
					
					$('input.filtre-lieu-geciru').on('keyup change', function(){
						column2.search(this.value).draw();
					});
				}
			});
			
			//securite
			table = $('#securite').DataTable({
				//"ajax": 'data/'+id+'.txt'
				"language": tradTableau[0],
				"pageLength": 5,
				initComplete: function(){
					var column0 = this.api().column(1),
						column1 = this.api().column(2),
						column0 = this.api().column(0);
					
					$('.radio_choix_secu').click(function (){
						$('#page-realisations input[type=radio]').not(this).prop('checked',false);
						if($(this).val() == "99")
						{
							column0.search("").draw(false);
						}
						else{	
							column0.search($(this).val()).draw();
						}
						
					});
					
					$('input.filtre-ref-secu').on('keyup change', function(){
						column1.search(this.value).draw();
					});
					
					$('input.filtre-lieu-secu').on('keyup change', function(){
						column2.search(this.value).draw();
					});
				}
			});
			
			//formation
			table = $('#formation').DataTable({
				//"ajax": 'data/'+id+'.txt'
				"language": tradTableau[0],
				"pageLength": 5,
				initComplete: function(){
					var column0 = this.api().column(1),
						column1 = this.api().column(2),
						column0 = this.api().column(0);
					
					$('.radio_choix_form').click(function (){
						$('#page-realisations input[type=radio]').not(this).prop('checked',false);
						if($(this).val() == "99")
						{
							column0.search("").draw(false);
						}
						else{	
							column0.search($(this).val()).draw();
						}
						
					});
					
					$('input.filtre-ref-form').on('keyup change', function(){
						column1.search(this.value).draw();
					});
					
					$('input.filtre-lieu-form').on('keyup change', function(){
						column2.search(this.value).draw();
					});
				}
			});
		}	
	});