export const carKeys = {
  all: ['cars'] as const,
  detail: (id: string) => ['cars', id] as const,
};
