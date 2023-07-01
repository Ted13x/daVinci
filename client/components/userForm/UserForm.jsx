import styles  from '../../styles/UserForm.module.scss';
import UserFormFields from './UserFormFields.jsx';
import useUserFormHandlers from './handlers/useUserFormHandlers';


const UserForm = () => {

    const userProperties = {
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        passwordRepetition: "",
    }

    const {
        email,
        handleEmailChange,
        firstName,
        handleFirstNameChange,
        lastName,
        handleLastNameChange,
        password,
        handlePasswordChange,
        passwordRepetition,
        handlePasswordRepetitionChange,  
        handleSubmit,     
    } = useUserFormHandlers(userProperties);  
   
    const isDisabled = !email || !firstName || !lastName || !password || !passwordRepetition || password !== passwordRepetition;

    return (
        <>
        <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <UserFormFields 
            email={email}
            handleEmailChange={handleEmailChange}
            firstName={firstName}
            handleFirstNameChange={handleFirstNameChange}
            lastName={lastName}
            handleLastNameChange={handleLastNameChange}
            password={password}
            handlePasswordChange={handlePasswordChange}
            passwordRepetition={passwordRepetition}
            handlePasswordRepetitionChange={handlePasswordRepetitionChange}
          />
          <br />
          <button type="submit" value="Register" disabled={isDisabled}>REGISTER</button>
        </form>
      </div>
        </>
    );
}   

export default UserForm;