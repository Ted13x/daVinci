import styles  from '../../styles/CategoryForm.module.scss';
import CategoryFormFields from './CategoryFormFields.jsx';
import useCategoryFormHandlers from './useCategoryFormHandlers';


const CategoryForm = () => {

    const categoryProperties = {
        name: "",
    }

    const subCategoryProperties = {
        name: "",
        parentCategory: "",
    }

    const subSubCategoryProperties = {
        name: "",
        parentCategory: "",
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