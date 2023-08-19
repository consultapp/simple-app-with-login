import { NextResponse } from "next/server";

const USER_LOGIN = "Admin";
const USER_NAME = "Ivan";
const USER_PASSWORD = "12345";

export async function POST(request) {
  const { login, password } = await request.json();
  const status = USER_LOGIN === login && password === USER_PASSWORD;

  return NextResponse.json({ status, name: USER_NAME });
}
