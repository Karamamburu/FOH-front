interface OrderItem {
  name: string;
}

interface productImages {
  data: OrderItem[] | null;
}

const productImages: React.FC<productImages> = ({ data }) => {
  if (!data) {
    return null;
  }


  return 
}