import styles  from '../../styles/UserForm.module.scss';

const UserFormFields = ({
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
}) => {

    return (
        <>
            <div className={styles.formItem}>
                <p>Email:</p>
                <input type="email" value={email} onChange={handleEmailChange} />
            </div>
                <br/>
            <div className={styles.formItem}>
                <p>First name:</p>
                <input type="text" value={firstName} onChange={handleFirstNameChange} />
            </div>
                <br/>
            <div className={styles.formItem}>
                <p>Last name:</p>
                <input type="text" value={lastName} onChange={handleLastNameChange} />
            </div>
                <br/>
            <div className={styles.formItem}>
                <p>Password:</p>
                <input type="password" value={password} onChange={handlePasswordChange} />
            </div>
                <br/>
            <div className={styles.formItem}>
                <p>Repeat password:</p>
                <input type="password" value={passwordRepetition} onChange={handlePasswordRepetitionChange} />
            </div>
        </>
    );
}   

export default UserFormFields;