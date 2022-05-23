export type typeStateMenu = {
  openMenu: boolean;
  setToggleMenu: any;
};

type TypeName = {
  resourceURI: string;
  name: string;
};

export type TypeCharacter = {
  id: number;
  name: string;
  description?: string | undefined;
  image?: string;
  comics?: Array<TypeName>;
  series?: Array<TypeName>;
};
