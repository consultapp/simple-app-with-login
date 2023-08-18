export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  return NextResponse.json();
}

// https://consultapp.ru/wp-json/wp/v2/posts?categories=38
