import logo from '../assets/logo.png'

export const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500">
      <img src={logo} alt="logo" />
    </div>
  </div>
);