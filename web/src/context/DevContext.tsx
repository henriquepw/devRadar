import React, { createContext, useState } from 'react';

export interface Dev {
  _id: number;
  bio: string;
  name: string;
  techs: string[];
  avatar_url: string;
  github_username: string;
}

interface Props {
  children: React.ReactNode;
}

interface ContextProps {
  devs: Dev[];
  setDevs?: React.Dispatch<React.SetStateAction<Dev[]>>;
  addDev?(dev: Dev): void;
}

const DevContext = createContext<ContextProps>({
  devs: [],
});

export function DevProvider({ children }: Props) {
  const [devs, setDevs] = useState<Dev[]>([]);

  function addDev(dev: Dev) {
    setDevs([...devs, dev]);
  }

  return (
    <DevContext.Provider
      value={{
        devs,
        setDevs,
        addDev,
      }}
    >
      {children}
    </DevContext.Provider>
  );
}

export default DevContext;
