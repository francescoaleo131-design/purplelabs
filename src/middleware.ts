import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  
  // Recupera il valore del parametro 'access'
  const accessParam = url.searchParams.get('access');
  
  // Verifica se l'utente ha il link corretto
  const isAuthorized = accessParam === 'celestyal_260708';
  
  // Se l'utente non è autorizzato E non è già sulla pagina di coming-soon
  // lo reindirizziamo alla pagina /coming-soon
  if (!isAuthorized && url.pathname !== '/coming-soon') {
    return NextResponse.rewrite(new URL('/coming-soon', request.url));
  }

  return NextResponse.next();
}

// Configura il matcher per applicare il middleware a tutte le rotte 
// eccetto le immagini, le API e i file statici
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};