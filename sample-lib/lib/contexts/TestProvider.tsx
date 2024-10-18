import { createContext, useContext } from 'react';

type Context = {
  value: string
};

type Props = {
  children?: React.ReactNode;
} & Context;

const AuthContext = createContext<Partial<Context>>({});

export const CommerceLayerAuthProvider: React.FC<Props> = ({
  children,
  ...props
}) => (
  <AuthContext.Provider value={{ ...props }}>{children}</AuthContext.Provider>
);

export const useAuthContext = () => useContext(AuthContext);
