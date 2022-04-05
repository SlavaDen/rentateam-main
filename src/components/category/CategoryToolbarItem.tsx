import { ICategoryAttribytes } from "types/category";
import s from "./index.module.scss";
import { Typography } from "components/common";

interface ICategoryToolbarItem {
  category: ICategoryAttribytes,
  currentCategoryId?: number,
  scrollToCategory: Function
}

const CategoryToolbarItem: React.FC<ICategoryToolbarItem> = (props) => {

  const { id, name } = props.category;

  const { currentCategoryId, scrollToCategory } = props;

  return (
    <Typography
      onClick={() => scrollToCategory(props.category)}
      className={`${s.categoryToolbar_item} ${currentCategoryId === id && s.categoryToolbar_itemActive}`}
    >
      {name}
    </Typography>
  )
}

export default CategoryToolbarItem;