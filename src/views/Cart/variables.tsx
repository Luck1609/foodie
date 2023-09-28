import { LocalCafe, CoffeeOutlined, LunchDiningOutlined, BrunchDiningOutlined, NightlifeOutlined } from "@mui/icons-material";

interface IColor {active: boolean}

export const categories = [
  {
    label: "Breakfast",
    Icon: ({active}: IColor) => <LocalCafe fontSize="large" className={`${ active ? "" : "text-slate-300" }`} />
  },
  {
    label: "Lunch",
    Icon: ({active}: IColor) => <LunchDiningOutlined fontSize="large" className={`${ active ? "" : "text-slate-300" }`} />
  },
  {
    label: "Dinner",
    Icon: ({active}: IColor) => <BrunchDiningOutlined fontSize="large" className={`${ active ? "" : "text-slate-300" }`} />
  },
  {
    label: "Dessert",
    Icon: ({active}: IColor) => <CoffeeOutlined fontSize="large" className={`${ active ? "" : "text-slate-300" }`} />
  },
  {
    label: "Drinks",
    Icon: ({active}: IColor) => <NightlifeOutlined fontSize="large" className={`${ active ? "" : "text-slate-300" }`} />
  },
]