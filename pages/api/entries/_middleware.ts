/** @format */
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

// Los middlewares solo se ejecutan del lado del servidor.
export function middleware(req: NextRequest, ev: NextFetchEvent) {
	const id = (req.page.params?.id as string) || ''; // Tomo el id.
	const checkMongoIDRegExp = new RegExp('^[0-9a-fA-F]{24}$');

	if (!checkMongoIDRegExp.test(id)) {
		return new Response(
			JSON.stringify({ message: `El id ${id} no es válido` }),
			{
				status: 400,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
	}

	return NextResponse.next(); // De esta forma permitimos acceder a la aplicación.
}
