import {  LineItemsCount } from "@commercelayer/react-components";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { LineItemsContainer } from "@commercelayer/react-components";

export default function ExamplePage() {
  return (
    <>
      <h1>Hello World!</h1>

      <LineItemsContainer>
        <ErrorBoundary errorComponent={() => <h1>Error in CL</h1>}>
          <LineItemsCount />
          Products
        </ErrorBoundary>
      </LineItemsContainer>
    </>
  );
}
