import type { PropsWithChildren } from 'hono/jsx';

export default ({ children }: PropsWithChildren) => {
  return (
    <html className="w-screen h-screen">
      <head>
        <title>{ 'Honor API' }</title>
        { import.meta.env.PROD ? (
          <link href="/static/app.css" rel="stylesheet" />
        ) : (
            <link href="/src/app.css" rel="stylesheet" />
          ) }
      </head>
      <body className="flex flex-col items-center justify-center w-screen h-screen m-0 p-0">
        { children }
      </body>
    </html>
  );
}
