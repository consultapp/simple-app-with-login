import { NextResponse } from "next/server";

const USER_NAME = "Admin";
const USER_PASSWORD = "12345";

export async function POST(request) {
  const { login, password } = await request.json();
  const status = USER_NAME === login && password === USER_PASSWORD;

  return NextResponse.json({ status });
}

// https://consultapp.ru/wp-json/wp/v2/posts?categories=38
