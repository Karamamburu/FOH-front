const extractCondiments = (data: OrderItem[] | null) => {
    if (!data) {
      return {};
    }
  
    const condimentsCount: { [name: string]: number } = {};
  
    data.forEach((item) => {
      if (item.condiments && typeof item.condiments === 'object') {
        for (const condimentName in item.condiments) {
          if (typeof item.condiments[condimentName] === 'number') {
            if (condimentsCount[condimentName]) {
              condimentsCount[condimentName] += item.condiments[condimentName];
            } else {
              condimentsCount[condimentName] = item.condiments[condimentName];
            }
          }
        }
      }
    });
  
    return condimentsCount;
  };

  export default extractCondiments