import { LineItemsContainer } from "@commercelayer/react-components";

type Props = {
  children?: React.ReactNode;
  locale: any; // eslint-disable-line @typescript-eslint/no-explicit-any
};

export const Auth: React.FC<Props> = ({ children }) => {
  return <LineItemsContainer>{children as any}</LineItemsContainer>;
};
