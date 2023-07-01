import styles  from '../../styles/UserForm.module.scss';


// TODO add handlers
const StoreFormFields = ({
    name,
    type,
    logo,
    address,
    contactData,
    vatNr,
    companyRegistrationNumber,
    admins,  
}) => {

    return (
        <>
            <div className={styles.formItem}>
                <p>Company name:</p>
                <input type="text" value={name} onChange={handleEmailChange} />
            </div>
                <br/>
            <div className={styles.formItem}>
                <p>Company type:</p>
                <input type="text" value={type} onChange={handleFirstNameChange} />
            </div>
                <br/>
            <div className={styles.formItem}>
                <p>Logo:</p>
                <input type="text" value={logo} onChange={handleLastNameChange} />
            </div>
                <br/>
            <div className={styles.formItem}>
                <p>Address:</p>
                <input type="text" value={address} onChange={handlePasswordChange} />
            </div>
                <br/>
            <div className={styles.formItem}>
                <p>Contact data:</p>
                <input type="text" value={    contactData} onChange={handlePasswordRepetitionChange} />
            </div>
            <div className={styles.formItem}>
                <p>VAT number:</p>
                <input type="text" value={vatNr} onChange={handlePasswordRepetitionChange} />
            </div>
            <div className={styles.formItem}>
                <p>Registration number:</p>
                <input type="text" value={companyRegistrationNumber} onChange={handlePasswordRepetitionChange} />
            </div>
            <div className={styles.formItem}>
                <p>Admins:</p>
                <input type="text" value={admins} onChange={handlePasswordRepetitionChange} />
            </div>
        </>
    );
}   

export default StoreFormFields;