var geral={
    clientName: "Lip3r",
    furniture:{
        title:"Mesa",
        description: "Estrutura em tubo quadrado de aço 20x20mm protegiida com zarcão, acabamento em esmalte sintético preto fosco. Tampo em compensado 15mm, acabamento em selador/verniz com proteção UV",
        length:160.00, //cm
        depth:70.00,  //cm
        height:80.00,  //cm
    },
    productionTime:22, //dias uteis
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
  shipmentPrice: 70,
}

var material = {
  multiplier: 2.24, // se deixar em 1 nada altera (ele sera multiplicado apenas pelo "price" de cada opção)
  laborCost: 300, // valor da mão de obra (esse valor soma em cada opção)
  options:[
  {
    name: "pinus (Padrão)",
    image: "pinus.png",
    price: 0,
    baseMaterial: "Compesando laminado",
  },
  {
    name: "cedro",
    image: "cedro.png",
    price: 17.17,
    baseMaterial: "Compesando laminado",
  },
  {
    name: "carvalho vermelho",
    image: "carvalho_vermelho.png",
    price: 27.91,
    baseMaterial: "Compesando laminado",
  },
  {
    name: "cinamomo",
    image: "cinamomo.png",
    price: 17.17,
    baseMaterial: "Compesando laminado",
  },
  {
    name: "ipe champanhe",
    image: "ipe_champanhe.png",
    price: 27.69,
    baseMaterial: "Compesando laminado",
  },
  {
    name: "louro preto",
    image: "louro_preto.png",
    price: 97.67,
    baseMaterial: "Compesando laminado",
  },
  {
    name: "pau ferro",
    image: "pau_ferro.png",
    price: 97.67,
    baseMaterial: "Compesando laminado",
  },
  {
    name: "teka",
    image: "teka.png",
    price: 48.30,
    baseMaterial: "Compesando laminado",
  },
  {
    name: "wanut nogueira",
    image: "wanut_nogueira.png",
    price: 48.30,
    baseMaterial: "Compesando laminado",
  },
]
}


