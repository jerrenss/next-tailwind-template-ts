import { AiFillFacebook, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

const styles = {
  root: `flex min-h-screen justify-center items-center bg-gray-200 p-4`,
  container: `flex flex-col justify-center items-center text-center bg-white sm:px-32 px-8 py-16 rounded-xl`,
  header: `text-3xl font-bold mb-4`,
  iconGrp: `flex mt-4`,
  icon: `text-4xl ml-2 first:ml-0 cursor-pointer hover:opacity-75`,
  btnWrapper: `flex space-x-4 justify-center mt-4`,
  cancelBtn: `px-6 py-2.5 bg-red-600 text-white text-sm uppercase rounded-xl shadow-md hover:bg-red-700`,
  confirmBtn: `px-6 py-2.5 bg-blue-600 text-white text-sm uppercase rounded-xl shadow-md hover:bg-blue-700`,
}

const Example = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h1 className={styles.header}>Example Component</h1>
        <p>
          If you have any questions about this component, or would like to work
          together in the future?
        </p>
        <p>Feel free to reach out to me at gerrenseow@gmail.com</p>
        <div className={styles.iconGrp}>
          <AiFillFacebook className={styles.icon} />
          <AiFillLinkedin className={styles.icon} />
          <AiFillGithub className={styles.icon} />
        </div>
        <div className={styles.btnWrapper}>
          <button type="button" className={styles.cancelBtn}>
            Cancel
          </button>
          <button type="button" className={styles.confirmBtn}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}

export default Example
