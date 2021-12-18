let significados = ["",
"Uno",						"Dos",				"Tres",						"Cuatro",			"Cinco",					"Seis",				"Siete",			"Ocho",					"Nueve",				"Diez",//10
"Boca",						"Día",				"Mes",						"Campo de arroz",	"Ojo",						"Viejo",			"Yo",				"Riesgo",				"Compañero",			"Claro",//20
"Canto",					"Destello",			"Mercancías",				"Espina dorsal",	"Próspero",					"Temprano",			"Sol naciente",		"Generación",			"Estómago",				"Amanecer",//30
"Vesícula biliar",			"Atravesar",		"Cóncavo",					"Convexo",			"Antigüedad",				"Uno mismo",		"Blanco",			"Cien",					"En",					"Mil",//40
"Lengua",					"Caja para medir",	"Elevarse",					"Redondo",			"Medida",					"Codo",				"Especialidad",		"Dr.",					"Adivinación",			"Arriba",//50
"Abajo", 					"Eminente",			"Mañana",					"Escarnio",			"Único",					"Almeja",			"Canción pop",		"Recto",				"Empleado",				"Fijar",//60
"Ver",						"Recién nacido",	"Principio",				"Página",			"Tozudo",					"Mediocre",			"Derrota",			"Diez mil",				"Frase",				"Piel",//70
"Decameron",				"Cucharón",			"Diana",					"Cuello",			"Entrañas de pescado",		"Tumulto",			"Directamente",		"Herramienta",			"Verdad",				"Técnica",//80
"Izquierda",				"Derecha",			"Posesión",					"Soborno",			"Tributo",					"Párrafo",			"Espada",			"Filo",					"Cortar",				"Seducir",//90
"Brillante",				"Norma",			"Vice-",					"Separar",			"Calle",					"Barrio",			"Posible",			"Cima",					"Niño",					"Confucio",//100

"Acabado",					"Mujer",			"Gustar",					"Parecido",			"Madre",					"Traspasar",		"Hermano mayor",	"Maldición",			"Superar",				"Pequeño",//110
"Poco",						"Grande",			"Muchos",					"Noche",			"Marea nocturna",			"Exterior",			"Nombre",			"Piedra",				"Semejanza",			"Nitrato",//120
"Aplastar",					"Arena",			"Celos",					"Cepillar",			"Rayo",						"Gordo",			"Utensilio",		"Apestar",				"Olfatear",				"Exquisita",//130
"Reflexionar",				"Grueso",			"Extraño",					"Arroyo",			"Estado",					"Obedecer",			"Agua",				"Hielo",				"Eternidad",			"Manantial",//140
"Glándula",					"Prado",			"Petición",					"Nadar",			"Pantano",					"Altamar",			"Pan-",				"Riachuelo",			"Cribar",				"Sopa",//150
"Granos de arena",			"Marea",			"Origen",					"Animado",			"Extinguir",				"Por supuesto",		"Río",				"Pernoctar",			"Lago",					"Sondear",//160
"Tierra",					"Escupir",			"Presión",					"Cabo",				"Valla",					"Embutir",			"Joya cuadrada",	"Sellar",				"Horizonte",			"Templo budista",//170
"Tiempo",					"Anivelado",		"Fuego",					"Inflamación",		"Angustia",					"Diluido",			"Lámpara",			"Plantación",			"Desastre",				"Ceniza",//180
"Punto",					"Iluminar",			"Pescado",					"Pescar",			"Ri",						"Negro",			"Tinta china",		"Carpa",				"Cantidad",				"Rin",//190
"Enterrar",					"El mismo",			"Cueva",					"Tronco",			"Enfrente de",				"Estimado",			"Letra",			"Proteger",				"Completo",				"Proclamar",//200

"Anochecer",				"Relajación",		"Banquete",					"Acercarse",		"Abundancia",				"Ahorros",			"Árbol",			"Arboleda",				"Bosque",				"Katsura",//210
"Roble",					"Marco",			"Copa del arbol",			"Estantería",		"Albaricoque",				"Paulonia",			"Plantar",			"Silla",				"Marchitado",			"Bruto",//220
"Pueblo",					"Inter-",			"Escritorio",				"Libro",			"Etiqueta",					"Calendario",		"Plan",				"Agostar",				"Todavía",				"Críptico",//230
"Extremo",					"Salpicadura",		"Sabor",					"Hermana menor",	"Carmesí",					"Acciones de bolsa","Juventud",			"Hierba",				"Sufrimiento",			"Hostigar",//240
"Tolerancia",				"Desteñido",		"Hoja",						"Imitación",		"Borroso",					"Tumba",            "Ganarse la vida",	"Membrana",				"Plantón",				"Augurio",//250
"Melocotón",				"Mirar fijamente",	"Perro",					"Statu quo",		"Silencio",					"Tal como es",		"Caña",				"Cazar",				"Gato",					"Vaca",//260
"Especial",					"Revelación",		"Antes",					"Lavar",			"Apretado",					"Mundo",			"Té",				"Columna vertebral",	"Encajar",				"Pagoda",//270
"Rey",						"Joya",				"Tesoro",					"Perla",			"Presente",					"Juguete",			"Loco",				"Refulgente",			"Emperador",			"Ofrenda",//280
"Todo",						"Tapón",			"Lógica",					"Amo",				"Verter",					"Columna",			"Oro",				"Lingote",				"Bol",					"Cobre",//290
"Pescar con caña",			"Aguja",			"Inscripción",				"Tranquilizar",		"Carretera",				"Guiar",			"Cruce",			"Veloz",				"Crear",				"Apremiar",//300

"Escapar",					"Inmediaciones",	"Patrullar",				"Carruaje",			"Acompañar",				"Carril",			"Transportar",		"Metáfora",				"Delante",				"Asar",//310
"Cada uno",					"Categoría",		"Chanchullo",				"Abreviatura",		"Invitado",					"Frente",			"Verano",			"Deshacerse de",		"Ramita",				"Caer",//320
"Superfluo",				"Hades",			"Ejército",					"Radiante",			"Llevar",					"Corona",			"Sueño",			"Foso",					"Alto",					"Recibir",//330
"Academia de repaso",		"Madurar",			"Pabellón",					"Capital",			"Refrescante",				"Paisaje",			"Ballena",			"Casa de campo",		"Circunferencia",		"Semana",//340
"Hidalgo",					"Buena suerte",		"Robusto",					"Chalet",			"Venta",					"Estudiar",			"Memorizar",		"Florecer",				"Escribir",				"Ensenada",//350
"Criar",					"Agresión",			"Fracaso",					"Hojas de...",		"Casualidad",				"Respeto",			"Decir",			"Amonestar",			"Proyecto",				"Dilucidar",//360
"Cárcel",					"Revisión",			"Necrológica",				"Reprender",		"Instrucción",				"Edicto imperial",	"Atascado",			"Hablar",				"Recitar",				"Poesía",//370
"Palabra",					"Leer",				"Afinar",					"Discusión",		"Consentimiento",			"Reproche",			"Estilo",			"Examen",				"II (Dos)",				"Zona",//380
"Bandido",					"Plantío",			"Cargar",					"Exuberante",		"Pariente",					"Convertirse",		"Castillo",			"Sincero",				"Intimidar",			"Destruir",//390
"Menguar",					"Vilipendiar",		"Andamio",					"Moneda",			"Poco profundo",			"Detenerse",		"Andar",			"Vadear",				"Repetidamente",		"Acuerdo",//400

"Emprender",                "Currículum",		"Guerrero",					"Recaudación",		"Correcto",					"Certificación",	"Política",			"Determinación",		"Cerradura",			"Correr",//410
"Sobrepasar",				"Proceder",			"Adelantar",				"Debidamente",		"Tema",						"Dique",			"Construir",		"Llave",				"Prolongar",			"Natividad",//420
"Piedra angular",			"Novio",			"Ropa",						"Confeccionar",		"Atuendo",					"Reverso",			"Demolición",		"Patético",				"Distante",				"Mono",//430
"Primera vez",				"Toalla",			"Tela",						"Vela",				"Rollo colgante",			"Sombrero",			"Cortina",			"Baldaquín",			"Brocado",				"Mercado",//440
"Caqui",					"Hermana mayor",	"Pulmones",					"Faja",				"Estancado",				"Espina",			"Sistema",			"Made in...",			"Girar",				"Destreza",//450
"Lluvia",					"Nube",				"Nublado",					"Trueno",			"Escarcha",					"Invierno",			"Cielo",			"Embrujado",			"Irrigar",				"Puente",//460
"Atractiva",				"En pie",			"Llorar",					"Insignia",			"Disputar",					"Soberano",			"Resignación",		"Juvenil",				"Pupila",				"Campana",//470
"Hacer un trato",			"Esposa legítima",	"Apropiado",				"Gotear",			"Enemigo",					"Cuchara",			"Sermonear",		"Aroma",				"Lapso temporal",		"Norte",//480
"Estatura",					"Comparar",			"Descendientes",			"Todos",			"Tipo de letra rectilínea",	"Armonioso",		"Mezclar",			"Sed",					"Audiencia",			"Marrón",//490
"Ronco",					"Enredadera",		"Delicioso",				"Grasa",			"Visitar un santuario",		"I (Uno)",			"Todos los",		"Astucia",				"Ciruela",				"Mar",//500
];

