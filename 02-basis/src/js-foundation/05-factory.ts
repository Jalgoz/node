interface BuildMakePersonProps {
  uuidAdapter: () => string;
  getAgeAdapter: (birthdate: string) => number;
}

interface PersonOptions {
  name: string;
  birthdate: string;
}

export const buildMakePerson = ({
  uuidAdapter,
  getAgeAdapter,
}: BuildMakePersonProps) => {
  return ({ name, birthdate }: PersonOptions) => {
    return {
      id: uuidAdapter(),
      name,
      birthdate,
      age: getAgeAdapter(birthdate),
    };
  };
};
