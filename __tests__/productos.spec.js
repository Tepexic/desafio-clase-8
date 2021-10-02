const request = require("supertest");
const productos = require("./../routes/data/productos.json");

let app = null;

describe("/api/productos/ endpoints", () => {
  // loading the server
  beforeEach(() => {
    app = require("./../index");
  });

  it("Obtiene todos los productos", async () => {
    const res = await request(app).get("/api/productos");
    expect(res.status).toBe(200);
    expect(res.body).toEqual(productos);
  });

  it("Obtiene un producto por id", async () => {
    const res = await request(app).get("/api/productos/1");
    expect(res.status).toBe(200);
    expect(res.body).toEqual(productos[1]);
  });

  it("Agrega un producto nuevo y le asigna un id", async () => {
    const res = await request(app).post("/api/productos").send({
      title:
        "SILIKOLOVE-bandejas de cubitos de hielo de panal de abeja, molde de silicona reutilizable, máquina de hielo sin BPA con Tapas extraíbles",
      price: "205",
      thumbnail:
        "https://ae01.alicdn.com/kf/H037c4e73efe54e4aba6dc263398672d6d/SILIKOLOVE-bandejas-de-cubitos-de-hielo-de-panal-de-abeja-molde-de-silicona-reutilizable-m-quina.jpg_Q90.jpg_.webp",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body.data).toHaveProperty("id");
  });

  it("Actualiza la información de un producto según su id", async () => {
    const res = await request(app).put("/api/productos/1").send({
      title:
        "Interruptor Outemu de 3 pines para teclado mecánico, interruptores táctiles y silenciosos, RGB LED SMD, color azul y marrón, Compatible con interruptor MX",
      price: 45000,
      thumbnail:
        "https://ae01.alicdn.com/kf/H9013370bd7e64d24983d6cea7fbb4724y/Interruptor-Outemu-de-3-pines-para-teclado-mec-nico-interruptores-t-ctiles-y-silenciosos-RGB-LED.jpg_640x640.jpg",
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body.price).toEqual(45000);
  });
});
