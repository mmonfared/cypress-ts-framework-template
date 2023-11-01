export interface Pizza {
  size: "Large" | "Medium" | "Small";
  toppings: string[];
  quantity?: number;
  flavor?: "Cheese" | "Pepperoni" | "Supreme" | "Veggie Delight";
  sauce?: string;
}
