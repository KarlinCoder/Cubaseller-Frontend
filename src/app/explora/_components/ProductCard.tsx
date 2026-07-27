export interface Props {
  id: number;
  name: string;
  image: string;
  price: number;
  offer: { discount: number; expires: string };
  owner: {
    id: number;
    name: string;
    avatar: string;
    verified: boolean;
  };
}
