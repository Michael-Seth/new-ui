import Logo from "../../../assets/svg/Logo.svg";
import LogoIcon from "../../../assets/svg/waveIcon.svg";

const Login = () => {
    
  return (
    <div className="bg-[#FFECE5] flex flex-col items-center justify-around min-h-screen">
      <div className="mx-auto mt-40 mb-12">
        <img className="w-auto sm:h-6" src={Logo} alt="Logo" />
      </div>
      <div className=" w-[456px] max-h-[548px] p-7 m-auto mx-auto mb-40 flex-grow bg-white rounded-lg shadow-sm">
        <div className="mx-auto text-center mb-8">
          <p className="font-semibold text-3xl m-2">Log In</p>
          <p className=" text-base text-[#667185]">
            Enter your credentials to access your account
          </p>
        </div>

        <form>
          <div className="mt-6">
            <label
              htmlFor="username"
              className="block uppercase font-medium text-sm text-gray-800"
            >
              Email Address
            </label>
            <div className="relative justify-between flex items-center ">
              <input
                type="text"
                placeholder="Enter Email"
                className="block w-full h-[56px] px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-[#FCB59A]  focus:outline-none  focus:ring-opacity-40"
              />
              <span className="absolute right-0 top-[40%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="username"
              className="block uppercase font-medium text-sm text-gray-800"
            >
              Password
            </label>
            <div className="relative justify-between flex items-center ">
              <input
                type="text"
                placeholder="Enter Password"
                className="block w-full h-[56px] px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-[#FCB59A]  focus:outline-none  focus:ring-opacity-40"
              />
              <span className="absolute right-0 top-[40%]">
                <svg
                  className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.2557 2.74408C17.5812 3.06951 17.5812 3.59715 17.2557 3.92259L3.92238 17.2559C3.59694 17.5814 3.06931 17.5814 2.74387 17.2559C2.41843 16.9305 2.41843 16.4028 2.74387 16.0774L16.0772 2.74408C16.4026 2.41864 16.9303 2.41864 17.2557 2.74408Z"
                    fill="#667185"
                  />
                  <path
                    d="M13.1661 4.4767C12.2275 4.03469 11.1692 3.75 9.99978 3.75C7.54636 3.75 5.5821 5.00308 4.18612 6.33307C2.78693 7.66611 1.87904 9.14973 1.51966 9.7915C1.28414 10.2121 1.25609 10.7143 1.44941 11.1603C1.58442 11.4718 1.81403 11.9544 2.15244 12.5143C2.39049 12.9082 2.90277 13.0346 3.29667 12.7965C3.69056 12.5585 3.81691 12.0462 3.57886 11.6523C3.30667 11.2019 3.1178 10.8124 3.00324 10.5537C3.34136 9.95778 4.14216 8.67693 5.33576 7.53975C6.56866 6.36513 8.14148 5.41667 9.99978 5.41667C10.6682 5.41667 11.2996 5.53937 11.8916 5.75116L13.1661 4.4767Z"
                    fill="#667185"
                  />
                  <path
                    d="M14.7419 7.61491C15.8924 8.73288 16.6656 9.97087 16.9963 10.5537C16.8818 10.8124 16.6929 11.2019 16.4207 11.6523C16.1826 12.0462 16.309 12.5585 16.7029 12.7965C17.0968 13.0346 17.6091 12.9082 17.8471 12.5143C18.1855 11.9544 18.4151 11.4718 18.5501 11.1603C18.7435 10.7143 18.7154 10.2121 18.4799 9.7915C18.1298 9.16625 17.259 7.74193 15.9205 6.43629L14.7419 7.61491Z"
                    fill="#667185"
                  />
                  <path
                    d="M9.99979 6.66667C10.3026 6.66667 10.5979 6.69898 10.8824 6.76034L9.16758 8.47519C8.45633 8.7262 7.89266 9.28987 7.64165 10.0011L5.92679 11.716C5.86543 11.4315 5.83312 11.1362 5.83312 10.8333C5.83312 8.53215 7.69861 6.66667 9.99979 6.66667Z"
                    fill="#667185"
                  />
                  <path
                    d="M9.99979 13.3333C9.7074 13.3333 9.42672 13.2831 9.16592 13.1909L7.91505 14.4418C8.52823 14.7968 9.24028 15 9.99979 15C12.301 15 14.1665 13.1345 14.1665 10.8333C14.1665 10.0738 13.9632 9.36177 13.6082 8.74859L12.3573 9.99947C12.4496 10.2603 12.4998 10.5409 12.4998 10.8333C12.4998 12.214 11.3805 13.3333 9.99979 13.3333Z"
                    fill="#667185"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="mt-6 relative justify-between flex items-center ">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-5 h-5 border-0 outline-none border-gray-400 rounded-lg"
              />
              <label
                htmlFor="rememberMe"
                className="font-medium text-sm text-gray-800"
              >
                Remember me for 30 days
              </label>
            </div>
            <a
              href="#"
              className="font-medium text-sm text-[#CC400C] hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          <div className="mt-6">
            <button className="w-full px-6 py-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#EB5017] rounded-md focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
              Log into Account
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-medium text-center text-gray-400">
          Are you new here?{" "}
          <a
            href="#"
            className="font-medium text-sm text-[#CC400C] hover:underline"
          >
            Create Account
          </a>
        </p>
      </div>
      <div className="flex justify-center items-center bottom-0 mt-auto mx-auto mb-2">
        <img className="w-auto sm:h-4" src={LogoIcon} alt="Logo" />
        <p className="text-[#3E3838] text-base ml-2">
          Powered by <span className="font-bold">wavyhealth.</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
