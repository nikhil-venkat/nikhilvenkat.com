type Salutation = { greeting: string; name: string }

export const greet = ({greeting, name}: Salutation) => {
  return `${greeting} ${name}`;
};
