// JavaScript Document
$(function(){
		// Étude d’Impact Environnemental et Social : puce verte
			var array_1 = {"markers": [
				{"latitude": "7.33814901", "longitude":"13.56683001", "icon": "images/puce-verte.png", "baloon_text": "<p class='info_content'>Etude d’impact environnemental et social du projet de réhabilitation du projet agro-industriel de la société KAWTAL-NDEMRI à Wassandé-Ngaoundéré (2015, en cours)</p><p class='info_content'>Etude d’impact environnemental et social du projet de réhabilitation et de ré-exploitation de la Tannerie Mégisserie de la Vina pour le compte de la société chinoise, Zhong Shun Tannerie Sarl à Ngaoundéré (2013)</p><p class='info_content'>Etude d’impact environnemental et social des stations-services MRS de Ngaoundéré (Béka-Hosséré) pour le compte de la société MRS Corlay Cameroun SA (2014)</p><p class='info_content'>Etude d’impact environnemental et social du projet d’exploitation des carrières de latérites et de points de prélèvement d’eau pour le compte de la société DTP Terrassement à Ngaoundéré en collaboration avec le cabinet Maps & Mines (2015)</p><p class='info_content'>Etude d’impact environnemental et social du projet de construction et d’exploitation de l’abattoir municipal de Ngaoundéré-Mardock (2015)</p><p class='info_content'>Etude d’impact environnemental et social du projet de construction de la rocade de Ngaoundéré sur la RN1 en partenariat en partenariat avec le cabinet Map’s& Mines (2014) </p>"},
				{"latitude": "4.050000013", "longitude":"9.700000013", "icon": "images/puce-verte.png", "baloon_text": "<p class='info_content'>Etude d’impact environnemental et social du projet de recyclage des métaux non-ferreux par GANESHA SARL à Douala (2014) </p><p class='info_content'>Etude d’impact environnemental et social du projet de construction et d’équipement de la Cité des Cinquantenaires de Douala (900 logements) pour le compte du MINDHU à travers la Communauté Urbaine de Douala en collaboration avec le Cabinet d’architecte Bissek et Associés (2013)</p><p class='info_content'>Etude d’impact environnemental et social de l’usine de recyclage du plomb et de l’aluminium de Békoko-Douala pour le compte de la société Indienne, CMM SA (Cameroon Minerals and Metals) (2006)</p>"},
				{"latitude": "3.8667", "longitude":"11.5167", "icon": "images/puce-verte.png", "baloon_text": "<p class='info_content'>Etude d’impact environnemental et social du projet de construction et d’équipement du centre de formation de la Douane Camerounaise à Mbankomo-Yaoundé (accueil 300 stagiaires) pour le compte du MINFI en collaboration avec le Cabinet d’architectes Archidia (2013)</p><p class='info_content'>Etude d’impact environnemental et social du centre emplisseur de gaz GREEN OIL Gaz à Afanoyoa III-Yaoundé (2015) </p><p class='info_content'>Etude d’impact environnemental et social du projet de construction et d’exploitation d’une station service MRS à Oyomabang-Yaoundé (2015)</p><p class='info_content'>Etude d’impact environnemental et social du projet de construction et d’exploitation d’une station service GREEN Oil Nomayos-Mbankomo (2015)</p>"},
				{"latitude": "9.30000003", "longitude":"13.40000003", "icon": "images/puce-verte.png", "baloon_text": "<p class='info_content'>Etude d’impact environnemental et social du projet de construction de l’usine de fabrication du coton hydrophile à Garoua pour le compte de la société COFIL SA (2008)</p><p class='info_content'>Etude d’impact environnemental du projet de construction de l’Hôpital Général de Garoua, pour le compte du MINSANTE en collaboration avec le Cabinet d’architectes Bissek et Associés (2010)</p><p class='info_content'>Etude d’impact environnemental et social du projet de construction et d’exploitation de la Tannerie Mégisserie de la Bénoué à Garoua (ZONG SHUN TANNERY SARL)</p><p class='info_content'>Etude d’impact environnemental et social du pont sur le Mayo Thiel à Baschéo en collaboration avec le cabinet CIRA pour le compte du MINTP (2015)</p><p class='info_content'>Etude d’impact environnemental et social du projet de construction d’une station service Green Oil à Ngong, Département de la Bénoué (2014) </p>"},
				{"latitude": "5.8833330", "longitude":"14.5500000", "icon": "images/puce-verte.png", "baloon_text": "<p class='info_content'>Etude d’impact environnemental et social des stations-services MRS et Garoua Boulaï  pour le compte de la société MRS Corlay Cameroun SA (2014)</p>"},
				
				{"latitude": "6.4666670", "longitude":"14.2666670", "icon": "images/puce-verte.png", "baloon_text": "<p class='info_content'>Etude d’impact environnemental et social des carrières latéritiques sur le tronçon de route Nandéké-Mbéré pour le compte du groupement DTP Terrassement- RAZEL sur le corridor Douala-Ndjamena (2010)</p>"},
				{"latitude": "9.9341670", "longitude":"13.9486110", "icon": "images/puce-verte.png", "baloon_text": "<p class='info_content'>Etude d’impact environnemental et social du projet de réouverture et d’exploitation de la carrière de roches de Pazara à Guider pour le compte de la société MAG SARL (2013)</p>"},
				{"latitude": "2.9166670", "longitude":"11.1500000", "icon": "images/puce-verte.png", "baloon_text": "<p class='info_content'>Etude d’impact environnemental et social du projet de construction et équipement du siège du Crédit Foncier du Cameroun et de 50 logements à Ebolowa en collaboration avec le cabinet Bissek et Associé (en cours)</p>"},
				{"latitude": "2.6666670", "longitude":"12.6666670", "icon": "images/puce-verte.png", "baloon_text": "<p class='info_content'>Etude d’impact environnemental et social de la vente de coupe 0211 à Djoum pour le compte de la SFID (2015)</p>"},
				{"latitude": "12.0833330", "longitude":"15.0333330", "icon": "images/puce-verte.png", "baloon_text": "<p class='info_content'>Etude d’impact environnemental et social du projet de construction de la route Maroua-Kousseri en collaboration avec le Groupement Louis-Berger Beta Consult (2009) </p>"}
			]};
		// Audit environnemental et social : puce blanche
			var array_2 = {"markers": [
				{"latitude": "4.050000012", "longitude":"9.700000012", "icon": "images/puce-blanche.png", "baloon_text": "<p class='info_content'>Audit environnemental et social de l’immeuble ARC, siège du PMUC (10 Niveaux) à Douala  pour le compte du PMUC en collaboration avec le Cabinet d’architectes Bissek et Associés (2007)</p>"},
				{"latitude": "9.30000001", "longitude":"13.40000001", "icon": "images/puce-blanche.png", "baloon_text": "<p class='info_content'>Audit environnemental et social de la SIDEMI SA (Société Industrielle des Eaux Minérales) de Garoua pour le compte de SIDEMI SA (2012)</p>"},
				{"latitude": "3.7681770", "longitude":"11.5020750", "icon": "images/puce-blanche.png", "baloon_text": "<p class='info_content'>Audit environnemental et social de 5 stations services GREEN Oil dans le département du Mfoundi (2015)</p><p class='info_content'>Audit environnemental et social de 4 stations services GREEN OIL dans le Département de la Mefou-Afamba </p>"},
				{"latitude": "10.5971000", "longitude":"14.3157000", "icon": "images/puce-blanche.png", "baloon_text": "<p class='info_content'>Audit environnemental et social de l’Hotel le Sahel à Maroua (2014, en cours) </p>"}
			]};
		// Gestion des Ressources Naturelles puce bleue
			var array_3 = {"markers": [
				{"latitude": "7.36972204", "longitude":"12.35472204", "icon": "images/puce-bleue.png", "baloon_text": "<p class='info_content'>Contrôle des travaux d’aménagement du système d’irrigation des sites de reboisement communautaire en collaboration avec ABIOGET (2013)</p>"}
			]};
		// Étude Environnementale et sociale Stratégique puce rouge
			var array_4 = {"markers": [
				{"latitude": "7.36972203", "longitude":"12.35472203", "icon": "images/puce-rouge.png", "baloon_text": "<p class='info_content'>Participation à l’étude de faisabilité du projet d’aménagement hydroélectrique de Makaï-Milly en collaboration avec TRACTEBEL ENGINEERING et BETA Consult (2015)</p><p class='info_content'>Evaluation environnementale stratégique du projet de construction de 5 centres de formation aux métiers non ruraux dans 5 régions du Cameroun pour le compte du MINEFOP (en cours, 2015)</p><p class='info_content'>Evaluation environnementale stratégique du programme de construction de 1 550 logements de 13 casernes militaires dans les dix Régions du Cameroun pour le compte du MINDEF (2014)</p>"}
			]};
		// Diagnostic des systèmes et organisations puce pourpre
			var array_5 = {"markers": []}; 
		// Etudes socio-économiques puce verte 2
			var array_6 = {"markers": [
				{"latitude": "4.05000002", "longitude":"9.70000002", "icon": "images/puce-verte2.png", "baloon_text": "<p class='info_content'>Etude de dangers de la société METAFRIQUE CAMEROUN SARL à  Douala en partenariat avec le cabinet Compétences Sud (2015)</p><p class='info_content'>Etude de dangers de la société MULTIPRINT SARL en partenariat avec le cabinet compétences Sud à Douala-Békoko (2015) </p>"},
				{"latitude": "7.36972202", "longitude":"12.35472202", "icon": "images/puce-verte2.png", "baloon_text": "<p class='info_content'>Etude de dangers de la société MAKO SA en partenariat avec le cabinet MNPE EXPERTS (2015)</p><p class='info_content'>Etude technico-économique du projet d’exploitation de la carrière de roches de Pazara pour le compte de la société MAG SARL, (2013)</p>"},
				{"latitude": "10.63155906", "longitude":"14.65878206", "icon": "images/puce-verte2.png", "baloon_text": "<p class='info_content'>Etude sur l’amelioration de la qualité sanitaire des aliments de la rue dans la région de l’Extreme-Nord pour le compte du Ministère de la Recherche et de l’Inonvation en collaboration avec le Cabinet HAMADOU Nassourou (2011) </p>"}
			]};
		// Aménagement du territoire et développement régional puce rose
			var array_7 = {"markers": [
				{"latitude": "9.30000002", "longitude":"13.40000002", "icon": "images/puce-rose.png", "baloon_text": "<p class='info_content'>Elaboration du Plan de Gestion des Déchets de la SIDEMI SA à Garoua (2014)</p>"},
				{"latitude": "4.05000003", "longitude":"9.70000003", "icon": "images/puce-rose.png", "baloon_text": "<p class='info_content'>Elaboration du Plan de Gestion des Déchets de la société SAGRI à Békoko-Douala (2014)</p>"}
			]};
		// Génie civil – génie rural puce jaune
			var array_8 = {"markers": [
				{"latitude": "10.63155905", "longitude":"14.65878205", "icon": "images/puce-jaune.png", "baloon_text": "<p class='info_content'>Contrôle des travaux d’aménagement des forages dans les sites de reboisement du projet sahel vert pour le compte de Badam Technologies (2012) </p>"}
			]}; 
		// Hydraulique rurale et urbaine puce grise
			var array_9 = {"markers": []}; 
		// Géomatique puce orange
			var array_10 = {"markers": [
				{"latitude": "10.5971000", "longitude":"14.3157000", "icon": "images/puce-orange.png", "baloon_text": "<p class='info_content'>Elaboration de l’Atlas de l’Extrême-Nord : base de données SIG portant sur les réalisations du PNDP dans la Région de l’Extrême-Nord Cameroun (2010) </p><p class='info_content'>Elaboration d’un SIG et Cartographie des 47 arrondissements de la Région de l’Extrême-Nord en vue de la production de l’étude monographique des Commune pour le compte du MINEPAT (2012)</p>"}
			]};
		// RENFORCEMENT DES CAPACITES ET FORMATIONS  puce noire
			var array_11 = {"markers": [
				{"latitude": "10.63155901", "longitude":"14.65878201", "icon": "images/puce-noire.png", "baloon_text": "<p class='info_content'>Formation (séminaire) des autorités administratives, traditionnelles et municipales sur les textes juridiques et réglementaires relatifs à la protection de l’environnement dans les six départements de la Région de l’Extrême-Nord du Cameroun</p><p class='info_content'>Campagne de sensibilisation et formation dans 13 villages de la Région de l’Extrême-Nord du Cameroun sur les techniques et méthodes de Conservation des Eaux et des Sols (CES) </p>"},
				{"latitude": "13.1144372", "longitude":"14.2319689", "icon": "images/puce-noire.png", "baloon_text": "<p class='info_content'>Formation (séminaire) des animateurs des radios communautaires sur les techniques de communication relatives à la conservation des eaux et des sols en collaboration avec le PRODEBALT (Programme de Développement Durable du Bassin du Lac Tchad</p>"}
			]};

			/*dessin*/
			$("#map_canvas").mapmarker({
				zoom : 5,
				center : 'Cameroon',
				markers : array_1
			});
			$(".fancybox").fancybox({
				openEffect	: 'none',
				closeEffect	: 'none'
			});
			$('.fancytruc .Wbox').hover(function(e) {
                $('#overlay').slideToggle();
            });
			/*$('#tab').DataTable({
					"bLengthChange": false, 
					"language": {
						"url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
					},
					"columnDefs": [
						{ "visible": false, "targets": 0 }
					],
					"order": [[ 0, 'asc' ]],
					"drawCallback": function ( settings ) {
						var api = this.api();
						var rows = api.rows( {page:'current'} ).nodes();
						var last=null;
						api.column(0, {page:'current'} ).data().each( function ( group, i ) {
							if ( last !== group ) {
								$(rows).eq( i ).before(
									'<tr class="group"><td colspan="2">'+group+'</td></tr>'
								);
								last = group;
							}
						} );
					}
				});*/
				$('#tab').dataTable({
						"bLengthChange": false, 
						"language": {
						"url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"}
					}).rowGrouping({	
					iGroupingColumnIndex2: 1
				});
					
			$(".controlitem div,.controlitem input").click(function(e) {
                var array_number = parseInt($(this).parent().attr('id'));
				$(this).closest('table').find('input[type=checkbox]').prop( "checked", false );
				$(this).parent().find('input[type=checkbox]').prop("checked",true);
				$("#map_canvas").removemarkers();
				switch (array_number) 
				{
					case 1:
						$("#map_canvas").addmarkers({
							zoom : 5,
							center : 'Cameroon',
							markers : array_1
						});
						break;
					case 2:
						$("#map_canvas").addmarkers({
							zoom : 5,
							center : 'Cameroon',
							markers : array_2
						});
						break;
					case 3:
						$("#map_canvas").addmarkers({
							zoom : 5,
							center : 'Cameroon',
							markers : array_3
						});
						break;
					case 4:
						$("#map_canvas").addmarkers({
							zoom : 5,
							center : 'Cameroon',
							markers : array_4
						});
						break;
					case 5:
						$("#map_canvas").addmarkers({
							zoom : 5,
							center : 'Cameroon',
							markers : array_5
						});
						break;
					case 6:
						$("#map_canvas").addmarkers({
							zoom : 5,
							center : 'Cameroon',
							markers : array_6
						});
						break;
					case 7:
						$("#map_canvas").addmarkers({
							zoom : 5,
							center : 'Cameroon',
							markers : array_7
						});
						break;
					case 8:
						$("#map_canvas").addmarkers({
							zoom : 5,
							center : 'Cameroon',
							markers : array_8
						});
						break;
					case 9:
						$("#map_canvas").addmarkers({
							zoom : 5,
							center : 'Cameroon',
							markers : array_9
						});
						break;
					case 10:
						$("#map_canvas").addmarkers({
							zoom : 5,
							center : 'Cameroon',
							markers : array_10
						});
						break;
					case 11:
						$("#map_canvas").addmarkers({
							zoom : 5,
							center : 'Cameroon',
							markers : array_11
						});
						break;
				}
            });
		});