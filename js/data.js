var geral={
    clientName: "Lip3r",
    furniture:{
        title:"Aparador",
        description: "Estrutura em tubo quadrado de aço 20x20mm protegiida com zarcão, acabamento em esmalte sintético preto fosco. Tampo em compensado 15mm, acabamento em selador/verniz com proteção UV",
        length:160.00, //cm
        depth:70.00,  //cm
        height:80.00,  //cm
    },
    file3d: "MesaLip3r.gltf",
    renderImg: ["render_3.png"],
    mainColor: "#EE5776"
}

var payment = {
  price: 675,
  productionTime: 147,
  discount: 0.05, //percent
  interestRate: 0.0299, //taxa de juros ao mes do parcelado
  maxInstallments: 6, //numero de parcelas
}

var material = [
  {
    name: "pinus (Padrão)",
    image: "pinus.png",
    price: 0,
    baseMaterial: "Compesando laminado",
  },
  {
    name: "cedro",
    image: "cedro.png",
    price: 90.0,
    baseMaterial: "Compesando laminado",
  },
  {
    name: "carvalho vermelho",
    image: "carvalho_vermelho.png",
    price: 79.0,
    baseMaterial: "Compesando laminado",
  },
  {
    name: "cinamomo",
    image: "cinamomo.png",
    price: 84.0,
    baseMaterial: "Compesando laminado",
  },
  {
    name: "ipe champanhe",
    image: "ipe_champanhe.png",
    price: 45.0,
    baseMaterial: "Compesando laminado",
  },
  {
    name: "louro preto",
    image: "louro_preto.png",
    price: 93.0,
    baseMaterial: "Compesando laminado",
  },
  {
    name: "pau ferro",
    image: "pau_ferro.png",
    price: 83.0,
    baseMaterial: "Compesando laminado",
  },
  {
    name: "teka",
    image: "teka.png",
    price: 76.0,
    baseMaterial: "Compesando laminado",
  },
  {
    name: "wanut nogueira",
    image: "wanut_nogueira.png",
    price: 49.0,
    baseMaterial: "Compesando laminado",
  },
]


