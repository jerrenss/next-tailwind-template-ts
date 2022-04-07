import { AiFillFacebook, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

function Example(): JSX.Element {
  return (
    <div className="flex min-h-screen justify-center items-center bg-gray-200">
      <div className="flex flex-col justify-center items-center text-center bg-white px-8 sm:px-32 py-16 rounded-xl">
        <h1 className="text-3xl font-bold mb-4">Example Component</h1>
        <p>
          If you have any questions about this component, or would like to work
          together in the future?
        </p>
        <p>Feel free to reach out to me at gerrenseow@gmail.com</p>
        <div className="flex mt-4">
          <AiFillFacebook className="text-red-500 text-4xl" />
          <AiFillLinkedin className="text-red-500 text-4xl ml-2" />
          <AiFillGithub className="text-red-500 text-4xl ml-2" />
        </div>
        <div className="flex space-x-2 justify-center">
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mt-4"
          >
            Button
          </button>
        </div>
      </div>
    </div>
  )
}

export default Example
