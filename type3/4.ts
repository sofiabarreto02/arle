// Crea una interface BaseObject con una propiedad id. Luego crea interfaces User, Product y Order que hereden de
// BaseObject. Crea una función genérica que pueda imprimir los datos

interface IBaseObject {
  id: number;
}

interface IUser extends IBaseObject {
  name: string;
}
interface IProduct extends IBaseObject {
  name: string;
  price: number;
}
interface IOrder extends IBaseObject {
  userId: number;
  productId: number;
}

function printData<T extends IBaseObject>(data: T): void {
  console.log(data);
}

const user: IUser = { id: 1, name: "Juan José" };
const product: IProduct = { id: 1, name: "Chaqueta", price: 80000 };
const order: IOrder = { id: 1, userId: 1, productId: 1 };

printData<IUser>(user);
printData<IProduct>(product);
printData<IOrder>(order);
