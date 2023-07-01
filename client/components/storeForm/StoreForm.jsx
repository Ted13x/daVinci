import styles  from '../../styles/StoreForm.module.scss';
import StoreFormFields from './StoreFormFields.jsx';
import useStoreFormHandlers from './handlers/useStoreFormHandlers';


const StoreForm = () => {

    const storeProperties = {
        name: "",
        type: "",
        logo: "",
        address: "",
        contactData: "",
        vatNr: "",
        companyRegistrationNumber: "",
        admins: "",
    }

    const {
        name,
        type,
        logo,
        address,
        contactData,
        vatNr,
        companyRegistrationNumber,
        admins,  
        handleSubmit,     
    } = useStoreFormHandlers(storeProperties);  
   
    const isDisabled = !name || !type || !address || !contactData;
    
    return (
        <>
        <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <StoreFormFields 
            name = {name}
            type = {type}
            logo = {logo}
            address = {address}
            contactData = {contactData}
            vatNr = {vatNr}
            companyRegistrationNumber = {companyRegistrationNumber}
            admins = {admins}  
          />
          <br />
          <button type="submit" value="Register" disabled={isDisabled}>CREATE STORE</button>
        </form>
      </div>
        </>
    );
}   

export default StoreForm;