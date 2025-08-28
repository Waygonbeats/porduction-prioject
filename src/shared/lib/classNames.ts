type Mods = Record<string, boolean>;

export const classNames = (cls: string, mods?: Mods, additional?: string[]) => {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([key, value]) => Boolean(value))
      .map(([cls]) => cls),
  ]
    .filter(Boolean)
    .join(' ');
};
