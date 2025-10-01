export type Contract = {
  id: string;
  client: string;
  services: string[];
  slas: string[];
};

export type Service = {
  name: string;
  price: number;
};

export type ServiceProvider = {
  id: number;
  name: string;
  company: string;
  email: string;
  phone: string;
  specialty: string;   // <-- added
  location: string;    // <-- added
  contracts: Contract[];
  services: Service[];
};
