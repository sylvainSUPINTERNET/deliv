

import { getSession } from 'auth-astro/server';


const protectedRoutes: Set<string> = new Set([
    "/dashboard"
]);

export async function onRequest ({ locals, request }:any, next:any) {
    // intercept data from a request
    // optionally, modify the properties in `locals`
    locals.title = "New title";

    const session = await getSession(request);

    if ( !session && protectedRoutes.has(new URL(request.url).pathname) ) {
        console.log("no logged for ", new URL(request.url).pathname)

        return Response.redirect(new URL("/login", request.url), 302);
    }



    // if (session && new URL(request.url).pathname === "/login") {
    //     return Response.redirect(new URL("/dashboard", request.url), 302);
    // }




    return next();

    // if (!session) {
    //     console.log(request.url);
    //     return Response.redirect(new URL("/", request.url), 302);
    // } else {
    //     return next();
    // }
};

