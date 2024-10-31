import { IMenuItems } from "@/interfaces/navbar-items";
import { NextResponse } from "next/server";

const menuItems: IMenuItems[] = [
  { id: 1, name: "Peruanas", path: "/produtos" },
  { id: 2, name: "Gola Polo", path: "/produtos" },
  { id: 3, name: "Italianas", path: "/produtos" },
  { id: 4, name: "Shorts jeans", path: "/produtos" },
  { id: 5, name: "Shorts Tectel", path: "/produtos" },
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
