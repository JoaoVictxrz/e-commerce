import { IMenuItems } from "@/interfaces/navbar-items";
import { NextResponse } from "next/server";

const menuItems: IMenuItems[] = [
  { id: 1, name: "camisetas", path: "/produtos" },
  { id: 2, name: "camisas", path: "/camisas" },
  { id: 3, name: "camisas-peruanas", path: "/produtos" },
  { id: 4, name: "shorts", path: "/produtos" },
  { id: 5, name: "shorts-peruanos", path: "/produtos" },
];

export async function GET() {
  return NextResponse.json(menuItems);
}

export async function POST(request: Request) {
  const { name, path } = await request.json();
  menuItems.push({ id: menuItems.length + 1, name, path });
  return NextResponse.json(menuItems);
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  menuItems.splice(
    menuItems.findIndex((item) => item.id === parseInt(id!)),
    1,
  );
  return NextResponse.json(menuItems);
}
