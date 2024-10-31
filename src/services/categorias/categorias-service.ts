import { IMenuItems } from "@/interfaces/navbar-items";

const menuItems: IMenuItems[] = [
  { id: 1, name: "camisetas", path: "/produtos" },
  { id: 2, name: "camisas", path: "/camisas" },
  { id: 3, name: "camisas-peruanas", path: "/produtos" },
  { id: 4, name: "shorts", path: "/produtos" },
  { id: 5, name: "shorts-peruanos", path: "/produtos" },
];

class Categorias {
  constructor() {}

  async getCategorias() {
    return menuItems;
  }
}

export default Categorias;
