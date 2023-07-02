import styles  from '../../styles/CategoryForm.module.scss';
import CategoryFormFields from './CategoryFormFields.jsx';
import useCategoryFormHandlers from './useCategoryFormHandlers';


const CategoryForm = ({ categories, isLoading }) => {

    const categoryProperties = {
        name: "",
        childCategories: [],
    }

    const subCategoryProperties = {
        name: "",
        parentCategory: "",
        childCategories: [],
    }

    const subSubCategoryProperties = {
        name: "",
        parentCategory: "",
        childCategories: [],
    }

    const {
        category,
        subCategory,
        subSubCategory,
        handleSubmit,
    } = useCategoryFormHandlers(categoryProperties);  
   

    return (
        <>
        <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <CategoryFormFields 
            categories={categories}
            category={category}
            subCategory={subCategory}
            subSubCategory={subSubCategory}
          />
          <br />
          <button type="submit" value="CreateCategories">Create</button>
        </form>
      </div>
        </>
    );
}   

export default CategoryForm;