export type DefinitionEvent<T extends HTMLElement> = Event & {
  currentTarget: T;
};

export type Repo = {
  id: number;
  name: string;
  url: string;
};