let kanji = ["",
"一","二","三","四","五","六","七","八","九","十",//10
"ロ","日","月","田","目","古","吾","冒","朋","明",//20
"唱","晶","品","呂","昌","早","旭","世","胃","旦",//30
"胆","亘","凹","凸","旧","自","白","百","中","千",//40
"舌","升","昇","丸","寸","肘","専","博","占","上",//50
"下","卓","朝","嘲","只","貝","唄","貞","員","貼",//60
"見","旧","元","頁","頑","凡","負","万","句","肌",//70
"旬","勺","的","首","乙","乱","直","具","真","工",//80
"左","右","有","賄","貢","項","刀","刃","切","召",//90
"昭","則","副","別","丁","町","可","頂","子","孔",//100


"了","女","好","如","母","貫","兄","呪","克","小",//110
"少","大","多","タ","汐","外","名","石","肖","硝",//120
"砕","砂","妬","削","光","太","器","臭","嗅","妙",//130
"省","厚","奇","川","州","順","水","氷","永","泉",//140
"腺","原","願","泳","沼","沖","汎","江","汰","汁",//150
"沙","潮","源","活","消","況","河","泊","湖","測",//160
"土","吐","圧","埼","垣","填","圭","封","涯","寺",//170
"時","均","火","炎","煩","淡","灯","畑","災","灰",//180
"点","昭","魚","漁","里","黒","墨","鯉","量","厘",//190
"埋","同","洞","胴","向","尚","字","守","完","宣",//200

"宵","安","宴","寄","富","貯","木","林","森","桂",//210
"柏","枠","梢","棚","杏","桐","植","椅","枯","朴",//220
"村","相","机","本","札","暦","案","燥","未","昧",//230
"末","沫","味","妹","朱","株","若","草","苦","苛",//240
"寛","薄","葉","模","漠","墓","暮","膜","苗","兆",//250
"桃","眺","犬","状","黙","然","荻","狩","猫","牛",//260
"特","告","先","洗","介","界","茶","脊","合","塔",//270
"王","玉","宝","珠","現","玩","狂","旺","皇","呈",//280
"全","枉","理","主","注","柱","金","銑","鉢","銅",//290
"釣","針","銘","鎮","道","導","辻","迅","造","迫",//300

"逃","辺","巡","車","連","軌","輸","喩","前","煎",//310
"各","格","賂","略","客","額","夏","処","条","落",//320
"冗","冥","軍","輝","運","冠","夢","坑","高","享",//330
"塾","熟","亭","京","涼","景","鯨","舎","周","週",//340
"士","吉","壮","荘","売","学","覚","栄","書","津",//350
"牧","攻","敗","枚","故","敬","言","警","計","詮",//360
"獄","訂","訃","討","訓","詔","詰","話","詠","詩",//370
"語","読","調","談","諾","諭","式","試","弐","域",//380
"賊","栽","載","茂","戚","成","城","誠","威","滅",//390
"減","蔑","桟","銭","浅","止","歩","渉","頻","肯",//400

"企","歴","武","賦","正","証","政","定","錠","走",//410
"超","赴","越","是","題","堤","建","鍵","延","誕",//420
"礎","婿","衣","裁","装","裏","壊","哀","遠","猿",//430
"初","巾","布","帆","幅","帽","幕","幌","錦","市",//440
"柿","姉","肺","帯","滞","刺","制","製","転","芸",//450
"雨","雲","曇","雷","霜","冬","天","妖","沃","橋",//460
"嬌","立","泣","章","競","帝","諦","童","瞳","鐘",//470
"商","嫡","適","滴","敵","匕","𠮟","匂","頃","北",//480
"背","比","昆","皆","楷","諧","混","渇","謁","褐",//490
"喝","葛","旨","脂","詣","壱","毎","敏","梅","海",//500
];

escribir = ``;

for (var i = 1; i <= 500; i++) {
	escribir = escribir + `	<p class="listaKanji">
								<div class="jsNumero">${i}</div>
								<div class="jsKanji">${kanji[i]}</div>
								<div class="jsSignificado">${significados[i]}</div>
							</p>`;
}

document.getElementById('Lista').innerHTML = escribir;
