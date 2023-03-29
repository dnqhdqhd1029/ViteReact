
const useConfirm = (message = '') => {
  const confirmAction = () => {
    window.confirm(message);
  };
  return confirmAction;
}

export default useConfirm;
