import styles  from '../../../styles/CategoryForm.module.scss';
import CategoryFormFields from './CategoryFormFields.jsx';

const CategoryForm = ({ existingCategories, categories, setSelectedCategory }) => {

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
   

    return (
        <>
        <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <CategoryFormFields 
            existingCategories={existingCategories}
            categories={categories}
            setSelectedCategory={setSelectedCategory}
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