const menuOpcion = [

  {
    sectionName: "programming",
    sectionText: "Programación",
    options: [
      {
        name: "cakes",
        text: "Tortas estándar",
        path: "/programming/cakes",
      },
      {
        name: "individual",
        text: "Productos individuales",
        path: "/programming/individual",
      },
      {
        name: "order",
        text: "Pedidos (especiales y web)",
        path: "/programming/order",
      },
      {
        name: "specialDough",
        text: "Masas especiales",
        path: "/programming/specialDough",
      },
      {
        name: "coolingChamber",
        text: "Cámara de refrigeración",
        path: "/programming/coolingChamber",
      },
    ],
  },

  {
    sectionName: "workflow",
    sectionText: "Flujo de trabajo",
    options: [
      {
        name: "factoryReception",
        text: "Recepción en fábrica",
        path: "/workflow/factoryReception",
      },
      {
        name: "factoryOutlet",
        text: "Salida de fábrica",
        path: "/workflow/factoryOutlet",
      },
      {
        name: "pickupTruckReview",
        text: "Revisión en camioneta",
        path: "/workflow/pickupTruckReview",
      },
      {
        name: "dispatch",
        text: "Despacho",
        path: "/workflow/dispatch",
      },
      {
        name: "customerDelivery",
        text: "Entrega al cliente",
        path: "/workflow/customerDelivery",
      },
    ],
  },
  {
    sectionName: "processes",
    sectionText: "Procesos",
    options: [
      {
        name: "specialOrders",
        text: "Pedidos especiales",
        path: "/processes/specialOrders",
      },
      {
        name: "surplusrecord",
        text: "Registro de sobrantes",
        path: "/processes/surplusrecord",
      },
      {
        name: "stockReview",
        text: "Revisión de Stock",
        path: "/processes/stockReview",
      }
    ],
  },
];

export default menuOpcion;
