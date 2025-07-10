export interface GunCategory {
  id: string;
  name: string;
  count: number;
  icon: string;
}

export const mockCategories: GunCategory[] = [
  {
    id: "1",
    name: "步枪",
    count: 42,
    icon: "fa-gun"
  },
  {
    id: "2",
    name: "手枪",
    count: 28,
    icon: "fa-gun"
  },
  {
    id: "3",
    name: "狙击枪",
    count: 15,
    icon: "fa-crosshairs"
  },
  {
    id: "4",
    name: "冲锋枪",
    count: 23,
    icon: "fa-gun"
  },
  {
    id: "5",
    name: "霰弹枪",
    count: 17,
    icon: "fa-gun"
  },
  {
    id: "6",
    name: "机枪",
    count: 12,
    icon: "fa-gun"
  }
];