import { toast, ToastOptions } from 'react-toastify';

const toastConfig: ToastOptions = {
  position: 'top-center',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: 'colored',
};

type ToastFunction = typeof toast.success;

const useNotify = () => {
  const notification = (status: string, message: string) => {
    const notifyMap: Record<string, ToastFunction> = {
      success: toast.success,
      warning: toast.warning,
      info: toast.info,
      error: toast.error,
    };

    const notify = notifyMap[status] || toast.success;
    notify(message, { ...toastConfig });
  };
  return [notification];
};

export default useNotify;
