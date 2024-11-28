import { LineItemsCount } from "@commercelayer/react-components";
import type { AppProps } from 'next/app';
import React, { useEffect, useState } from "react";
import { Auth } from "sample-lib";

function MyApp({ Component, pageProps }: AppProps) {
  const [test, updateTest] = useState(0);
  useEffect(() => {
    setTimeout(() => updateTest(1), 1000);
  });

  return (
    <>
      <Auth locale="de">
        <h1>
          App LineItemsCount Value: <LineItemsCount />
        </h1>
        <h2>Test value: {test}</h2>
        <Component/>
      </Auth>
    </>
  );
}

export default MyApp;
