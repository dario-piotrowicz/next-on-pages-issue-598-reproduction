import { cookies, headers } from "next/headers";

export const runtime = 'edge';

export default async function NotFound() {
  // server side logic is ok
  const { name } = await (await fetch('https://swapi.dev/api/people/1')).json();
  console.log(`\x1b[3m\x1b[40m ${name}! \x1b[0m`);

  // using headers() is also ok
  const reqHeaders = headers();
  console.log(JSON.stringify({reqHeaders}));

  // using cookies() is ok too
  const reqCookies = cookies();
  console.log(JSON.stringify({reqCookies}));

  return <h1>NOT FOUND</h1>;
}
