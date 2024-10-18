import { Auth } from "sample-lib";
import { LineItemsCount } from "@commercelayer/react-components";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

export default function ExamplePage() {
  return (
    <>
      <h1>Hello World!</h1>
      <Auth locale="de">
        <ErrorBoundary errorComponent={() => <h1>Error in CL</h1>}>
          <LineItemsCount />
          Products
        </ErrorBoundary>
      </Auth>
    </>
  );
}
